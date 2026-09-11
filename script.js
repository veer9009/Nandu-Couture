// Nandini's WhatsApp number with India country code.
// Example for India: "919876543210"
const WHATSAPP_NUMBER = "917019528608";

const designs = [
  {
    name: "Royal Bridal Lehenga",
    category: "bridal",
    categoryText: "Bridal",
    fabric: "Silk blend with embroidery",
    description: "A graceful bridal lehenga concept with rich color, soft volume and refined festive detailing.",
    highlights: ["Statement bridal silhouette", "Gold accent embroidery", "Custom blouse and dupatta styling"],
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Classic Indian Saree",
    category: "traditional",
    categoryText: "Traditional",
    fabric: "Silk with contrast border",
    description: "A timeless Indian saree styling idea for weddings, festivals and elegant family occasions.",
    highlights: ["Classic saree drape", "Traditional blouse pairing", "Elegant festive finish"],
    image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Designer Blouse",
    category: "blouse",
    categoryText: "Blouse Designs",
    fabric: "Raw silk with hand-finished details",
    description: "A custom blouse concept designed to elevate sarees and lehengas with a polished fit.",
    highlights: ["Custom neckline", "Sleeve detailing", "Tailored occasion fit"],
    image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Karnataka Ilkal Saree",
    category: "karnataka",
    categoryText: "Karnataka Sarees",
    fabric: "Handloom cotton silk with traditional border",
    description: "A Karnataka-inspired Ilkal saree look with a graceful local dress feel and rich border detailing.",
    highlights: ["Ilkal-inspired styling", "Traditional Karnataka border", "Simple boutique blouse pairing"],
    image: "https://images.unsplash.com/photo-1633100533867-2ec15e9a3e1f?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "South Indian Bridal Saree",
    category: "south-indian",
    categoryText: "South Indian",
    fabric: "Silk saree with gold-toned traditional detailing",
    description: "A South Indian bridal saree concept with temple-inspired jewelry styling and a rich festive presence.",
    highlights: ["South Indian bridal styling", "Silk saree elegance", "Traditional jewelry-ready look"],
    image: "https://images.unsplash.com/photo-1551854716-8b811be39e7e?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Mysore Silk Saree Look",
    category: "custom",
    categoryText: "Custom Designs",
    fabric: "Silk with refined gold border accents",
    description: "A custom saree styling concept inspired by Karnataka elegance, Mysore silk richness and occasion-ready finishing.",
    highlights: ["Karnataka-inspired color story", "Premium silk saree direction", "Custom blouse styling"],
    image: "https://images.unsplash.com/photo-1614940685083-c5409b57da6e?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Fashion Concept Sketch",
    category: "sketches",
    categoryText: "Fashion Sketches",
    fabric: "Illustration concept",
    description: "A visual design study used to plan silhouette, detail placement and final styling.",
    highlights: ["Original concept direction", "Color and trim notes", "Pre-production planning"],
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=900&q=80"
  }
];

const designGrid = document.querySelector("#designGrid");
const filterButtons = document.querySelectorAll(".filter-button");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const modal = document.querySelector("#designModal");
const lightbox = document.querySelector("#lightbox");

function createWhatsAppLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function renderDesigns(filter = "all") {
  const filteredDesigns = filter === "all" ? designs : designs.filter((design) => design.category === filter);

  designGrid.innerHTML = filteredDesigns.map((design, index) => `
    <article class="design-card section-reveal visible">
      <div class="design-image">
        <!-- Replace this placeholder with a real ${design.name} photo. -->
        <img src="${design.image}" alt="${design.name}">
      </div>
      <div class="design-content">
        <span class="category-label">${design.categoryText}</span>
        <h3>${design.name}</h3>
        <p>${design.description}</p>
        <button class="button primary-button view-design-button" type="button" data-design-index="${designs.indexOf(design)}">View Design</button>
      </div>
    </article>
  `).join("");

  if (!filteredDesigns.length) {
    designGrid.innerHTML = "<p class='empty-message'>No designs found in this category yet.</p>";
  }
}

function openDesignModal(design) {
  document.querySelector("#modalImage").src = design.image;
  document.querySelector("#modalImage").alt = design.name;
  document.querySelector("#modalCategory").textContent = design.categoryText;
  document.querySelector("#modalTitle").textContent = design.name;
  document.querySelector("#modalFabric").textContent = design.fabric;
  document.querySelector("#modalDescription").textContent = design.description;
  document.querySelector("#modalHighlights").innerHTML = design.highlights.map((item) => `<li>${item}</li>`).join("");
  document.querySelector("#modalWhatsApp").href = createWhatsAppLink(`Hello Nandini, I am interested in a similar design: ${design.name}.`);

  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeDesignModal() {
  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function openLightbox(image) {
  const lightboxImage = lightbox.querySelector("img");
  lightboxImage.src = image.src;
  lightboxImage.alt = image.alt;
  lightbox.classList.add("active");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightbox.classList.remove("active");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderDesigns(button.dataset.filter);
  });
});

designGrid.addEventListener("click", (event) => {
  const button = event.target.closest(".view-design-button");
  if (!button) return;
  openDesignModal(designs[Number(button.dataset.designIndex)]);
});

document.querySelectorAll("[data-close-modal]").forEach((button) => {
  button.addEventListener("click", closeDesignModal);
});

document.querySelectorAll(".gallery-item").forEach((item) => {
  item.addEventListener("click", () => openLightbox(item.querySelector("img")));
});

document.querySelector(".lightbox-close").addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) closeLightbox();
});

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

document.querySelector("#floatingWhatsApp").href = createWhatsAppLink("Hello Nandini, I would like to know more about Nandu Couture.");

document.querySelector("#enquiryForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const form = event.currentTarget;
  const status = document.querySelector("#formStatus");

  if (!form.checkValidity()) {
    status.textContent = "Please fill in all enquiry details correctly.";
    form.reportValidity();
    return;
  }

  const formData = new FormData(form);
  const message = [
    "Hello Nandini, I would like to send a couture enquiry.",
    "",
    `Name: ${formData.get("name")}`,
    `Phone: ${formData.get("phone")}`,
    `Email: ${formData.get("email")}`,
    `Occasion: ${formData.get("occasion")}`,
    `Dress Type: ${formData.get("dressType")}`,
    `Budget Range: ${formData.get("budget")}`,
    `Event Date: ${formData.get("eventDate")}`,
    `Message: ${formData.get("message")}`
  ].join("\n");

  status.textContent = "Opening WhatsApp with your enquiry...";
  window.open(createWhatsAppLink(message), "_blank", "noopener");
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".section-reveal").forEach((section) => {
  revealObserver.observe(section);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeDesignModal();
    closeLightbox();
  }
});

renderDesigns();
