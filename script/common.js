console.log("Common JS Loaded");

function getEl(id) 
{ return document.getElementById(id); 

}
function getValue(id) {
     return getEl(id).value; 
    }
function setText(id, value) {
     getEl(id).innerText = value; 

}
function showEl(id) {
     getEl(id).classList.remove("hidden");
     }
function hideEl(id) {
     getEl(id).classList.add("hidden"); 

}