
const chatText = document.querySelectorAll('.chat__text');
const chatDates = document.querySelectorAll('.chat__date');

// const chatContent = document.querySelectorAll('.chat__content');
// const chatContainer = document.querySelector('.chat__container');

// const chatMessage = document.querySelectorAll('.chat__message');

// let widthChatContainer = chatContainer.offsetWidth;

// console.log(widthChatContainer);

let marginText = 8;
let widthImageAvatar = 40;
// let margin = 8;

// let marginDate = 32;

const createDate = () => {
    chatText.forEach((elem, index) => {

        // let marginDate = elem.offsetWidth + widthImageAvatar + marginText - chatDates[index].offsetWidth;
        let marginDate = widthImageAvatar + 8 + 20 + elem.offsetWidth;
    
        console.log(chatDates[index].offsetWidth);
        // console.log(marginDate)


        // let marginMessage = widthChatContainer - chatContent[index].offsetWidth;
    
        // console.log(chatContent[index].offsetWidth);

        // 305
        
        // chatDates[index].style.marginLeft = `${marginDate}px`;
    
        if (chatDates[index].classList.contains('chat__date-user')) {
            chatDates[index].style.marginLeft = `${marginDate}px`;
        } else {
            chatDates[index].style.marginRight = `${marginDate}px`;
            // chatMessage[index].style.marginLeft = `${marginMessage}px`;
        }
    })
}

// createDate();