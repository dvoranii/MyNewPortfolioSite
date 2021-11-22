
///////////////////////////////////////////////////////
// Typing effect in title
//////////////////////////////////////////////////////
function typeEffect(element, speed) {

    let text = "Web Developer";

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
//quick logo
///////////////////////////////////////////////////////

const logoEl = document.querySelector(".logo");
const logoName = "<ILDIDEV>";
logoEl.append(logoName)

///////////////////////////////////////////////////////
//Smooth scrolling animation
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

const contactBtn = document.querySelector('#cta-btn');
contactBtn.addEventListener("click", ()=>{
    headerEl.classList.toggle("nav-open")
})

///////////////////////////////////////////////////////
// Sticky navigation
///////////////////////////////////////////////////////

const sectionHeroEl = document.querySelector(".section-hero")

const obs = new IntersectionObserver(function (entries) {
    const ent = entries[0];
    console.log(ent);
    if (!ent.isIntersecting) {
        document.body.classList.add('sticky');
    }
    if (ent.isIntersecting) {
        document.body.classList.remove('sticky');
    }


},
    {
        // In the viewport
        root: null,
        threshold: 0,
        rootMargin: '-96px'
    })
obs.observe(sectionHeroEl);


// making contact button in nav dissapear at bottom of screen

const sectionFooter = document.querySelector(".footer")
const ctaBtn = document.querySelector("#cta-btn")

const obs2 = new IntersectionObserver(function (entries){
    const ent = entries[0];
    console.log(ent);
    if(ent.isIntersecting){
        ctaBtn.classList.add('display-none')
    }
    if(!ent.isIntersecting){
        ctaBtn.classList.remove('display-none')
    }
})

obs2.observe(sectionFooter);


///////////////////////////////////////////////////////
// Opening and closing modals for portfolio items
///////////////////////////////////////////////////////

//for each statement is required to make this code a lot cleaner

let modal = document.querySelector(".modal-bg");

let openModal_1 = document.querySelector(".modalOpen-1");
let openModal_2 = document.querySelector(".modalOpen-2");
let openModal_3 = document.querySelector(".modalOpen-3");
let openModal_4 = document.querySelector(".modalOpen-4");

//item 1
openModal_1.addEventListener("click", () => {
    modal.classList.add("display-modal")
});

//item 2
openModal_2.addEventListener("click", () => {
    modal.classList.add("display-modal")
});

//item 3
openModal_3.addEventListener("click", () => {
    modal.classList.add("display-modal")
});

//item 4
openModal_4.addEventListener("click", () => {
    modal.classList.add("display-modal")
});

let closeModal = document.querySelector(".modal-close");

closeModal.addEventListener("click", () => {
    modal.classList.remove("display-modal")
})



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
    console.log(isSupported);

    if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();