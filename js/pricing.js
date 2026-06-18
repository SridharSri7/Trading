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

// =============== HERO SECTION ===============
/* ==========================
   PRICING HERO ANIMATION
========================== */

const pricingObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(!entry.isIntersecting) return;

        const section = entry.target;

        const items =
        section.querySelectorAll(".pricing-anim");

        items.forEach((item,index)=>{

            setTimeout(()=>{

                item.classList.add("pricing-show");

            }, index * 180);

        });

        pricingObserver.unobserve(section);

    });

},{
    threshold:0.25
});

document
.querySelectorAll(".pricing-hero")
.forEach(section=>{
    pricingObserver.observe(section);
});

// ======================= PRICING SECTION =========================
/* ===============================
   PRICING PLANS ANIMATION
=============================== */

const pricingObserver2 = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(!entry.isIntersecting) return;

        const section = entry.target;

        // HEADER

        setTimeout(()=>{
            section.querySelector('.pricing-anim-top')
            ?.classList.add('pricing-show');
        },100);

        setTimeout(()=>{
            section.querySelector('.pricing-anim-left')
            ?.classList.add('pricing-show');
        },300);

        setTimeout(()=>{
            section.querySelector('.pricing-anim-right')
            ?.classList.add('pricing-show');
        },500);

        // CARDS POPUP

        const cards = section.querySelectorAll('.pricing-card');

        cards.forEach((card,index)=>{

            setTimeout(()=>{

                card.classList.add('show');

            },900 + (index * 250));

        });

    });

},{
    threshold:0.2
});

document
.querySelectorAll('.pricing-plans-section')
.forEach(section=>{
    pricingObserver2.observe(section);
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