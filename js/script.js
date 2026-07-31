if (typeof AOS !== "undefined") {
    AOS.init({
        duration:1000,
        once:true,
        easing:"ease-in-out"
    });
}
const navbar = document.querySelector(".navbar");
if(navbar){
window.addEventListener("scroll",()=>{
    if(window.scrollY > 50){
        navbar.style.background =
        "rgba(16,24,32,0.95)";
        navbar.style.backdropFilter =
        "blur(12px)";
        navbar.style.boxShadow =
        "0 10px 25px rgba(0,0,0,.15)";
    }
    else{
        navbar.style.background =
        "rgba(16,24,32,.75)";
        navbar.style.boxShadow =
        "none";
    }
});
}
document.querySelectorAll('a[href^="#"]')
.forEach(link=>{
link.addEventListener("click",function(e){
    const target =
    document.querySelector(
        this.getAttribute("href")
    );
    if(target){
        e.preventDefault();
        target.scrollIntoView({
            behavior:"smooth"
        });
    }
});
});
const navLinks =
document.querySelectorAll(".navbar-nav .nav-link");
const navbarCollapse =
document.querySelector(".navbar-collapse");
navLinks.forEach(link=>{
link.addEventListener("click",()=>{
    if(navbarCollapse.classList.contains("show")){
        document
        .querySelector(".navbar-toggler")
        .click();
    }
});
});
const sections =
document.querySelectorAll("section[id]");
window.addEventListener("scroll",()=>{
let current="";
sections.forEach(section=>{
    const top =
    section.offsetTop - 150;
    if(scrollY >= top){
        current =
        section.getAttribute("id");
    }
});
navLinks.forEach(link=>{
    link.classList.remove("active");
    if(
    link.getAttribute("href")
    === "#" + current
    ){
        link.classList.add("active");
    }
});
});
const counters =
document.querySelectorAll(
".impact-card h2, .stat-box h3"
);
const startCounter = (counter)=>{
const original =
counter.innerText;
const number =
parseInt(
original.replace(/\D/g,"")
);
let count=0;
const speed =
number / 80;
const update=()=>{
count += speed;
if(count < number){
counter.innerText =
Math.floor(count)
+
(original.includes("+") ? "+" : "");
requestAnimationFrame(update);
}
else{
counter.innerText =
number
+
(original.includes("+") ? "+" : "");
}
};
update();
};
const counterObserver =
new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
startCounter(entry.target);
counterObserver.unobserve(
entry.target
);
}
});
});
counters.forEach(counter=>{
counterObserver.observe(counter);
});
const forms =
document.querySelectorAll("form");
forms.forEach(form=>{
form.addEventListener("submit",(e)=>{
const email =
form.querySelector(
'input[type="email"]'
);
if(email){
if(email.value.trim()===""){
e.preventDefault();
alert(
"Please enter your email address."
);
return;
}
}
alert(
"Thank you! Your message has been submitted."
);
});
});
const topBtn =
document.createElement("button");
topBtn.innerHTML="↑";
topBtn.id="scrollTopBtn";
document.body.appendChild(topBtn);
Object.assign(topBtn.style,{
position:"fixed",
bottom:"25px",
right:"25px",
width:"50px",
height:"50px",
border:"none",
borderRadius:"50%",
background:"#198754",
color:"#fff",
fontSize:"22px",
cursor:"pointer",
display:"none",
zIndex:"9999"
});
window.addEventListener("scroll",()=>{
if(window.scrollY > 400){
topBtn.style.display="block";
}
else{
topBtn.style.display="none";
}
});
topBtn.onclick=()=>{
window.scrollTo({
top:0,
behavior:"smooth"
});
};
window.addEventListener(
"load",
()=>{
document.body.classList.add(
"loaded"
);
});
console.log(
"🌱 EcoSphere Website Loaded Successfully"
);