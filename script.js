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
});