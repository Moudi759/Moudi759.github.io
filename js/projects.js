// ============================================
// Projects Page JavaScript
// ============================================

const projectModal = document.getElementById('projectModal');
const modalClose = document.getElementById('modalClose');
const modalBody = document.getElementById('modalBody');
const viewButtons = document.querySelectorAll('.btn-view-project, .btn-read-more');

// Project data
const projects = {
    ems: {
        title: 'EMS — Employee Management System',
        date: 'July 2025 – September 2025',
        description: `A comprehensive hybrid system that combines ESP32/ESP32-CAM microcontrollers with advanced biometric recognition technologies. The system integrates fingerprint and face recognition capabilities with a cloud-backed mobile application using Firebase, providing a complete solution for employee management and attendance tracking.`,
        features: [
            'Secure check-in/out using fingerprint and face recognition',
            'Real-time attendance logs and monitoring',
            'Cloud-based data storage with Firebase',
            'Mobile app for employees and administrators',
            'Leave request and approval system',
            'Push notifications for important updates',
            'ESP32-CAM integration for face recognition',
            'Scalable architecture for multiple locations'
        ],
        technologies: ['ESP32', 'ESP32-CAM', 'Firebase', 'IoT', 'Mobile App', 'Fingerprint Recognition', 'Face Recognition', 'Cloud Computing'],
        image: 'assets/projects/ems.jpg'
    }
};

// Open modal function
function openProjectModal(projectId) {
    const project = projects[projectId];
    if (!project) return;

    modalBody.innerHTML = `
        <div class="modal-project-image">
            <svg width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="1">
                <rect x="10" y="10" width="80" height="60" rx="4"></rect>
                <circle cx="30" cy="30" r="8"></circle>
                <rect x="45" y="25" width="35" height="4" rx="2"></rect>
                <rect x="45" y="35" width="25" height="4" rx="2"></rect>
            </svg>
        </div>
        <div class="modal-project-date">${project.date}</div>
        <h2 class="modal-project-title">${project.title}</h2>
        <div class="modal-project-description">
            ${project.description}
        </div>
        <div class="modal-project-features">
            <h4>Key Features</h4>
            <ul>
                ${project.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
        </div>
        <div class="project-tech">
            ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
        </div>
    `;

    projectModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close modal function
function closeProjectModal() {
    projectModal.classList.remove('active');
    document.body.style.overflow = '';
}

// Event listeners
viewButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const projectId = button.getAttribute('data-project');
        if (projectId) {
            openProjectModal(projectId);
        }
    });
});

if (modalClose) {
    modalClose.addEventListener('click', closeProjectModal);
}

if (projectModal) {
    projectModal.addEventListener('click', (e) => {
        if (e.target === projectModal || e.target.classList.contains('modal-overlay')) {
            closeProjectModal();
        }
    });
}

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && projectModal.classList.contains('active')) {
        closeProjectModal();
    }
});

// Scroll to project if hash is present
window.addEventListener('load', () => {
    if (window.location.hash) {
        const projectId = window.location.hash.substring(1);
        const projectElement = document.getElementById(projectId);
        if (projectElement) {
            setTimeout(() => {
                projectElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        }
    }
});

