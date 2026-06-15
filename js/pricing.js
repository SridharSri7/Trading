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