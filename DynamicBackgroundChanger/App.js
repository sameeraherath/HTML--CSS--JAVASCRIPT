document.addEventListener("DOMContentLoaded", () => {
    const colorInput = document.getElementById("color-input");
    const changeColorButton = document.getElementById("change-color-button");

    //Function to change the background color
    function changeBackgroundColor() {
        const color = colorInput.value.trim();
        if (color){

            document.body.style.backgroundColor = color;
        } else {

            alert("Please enter a valid color");
        }

}

// Change background color when the button is clicked
changeColorButton.addEventListener('click', changeBackgroundColor);

// Optionally, change background color by pressing Enter

colorInput.addEventListener('keypress', (event) => {
    
    if (event.key === 'Enter') {
        changeBackgroundColor();
    }
});

    
    
});