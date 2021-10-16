const select = document.getElementById('js-select');

select.addEventListener('change', (e) => {
    window.open(e.target.value);
})