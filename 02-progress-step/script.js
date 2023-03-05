let step = 1;

const prevBtn = document.querySelector(".btn.prev")
const nextBtn = document.querySelector(".btn.next")
const progressLine = document.getElementById("progress-line")

function nextHighlight(){
    step += 1; 
    document.querySelector(`.circle:nth-of-type(${step})`).classList.add("highlight");
    progressLine.style.width = `${(step - 1) * 20}%`;
    if (step == 5) {
        nextBtn.disabled = "true";
        nextBtn.style.background = "#D6EADF";
        nextBtn.style.cursor = "not-allowed";
        nextBtn.style.borderColor = "#5f5c5c";        
        return
    }
    if (step == 2) {
        prevBtn.disabled = "";
        prevBtn.style.background = "#87d898";
        prevBtn.style.cursor = "";
         prevBtn.style.borderColor = "black";
        return
    }
}

function prevHighlight(){
    document.querySelector(`.circle:nth-of-type(${step})`).classList.remove("highlight");
    step -= 1; 
    progressLine.style.width = `${(step - 1) * 20}%`;
    if (step == 1) {
        prevBtn.disabled = "true";
        prevBtn.style.background = "#D6EADF";
        prevBtn.style.cursor = "not-allowed";
        prevBtn.style.borderColor = "#5f5c5c";
        return
    }
    if (step == 4) {
        nextBtn.disabled = "";
        nextBtn.style.background = "#87d898";
        nextBtn.style.cursor = "";
        nextBtn.style.borderColor = "black";
        return
    }
}

prevBtn.addEventListener("click", prevHighlight);
nextBtn.addEventListener("click", nextHighlight);