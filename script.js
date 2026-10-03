// DOM Element Selectors
const themeToggleBtn = document.getElementById('theme-toggle');
const ctaBtn = document.getElementById('cta-click');

// Dark/Light Mode toggle mechanism
themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    
    if (currentTheme === 'dark') {
        document.documentElement.removeAttribute('data-theme');
        themeToggleBtn.textContent = '🌙 Toggle Mode';
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggleBtn.textContent = '☀️ Toggle Mode';
    }
});

// CTA Interactivity simulation
ctaBtn.addEventListener('click', () => {
    alert('Thank you for taking a look! You can now map out additional files or integrate components directly into index.html.');
});
