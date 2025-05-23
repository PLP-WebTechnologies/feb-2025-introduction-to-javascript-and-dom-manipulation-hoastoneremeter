
// Change text content dynamically
document.getElementById('change-text-btn').addEventListener('click', () => {
    const heading = document.getElementById('main-heading');
    heading.textContent = 'Text Changed Dynamically!';
    heading.style.color = 'blue'; // Modify CSS style
});

// Add or remove an element
document.getElementById('toggle-element-btn').addEventListener('click', () => {
    const container = document.getElementById('dynamic-container');
    const existingElement = document.getElementById('dynamic-element');

    if (existingElement) {
        container.removeChild(existingElement); // Remove element
    } else {
        const newElement = document.createElement('p');
        newElement.id = 'dynamic-element';
        newElement.textContent = 'This is a dynamically added element.';
        newElement.style.color = 'green'; // Modify CSS style
        container.appendChild(newElement); // Add element
    }
});
