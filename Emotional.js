<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Spiritual Development</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
            color: #333;
        }
        header {
            background-color: #4CAF50;
            color: white;
            padding: 1em 0;
            text-align: center;
        }
        header h1 {
            margin: 0;
            font-size: 2.5em;
        }
        nav {
            margin: 20px 0;
            text-align: center;
        }
        nav a {
            margin: 0 15px;
            text-decoration: none;
            color: #4CAF50;
            font-weight: bold;
        }
        .container {
            width: 80%;
            margin: auto;
            overflow: hidden;
        }
        .section {
            background: white;
            margin: 20px 0;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .section h2 {
            color: #4CAF50;
            border-bottom: 2px solid #f4f4f4;
            padding-bottom: 10px;
        }
        .section p {
            margin: 15px 0;
            line-height: 1.6;
        }
        .gallery {
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
        }
        .gallery img {
            max-width: 100%;
            height: auto;
            border-radius: 10px;
            margin: 10px 0;
            display: none;
        }
        .gallery img.active {
            display: block;
        }
        .gallery .prev, .gallery .next {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background-color: rgba(0, 0, 0, 0.5);
            color: white;
            padding: 10px;
            cursor: pointer;
            border-radius: 50%;
        }
        .gallery .prev {
            left: 10px;
        }
        .gallery .next {
            right: 10px;
        }
        footer {
            background: #333;
            color: white;
            text-align: center;
            padding: 10px;
            position: fixed;
            width: 100%;
            bottom: 0;
        }
    </style>
</head>
<body>
    <header>
        <h1>Spiritual Development</h1>
        <nav>
            <a href="#about">About</a>
            <a href="#activities">Activities</a>
            <a href="#gallery">Gallery</a>
            <a href="#contact">Contact</a>
        </nav>
    </header>

    <div class="container">
        <section id="about" class="section">
            <h2>About Spiritual Development</h2>
            <p>The spiritual aspect of life relates to our sense of purpose, meaning, and connection to something greater than ourselves. It involves exploring our beliefs, values, and practices that provide inner peace and fulfillment. Spirituality can be nurtured through meditation, prayer, nature walks, and participating in religious or philosophical discussions. It helps us find balance and harmony in our lives.</p>
        </section>

        <section id="activities" class="section">
            <h2>Activities for Spiritual Development</h2>
            <p>Here are some activities that can help enhance spiritual development:</p>
            <ul>
                <li>Meditation and mindfulness practices</li>
                <li>Prayer and reflection</li>
                <li>Nature walks and outdoor activities</li>
                <li>Reading spiritual texts</li>
                <li>Participating in religious or philosophical discussions</li>
            </ul>
        </section>

        <section id="gallery" class="section gallery">
            <h2>Gallery</h2>
            <span class="prev">&#10094;</span>
            <img src="https://via.placeholder.com/400x300" alt="Meditation" class="active">
            <img src="https://via.placeholder.com/400x300" alt="Prayer">
            <img src="https://via.placeholder.com/400x300" alt="Nature walk">
            <span class="next">&#10095;</span>
        </section>

        <section id="contact" class="section">
            <h2>Contact Us</h2>
            <form class="contact-form" action="https://api.web3forms.com/submit" method="POST">
                <input type="hidden" name="access_key" value="your-access-key">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required><br><br>
                
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required><br><br>
                
                <label for="phone">Phone Number:</label>
                <input type="tel" id="phone" name="phone" placeholder="Your Phone Number"><br><br>
                
                <label for="comment">Comment:</label>
                <textarea id="comment" name="comment" placeholder="Your Comment" rows="5" required></textarea><br><br>
                
                <button type="submit">Submit</button>
            </form>
        </section>
    </div>

    <footer>
        <p>© 2024 Spiritual Development</p>
    </footer>

    <script>
        // Smooth scroll for navigation links
        document.querySelectorAll('nav a').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Slideshow for gallery
        let slideIndex = 0;
        const slides = document.querySelectorAll('.gallery img');
        const prev = document.querySelector('.prev');
        const next = document.querySelector('.next');

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.remove('active');
                if (i === index) {
                    slide.classList.add('active');
                }
            });
        }

        function nextSlide() {
            slideIndex = (slideIndex + 1) % slides.length;
            showSlide(slideIndex);
        }

        function prevSlide() {
            slideIndex = (slideIndex - 1 + slides.length) % slides.length;
            showSlide(slideIndex);
        }

        next.addEventListener('click', nextSlide);
        prev.addEventListener('click', prevSlide);

        // Auto slide
        setInterval(nextSlide, 3000);
    </script>
</body>
</html>
