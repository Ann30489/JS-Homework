const select = document.getElementsByClassName('c-homework__select');


for (var i = 0 ; i < select.length; i++) {
    select[i].addEventListener('change', (i) => {
        window.open(i.target.value);}) ; 
 }