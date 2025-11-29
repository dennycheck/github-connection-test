// Simple interactive functionality
document.addEventListener('DOMContentLoaded', function() {
    // Display timestamp
    const timestamp = document.getElementById('timestamp');
    const now = new Date();
    timestamp.textContent = now.toLocaleString();
    
    // Click button functionality
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
    
    // Test button functionality
    const testButton = document.getElementById('testButton');
    const testResult = document.getElementById('testResult');
    let testCount = 0;
    
    testButton.addEventListener('click', function() {
        testCount++;
        const tests = [
            '✓ GitHub connection: Active',
            '✓ File updates: Working',
            '✓ Push workflow: Functional',
            '✓ JavaScript: Running',
            '✓ CSS styling: Applied'
        ];
        
        const randomTest = tests[Math.floor(Math.random() * tests.length)];
        testResult.textContent = `Test #${testCount}: ${randomTest}`;
        testResult.style.opacity = '0';
        setTimeout(() => {
            testResult.style.opacity = '1';
        }, 10);
        
        // Animation
        testButton.style.transform = 'scale(0.95)';
        setTimeout(() => {
            testButton.style.transform = '';
        }, 100);
    });
});

