document.addEventListener('DOMContentLoaded', function() {
    const preloader = document.getElementById('preloader');
    const mainContent = document.getElementById('main-content');
    const asciiArt = document.getElementById('ascii-art');

    const skullArt = `
          _________ 
         /         \ 
        /  /~~~~~\  \ 
        |  |     |  | 
        |  |     |  | 
        |  |     |  |         / 
        |  |     |  |       // 
       (o  o)    /  --------/ 
        \  --  / 
         \    / 
          \__/ 
    `;

    asciiArt.textContent = skullArt;

    // --- PRELOADER SEQUENCE ---
    setTimeout(() => {
        preloader.style.transition = 'opacity 1s';
        preloader.style.opacity = '0';
        mainContent.style.display = 'block';
        setTimeout(() => {
            preloader.style.display = 'none';
            // Trigger image loading simulation after main content is visible
            simulateImageLoading();
        }, 1000);
    }, 3000); // 3-second preloader

    // --- IMAGE LOADING SIMULATION ---
    function simulateImageLoading() {
        const imageLoaders = document.querySelectorAll('.image-loader');
        imageLoaders.forEach(loader => {
            const preloader = loader.querySelector('.ascii-preloader');
            const photo = loader.querySelector('.food-photo');

            setTimeout(() => {
                preloader.style.display = 'none';
                photo.style.display = 'block';
                photo.style.animation = 'fadeIn 1s';
            }, 2000); // Simulate a 2-second load time
        });
    }

    // --- GLITCH EFFECT ON NAV HOVER ---
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.classList.add('glitch-active');
        });
        link.addEventListener('mouseleave', () => {
            link.classList.remove('glitch-active');
        });
    });
});

// Add a fadeIn keyframe animation to the CSS if it's not there
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
`, styleSheet.cssRules.length);
