// Правильные ответы (замените на свои)
const correctAnswers = {
    q1: 'a',
    q2: 'b',
    q3: 'c',
    q4: 'd',
    q5: 'a',
    q6: 'b',
    q7: 'c',
    q8: 'd',
    q9: 'a',
    q10: 'b'
};

// Обработчик нажатия кнопки
document.getElementById('submit-btn').addEventListener('click', function() {
    let score = 0;
    const totalQuestions = 10;

    // Проверка каждого вопроса
    for (let i = 1; i <= totalQuestions; i++) {
        const questionName = 'q' + i;
        const selectedOption = document.querySelector(`input[name="${questionName}"]:checked`);

        if (selectedOption) {
            if (selectedOption.value === correctAnswers[questionName]) {
                score++;
            }
        }
    }

    // Показ результата
    const resultElement = document.getElementById('result');
    resultElement.textContent = `Ваш результат: ${score} из ${totalQuestions}`;
    resultElement.style.display = 'block';

    // Прокрутка к результату
    resultElement.scrollIntoView({ behavior: 'smooth' });
});
