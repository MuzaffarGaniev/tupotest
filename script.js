const buttonYes = document.querySelector('.button_yes'),
    buttonNo = document.querySelector('.button_no'),
    title = document.querySelector('.title')    

buttonYes.addEventListener('click', () => {
    title.textContent = 'Ха - ха - ха я так и знал!'
})

buttonNo.addEventListener('click', () => {
    buttonNo.style.display = 'none'
    title.textContent = 'Ответ неверный!'
    setTimeout(() => {
        title.textContent = 'Ты дурак?'
    }, 2000);
})
