/*1er menu
var btn = document.querySelector('.toggle_btn');
var nav = document.querySelector('.nav');

btn.onclick = function(){
  nav.classList.toggle('nav_open');
}
*/
// 2eme menu
// var btn = document.querySelector('.toggle_btn');
// var nav = document.querySelector('.aftermenu');
//
// btn.onclick = function(){
//   nav.classList.toggle('aftermenu_open');
//   span.style.color = red;
// }
const burger = document.querySelector('.burger');
var nav = document.querySelector('.aftermenu');
var nav1 = document.querySelector('.aftermenu1');
//var hover = getComputedStyle(document.querySelector('.burger span'),':before');
var hover = document.querySelector('data-before');
burger.addEventListener('mouseover', () => {
// alert('ca passe');
  //burger.classList.toggle('start');
   hover.style.top= 10+'px';
//hover.style.backgroundColor = 'Green';
});

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  nav.classList.toggle('aftermenu_open');
  nav1.classList.toggle('aftermenu1_open');
});
