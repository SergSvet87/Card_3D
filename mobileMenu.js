/*--------------------------------- 
Menu Mobile 
-----------------------------*/

const mobileMenu = () => {

  const menuButton = document.querySelector('.header__menu-mobile');
  const body = document.querySelector('body');

  menuButton.addEventListener('click', (e) => {

    toggleMenu();

  });

  function toggleMenu() {

    menuButton.classList.toggle('mobile-menu_active');

    if (menuButton.classList.contains('mobile-menu_active')) {

      body.style.overflow = 'hidden';

    } else {

      body.style.overflow = 'visible';
      
    }
  }
}

export default mobileMenu;

// const mobileMenu = () => {
//   const menuButton = document.querySelector('.header__menu-mobile');
//   const body = document.querySelector('body');
//   // const menuClose = menuButton.querySelector('.mobile-menu__close');

//   menuButton.addEventListener('click', (e) => {
//     toggleMenu();
//   });
  
//   // menuClose.addEventListener('click', () => {
//   //   menuButton.classList.remove('mobile-menu_active');
//   //   console.log('click');
//   // });

//   function toggleMenu() {
//     menuButton.classList.toggle('mobile-menu_active');

//     if (menuButton.classList.contains('mobile-menu_active')) {
//       body.style.overflow = 'hidden';
//     } else {
//       body.style.overflow = 'visible';
//     }
//   }
// }

// mobileMenu();