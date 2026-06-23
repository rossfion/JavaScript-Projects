// this version enables the previous question to be closed when the next one is opened
const questions = document.querySelectorAll('.question');

questions.forEach(function (question) {
    const btn = question.querySelector('.question-btn');
    //console.log(btn);
    btn.addEventListener('click', function () {
        // console.log('button clicked')
        // console.log(question)
        questions.forEach(function (item) {
            if (item !== question) {
                item.classList.remove('show-text');
            }
        });
        question.classList.toggle('show-text');
    });
});

// Traversing the DOM
// this one requires the current question to be closed before checking out another question
/*const btns = document.querySelectorAll('.question-btn');

btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const question = e.currentTarget.parentElement.parentElement;
        question.classList.toggle('show-text');
    });
});*/
