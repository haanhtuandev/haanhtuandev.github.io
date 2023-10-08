let navbar_element = document.querySelectorAll('a');
let dark_switch = document.getElementById('darkmode');
let is_dark = 0;


navbar_element.forEach(nav => {
    nav.addEventListener('mouseover', function(){
        nav.style.textDecoration = 'line-through';
    });
    nav.addEventListener('mouseout', function(){
        nav.style.textDecoration = '';
    });

});



function darkmode(){
    if (is_dark % 2 == 0){
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
        document.getElementById('github').src = 'assets/github-logo-dark.png';
        navbar_element.forEach(nav => {
            nav.style.color = 'white';
        });
        dark_switch.innerHTML = '----->light<-----';
    }
    else {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        document.getElementById('github').src = 'assets/github-logo.png';
        navbar_element.forEach(nav => {
            nav.style.color = 'black';
        });
        dark_switch.innerHTML = '----->dark<-----';


    }
}
dark_switch.addEventListener('click', () => {
    darkmode();
    is_dark = is_dark + 1;
});



