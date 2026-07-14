/*=========================================
    DIVINE TAROT WEBSITE SCRIPT
=========================================*/


document.addEventListener("DOMContentLoaded", function(){



/*=========================================
    LOADER
=========================================*/

const loader = document.getElementById("loader");

if(loader){

    setTimeout(()=>{

        loader.style.opacity="0";

        setTimeout(()=>{

            loader.style.display="none";

        },500);

    },1200);

}



/*=========================================
    MOBILE MENU
=========================================*/

const menuBtn=document.getElementById("menu-btn");

const navLinks=document.querySelector(".nav-links");


if(menuBtn && navLinks){

    menuBtn.addEventListener("click",()=>{

        navLinks.classList.toggle("active");

        menuBtn.innerHTML =
        navLinks.classList.contains("active")
        ?
        '<i class="fas fa-times"></i>'
        :
        '<i class="fas fa-bars"></i>';

    });


    document.querySelectorAll(".nav-links a")
    .forEach(link=>{

        link.addEventListener("click",()=>{

            navLinks.classList.remove("active");

            menuBtn.innerHTML =
            '<i class="fas fa-bars"></i>';

        });

    });

}




/*=========================================
    NAVBAR EFFECT
=========================================*/


const header=document.querySelector("header");


window.addEventListener("scroll",()=>{

    if(header){

        if(window.scrollY>50){

            header.style.padding="10px 0";

        }

        else{

            header.style.padding="20px 0";

        }

    }

});





/*=========================================
    SCROLL PROGRESS BAR
=========================================*/


const progress=document.getElementById("progress-bar");


window.addEventListener("scroll",()=>{


if(progress){

let height =
document.documentElement.scrollHeight -
document.documentElement.clientHeight;


let scroll =
(window.scrollY/height)*100;


progress.style.width=scroll+"%";


}


});





/*=========================================
    CUSTOM CURSOR
=========================================*/


const dot=document.querySelector(".cursor-dot");

const outline=document.querySelector(".cursor-outline");


if(dot && outline){


window.addEventListener("mousemove",(e)=>{


dot.style.transform =
`translate(${e.clientX}px,${e.clientY}px)`;


outline.style.transform =
`translate(${e.clientX-15}px,${e.clientY-15}px)`;


});


}





/*=========================================
    FAQ ACCORDION
=========================================*/


const faqItems=document.querySelectorAll(".faq-item");


faqItems.forEach(item=>{


const btn=item.querySelector(".faq-question");


if(btn){


btn.addEventListener("click",()=>{


faqItems.forEach(other=>{

if(other!==item){

other.classList.remove("active");

}

});


item.classList.toggle("active");


});


}



});






/*=========================================
    PRICING PLAN AUTO SELECT
=========================================*/


const planButtons=
document.querySelectorAll(".choose-plan");


const readingType=
document.getElementById("readingType");



planButtons.forEach(button=>{


button.addEventListener("click",()=>{


let selectedPlan =
button.getAttribute("data-plan");


if(readingType){

readingType.value=selectedPlan;

readingType.dispatchEvent(new Event('change'));

}


});


});





/*=========================================
    READING CATEGORY
=========================================*/


const category=
document.getElementById("readingCategory");



const readingOptions={


"Free Yes / No Tarot":[
"Love",
"Career",
"Marriage",
"Family",
"Finance",
"Spiritual Guidance"
],


"One Question Reading (₹251)":[
"Love",
"Career",
"Marriage",
"Family",
"Finance",
"Spiritual Guidance"
],


"Complete Tarot Reading (₹501)":[
"Complete Life Guidance"
]


};




if(readingType && category){


readingType.addEventListener("change",()=>{


let value =
readingType.value;


category.innerHTML =
'<option value="">Select Category</option>';



if(readingOptions[value]){


readingOptions[value].forEach(item=>{


let option=
document.createElement("option");


option.textContent=item;


option.value=item;


category.appendChild(option);


});


}



});


}





/*=========================================
    SMOOTH SCROLL
=========================================*/


document.querySelectorAll('a[href^="#"]')
.forEach(anchor=>{


anchor.addEventListener("click",function(e){


let target =
document.querySelector(this.getAttribute("href"));



if(target){


e.preventDefault();


target.scrollIntoView({

behavior:"smooth"

});


}



});


});







/*=========================================
    SCROLL TOP BUTTON
=========================================*/


const topBtn=
document.getElementById("scrollTopBtn");


if(topBtn){


window.addEventListener("scroll",()=>{


if(window.scrollY>500){

topBtn.style.display="flex";

}

else{

topBtn.style.display="none";

}


});



topBtn.addEventListener("click",()=>{


window.scrollTo({

top:0,

behavior:"smooth"

});


});


}







/*=========================================
    FORM SUCCESS MESSAGE
=========================================*/


const forms=
document.querySelectorAll("form");

// Inject modal styles dynamically
const modalStyle = document.createElement("style");
modalStyle.textContent = `
.mystic-choice-modal {
    position: fixed;
    inset: 0;
    z-index: 100000;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(9, 7, 20, 0.9);
    backdrop-filter: blur(10px);
    opacity: 0;
    transition: opacity 0.3s ease;
}
.mystic-choice-modal.active {
    opacity: 1;
}
.mystic-choice-box {
    background: #15102B;
    border: 1px solid rgba(244, 197, 66, 0.4);
    border-radius: 20px;
    padding: 35px 30px;
    max-width: 460px;
    width: 90%;
    text-align: center;
    box-shadow: 0 15px 45px rgba(123, 47, 247, 0.35), 0 0 20px rgba(244, 197, 66, 0.15);
    transform: scale(0.9);
    transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.mystic-choice-modal.active .mystic-choice-box {
    transform: scale(1);
}
.mystic-choice-box h3 {
    font-family: 'Cinzel', serif;
    color: #F4C542;
    font-size: 1.4rem;
    margin-bottom: 12px;
    font-weight: 700;
}
.mystic-choice-box p {
    font-size: 0.9rem;
    color: #d8d8e6;
    margin-bottom: 25px;
    line-height: 1.6;
}
.mystic-choice-btn {
    display: block;
    width: 100%;
    padding: 14px;
    margin-bottom: 12px;
    border: none;
    border-radius: 30px;
    font-size: 0.92rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    text-align: center;
    font-family: 'Poppins', sans-serif;
}
.mystic-btn-wa {
    background: #25D366;
    color: #fff;
    box-shadow: 0 4px 15px rgba(37, 211, 102, 0.3);
}
.mystic-btn-wa:hover {
    background: #20ba5a;
    transform: translateY(-2px);
}
.mystic-btn-email {
    background: #7B2FF7;
    color: #fff;
    box-shadow: 0 4px 15px rgba(123, 47, 247, 0.3);
}
.mystic-btn-email:hover {
    background: #6924d6;
    transform: translateY(-2px);
}
.mystic-btn-cancel {
    background: rgba(255, 255, 255, 0.08);
    color: #fff;
    border: 1px solid rgba(255, 255, 255, 0.12);
    margin-bottom: 0;
}
.mystic-btn-cancel:hover {
    background: rgba(255, 255, 255, 0.15);
}
`;
document.head.appendChild(modalStyle);

forms.forEach(form=>{
form.addEventListener("submit",(e)=>{
e.preventDefault();

const formData = new FormData(form);
const data = {};
for(let [key, val] of formData.entries()) {
    data[key] = val;
}

const isBooking = !!form.querySelector("[name='fullname']");
let subject = "";
let plainBody = "";
let waBody = "";

if (isBooking) {
    subject = `Tarot Booking Request from ${data.fullname || 'Client'}`;
    waBody = `🔮 *Tarot Booking Request* 🔮\n\n` +
             `👤 *Name:* ${data.fullname || ''}\n` +
             `📅 *DOB:* ${data.dob || ''}\n` +
             `⚧ *Gender:* ${data.gender || ''}\n` +
             `🌍 *Country:* ${data.country || ''}\n` +
             `📧 *Email:* ${data.email || ''}\n` +
             `💬 *WhatsApp:* ${data.whatsapp || ''}\n` +
             `🗣️ *Language:* ${data.language || ''}\n` +
             `📖 *Reading:* ${data.reading_type || ''}\n` +
             `🔮 *Category:* ${data.category || ''}\n` +
             `🚚 *Delivery:* ${data.delivery || ''}\n` +
             `❓ *Question:* ${data.question || ''}\n` +
             `📝 *Situation:* ${data.details || ''}`;
} else {
    subject = `Tarot Query from ${data.name || 'Client'}: ${data.subject || ''}`;
    waBody = `✉️ *New Contact Message* ✉️\n\n` +
             `👤 *Name:* ${data.name || ''}\n` +
             `📧 *Email:* ${data.email || ''}\n` +
             `💬 *WhatsApp:* ${data.phone || ''}\n` +
             `📌 *Subject:* ${data.subject || ''}\n` +
             `📝 *Message:* ${data.message || ''}`;
}

plainBody = waBody.replace(/\*/g, '');

const modal = document.createElement("div");
modal.className = "mystic-choice-modal";
modal.innerHTML = `
    <div class="mystic-choice-box">
        <h3>Submit Your Request</h3>
        <p>Choose your preferred channel to send your details directly to Kalindi Saxena:</p>
        <button class="mystic-choice-btn mystic-btn-wa">💬 Send via WhatsApp (Recommended)</button>
        <button class="mystic-choice-btn mystic-btn-email">✉️ Send via Email</button>
        <button class="mystic-choice-btn mystic-btn-cancel">Cancel</button>
    </div>
`;
document.body.appendChild(modal);

setTimeout(() => modal.classList.add("active"), 10);

const triggerSubmit = (url) => {
    window.open(url, "_blank");
    
    let button = form.querySelector("button[type='submit']");
    let originalHTML = "";
    if (button) {
        originalHTML = button.innerHTML;
        button.innerHTML = "✓ Request Shared";
        button.style.background = "#4CAF50";
    }

    modal.classList.remove("active");
    setTimeout(() => {
        modal.remove();
        alert("✨ Thank you! Your request details have been formatted. Please complete the sending step in the opened window. We will contact you shortly.");
        form.reset();
        if (button) {
            button.innerHTML = originalHTML;
            button.style.background = "";
        }
    }, 500);
};

modal.querySelector(".mystic-btn-wa").addEventListener("click", () => {
    const waUrl = `https://api.whatsapp.com/send?phone=917999640825&text=${encodeURIComponent(waBody)}`;
    triggerSubmit(waUrl);
});

modal.querySelector(".mystic-btn-email").addEventListener("click", () => {
    const mailUrl = `mailto:kalindiachalsaxena@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(plainBody)}`;
    triggerSubmit(mailUrl);
});

modal.querySelector(".mystic-btn-cancel").addEventListener("click", () => {
    modal.classList.remove("active");
    setTimeout(() => modal.remove(), 350);
});

});
});




});