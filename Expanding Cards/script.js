const container = document.getElementById("cards-container");

container.onclick = function(event){
    let target = event.target;

    if (target.className != 'panel') return;

    expand(target);
}

let selectedPanel = document.querySelector(".panel:nth-of-type(1)");

function expand(panel){
    if(selectedPanel === panel) return;

    if (selectedPanel) {
        selectedPanel.style.width = "10%";
        selectedPanel.firstElementChild.style.display = "none";
    };
    
    selectedPanel = panel;
    selectedPanel.style.width = "60%";
    setTimeout(() => { selectedPanel.firstElementChild.style.display = "block"}, 700)
}