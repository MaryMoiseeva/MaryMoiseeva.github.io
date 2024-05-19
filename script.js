document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем отправку формы по умолчанию

    var email = document.getElementById('email').value;
    var comment = document.getElementById('comment').value;

    // Проверка вводимых данных
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    if (!email.match(emailPattern) || email === '' || comment === '') {
        console.log('Некорректные данные');
        // Отображение сообщения об ошибке
        alert('Пожалуйста, заполните все обязательные поля корректно.');
        return;
    }

    // Отображение данных в консоль
    console.log('Email:', email);
    console.log('Comment:', comment);

    // Отображение сообщения об успешной обработке
    alert('Данные успешно отправлены!');

    // Очищаем поля формы после отправки
    document.getElementById('email').value = '';
    document.getElementById('comment').value = '';
});
