const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1= document.getElementById('nav-1');
const nav2= document.getElementById('nav-2');
const nav3= document.getElementById('nav-3');
const nav4= document.getElementById('nav-4');
const nav5= document.getElementById('nav-5');
const navItems = [nav1,nav2,nav3,nav4,nav5]

// control navigation aniamtion
function navAnimation(direction1,direction2) {
    navItems.forEach((nav, i) => {
        nav.classList.replace(`slide-${direction1}-${i+1}`, `slide-${direction2}-${i+1}`);
    });
}



function toggleNav() {
// Toggle: Menu bars Open/Closed

    menuBars.classList.toggle('change');  /*add and remove (alternatevaly) the change class (we don't have it for the first time in html) */
    //  toggle: menu active
    overlay.classList.toggle('overlay-active');
    if (overlay.classList.contains('overlay-active')) {
        // animate in - overlay
        overlay.classList.replace('overlay-slide-left','overlay-slide-right'); /*the 1st parameter is the thing we want to remove and the second is the one we wanna add*/ 
        // animate in -nav items
        navAnimation('out','in');

    }else{
        overlay.classList.replace('overlay-slide-right','overlay-slide-left');
          // animate out -nav items
          navAnimation('in','out');
    } 
}




// Evenet listeners
menuBars.addEventListener('click',toggleNav);  /* when we click on the menu bar the sandwich transforms to an X */
navItems.forEach((nav)=>{
    nav.addEventListener('click', toggleNav);
});