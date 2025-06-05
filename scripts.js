let cursor = document.querySelector(".cursor");
let mouseX = 0, mouseY = 0;
let currentX = 0, currentY = 0;
let hideTimeout;

// Track mouse position
document.addEventListener("mousemove", function (e) {
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












document.addEventListener('DOMContentLoaded', function () {
    function checkIfInView() {
        const heroSection = document.querySelector('.hero-section');
        const heading = document.querySelector('.banner-image h1');
        const paragraph = document.querySelector('.banner-image p');

        const elementTop = heroSection.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < window.innerHeight - elementVisible) {
            heading.classList.add('animated');
            paragraph.classList.add('animated');
        }
    }
    checkIfInView();
});


document.addEventListener('DOMContentLoaded', function () {
    // Get page elements
    const eventsSection = document.querySelector('.upcoming-events');
    const heroSection = document.querySelector('.hero-section');
    const header = document.querySelector('header'); // Assuming there's a header element

    // Get/create other page sections that should be hidden when showing event details
    const pageSections = document.querySelectorAll('body > div:not(header)');

    // Create event details container (initially hidden)
    const eventDetailsContainer = document.createElement('div');
    eventDetailsContainer.className = 'event-details-container';
    eventDetailsContainer.style.display = 'none';

    // Insert the details container after the header (or at the start of body if no header)
    if (header) {
        header.insertAdjacentElement('afterend', eventDetailsContainer);
    } else {
        document.body.insertAdjacentElement('afterbegin', eventDetailsContainer);
    }














    // HTML template for event details
    const eventDetailsTemplate = `
        <a href="#" class="back-button">← Back to Home</a>
        
        <h1 id="eventTitle" class="event-title">Event Title</h1>
        <p id="eventDate" class="event-date">Event Date</p>
        
        <img id="eventImage" src="/assets/upcomming/image.png" alt="Event Image" class="event-image">
        
        <div class="event-description" id="eventDescription">
            <!-- Event description will be populated by JavaScript -->
        </div>
        
        <div class="event-details-section">
            <h3>Event Schedule</h3>
            <div id="eventSchedule">
                <!-- Schedule will be populated by JavaScript -->
            </div>
        </div>
        
        <div class="event-details-section">
            <h3>Registration Information</h3>
            <div id="registrationInfo">
                <!-- Registration info will be populated by JavaScript -->
            </div>
        </div>

        <button class="register-button">Register Now</button>
    `;

    // Get all read more buttons
    const readMoreButtons = document.querySelectorAll('.event-details button');

    // Function to hide all page sections except header
    function hidePageSections() {
        pageSections.forEach(section => {
            if (section !== eventDetailsContainer && section !== header) {
                section.style.display = 'none';
            }
        });
    }

    // Function to show all page sections
    function showPageSections() {
        pageSections.forEach(section => {
            if (section !== eventDetailsContainer) {
                section.style.display = '';
            }
        });
    }

    // Add click event to each read more button
    readMoreButtons.forEach((button, index) => {
        button.addEventListener('click', function (e) {
            e.stopPropagation(); // Prevent event bubbling

            // Get the event details from the parent elements
            const card = button.closest('.event-card');
            const title = card.querySelector('h3').textContent;
            const date = card.querySelector('.event-date').textContent;
            const briefDesc = card.querySelector('p:not(.event-date)').textContent;

            // Hide all page sections except header
            hidePageSections();

            // Show and populate the event details container
            eventDetailsContainer.innerHTML = eventDetailsTemplate;
            eventDetailsContainer.style.display = 'block';

            // Populate the basic event information
            document.getElementById('eventTitle').textContent = title;
            document.getElementById('eventDate').textContent = date;

            // Scroll to top
            window.scrollTo(0, 0);

            // Create more detailed content based on the event
            let fullDescription, schedule, registrationInfo;

            if (index === 0) { // First event (Annual Robotics Challenge)
                fullDescription = briefDesc + " This year's challenge calls on university students to design and build sustainable automation solutions using microcontroller-based systems. Whether you're a beginner or a seasoned builder, this is your chance to create, compete, and collaborate.";

                schedule = `
                    <p>  
                    📅 Date: June 28, 2025 <br>
📍 Venue: A-Block, Ground Floor<br>
🕘 Reporting Time: 9:00 AM
                    </p>
<br>
<br>


                    <p> <b>🎯 What to Expect <b/><br> <br>
                        Real-world automation challenges
Live demonstrations and project evaluations
Collaboration, innovation, and hands-on building
Prizes and recognition for the most impactful solutions
 
<br> <br>

<br>

📋 Rules & Guidelines <br><br>

🔧 Team Size: 2-4 members<br>
💰 Max Budget Limit: ₹7000 per team<br>
💡 Mandatory Use: Arduino, Raspberry Pico, ESP32, or other microcontrollers<br>
🧠 Judging based on originality, creativity, and sustainability<br>



                    </p>
                     
                `;

                registrationInfo = `
                    <p>Registration Open June 06th, 2025<br> Closing June 26th, 2025.</p> <br>
                    <p><strong>Registration Fee:</strong> ₹300 per team (2-4 Members)</p>

                `;
            } else { // Second event (Drone Design Workshop)
                fullDescription = briefDesc + " This intensive one-day workshop will provide a comprehensive introduction to drone technology and design principles. Participants will learn about aerodynamics, electronics, control systems, and programming fundamentals that make drones function. By the end of the day, each participant will have built their own mini-drone to take home.";

                schedule = `
                    <p><strong>Workshop Schedule (July 8):</strong><br>
                    9:00 AM - Check-in and Materials Distribution<br>
                    9:30 AM - Introduction to Drone Technology<br>
                    10:30 AM - Aerodynamics and Design Principles<br>
                    12:00 PM - Lunch Break<br>
                    1:00 PM - Electronics and Control Systems<br>
                    2:30 PM - Building Your Drone (Hands-on Session)<br>
                    4:00 PM - Programming Flight Patterns<br>
                    5:00 PM - Test Flight and Troubleshooting<br>
                    6:00 PM - Workshop Concludes</p>
                `;

                registrationInfo = `
                    <p>Registration opens June 1st, 2025 and closes July 1st, 2025 or when all spots are filled.</p>
                    <p><strong>Registration Fee:</strong> $40 per participant</p>
                    <p><strong>What's Included:</strong> All drone components and materials, tools for use during the workshop, lunch, and refreshments.</p>
                    <p><strong>Prerequisites:</strong> No prior experience with drones or electronics is required. This workshop is designed for beginners and enthusiasts alike.</p>
                    <p><strong>Capacity:</strong> Limited to 30 participants to ensure quality instruction.</p>
                `;
            }

            // Set the content
            document.getElementById('eventDescription').innerHTML = fullDescription;
            document.getElementById('eventSchedule').innerHTML = schedule;
            document.getElementById('registrationInfo').innerHTML = registrationInfo;

            // Back button functionality
            document.querySelector('.back-button').addEventListener('click', function (e) {
                e.preventDefault();

                // Hide the event details
                eventDetailsContainer.style.display = 'none';

                // Show all the other page sections
                showPageSections();

                // Scroll back to events section
                eventsSection.scrollIntoView({ behavior: 'smooth' });
            });

            // Registration button functionality
            // Registration button functionality
            document.querySelector('.register-button').addEventListener('click', function () {
                const formURL = 'https://google.com'; // Replace with your actual Google Form link
                window.open(formURL, '_blank');
            });

        });
    });

    // Add hover effect to event cards (but NOT click effect)
    const eventCards = document.querySelectorAll('.event-card');

    eventCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            // Add a subtle scale effect
            this.style.transform = 'scale(1.02)';
            this.style.boxShadow = '0 15px 30px rgba(255, 107, 0, 0.15)';
        });

        card.addEventListener('mouseleave', function () {
            // Remove the scale effect
            this.style.transform = 'scale(1)';
            this.style.boxShadow = 'none';
        });

        // Removed the card click handler completely - only buttons will trigger the read more
    });

    // Animate cards when they come into view
    function checkForAnimation() {
        const cards = document.querySelectorAll('.event-card');

        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            const triggerBottom = window.innerHeight * 0.8;

            if (cardTop < triggerBottom) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    }

    // Set initial state for animation
    eventCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    // Check on scroll and on load
    window.addEventListener('scroll', checkForAnimation);
    checkForAnimation(); // Check on load
});




















// for past events
/* JavaScript for animations and interactions */
document.addEventListener('DOMContentLoaded', function () {
    // Get all past event elements
    const pastEvents = document.querySelectorAll('.past-events .event');

    // Create intersection observer to trigger animations when events come into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add animation class when element is visible
                entry.target.style.animation = 'fadeIn 0.8s ease forwards';
                // Stop observing after animation is added
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2 // Trigger when 20% of the element is visible
    });

    // Set initial state and observe each event
    pastEvents.forEach((event, index) => {
        // Set initial opacity to 0
        event.style.opacity = '0';
        // Add delay to each event for staggered animation
        event.style.animationDelay = `${index * 0.2}s`;
        // Start observing
        observer.observe(event);
    });

    // Add hover effect for event cards
    pastEvents.forEach(event => {
        event.addEventListener('mouseenter', () => {
            // Add custom hover class or effect if needed
            event.classList.add('event-hover');
        });

        event.addEventListener('mouseleave', () => {
            event.classList.remove('event-hover');
        });
    });

    // Fix for container layout if needed
    const pastEventsContainer = document.querySelector('.past-events');
    if (pastEventsContainer) {
        // Make sure the title is separate from the events container
        const title = pastEventsContainer.querySelector('h2:first-child');
        const eventsWrapper = document.createElement('div');
        eventsWrapper.className = 'events-wrapper';

        // Move all events into the wrapper
        Array.from(pastEventsContainer.children).forEach(child => {
            if (child !== title) {
                eventsWrapper.appendChild(child);
            }
        });

        // Add the wrapper to the container after the title
        pastEventsContainer.appendChild(eventsWrapper);
    }
});


// for our achivement 

document.addEventListener('DOMContentLoaded', function () {
    // Add click event listener to the Read more button
    const readMoreBtn = document.getElementById('read-more-btn');

    if (readMoreBtn) {
        readMoreBtn.addEventListener('click', function () {
            // Navigate to the details page
            window.location.href = '/acievement/';
        });
    }

});

// Animation on scroll
document.addEventListener('DOMContentLoaded', () => {
    const teamMembers = document.querySelectorAll('.team-member');

    const fadeInOptions = {
        threshold: 0.3,
        rootMargin: "0px 0px -100px 0px"
    };

    const fadeInOnScroll = new IntersectionObserver((entries, fadeInOnScroll) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                fadeInOnScroll.unobserve(entry.target);
            }
        });
    }, fadeInOptions);

    teamMembers.forEach(member => {
        member.style.opacity = 0;
        member.style.transform = 'translateY(30px)';
        member.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        fadeInOnScroll.observe(member);
    });
});







window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

