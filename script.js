document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.toggle-btn');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const listId = button.getAttribute('onclick').match(/'([^']+)'/)[1];
            const list = document.getElementById(listId);
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
