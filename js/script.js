const testimonialData = [
  {
    rating: 5,
    review:
      "The UI components are incredibly well-designed and easy to implement. Saved us weeks of development time. The documentation is clear and comprehensive.",
    reviewerName: "Sarah Chen",
    reviewerImage:
      "https://i.ibb.co.com/HDyXSwk/ben-sweet-2-Lowvi-VHZ-E-unsplash.jpg",
    reviewerDesignation: "Lead Developer, TechFlow",
  },
  {
    rating: 4.5,
    review:
      "Great component library with excellent accessibility features. The only minor issue we faced was with mobile responsiveness, but their support team helped us resolve it quickly.",
    reviewerName: "Michael Rodriguez",
    reviewerImage: "https://i.ibb.co.com/KX2TZyk/man.png",
    reviewerDesignation: "Frontend Engineer, DataSync",
  },
  {
    rating: 4,
    review:
      "We've been using this UI library for our startup's dashboard. The components are modern and customizable. Performance is solid, though some advanced features have a slight learning curve.",
    reviewerName: "David Park",
    reviewerImage: "https://i.ibb.co.com/N1GMx7t/profile.jpg",
    reviewerDesignation: "CTO, LaunchMetrics",
  },
  {
    rating: 5,
    review:
      "The best React component library we've used so far. The theming system is powerful, and the components are well-tested. It's become an essential part of our development stack.",
    reviewerName: "Emma Thompson",
    reviewerImage:
      "https://i.ibb.co.com/HDyXSwk/ben-sweet-2-Lowvi-VHZ-E-unsplash.jpg",
    reviewerDesignation: "Senior UI Engineer, BuildScale",
  },
  {
    rating: 4,
    review:
      "Excellent design system that maintains consistency across our applications. The dark mode implementation is particularly impressive. Documentation could be more detailed for edge cases.",
    reviewerName: "Alex Kumar",
    reviewerImage: "https://i.ibb.co.com/KX2TZyk/man.png",
    reviewerDesignation: "UX Director, InnovateLab",
  },
  {
    rating: 5,
    review:
      "Their component library transformed our development workflow. The attention to detail in animations and transitions is outstanding.",
    reviewerName: "Lisa Wang",
    reviewerImage: "https://i.ibb.co.com/N1GMx7t/profile.jpg",
    reviewerDesignation: "Product Manager, TechVision",
  },
  {
    rating: 4.5,
    review:
      "Robust and reliable components that work seamlessly together. The TypeScript support is exceptional.",
    reviewerName: "James Wilson",
    reviewerImage: "https://i.ibb.co.com/KX2TZyk/man.png",
    reviewerDesignation: "Senior Developer, CodeCraft",
  },
  {
    rating: 5,
    review:
      "The accessibility compliance out of the box saved us countless hours. Integration was smooth and documentation is top-notch.",
    reviewerName: "Nina Patel",
    reviewerImage:
      "https://i.ibb.co.com/HDyXSwk/ben-sweet-2-Lowvi-VHZ-E-unsplash.jpg",
    reviewerDesignation: "Accessibility Engineer, WebFlow",
  },
  {
    rating: 4.5,
    review:
      "Performance optimization is clearly a priority. Components load fast and the bundle size is well-optimized.",
    reviewerName: "Marcus Brown",
    reviewerImage: "https://i.ibb.co.com/KX2TZyk/man.png",
    reviewerDesignation: "Performance Lead, SpeedTech",
  },
];

const faqData = [
  {
    question: "What is Sloth UI?",
    answer:
      "Sloth UI is a modern, lightweight component library for building user interfaces. It provides ready-to-use components with a focus on performance and accessibility.",
  },
  {
    question: "Is Sloth UI free to use?",
    answer:
      "Yes, Sloth UI is open-source and free to use in both personal and commercial projects under the MIT license.",
  },
  {
    question: "Do I need to know React to use Sloth UI?",
    answer:
      "No, Sloth UI is framework-agnostic and can be used with plain JavaScript or any front-end framework of your choice.",
  },
  {
    question: "How do I get support?",
    answer:
      "You can get support through our documentation, community forums, and GitHub issues. Premium support is available for enterprise customers.",
  },
  {
    question: "Can I customize the components?",
    answer:
      "Yes, all components are highly customizable through CSS variables and configuration options. You can easily adapt them to match your brand.",
  },
];

const cardContainer = document.getElementById("testimonial-card-container");
const faqContainer = document.getElementById("faq-container");

// Create rating stars
const createRatingStars = (rating) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const stars = [];
  // console.log(stars);

  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      stars.push('<i class="fa-solid fa-star colored"></i>');
    } else if (hasHalfStar && i === fullStars) {
      stars.push('<i class="fa-solid fa-star-half-alt colored"></i>');
    } else {
      stars.push('<i class="fa-regular fa-star"></i>');
    }
  }
  return stars.join("");
};

// Creating testimonial card
const createTestimonialCard = ({
  rating,
  review,
  reviewerDesignation,
  reviewerImage,
  reviewerName,
}) => {
  const div = document.createElement("div");
  div.innerHTML = `
        <div class="testimonial-card">
            <div class="rating">
                ${createRatingStars(rating)}
            </div>
            <p class="review">${review}</p>
            <div class="flex reviewer-details">
                <img 
                    src="${reviewerImage}" 
                    alt="${reviewerName}"
                    loading="lazy"
                />
                <div class="reviewer">
                    <h1>${reviewerName}</h1>
                    <p>${reviewerDesignation}</p>
                </div>
            </div>
        </div>
    `;
  return div;
};

testimonialData.forEach((testimonial) => {
  cardContainer.appendChild(createTestimonialCard(testimonial));
});

// Top Button Funtionality
const scrollToTopButton = document.getElementById("scroll-to-top");

scrollToTopButton.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Creating Faq Item
const createFaqItem = ({ question, answer }) => {
  const div = document.createElement("div");
  div.classList.add("faq-item");
  div.innerHTML = `
          <div class="question flex">
                <div class="flex">
                  <i class="fa-solid fa-circle-question"></i>
                  <h1>${question}</h1>
                </div>
                <button class="arrow-btn">
                  <i class="fa-solid fa-chevron-down"></i>
                </button>
              </div>

              <div class="answer hidden">
                <p>
                 ${answer}
                </p>
          </div>
    `;
  return div;
};

faqData.forEach((faqItem) => {
  faqContainer.appendChild(createFaqItem(faqItem));
});

// Arrow button and Answer Expanding Funcs
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const arrowBtn = item.querySelector(".arrow-btn");
  const arrowIcon = arrowBtn.querySelector("i");
  const answer = item.querySelector(".answer");

  arrowBtn.addEventListener("click", () => {
    arrowIcon.classList.toggle("rotate-arrow-button");
    answer.classList.toggle("hidden");
  });
});
