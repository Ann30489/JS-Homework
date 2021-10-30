const button = document.querySelector('button');
const close = document.getElementById('close');
const body = document.body;

// Function to open the modal box
function seeModal() {
    body.style.backgroundColor = 'rgba(12,12,12,0.6)';
    const modal = document.querySelector('.modal');
    modal.classList.add('animation');
    modal.style.display = 'block';
    button.style.display = 'none';
}

button.addEventListener('click', seeModal);

// Function to close modal box
function closeModal() {
    body.style.backgroundColor = '#fff';
    const modal = document.querySelector('.modal');
    modal.style.display = 'none';
    button.style.display = 'block';
}

close.addEventListener('click', closeModal);