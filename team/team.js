

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








// Hamburger menu functionality
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('nav-menu');

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking on a link
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });













 document.addEventListener('DOMContentLoaded', function() {
            // Get the container for the "More Members" cards
            const moreMembersGrid = document.getElementById('moreMembersGrid');
            if (moreMembersGrid) {
                // Get all the member cards as an array
                let memberCards = Array.from(moreMembersGrid.children);

                // Fisher-Yates (Knuth) shuffle algorithm
                for (let i = memberCards.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [memberCards[i], memberCards[j]] = [memberCards[j], memberCards[i]]; // Swap elements
                }

                // Clear the current grid content
                moreMembersGrid.innerHTML = '';

                // Append the shuffled cards back to the grid
                memberCards.forEach(card => {
                    moreMembersGrid.appendChild(card);
                });
            }
        });