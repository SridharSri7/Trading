function toggleMenu() {
    const navLinks = document.getElementById("navLinks");

    navLinks.classList.toggle("active");
    document.body.classList.toggle("menu-open");
}

document.querySelectorAll("#navLinks a").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("navLinks").classList.remove("active");
        document.body.classList.remove("menu-open");
    });
});

// =============================================================
const aboutObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(!entry.isIntersecting) return;

        const section = entry.target;

        const items = section.querySelectorAll(".anim-item");

        items.forEach((el,index)=>{

            setTimeout(()=>{
                el.classList.add("show");
            }, index * 200); // stagger from different "places"

        });

        aboutObserver.unobserve(section);
    });

},{ threshold:0.3 });

document.querySelectorAll(".about-hero")
.forEach(sec=>{
    aboutObserver.observe(sec);
});

// 

/* ===========================
   STRATEGIES ANIMATION
=========================== */

const stratObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(!entry.isIntersecting) return;

        const section = entry.target;
        const cards = section.querySelectorAll(".strat");

        cards.forEach((card,index)=>{

            setTimeout(()=>{

                // 1. show card
                card.classList.add("show");

                // 2. animate progress bar
                const bar = card.querySelector(".strat-bar i");
                const width = bar.style.getPropertyValue("--w");

                setTimeout(()=>{
                    bar.style.width = width;
                },200);

            }, index * 180); // stagger effect

        });

        stratObserver.unobserve(section);
    });

},{ threshold:0.25 });

document.querySelectorAll(".strategies")
.forEach(sec=>{
    stratObserver.observe(sec);
});

// =============== WHY WE EXIST ================
const missionObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(!entry.isIntersecting) return;

        const section = entry.target;

        // 1. SECTION POPUP
        setTimeout(()=>{
            section.classList.add("show");
        },100);

        // 2. STAGGER ANIMATION
        const items = section.querySelectorAll(".anim");

        items.forEach((el,index)=>{

            setTimeout(()=>{
                el.classList.add("show");
            }, 200 + index * 180);

        });

        missionObserver.unobserve(section);
    });

},{ threshold:0.25 });

document.querySelectorAll(".mission-section")
.forEach(sec=>{
    missionObserver.observe(sec);
});

// =============== OUR TECHNOLOGIES ===============
const techObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(!entry.isIntersecting) return;

        const section = entry.target;
        const items = section.querySelectorAll(".anim");

        items.forEach((el,index)=>{

            setTimeout(()=>{
                el.classList.add("show");
            }, index * 180);

        });

        techObserver.unobserve(section);
    });

},{ threshold:0.3 });

document.querySelectorAll(".tech-section")
.forEach(sec=>{
    techObserver.observe(sec);
});

// =============== EXECUTION INFRASTRUCTURE ================
const execControlObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(!entry.isIntersecting) return;

        const section = entry.target;

        const logs = section.querySelectorAll(".log-line");
        const nodes = section.querySelectorAll(".node");
        const core = section.querySelector(".exec-core");

        logs.forEach((el,i)=>{
            setTimeout(()=>el.classList.add("show"), i*120);
        });

        nodes.forEach((el,i)=>{
            setTimeout(()=>el.classList.add("show"), 500 + i*150);
        });

        if(core){
            setTimeout(()=>core.classList.add("show"), 300);
        }

        execControlObserver.unobserve(section);
    });

},{ threshold:0.2 });

document.querySelectorAll(".exec-control").forEach(sec=>{
    execControlObserver.observe(sec);
});

// ================ OUR TEAM ==================
const teamObserver = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(!entry.isIntersecting) return;

    const el = entry.target;

    setTimeout(()=>{
      el.classList.add("team-show");
    }, 150);

    teamObserver.unobserve(el);
  });
},{
  threshold:0.25
});

document.querySelectorAll(".team-anim").forEach(el=>{
  teamObserver.observe(el);
});

// =================== LOGIN & SIGNUP =====================
// OPEN POPUP
function openPopup(){
    document
    .getElementById("popupOverlay")
    .classList.add("active");
}

// CLOSE POPUP
function closePopup(){
    document
    .getElementById("popupOverlay")
    .classList.remove("active");
}

// LOGIN -> SIGNUP
function showSignup(){
    document
    .getElementById("loginForm")
    .classList.add("hidden");

    document
    .getElementById("signupForm")
    .classList.remove("hidden");
}

// SIGNUP -> LOGIN
function showLogin(){
    document
    .getElementById("signupForm")
    .classList.add("hidden");

    document
    .getElementById("loginForm")
    .classList.remove("hidden");
}

// PASSWORD EYE
function togglePassword(id,icon){

    const input = document.getElementById(id);

    if(input.type === "password"){
        input.type = "text";
        icon.innerHTML = "👁";
    }
    else{
        input.type = "password";
        icon.innerHTML = "👁";
    }
}

// ROLE SELECTOR
function selectRole(role){

    document.getElementById("signupRole").value = role;

    document
    .querySelectorAll(".role-card")
    .forEach(card=>card.classList.remove("active"));

    if(role==="user"){
        document
        .getElementById("userRoleCard")
        .classList.add("active");
    }
    else{
        document
        .getElementById("adminRoleCard")
        .classList.add("active");
    }
}

// PASSWORD VALIDATION
const signupPassword =
document.getElementById("signupPassword");

const hint =
document.getElementById("passwordHint");

if(signupPassword){

signupPassword.addEventListener("input",()=>{

    const value = signupPassword.value;

    const strongPassword =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&]).{8,}$/;

    if(strongPassword.test(value)){
        hint.innerHTML =
        "✓ Strong password";

        hint.className =
        "hint-text valid";
    }
    else{
        hint.innerHTML =
        "Password must contain 8+ chars, letter, number & symbol";

        hint.className =
        "hint-text invalid";
    }

});
}

// SAMPLE LOGIN
function login(){

    const email = document.getElementById("loginEmail").value;
    const pass = document.getElementById("loginPassword").value;
    const role = document.getElementById("loginRole").value;

    if(!email || !pass){
        alert("Please fill all fields");
        return;
    }

    // store session
    localStorage.setItem("userRole", role);
    localStorage.setItem("userEmail", email);

    // redirect based on role
    if(role === "admin"){
        window.location.href = "admin-dashboard.html";
    } else {
        window.location.href = "user-dashboard.html";
    }
}

// SAMPLE SIGNUP
function signup(){

    const password =
    document.getElementById("signupPassword").value;

    const confirm =
    document.getElementById("signupConfirmPassword").value;

    const strongPassword =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&]).{8,}$/;

    if(!strongPassword.test(password)){
        alert("Password not strong enough");
        return;
    }

    if(password !== confirm){
        alert("Passwords do not match");
        return;
    }

    alert("Account Created Successfully");
}

// CLOSE WHEN CLICK OUTSIDE
window.addEventListener("click",(e)=>{

    const overlay =
    document.getElementById("popupOverlay");

    if(e.target === overlay){
        closePopup();
    }

});