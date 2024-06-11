document.getElementById('questionForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const questionInput = document.getElementById('question');
    const questionText = questionInput.value.trim();
    
    if (questionText !== '') {
        const questionList = document.getElementById('questionsList');
        const newQuestion = document.createElement('li');
        newQuestion.textContent = questionText;
        
        questionList.appendChild(newQuestion);
        questionInput.value = '';
    }
});
