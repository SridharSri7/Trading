const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("platform-show");
        }
    });
},{
    threshold:0.2
});

document.querySelectorAll(
'.platform-header,.platform-card-large,.platform-card-wide,.platform-card'
).forEach(el=>{
    observer.observe(el);
});


// ---------- ticker list ----------
const tickers = [
  {s:'AAPL',n:'Apple Inc.',p:232.18,c:0.84},
  {s:'NVDA',n:'NVIDIA Corp.',p:1248.40,c:2.41},
  {s:'TSLA',n:'Tesla, Inc.',p:268.92,c:-1.12},
  {s:'MSFT',n:'Microsoft',p:438.07,c:0.42},
  {s:'BTC',n:'Bitcoin',p:96420.10,c:3.18},
  {s:'GLD',n:'SPDR Gold',p:248.55,c:-0.21},
];
const list = document.getElementById('tickerList');
function renderTickers(){
  list.innerHTML = tickers.map(t=>{
    const up = t.c>=0;
    return `<li>
      <div><span class="t-sym">${t.s}</span><span class="t-name">${t.n}</span></div>
      <div class="t-price">${t.p.toLocaleString('en-US',{minimumFractionDigits:2})}</div>
      <div class="t-chg ${up?'up':'down'}">${up?'▲':'▼'} ${Math.abs(t.c).toFixed(2)}%</div>
    </li>`;
  }).join('');
}
renderTickers();
setInterval(()=>{
  tickers.forEach(t=>{
    const drift = (Math.random()-.5)*0.3;
    t.c = +(t.c + drift).toFixed(2);
    t.p = +(t.p * (1 + drift/200)).toFixed(2);
  });
  renderTickers();
},2200);

// ---------- marquee ----------
const mq = document.getElementById('marqueeTrack');
const mqData = [
  ['S&P 500','5,832.14','+1.24%',1],
  ['NASDAQ','18,540.22','+1.81%',1],
  ['DOW','42,118.99','+0.62%',1],
  ['EUR/USD','1.0782','-0.14%',0],
  ['BTC','96,420','+3.18%',1],
  ['ETH','3,418','+2.04%',1],
  ['GOLD','2,648.55','-0.21%',0],
  ['OIL','71.42','+0.88%',1],
  ['VIX','14.22','-2.41%',0],
  ['10Y','4.21%','+0.03',1],
];
const html = mqData.map(([s,p,c,u])=>`<span><span class="m-sym">${s}</span>${p} <span class="${u?'up':'down'}">${c}</span></span>`).join('');
mq.innerHTML = html + html; // duplicate for seamless loop


// =================== WHY CHOOSE US =======================
const whyObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            const section = entry.target;

            section.querySelector(".why-image")
                .classList.add("show");

            setTimeout(()=>{
                section.querySelector(".why-tag")
                    .classList.add("show");
            },200);

            setTimeout(()=>{
                section.querySelector("h2")
                    .classList.add("show");
            },400);

            setTimeout(()=>{
                section.querySelector(".why-content > p")
                    .classList.add("show");
            },600);

            section.querySelectorAll(".why-item")
                .forEach((item,index)=>{

                    setTimeout(()=>{
                        item.classList.add("show");
                    },900 + (index * 200));

                });

            whyObserver.unobserve(section);
        }

    });

},{
    threshold:.25
});

document
.querySelectorAll(".why-section")
.forEach(section=>{
    whyObserver.observe(section);
});

// ==================== MARKET RESEARCH HUB ====================
const researchObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(!entry.isIntersecting) return;

        const section = entry.target;

        // Header

        setTimeout(()=>{
            section.querySelector('.research-tag')
            ?.classList.add('research-show');
        },100);

        setTimeout(()=>{
            section.querySelector('.research-header h2')
            ?.classList.add('research-show');
        },300);

        setTimeout(()=>{
            section.querySelector('.research-header p')
            ?.classList.add('research-show');
        },500);

        // Featured image popup

        setTimeout(()=>{
            section.querySelector('.research-featured-image')
            ?.classList.add('research-image-show');
        },700);

        // Featured content

        setTimeout(()=>{
            section.querySelector('.research-featured-content')
            ?.classList.add('research-show');
        },900);

        // Cards one by one

        section.querySelectorAll('.research-card')
        .forEach((card,index)=>{

            setTimeout(()=>{
                card.classList.add('research-show');
            },1200 + (index * 180));

        });

        researchObserver.unobserve(section);
    });

},{
    threshold:0.2
});

document
.querySelectorAll('.research-section')
.forEach(section=>{
    researchObserver.observe(section);
});

// ================== HOW IT WORKS ======================
const hiwObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(!entry.isIntersecting) return;

        const section = entry.target;

        const tag = section.querySelector('.hiw-tag');
        const title = section.querySelector('.hiw-header h2');
        const para = section.querySelector('.hiw-header p');
        const cards = section.querySelectorAll('.hiw-card');

        // TAG
        setTimeout(()=>{
            tag?.classList.add('hiw-show');
        },100);

        // TITLE
        setTimeout(()=>{
            title?.classList.add('hiw-show');
        },300);

        // PARAGRAPH
        setTimeout(()=>{
            para?.classList.add('hiw-show');
        },500);

        // CARDS
        cards.forEach((card,index)=>{
            setTimeout(()=>{
                card.classList.add('hiw-show');
            },700 + index * 200);
        });

        hiwObserver.unobserve(section);
    });

},{
    threshold:0.2
});

document.querySelectorAll('.hiw-section').forEach(sec=>{
    hiwObserver.observe(sec);
});

// =============== TESTIMONIALS =================

/* ===========================
   TYPING EFFECT ENGINE
=========================== */

function typeWriter(el, text, speed = 18, callback){

    let i = 0;
    el.textContent = "";

    function typing(){

        if(i < text.length){
            el.textContent += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }else{
            el.classList.add("typing-done");
            if(callback) callback();
        }
    }

    typing();
}

/* ===========================
   TESTIMONIAL OBSERVER
=========================== */

const testimonialObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(!entry.isIntersecting) return;

        const section = entry.target;

        const featured = section.querySelector(".testimonial-featured");
        const typingEl = section.querySelector(".typing-text");
        const feedItems = section.querySelectorAll(".feed-item");

        // 1. show container
        setTimeout(()=>{
            featured?.classList.add("show");
        },200);

        // 2. typing animation
        setTimeout(()=>{
            if(typingEl){
                typeWriter(
                    typingEl,
                    typingEl.dataset.text,
                    14
                );
            }
        },800);

        // 3. feed stagger reveal
        feedItems.forEach((item,index)=>{

            setTimeout(()=>{
                item.classList.add("show");
            },1500 + index * 250);

        });

        testimonialObserver.unobserve(section);
    });

},{
    threshold:0.3
});

document.querySelectorAll(".testimonials-section")
.forEach(sec=>{
    testimonialObserver.observe(sec);
});