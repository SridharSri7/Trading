// protect route
const role = localStorage.getItem("userRole");

if(!role){
    window.location.href = "index.html";
}

// logout
function logout(){
    localStorage.clear();
    window.location.href = "index.html";
}

