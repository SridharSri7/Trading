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

// ================================================
const serviceObserver = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(!entry.isIntersecting) return;

    const el = entry.target;

    setTimeout(()=>{
      el.classList.add("service-show");
    }, 150);

    serviceObserver.unobserve(el);
  });
},{
  threshold:0.25
});

document.querySelectorAll(".service-anim").forEach(el=>{
  serviceObserver.observe(el);
});

// ================= CORE TRADING SERVICES ===================== 
const coreObserver = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(!entry.isIntersecting) return;

    const cards = entry.target.querySelectorAll(".core-card");

    cards.forEach((card,index)=>{
      setTimeout(()=>{
        card.classList.add("show");
      }, index * 180);
    });

    coreObserver.unobserve(entry.target);
  });
},{
  threshold:0.25
});

document.querySelectorAll(".core-services").forEach(section=>{
  coreObserver.observe(section);
});

// ====================  MARKET INTELLIGENCE =====================
const intelObserver = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(!entry.isIntersecting) return;

    const section = entry.target;

    const main = section.querySelector(".intel-main");
    const cards = section.querySelectorAll(".intel-card");

    // main image first
    setTimeout(()=>{
      main.classList.add("show");
    }, 200);

    // side images stagger
    cards.forEach((card,index)=>{
      setTimeout(()=>{
        card.classList.add("show");
      }, 400 + index * 180);
    });

    intelObserver.unobserve(section);
  });
},{
  threshold:0.25
});

document.querySelectorAll(".intel-section").forEach(sec=>{
  intelObserver.observe(sec);
});

// ===================== SERVICE & COMPLIANCE LAYER =======================
const securityObserver = new IntersectionObserver((entries)=>{

  entries.forEach(entry=>{

    if(!entry.isIntersecting) return;

    const section = entry.target;

    // LEFT TEXT STAGGER
    section.querySelectorAll(".anim-sec").forEach((el,i)=>{
      setTimeout(()=>{
        el.classList.add("show");
      }, i * 180);
    });

    // RIGHT IMAGES POP FROM DIFFERENT SIDES
    section.querySelectorAll(".anim-img").forEach((img,i)=>{
      setTimeout(()=>{
        img.classList.add("show");
      }, 400 + i * 220);
    });

    securityObserver.unobserve(section);
  });

},{ threshold:0.25 });

document.querySelectorAll(".security-layer")
.forEach(sec=>{
  securityObserver.observe(sec);
});

// ====================== PERFORMANCE ==========================
const perfObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(!entry.isIntersecting) return;

        const section = entry.target;

        // Animate elements
        section.querySelectorAll('.perf-anim')
        .forEach((el,index)=>{

            setTimeout(()=>{
                el.classList.add('perf-show');
            },index * 120);

        });

        // Progress Bars
        section.querySelectorAll('.bar i')
        .forEach(bar=>{

            setTimeout(()=>{
                bar.style.width =
                bar.dataset.width;
            },1000);

        });

        // Counters
        section.querySelectorAll('.counter')
        .forEach(counter=>{

            const target =
            parseFloat(counter.dataset.target);

            let value = 0;

            const speed = target / 80;

            const update = ()=>{

                value += speed;

                if(value >= target){

                    counter.innerText =
                    target;

                    return;
                }

                counter.innerText =
                target % 1 !== 0
                ? value.toFixed(2)
                : Math.floor(value);

                requestAnimationFrame(update);
            };

            update();

        });

        perfObserver.unobserve(section);

    });

},{
    threshold:.25
});

document
.querySelectorAll('.perf-section')
.forEach(section=>{
    perfObserver.observe(section);
});

// ============================ DEDICATED SUPPORT & ACCESS =========================
const deskObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(!entry.isIntersecting) return;

        const section = entry.target;

        section.querySelectorAll('.desk-anim')
        .forEach((el,index)=>{

            setTimeout(()=>{

                el.classList.add('desk-show');

            },index * 150);

        });

        deskObserver.unobserve(section);

    });

},{
    threshold:0.25
});

document.querySelectorAll('.desk-section')
.forEach(section=>{

    deskObserver.observe(section);

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