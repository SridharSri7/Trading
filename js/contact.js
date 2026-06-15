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