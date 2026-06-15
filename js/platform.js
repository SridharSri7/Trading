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