document.addEventListener('DOMContentLoaded', () => {
    // Work page filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    const workItems = document.querySelectorAll('.work-item');

    if (filterButtons.length > 0 && workItems.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Deactivate all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Activate the clicked button
                button.classList.add('active');

                const filter = button.dataset.filter;

                workItems.forEach(item => {
                    if (filter === 'all' || item.dataset.category === filter) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }
});
