const hamburger = document.querySelector('.hamburger');
const ul = document.getElementsByTagName('ul');
const header = document.getElementsByTagName('header');
const cross = document.getElementsByClassName("none")

hamburger.addEventListener('click',clickFunction);
cross[0].addEventListener('click',closebtn)

function clickFunction() {
    ul[0].classList.add('show');
    header[0].classList.add('show_me')
    hamburger.classList.add('hamburger_hide');
    cross[0].classList.add('cross');
}
function closebtn() {
    ul[0].classList.remove('show')
    header[0].classList.remove('show_me')
    hamburger.classList.remove('hamburger_hide');
    cross[0].classList.remove('cross');

}