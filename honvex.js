<script src="https://cdn.emailjs.com/dist/email.min.js"></script>

<script>
(function() {
    // Initialize EmailJS with your public key
    emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS public key
})();

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".contact-form");

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        // Collect form values
        const name = form.querySelector('input[placeholder="Name"]').value;
        const email = form.querySelector('input[placeholder="Email"]').value;
        const company = form.querySelector('input[placeholder="Company"]').value;
        const country = form.querySelector('input[placeholder="Country"]').value;
        const message = form.querySelector('textarea').value;

        // Compose formatted message
        const formattedMessage = `
New Contact Form Submission:

Name: ${name}
Email: ${email}
Company: ${company}
Country: ${country}
Message: ${message}
        `;

        // Prepare data for EmailJS template
        const templateParams = {
            to_email: "harishraj1721334@gmail.com,kishoreabi1721349@gmail.com", // multiple emails separated by comma
            from_name: name,
            from_email: email,
            company: company,
            country: country,
            message: formattedMessage
        };

        // Send email using EmailJS
        emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams)
            .then(function(response) {
                alert("Message sent successfully!");
                form.reset();
            }, function(error) {
                alert("Failed to send message. Please try again later.");
                console.error("EmailJS Error:", error);
            });
    });
});
</script>

<script>
document.addEventListener("DOMContentLoaded", function() {

  // ============================
  // 1. Hide/Show Navbar on Scroll
  // ============================
  let lastScrollTop = 0;
  const nav = document.querySelector(".nav");

  window.addEventListener("scroll", () => {
    const st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop && st > 100) {
      nav.style.transform = "translateY(-100%)";
    } else {
      nav.style.transform = "translateY(0)";
    }
    lastScrollTop = st <= 0 ? 0 : st;
  });

  // ============================
  // 2. Smooth Scroll for Nav Links
  // ============================
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // ============================
  // 3. Fade-in Sections on Scroll
  // ============================
  const sections = document.querySelectorAll("section");
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    { threshold: 0.1 }
  );

  sections.forEach(section => {
    section.style.opacity = 0;
    section.style.transform = "translateY(50px)";
    section.style.transition = "all 0.8s ease-out";
    observer.observe(section);
  });

  // ============================
  // 4. Product Filter Buttons
  // ============================
  const filterButtons = document.querySelectorAll(".filter-btn");
  const productCards = document.querySelectorAll(".product-card");

  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const category = btn.textContent.toLowerCase();
      productCards.forEach(card => {
        const cardCategory = card.querySelector(".product-category").textContent.toLowerCase();
        card.style.display = category === "all" || cardCategory === category ? "block" : "none";
        card.style.transition = "all 0.5s ease";
      });
    });
  });

  // ============================
  // 5. Testimonial Avatar Click
  // ============================
  const avatars = document.querySelectorAll(".testimonial-avatars .avatar");
  const testimonialText = document.querySelector(".testimonial-text");
  const testimonialAuthor = document.querySelector(".testimonial-author");

  const testimonials = [
    { text: `"We've sourced spices and coconut products from FORNIX for years. Their commitment to quality and ethical sourcing gives us complete confidence."`, author: "- CEO, Organic Trade Ltd." },
    { text: `"Outstanding service and product quality! Highly recommend for global trade."`, author: "- Manager, Crane Supplies Inc." },
    { text: `"Reliable, consistent, and professional team. Our trusted partner."`, author: "- Director, Global Export Co." },
    { text: `"Fast delivery and excellent customer support."`, author: "- Head of Operations, Organic World Ltd." },
    { text: `"Products meet the highest international standards."`, author: "- CEO, Premium Trade Ltd." },
    { text: `"We trust them for all our bulk orders and exports."`, author: "- Procurement Head, Export Solutions Inc." }
  ];

  avatars.forEach((avatar, index) => {
    avatar.addEventListener("click", () => {
      avatars.forEach(a => a.classList.remove("active"));
      avatar.classList.add("active");

      testimonialText.style.opacity = 0;
      testimonialAuthor.style.opacity = 0;

      setTimeout(() => {
        testimonialText.textContent = testimonials[index].text;
        testimonialAuthor.textContent = testimonials[index].author;
        testimonialText.style.opacity = 1;
        testimonialAuthor.style.opacity = 1;
      }, 300);
    });
  });

  // ============================
  // 6. Contact Form Submission
  // ============================
  const contactForm = document.querySelector(".contact-form");
  contactForm.addEventListener("submit", e => {
    e.preventDefault();
    alert("Thank you for contacting us! We'll get back to you soon.");
    contactForm.reset();
  });

  // ============================
  // 7. Mobile Navbar Toggle (Optional)
  // ============================
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  if (navToggle) {
    navToggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });
  }

});
ocument.addEventListener("DOMContentLoaded", function() {

  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section');

  // ============================
  // Highlight nav link on scroll
  // ============================
  window.addEventListener('scroll', () => {
    let current = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100; // adjust for navbar height
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

});
</script>