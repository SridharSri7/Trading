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