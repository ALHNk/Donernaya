document.addEventListener('DOMContentLoaded', function(){
    const QUESTIONS = document.querySelectorAll('.question');

    QUESTIONS.forEach(question =>{
        question.addEventListener('click', () =>{
            const ANSWER = question.nextElementSibling;

            if(ANSWER.style.display === "block"){
                ANSWER.style.display = 'none';
            }
            else{
                ANSWER.style.display = 'block';
            }
        });
    });
});

