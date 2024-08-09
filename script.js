document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.toggle-btn');
    buttons.forEach(button => {
        const listId = button.getAttribute('onclick').match(/'([^']+)'/)[1];
        const list = document.getElementById(listId);

        // Hide all lists by default
        list.style.display = 'none';
        button.textContent = 'Show';

        button.addEventListener('click', () => {
            const isHidden = list.style.display === 'none';
            
            if (isHidden) {
                list.style.display = 'block';
                button.textContent = 'Hide';
            } else {
                list.style.display = 'none';
                button.textContent = 'Show';
            }
        });
    });
});
