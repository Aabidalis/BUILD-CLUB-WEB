// document.addEventListener('DOMContentLoaded', function() {
    // Add cursor glow effect
    // const cursorGlow = document.querySelector('.cursor-glow');
    
    // if (cursorGlow) {
    //     document.addEventListener('mousemove', function(e) {
    //         cursorGlow.style.left = e.clientX + 'px';
    //         cursorGlow.style.top = e.clientY + 'px';
    //     });
    // }
    
    // Add active-border class to detailed-achievements for animated border effect
    // const achievementsSection = document.querySelector('.detailed-achievements');
    // if (achievementsSection) {
    //     achievementsSection.classList.add('active-border');
    // }
    
    // Add image zoom effect on gallery hover
    // const galleryItems = document.querySelectorAll('.gallery-item');
    
    // galleryItems.forEach(item => {
    //     item.addEventListener('mouseenter', function() {
    //         this.querySelector('img').style.transform = 'scale(1.1)';
    //         this.querySelector('.overlay').style.transform = 'translateY(0)';
    //     });
        
    //     item.addEventListener('mouseleave', function() {
    //         this.querySelector('img').style.transform = 'scale(1)';
    //         this.querySelector('.overlay').style.transform = 'translateY(100%)';
    //     });
    // });
// });













let cursor = document.querySelector(".cursor");
let mouseX = 0, mouseY = 0;
let currentX = 0, currentY = 0;
let hideTimeout;

// Track mouse position
document.addEventListener("mousemove", function(e) {
    // Update mouse position
    mouseX = e.clientX;
    mouseY = e.clientY;

    // Show the cursor if it's hidden
    cursor.style.opacity = "1";

    // Reset the hide timer
    clearTimeout(hideTimeout);
    hideTimeout = setTimeout(() => {
        cursor.style.opacity = "0";
    }, 1000); // Hide after 1 second of inactivity
});

// Animate cursor movement
function animateCursor() {
    currentX += (mouseX - currentX) * 0.4;
    currentY += (mouseY - currentY) * 0.4;

    cursor.style.left = currentX + "px";
    cursor.style.top = currentY + "px";

    requestAnimationFrame(animateCursor);
}

animateCursor();
