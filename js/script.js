const navbar_btt = document.getElementsByClassName("nav_btt")[0];

const navbar_link = document.getElementsByClassName("menu")[0];
const navbar = document.getElementsByClassName("topnav")[0];

function toggle_menu(event){ 
     if(event.type == 'touchstart'){ event. preventDefault(); }

     navbar_link.classList.toggle('active');
     navbar.classList.toggle('active');
}

navbar_btt.addEventListener('click', toggle_menu);
navbar_btt.addEventListener('touchstart', toggle_menu);