console.log("App JS Loaded");
// Job data
const jobs = [
  {id:1, companyName:"Mobile First Corp", position:"React Native Developer", location:"Remote", type:"Full-Time", salary:"$120k", description:"Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.", status:"all"},
  {id:2, companyName:"WebFlow Agency", position:"Web Designer & Developer", location:"Seattle", type:"Part-Time", salary:"$130k", description:"Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.", status:"all"},
  {id:3, companyName:"DataViz Solutions", position:"Data Visualization Specialist", location:"Remote", type:"Contract", salary:"$110k", description:"Transform complex data into compelling visualizations.Required skills: D3.js, React, and strong analytical thinking."
,status:"all"},
  {id:4, companyName:"CloudFirst Inc", position:"Backend Developer", location:"California", type:"Full-Time", salary:"$140k", description:"Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure.", status:"all"},
  {id:5, companyName:"Innovation Labs", position:"UI/UX Engineer", location:"Texas", type:"Full-Time", salary:"$135k", description:"Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required.", status:"all"},
  {id:6, companyName:"MegaCorp Solutions", position:"JavaScript Developer", location:"Remote", type:"Full-Time", salary:"$125k", description:"Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation, health insurance, and professional development opportunities.", status:"all"},
  {id:7, companyName:"StartupXYZ", position:"Full Stack Engineer", location:"Stockholm", type:"Remote", salary:"$118k", description:"Join our fast-growing startup and work on our core platform. Experience with Node.js and React required. Great benefits and equity package included.", status:"all"},
  {id:8, companyName:"TechCorp Industries", position:"Senior Frontend Developer", location:"Canada", type:"Full-Time", salary:"$115k", description:"We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript. You will work with a talented team on cutting-edge projects.", status:"all"}
];

let currentTab = "all";

// Dashboard
function updateDashboard(){
    let total = jobs.length;
    let interview = 0;
    let rejected = 0;
    for(const job of jobs){
        if(job.status === "interview"){
        interview++;
        }
        else if(job.status === "rejected"){
            rejected++;
        }
    }
  setText("totalCount", total);
  setText("interviewCount", interview);
  setText("rejectedCount", rejected);
}

function renderJobs() {
  const container = getEl("jobsContainer");
  container.innerHTML = "";

  // Filter jobs based on tab
  let filteredJobs = [];
  if(currentTab === "all") filteredJobs = jobs;
  else {
    jobs.forEach(job => {
      if(job.status === currentTab) filteredJobs.push(job);
    });
  }

  setText("sectionCount", filteredJobs.length + " jobs");

  if(filteredJobs.length === 0) {
    showEl("emptyState");
    updateDashboard();
    return;
  } else {
    hideEl("emptyState");
  }

  filteredJobs.forEach(job => {
    const card = document.createElement("div");
    card.className = "card bg-base-100 shadow p-4 relative";

    // Delete button
    const delBtn = document.createElement("button");
    delBtn.className = "absolute top-2 right-2 text-base-content/50 hover:text-base-content";
    delBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
    delBtn.addEventListener("click", function() {
      const index = jobs.findIndex(j => j.id === job.id);
      if(index !== -1) jobs.splice(index,1);
      renderJobs();
    });
    card.appendChild(delBtn);

    // Job Content
    const content = document.createElement("div");
    content.innerHTML = `<h2 class='text-[#002C5C] font-bold text-lg'>${job.companyName}</h2>
                         <p class='text-sm opacity-70 mt-3'>${job.position}</p>
                         <p class='text-sm opacity-70 mt-3'>${job.location} • ${job.type} • ${job.salary}</p>`;

    // Status Badge
    const statusBadge = document.createElement("span");
    statusBadge.className = "badge badge-custom mt-3";
    if(job.status === "all") {
      statusBadge.innerText = "NOT APPLIED";
      statusBadge.style.backgroundColor = "#f3f4f6";
      statusBadge.style.color = "#374151";
     } else if(job.status === "interview") {
      statusBadge.innerText = "INTERVIEW";
      statusBadge.style.backgroundColor = "#10B981";
      statusBadge.style.color = "white";
     } else if(job.status === "rejected") {
      statusBadge.innerText = "REJECTED";
      statusBadge.style.backgroundColor = "#EF4444";
      statusBadge.style.color = "white";
    }

    content.appendChild(statusBadge);

    // Job Description (below badge)
    const descEl = document.createElement("p");
    descEl.className = "text-sm opacity-70 mt-3";
    descEl.innerText = job.description;
    content.appendChild(descEl);

    // Action Buttons
    const actions = document.createElement("div");
    actions.className = "card-actions mt-4 mb-2 gap-2 justify-start";

    const interviewBtn = document.createElement("button");
    interviewBtn.className = "btn uniform btn-outline btn-success btn-sm";
    interviewBtn.innerText = "INTERVIEW";
    interviewBtn.addEventListener("click", function() {
      job.status = "interview";
      renderJobs();
    });

    const rejectedBtn = document.createElement("button");
    rejectedBtn.className = "btn uniform btn-outline btn-error btn-sm";
    rejectedBtn.innerText = "REJECTED";
    rejectedBtn.addEventListener("click", function() {
      job.status = "rejected";
      renderJobs();
    });

    actions.appendChild(interviewBtn);
    actions.appendChild(rejectedBtn);
    content.appendChild(actions);
    card.appendChild(content);
    container.appendChild(card);
  });

  updateDashboard();
}

function activateTab(tabId){
  ["allTab","interviewTab","rejectedTab"].forEach(id => {
    getEl(id).classList.remove("tab-active-custom");
  });
  getEl(tabId).classList.add("tab-active-custom");
}

getEl("allTab").addEventListener("click", function() {
  currentTab = "all";
  activateTab("allTab");
  renderJobs();
});

getEl("interviewTab").addEventListener("click", function() {
  currentTab = "interview";
  activateTab("interviewTab");
  renderJobs();
});

getEl("rejectedTab").addEventListener("click", function() {
  currentTab = "rejected";
  activateTab("rejectedTab");
  renderJobs();
});


renderJobs();