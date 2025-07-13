document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Expandable work item functionality
    document.querySelectorAll('.work-item-expandable').forEach(item => {
        item.addEventListener('click', function() {
            const targetId = this.dataset.target;
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Hide all other expanded content sections
                document.querySelectorAll('.expanded-content').forEach(content => {
                    if (content.id !== targetElement.id) {
                        content.style.display = 'none';
                    }
                });

                // Toggle display of the clicked section
                if (targetElement.style.display === 'block') {
                    targetElement.style.display = 'none';
                } else {
                    targetElement.style.display = 'block';
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Close expanded content button
    document.querySelectorAll('.close-expanded-content').forEach(button => {
        button.addEventListener('click', function() {
            this.closest('.expanded-content').style.display = 'none';
        });
    });

    // Image Modal Functionality
    const modal = document.createElement('div');
    modal.id = 'imageModal';
    modal.classList.add('image-modal');
    document.body.appendChild(modal);

    const modalContent = document.createElement('img');
    modalContent.classList.add('image-modal-content');
    modal.appendChild(modalContent);

    const closeModal = document.createElement('span');
    closeModal.classList.add('close-modal');
    closeModal.innerHTML = '&times;';
    modal.appendChild(closeModal);

    document.querySelectorAll('.gallery-thumbnail').forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            modal.style.display = 'block';
            modalContent.src = this.src;
        });
    });

    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});
