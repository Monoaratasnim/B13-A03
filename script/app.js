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

