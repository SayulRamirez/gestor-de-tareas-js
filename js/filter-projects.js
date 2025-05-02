const buttons = document.querySelectorAll('.button-filter');

buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        // Manejo de la clase 'selected'
        buttons.forEach(b => b.classList.remove('selected'));
        event.target.classList.add('selected');

        // Filtrado de proyectos
        const filterStatus = event.target.id;
        document.querySelectorAll('.project').forEach(project => {
            project.style.display = 
                (filterStatus === 'ALL' || project.dataset.status === filterStatus) ? 
                    'flex' : 'none';
        });
    });
});