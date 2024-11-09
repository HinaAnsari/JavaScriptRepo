function addHoverEffect() {
    const textElement = document.getElementById('hoverText');
    
    // Change background color on mouse over
    textElement.addEventListener('mouseover', () => {
        textElement.style.backgroundColor = 'yellow';
    });

    // Reset background color on mouse out
    textElement.addEventListener('mouseout', () => {
        textElement.style.backgroundColor = 'white';
    });
}

// Initialize the hover effect when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', addHoverEffect);