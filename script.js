// Simple interactive functionality
document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('clickButton');
    const message = document.getElementById('message');
    let clickCount = 0;
    
    button.addEventListener('click', function() {
        clickCount++;
        if (clickCount === 1) {
            message.textContent = 'Great! You clicked the button!';
        } else {
            message.textContent = `You've clicked the button ${clickCount} times!`;
        }
        
        // Add a fun animation
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = '';
        }, 100);
    });
});

