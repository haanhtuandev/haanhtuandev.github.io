let navbar_element = document.querySelectorAll('a');

navbar_element.forEach(nav => {
    nav.addEventListener('mouseover', function(){
        nav.style.textDecoration = 'underline';
    });

    nav.addEventListener('mouseout', function(){
        nav.style.textDecoration = '';
    });

});
