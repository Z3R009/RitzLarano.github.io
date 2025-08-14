// Editable projects array with multiple images
const projects = [
    {
        title: "Local Pageant Tabulation System",
        description: "Designed a tabulation system to handle event scoring and ticketing efficiently.",
        images: ["project1a.jpg", "project1b.jpg", "project1c.jpg"]
    },
    {
        title: "Water Billing Management System",
        description: "Created a system for managing water consumption, billing, and reporting.",
        images: ["project2a.jpg", "project2b.jpg"]
    },
    {
        title: "FlashLearn: Customizable Flashcards App",
        description: "An interactive learning tool allowing custom flashcard creation and community sharing.",
        images: ["project3a.jpg", "project3b.jpg"]
    }
];

// Render projects dynamically
const projectList = document.getElementById("project-list");
projects.forEach((project, index) => {
    const card = document.createElement("div");
    card.classList.add("project-card");
    card.innerHTML = `
        <img src="${project.images[0]}" alt="${project.title}">
        <div class="project-card-content">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
        </div>
    `;
    card.addEventListener("click", () => openLightbox(index, 0));
    projectList.appendChild(card);
});

// Lightbox functionality
let currentProjectIndex = 0;
let currentImageIndex = 0;

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

function openLightbox(projectIndex, imageIndex) {
    currentProjectIndex = projectIndex;
    currentImageIndex = imageIndex;
    updateLightboxImage();
    lightbox.style.display = "block";
}

function updateLightboxImage() {
    const project = projects[currentProjectIndex];
    lightboxImg.src = project.images[currentImageIndex];
}

function closeLightbox() {
    lightbox.style.display = "none";
}

function showPrevImage() {
    const project = projects[currentProjectIndex];
    currentImageIndex = (currentImageIndex - 1 + project.images.length) % project.images.length;
    updateLightboxImage();
}

function showNextImage() {
    const project = projects[currentProjectIndex];
    currentImageIndex = (currentImageIndex + 1) % project.images.length;
    updateLightboxImage();
}

// Event listeners
closeBtn.addEventListener("click", closeLightbox);
prevBtn.addEventListener("click", showPrevImage);
nextBtn.addEventListener("click", showNextImage);

window.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});
