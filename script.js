document.addEventListener('DOMContentLoaded', function() {
    
    if (document.getElementById('posts-container')) {
        const posts = [
            {
                title: "Paris in Spring",
                excerpt: "Exploring the romantic streets of Paris...",
                image: "paris.jpg"
            },
            {
                title: "Tokyo Nights",
                excerpt: "Neon lights and bustling streets in Japan...",
                image: "tokyo.jpg"
            },
            {
                title: "Safari Adventure",
                excerpt: "Wildlife encounters in the African savanna...",
                image: "safari.jpg"
            }
        ];

        const postsContainer = document.getElementById('posts-container');
        
        posts.forEach(post => {
            const postElement = document.createElement('article');
            postElement.className = 'post-card';
            postElement.innerHTML = `
                <img src="${post.image}" alt="${post.title}" class="post-img">
                <h3>${post.title}</h3>
                <p>${post.excerpt}</p>
                <button class="read-more">Read More</button>
            `;
            postsContainer.appendChild(postElement);
        });

        // Add click event to all read more buttons
        const readMoreButtons = document.querySelectorAll('.read-more');
        readMoreButtons.forEach(button => {
            button.addEventListener('click', function() {
                alert('This would navigate to a full blog post in a complete implementation!');
            });
        });
    }

    // Form validation on Contact Page
    if (document.getElementById('contactForm')) {
        const contactForm = document.getElementById('contactForm');
        
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            if (!name || !email || !message) {
                alert('Please fill in all fields!');
                return;
            }
            
            if (!email.includes('@')) {
                alert('Please enter a valid email address!');
                return;
            }
            
            alert('Thank you for your message! We\'ll get back to you soon.');
            contactForm.reset();
        });
    }
});