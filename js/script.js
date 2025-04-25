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

const cardContainer = document.getElementById("testimonial-card-container");

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
