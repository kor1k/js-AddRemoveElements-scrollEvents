// const list = document.getElementsByClassName('list')[0];
// // console.log(document.documentElement.parentNode);
// // console.log(document.documentElement.parentElement);
// // console.log(list.childNodes);
// // console.log(list.children);
//
// const listItem = list.children[2];
//
// // console.log(listItem.previousSibling);
// // console.log(listItem.previousElementSibling);
// // console.log(listItem.nextSibling);
// // console.log(listItem.nextElementSibling);
//
// console.log(listItem.closest('.about-us'));
//
// const font = window.getComputedStyle(listItem,null).getPropertyValue('font-size');
// document.addEventListener('click', function (e) {
//      if(e.target.tagName === 'A'){
//          e.preventDefault();
//          if(e.target.closest('li').previousElementSibling){
//              e.target.closest('li').previousElementSibling.style.color = 'red';
//              e.target.closest('li').previousElementSibling.children[0].style.color = 'red';
//          }
//          if(e.target.closest('li').nextElementSibling){
//             e.target.closest('li').nextElementSibling.style.fontSize = `${parseInt(font)+2}px`;
//          }
//      }
// });
//
// function makeActive(event) {
//     console.log(event.currentTarget);
// }


document.addEventListener('scroll', function (e) {
    const scroll = document.documentElement.scrollTop;
    if (scroll > 100) {
        document.getElementsByClassName('header')[0].classList.add('fixed');
    } else {
        document.getElementsByClassName('header')[0].classList.remove('fixed');
    }
});
