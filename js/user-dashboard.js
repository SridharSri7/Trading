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


// ============== PROFILE MODULE ===============
const email = localStorage.getItem("userEmail") || "";

const username = email.split("@")[0];

document.getElementById("userName").textContent = username;
document.getElementById("userEmail").textContent = email;
document.getElementById("avatarLetter").textContent =
username.charAt(0).toUpperCase();

// ================= SETTINGS MODULE =============
function showSection(id){

    document.querySelectorAll(".content").forEach(section=>{
        section.classList.remove("active");
    });

    document.getElementById(id).classList.add("active");

    document.querySelectorAll(".sidebar a").forEach(link=>{
        link.classList.remove("active-link");
    });
}