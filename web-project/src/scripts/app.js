// This file contains JavaScript code for the home page interactivity.
// It displays an April Fool's message in a fun way.

document.addEventListener('DOMContentLoaded', () => {
    const messageElement = document.createElement('div');
    messageElement.textContent = "Happy April Fool's Day! 🎉 Just kidding, this is a regular day!";
    messageElement.style.fontSize = '24px';
    messageElement.style.color = 'purple';
    messageElement.style.textAlign = 'center';
    messageElement.style.marginTop = '20px';
    messageElement.style.transition = 'transform 0.5s';

    document.body.appendChild(messageElement);

    // Add a fun interactive effect
    messageElement.addEventListener('mouseover', () => {
        messageElement.style.transform = 'scale(1.1)';
    });

    messageElement.addEventListener('mouseout', () => {
        messageElement.style.transform = 'scale(1)';
    });
});