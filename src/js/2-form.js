'use strict';

const Storage_Key = 'feedback-form-state';
const feedbackForm = document.querySelector('.feedback-form');

//Створюємо ф-цію для вичитування та повернення об"єкту з усією інформацією

function readFormData(feedbackForm){
    const message = feedbackForm.message.value.trim();
    const useremail = feedbackForm.email.value.trim();
    return {
        message,
        useremail
    }
}


//Відстежуємо подію інпут

feedbackForm.addEventListener('input', (event) => {
    event.preventDefault();
    const data = readFormData(event.currentTarget);
    const jsonData = JSON.stringify(data);

    //Збереження введених даних у локальне сховище

    localStorage.setItem(Storage_Key, jsonData);
})
//Перевіряємо сховище при завантаженні сторінки

const rawData = localStorage.getItem(Storage_Key);
if (rawData){
    const data = JSON.parse(rawData);

//Перевіряємо на існування значення
    if (data.useremail &&  data.message) {
        feedbackForm.email.value = data.useremail;
        feedbackForm.message.value = data.message;
    }

}
    
 // Обробляємо події сабміту форми

 feedbackForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // Перевіряємо заповненість обох полів  

    if (feedbackForm.email.value.trim() && feedbackForm.message.value.trim()) {
        
        // Виводимо у  консоль об'єкт з полями email та message

        console.log({
            email: feedbackForm.email.value.trim(),
            message: feedbackForm.message.value.trim(),
    
        });
    }
    // Очищуємо сховище та поля форми
    localStorage.removeItem(Storage_Key);
    feedbackForm.reset()
    
      });

  

