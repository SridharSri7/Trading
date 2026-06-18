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

/* ==================================
   CONTACT HERO ANIMATION
================================== */

const contactHeroObserver =
new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(!entry.isIntersecting) return;

        const hero = entry.target;

        setTimeout(()=>{
            hero.querySelector(".contact-anim-top")
            ?.classList.add("contact-show");
        },100);

        setTimeout(()=>{
            hero.querySelector(".contact-anim-left")
            ?.classList.add("contact-show");
        },300);

        setTimeout(()=>{
            hero.querySelector(".contact-anim-right")
            ?.classList.add("contact-show");
        },500);

        hero.querySelectorAll(".contact-anim-bottom")
        .forEach((el,index)=>{

            setTimeout(()=>{
                el.classList.add("contact-show");
            },800 + (index * 180));

        });

        contactHeroObserver.unobserve(hero);

    });

},{
    threshold:.25
});

document
.querySelectorAll(".contact-hero")
.forEach(hero=>{
    contactHeroObserver.observe(hero);
});

// ==================== CONTACT INFORMATION ====================
/* ==================================
   CONTACT HUB ANIMATION
================================== */

const contactHubObserver =
new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(!entry.isIntersecting) return;

        const section = entry.target;

        // HEADER

        setTimeout(()=>{
            section.querySelector(".hub-top")
            ?.classList.add("hub-header-active");
        },100);

        setTimeout(()=>{
            section.querySelector(".hub-left")
            ?.classList.add("hub-header-active");
        },300);

        setTimeout(()=>{
            section.querySelector(".hub-right")
            ?.classList.add("hub-header-active");
        },500);

        // CARDS

        const cards =
        section.querySelectorAll(".contacthub-card");

        cards.forEach((card,index)=>{

            setTimeout(()=>{

                card.classList.add("hub-active");

            },800 + (index * 250));

        });

        contactHubObserver.unobserve(section);

    });

},{
    threshold:.2
});

document
.querySelectorAll(".contacthub-section")
.forEach(section=>{
    contactHubObserver.observe(section);
});

// ================= CONTACT FORM ===================
/* ==================================
   CONTACT FORM ANIMATION
================================== */

const contactFormObserver =
new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(!entry.isIntersecting) return;

        const section = entry.target;

        const leftItems = [

            ".cf-left-1",
            ".cf-left-2",
            ".cf-left-3",
            ".cf-left-4",
            ".cf-left-5",
            ".cf-left-6"

        ];

        leftItems.forEach((item,index)=>{

            setTimeout(()=>{

                section.querySelector(item)
                ?.classList.add("cf-show");

            },index * 180);

        });

        // FORM CARD

        setTimeout(()=>{

            section.querySelector(".contactform-card")
            ?.classList.add("contactform-active");

        },700);

        // FIELDS

        const fields =
        section.querySelectorAll(
        ".contactform-field, .contactform-btn"
        );

        fields.forEach((field,index)=>{

            setTimeout(()=>{

                field.classList.add("contactform-active");

            },1000 + (index * 140));

        });

        contactFormObserver.unobserve(section);

    });

},{
    threshold:.2
});

document
.querySelectorAll(".contactform-section")
.forEach(section=>{
    contactFormObserver.observe(section);
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