document.addEventListener('DOMContentLoaded', function() {
    const roses = document.querySelectorAll('.rose');
    const modal = document.getElementById('myModal');
    const modalContent = document.querySelector('.modal-content');
    const closeBtn = document.getElementsByClassName('close')[0];

    roses.forEach(rose => rose.addEventListener('click', function() {
        modal.style.display = 'block';
    }));

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});