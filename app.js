const bookmark = document.querySelector('.bmk');
const modalsuccess = document.querySelector('.modalsuccess');
const reward_1 = document.querySelector('.reward1');
const gotit = document.querySelector('.btngot');
const ham = document.querySelector('.hamburger');
const nav = document.querySelector('nav');


bookmark.onclick =()=>{
    bookmark.textContent = 'Bookmarked';
}

reward_1.addEventListener('click', ()=>{
    modalsuccess.style.display = 'flex';
})

gotit.addEventListener('click', ()=>{
    modalsuccess.style.display = 'none';
})
ham.onclick =()=>{
    nav.style.display = 'block';
}