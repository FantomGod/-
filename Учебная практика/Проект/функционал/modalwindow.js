function openModalWindow () {
    
    const modal = document.createElement("section");
    modal.className = "modal";
    document.body.classList.add('modal-open');
    
    

    const modalContent = document.createElement("article");
    modalContent.className = "modal_content"

    const closeModalWindow = document.createElement("span");
    closeModalWindow.className = "closeModalWindow";
    closeModalWindow.innerHTML = "&times;";
    closeModalWindow.onclick = function() {
        document.body.removeChild(modal);
        document.body.classList.remove("modal-open")
    };

    const content = document.createElement("p");
    content.innerHTML = "Проверка"

    modalContent.appendChild(closeModalWindow);
    modalContent.appendChild(content);
    modal.appendChild(modalContent);

    document.body.appendChild(modal);
    modal.style.display = "block";

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
            document.body.classList.remove("modal-open")

        }
    };

    modal.style.display = "block";
}


// document.getElementById("body").style.backdropFilter = "brightness(40%)"
