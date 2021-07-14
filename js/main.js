// Magic strings
const classBurger = '.burger';
const classChatList = '.chat-list';
const classList = '.chat';
const classSideBar = '.sidebar';
const classShadowed = '.shadowed';
const classbackground = '.backg';
const classBurgerRotate = 'burger__rotate';
const classChatListActive = 'chat-list__active';
const classSidebarActive = 'sidebar__active';
const displayNone = 'none';
const displayBlock = 'block';

// Variables
const burger = document.querySelector(classBurger);
const chatList = document.querySelector(classChatList);
const chat = document.querySelector(classList);
const sidebar = document.querySelector(classSideBar);
const shadowed = document.querySelector(classShadowed);
const backg = document.querySelector(classbackground);

// Functions
const showBurger = () => {
    burger.classList.add(classBurgerRotate);
    chatList.classList.add(classChatListActive);
    sidebar.classList.add(classSidebarActive);
    shadowed.style.display = displayBlock;
    backg.style.display = displayBlock;
}

const hideBurger = () => {
    burger.classList.remove(classBurgerRotate);
    chatList.classList.remove(classChatListActive);
    sidebar.classList.remove(classSidebarActive);
    shadowed.style.display = displayNone;
    backg.style.display = displayNone;
}

// Events
burger.addEventListener('click', () => {
    showBurger();
});

backg.addEventListener('click', () => {
    hideBurger();
});