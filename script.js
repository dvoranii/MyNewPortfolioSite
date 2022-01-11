
///////////////////////////////////////////////////////
// Typing effect in title
//////////////////////////////////////////////////////

function typeEffect(element, speed) {

    let text = "Front-End Developer";

    let i = 0;
    let timer = setInterval(() => {
        if (i < text.length) {
            element.append
                (text.charAt(i));
            i++;
        } else {
            clearInterval(timer);
        }
    }, speed)
}

let speed = 75;
let jobTitle = document.querySelector(".hero-job-title-text");
let delay = jobTitle.innerHTML.length * speed + speed;

setTimeout(() => {
    typeEffect(jobTitle, speed);

}, 300)

///////////////////////////////////////////////////////
//opening and closing the nav
///////////////////////////////////////////////////////

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", () => {
    headerEl.classList.toggle("nav-open")
});


///////////////////////////////////////////////////////
//Link click event behaviour 
///////////////////////////////////////////////////////

const allLinks = document.querySelectorAll('a:link');

allLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const href = link.getAttribute("href");
        // scroll back to top
        if (href == "#") window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        if (href !== "#" && href.startsWith("#")) {
            const sectionEl = document.querySelector(href);
            sectionEl.scrollIntoView({ behavior: "smooth" });
        }

        if (link.classList.contains("main-nav-link"))
            headerEl.classList.toggle("nav-open");
    });
});

const contactBtn = document.querySelector('#cta-btn-hero');
contactBtn.addEventListener("click", ()=>{
    headerEl.classList.toggle("nav-open")
})


///////////////////////////////////////////////////////
// Sticky navigation
///////////////////////////////////////////////////////

const sectionHeroEl = document.querySelector(".section-hero")

const obs = new IntersectionObserver(function (entries) {
    const ent = entries[0];
    if (!ent.isIntersecting) {
        document.body.classList.add('sticky');
        document.body.classList.add('box-shadow');
    }
    if (ent.isIntersecting) {
        document.body.classList.remove('sticky');
        document.body.classList.remove('box-shadow');
    }


},
    {
        // In the viewport
        root: null,
        threshold: 0,
        rootMargin: '-96px'
    })
obs.observe(sectionHeroEl);


///////////////////////////////////////////////////////
// Modals
///////////////////////////////////////////////////////

let item1Modal = document.querySelector('.item-1');
let item1Modal2 = document.querySelector('.item-2');
let textBox1 = document.querySelector('.textbox');
let textBox2 = document.querySelector('.textbox-2');

let modalBg = document.querySelector('.modal-bg');
let modalBg2 = document.querySelector('.modal-bg-2');

let modalBtn = document.querySelector('.modal-btn');
let modalBtn2 = document.querySelector('.modal-btn-2');

item1Modal.addEventListener('click', ()=>{
    modalBg.classList.add('bg-active');
})

textBox1.addEventListener('click', ()=>{
    modalBg.classList.add('bg-active');
})

textBox2.addEventListener('click', ()=>{
    modalBg2.classList.add('bg-active');
})
item1Modal2.addEventListener('click', ()=>{
    modalBg2.classList.add('bg-active');
})

modalBtn.addEventListener('click', () => {
    modalBg.classList.remove('bg-active');
})
modalBtn2.addEventListener('click', () => {
    modalBg2.classList.remove('bg-active');
})

// making contact button in nav dissapear at bottom of screen

const sectionContact = document.querySelector(".contact-section")
const ctaBtn = document.querySelector("#cta-btn-hero")

const obs2 = new IntersectionObserver( (entries) =>{
    const ent = entries[0];
    if(ent.isIntersecting){
        ctaBtn.classList.add('display-none')
    }
    if(!ent.isIntersecting){
        ctaBtn.classList.remove('display-none')
    }

    
},
{
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: '-350px'
}
)

obs2.observe(sectionContact);

// Making sticky header disappear when intersecting with footer

const sectionFooter = document.querySelector('.footer');
const header = document.querySelector('.header');

const obs3 = new IntersectionObserver((entries) => {
    const ent = entries[0];
    if(ent.isIntersecting){
        header.classList.add('display-none');
    }
    if(!ent.isIntersecting){
        header.classList.remove('display-none')
    }
},
{
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: '-100px'
}
)

obs3.observe(sectionFooter);


///////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
///////////////////////////////////////////////////////

function checkFlexGap() {
    var flex = document.createElement("div");
    flex.style.display = "flex";
    flex.style.flexDirection = "column";
    flex.style.rowGap = "1px";

    flex.appendChild(document.createElement("div"));
    flex.appendChild(document.createElement("div"));

    document.body.appendChild(flex);
    var isSupported = flex.scrollHeight === 1;
    flex.parentNode.removeChild(flex);

    if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();