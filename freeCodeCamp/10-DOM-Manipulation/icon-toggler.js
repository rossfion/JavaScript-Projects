const buttons = document.querySelectorAll('.favorite-icon');

buttons.forEach(
    (button) => {
        button.addEventListener("click", function(){
            const isFilled = this.classList.contains("filled");
            this.classList.toggle("filled");
            this.innerHTML = isFilled ? '&#9825;' : '&#10084;'
        });
    }
);