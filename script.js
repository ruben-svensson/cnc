let currentQuiz = 0;
let currentQuestion = 0;
let score = 0;
let userAnswers = [];
let answered = false;
let questionOrder = [];
let currentAnswerOrder = [];

// Add new state variables
let startTime;
let timerInterval;
let questionTimes = [];

// Add new state variables
let fontSize = 16;
let confidenceLevel = 0;
let touchStartX = 0;

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function initializeQuiz() {
    currentQuestion = 0;
    score = 0;
    answered = false;
    userAnswers = new Array(quizes[currentQuiz].questions.length).fill(null);
    startTime = new Date();
    questionTimes = [];
    incorrectAnswerCount = 0; // Reset incorrect answers
    
    // Remove any existing quote bubbles
    const quoteBubbles = document.querySelectorAll('.quote-bubble');
    quoteBubbles.forEach(bubble => bubble.remove());

    // Provide source material for the quiz as a download link
    // The div #pdf should contain a link to the PDF file
    const pdfLink = document.getElementById('pdf');
    // quizes[currentQuiz].source can be null, so we need to check for that 
    if (quizes[currentQuiz].source) {
        // Insert an anchor tag with the source link
        pdfLink.innerHTML = `<a href="${quizes[currentQuiz].source}" target="_blank">Klicka här för att ladda ner källmaterialet</a><div>${quizes[currentQuiz].source.replace("./pdf/", "")}</div>`;

    } else {
        pdfLink.textContent = '';
    }
    
    
    updateQuiz();
    updateProgress();
    updateQuestionOverview();
    startTimer();
}

// Initialize new features
function initializeAccessibility() {
    document.getElementById('high-contrast').addEventListener('click', toggleHighContrast);
    document.getElementById('font-increase').addEventListener('click', () => changeFontSize(1));
    document.getElementById('font-decrease').addEventListener('click', () => changeFontSize(-1));
    document.getElementById('fullscreen').addEventListener('click', toggleFullscreen);
    
    // Initialize touch events
    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchmove', handleTouchMove);
}

// Create pairs of answers and their original indices
function createAnswerPairs(answers) {
    return answers.map((answer, index) => ({ answer, originalIndex: index }));
}

function updateQuiz() {
    const question = quizes[currentQuiz].questions[currentQuestion];
    answered = false;
    
    // Update question
    document.getElementById('question-text').textContent = question.question;
    
    // Hide feedback
    const feedback = document.getElementById('feedback');
    feedback.classList.add('d-none');
    
    // Create and shuffle answer pairs
    const answerPairs = createAnswerPairs(question.answers);
    currentAnswerOrder = shuffleArray([...answerPairs]);
    
    // Update answers
    const answersContainer = document.getElementById('answers-container');
    answersContainer.innerHTML = '';
    
    currentAnswerOrder.forEach((pair, displayIndex) => {
        const button = document.createElement('button');
        button.className = 'btn btn-outline-primary answer-btn';
        button.textContent = pair.answer.text;
        
        if (userAnswers[currentQuestion] === pair.originalIndex) {
            button.classList.add('selected');
            answered = true; // Set answered to true if we have a previous answer
            if (answered) {
                if (pair.originalIndex === question.correctAnswer) {
                    button.classList.add('correct');
                } else {
                    button.classList.add('incorrect');
                }
            }
        }
        
        button.addEventListener('click', () => selectAnswer(pair.originalIndex));
        answersContainer.appendChild(button);
    });

    updateProgress();
    updateQuestionOverview();

    // Update navigation buttons
    document.getElementById('prev-btn').disabled = currentQuestion === 0 || !userAnswers[currentQuestion - 1];
    document.getElementById('next-btn').disabled = !answered;
    document.getElementById('next-btn').textContent = 
        currentQuestion === quizes[currentQuiz].questions.length - 1 ? 'Avsluta' : 'Nästa';

    // Add transition animation
    const questionText = document.getElementById('question-text');
    questionText.classList.add('question-transition');
    
    // Add keyboard shortcuts hints
    answersContainer.querySelectorAll('.answer-btn').forEach((btn, i) => {
        btn.innerHTML += `<span class="keyboard-shortcuts">${i + 1}</span>`;
    });
    
    // Reset confidence meter
    confidenceLevel = 0;
    document.querySelector('.confidence-meter').classList.add('d-none');
    document.querySelector('.related-topics').classList.add('d-none');
}

function selectAnswer(originalIndex) {
    if (answered) return;
    
    const question = quizes[currentQuiz].questions[currentQuestion];
    userAnswers[currentQuestion] = originalIndex;
    answered = true;

    // Show feedback
    const feedback = document.getElementById('feedback');
    feedback.classList.remove('d-none');
    
    if (originalIndex === question.correctAnswer) {
        feedback.innerHTML = `
            <div class="feedback-header">
                <div class="feedback-icon">
                    <i class="fas fa-check"></i>
                </div>
                <strong>Rätt svar!</strong>
            </div>
            <div class="feedback-body">
                <div class="feedback-reasoning">
                    <div class="reasoning-title">${question.shortReasoning}</div>
                    <div class="feedback-explanation">${question.longReasoning}</div>
                </div>
            </div>
        `;
        feedback.classList.add('correct');
        feedback.classList.remove('incorrect');
        score++;
    } else {
        incorrectAnswerCount++; // Increment wrong answer count
        
        const correctAnswerText = currentAnswerOrder.find(pair => pair.originalIndex === question.correctAnswer).answer.text;
        const incorrectAnswer = question.answers.find((answer, index) => index === originalIndex);
        const incorrectReasoning = incorrectAnswer.incorrectReasoning ? 
            `<div class="feedback-reasoning">
                <div class="reasoning-title">Varför var ditt svar fel?</div>
                <div class="feedback-explanation">${incorrectAnswer.incorrectReasoning}</div>
            </div>` : '';

        feedback.innerHTML = `
            <div class="feedback-header">
                <div class="feedback-icon">
                    <i class="fas fa-times"></i>
                </div>
                <strong>Fel svar. Rätt svar var: ${correctAnswerText}</strong>
            </div>
            <div class="feedback-body">
                ${incorrectReasoning}
                <div class="feedback-reasoning">
                    <div class="reasoning-title">${question.shortReasoning}</div>
                    <div class="feedback-explanation">${question.longReasoning}</div>
                </div>
            </div>
        `;
        feedback.classList.add('incorrect');
        feedback.classList.remove('correct');
        
    }

    // Update answer buttons
    const buttons = document.querySelectorAll('.answer-btn');
    currentAnswerOrder.forEach((pair, index) => {
        if (pair.originalIndex === question.correctAnswer) {
            buttons[index].classList.add('correct');
        } else if (pair.originalIndex === originalIndex) {
            buttons[index].classList.add('incorrect');
        }
    });

    // Enable next button after answering
    document.getElementById('next-btn').disabled = false;

    questionTimes.push(new Date() - startTime);
    updateQuestionOverview();
}

function showResults() {
    document.getElementById('quiz-container').querySelector('.card').classList.add('d-none');
    document.querySelector('.d-flex').classList.add('d-none');
    document.getElementById('results').classList.remove('d-none');
    
    const percentage = Math.round((score / quizes[currentQuiz].questions.length) * 100);
    document.getElementById('score').textContent = 
        `${score} av ${quizes[currentQuiz].questions.length} (${percentage}%)`;

    clearInterval(timerInterval);
    const totalTime = new Date() - startTime;
    const avgTime = questionTimes.reduce((a, b) => a + b, 0) / questionTimes.length;
    
    document.getElementById('total-time').textContent = 
        `${Math.floor(totalTime/60000)}:${Math.floor((totalTime%60000)/1000).toString().padStart(2, '0')}`;
    document.getElementById('avg-time').textContent = 
        `${Math.floor(avgTime/60000)}:${Math.floor((avgTime%60000)/1000).toString().padStart(2, '0')}`;
        
    const correctCount = userAnswers.filter((answer, i) => 
        answer === quizes[currentQuiz].questions[i].correctAnswer).length;
    const total = quizes[currentQuiz].questions.length;
    
    // Use more specific selectors for the results progress bars
    document.querySelector('#results #correct-progress').style.width = 
        `${(correctCount/total)*100}%`;
    document.querySelector('#results #incorrect-progress').style.width = 
        `${((userAnswers.filter(a => a !== null).length-correctCount)/total)*100}%`;
}

function updateProgress() {
    const totalQuestions = quizes[currentQuiz].questions.length;
    document.getElementById('current-question').textContent = currentQuestion + 1;
    document.getElementById('total-questions').textContent = totalQuestions;
    const progress = ((currentQuestion + 1) / totalQuestions) * 100;
    
    // Update the main progress bar
    document.querySelector('#quiz-progress .progress-bar').style.width = `${progress}%`;
    
    // Update sidebar progress bars as well
    const answeredCount = userAnswers.filter(answer => answer !== null).length;
    const correctCount = userAnswers.filter((answer, i) => 
        answer === quizes[currentQuiz].questions[i].correctAnswer).length;
    const incorrectCount = answeredCount - correctCount;
    
    document.querySelector('.sidebar-results #correct-progress').style.width = 
        `${(correctCount/totalQuestions)*100}%`;
    document.querySelector('.sidebar-results #incorrect-progress').style.width = 
        `${(incorrectCount/totalQuestions)*100}%`;
}

function startTimer() {
    clearInterval(timerInterval);
    startTime = new Date();
    timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    const now = new Date();
    const diff = Math.floor((now - startTime) / 1000);
    const minutes = Math.floor(diff / 60).toString().padStart(2, '0');
    const seconds = (diff % 60).toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
    
    // Update sidebar time
    const sidebarTime = document.getElementById('sidebar-time');
    if (sidebarTime) {
        sidebarTime.textContent = `${minutes}:${seconds}`;
    }
    
    // Update average time if we have answers
    if (questionTimes.length > 0) {
        const avgTime = questionTimes.reduce((a, b) => a + b, 0) / questionTimes.length;
        const avgMinutes = Math.floor(avgTime/60000);
        const avgSeconds = Math.floor((avgTime%60000)/1000);
        const sidebarAvgTime = document.getElementById('sidebar-avg-time');
        if (sidebarAvgTime) {
            sidebarAvgTime.textContent = `${avgMinutes}:${avgSeconds.toString().padStart(2, '0')}`;
        }
    }
    
    // We'll let updateProgress handle the progress bars instead of duplicating code here
    updateProgress();
}

function updateQuestionOverview() {
    const overview = document.getElementById('question-overview');
    overview.innerHTML = '';
    
    for (let i = 0; i < quizes[currentQuiz].questions.length; i++) {
        const dot = document.createElement('div');
        dot.className = 'question-dot';
        dot.textContent = i + 1;
        
        // Check if this dot should be disabled
        const canAccess = i === 0 || userAnswers[i - 1] !== null;
        
        if (!canAccess) {
            dot.classList.add('disabled');
        }
        
        if (i === currentQuestion) {
            dot.classList.add('current');
        }
        
        if (userAnswers[i] !== null) {
            dot.classList.add('answered');
            if (userAnswers[i] === quizes[currentQuiz].questions[i].correctAnswer) {
                dot.classList.add('correct');
            } else {
                dot.classList.add('incorrect');
            }
        }
        
        dot.addEventListener('click', () => {
            // Only allow navigation if the dot isn't disabled
            if (canAccess) {
                currentQuestion = i;
                updateQuiz();
            }
        });
        
        overview.appendChild(dot);
    }
}

// Event Listeners
document.getElementById('quiz-selector').addEventListener('change', (e) => {
    currentQuiz = parseInt(e.target.value);
    document.getElementById('total-questions').textContent = quizes[currentQuiz].questions.length;
    initializeQuiz();
});

document.getElementById('prev-btn').addEventListener('click', () => {
    if (currentQuestion > 0) {
        currentQuestion--;
        updateQuiz();
    }
});

document.getElementById('next-btn').addEventListener('click', () => {
    if (currentQuestion < quizes[currentQuiz].questions.length - 1) {
        currentQuestion++;
        updateQuiz();
    } else {
        showResults();
    }
});

document.getElementById('show-answers').addEventListener('click', () => {
    document.getElementById('results').classList.add('d-none');
    document.getElementById('quiz-container').querySelector('.card').classList.remove('d-none');
    document.querySelector('.d-flex').classList.remove('d-none');
    currentQuestion = 0;
    updateQuiz();
});

document.getElementById('restart-btn').addEventListener('click', () => {
    document.getElementById('results').classList.add('d-none');
    document.getElementById('quiz-container').querySelector('.card').classList.remove('d-none');
    document.querySelector('.d-flex').classList.remove('d-none');
    initializeQuiz();
});

// Make sure total questions is set on initial load
window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('total-questions').textContent = quizes[currentQuiz].questions.length;
    initializeQuiz();
    initializeAccessibility();
});

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        document.getElementById('prev-btn').click();
    } else if (e.key === 'ArrowRight') {
        document.getElementById('next-btn').click();
    } else if (e.key === 'Enter' || e.key === ' ') {
        if (!answered) {
            const buttons = document.querySelectorAll('.answer-btn');
            buttons[0].click();
        }
    } else if (e.key >= '1' && e.key <= '9') {
        const index = parseInt(e.key) - 1;
        const buttons = document.querySelectorAll('.answer-btn');
        if (buttons[index]) buttons[index].click();
    }
});

// Add dark mode toggle
document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const icon = document.querySelector('#theme-toggle i');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
});

// Add confidence meter handling
function showConfidenceMeter() {
    document.querySelector('.confidence-meter').classList.remove('d-none');
}

// Add related topics
function showRelatedTopics() {
    const topicsDiv = document.querySelector('.related-topics');
    const currentQuestion = quizes[currentQuiz].questions[currentQuestion];
    
    if (currentQuestion.relatedTopics) {
        const links = currentQuestion.relatedTopics
            .map(topic => `<a href="#" class="me-2">${topic}</a>`)
            .join('');
        topicsDiv.querySelector('.links').innerHTML = links;
        topicsDiv.classList.remove('d-none');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Load saved quiz selection from localStorage
    const savedQuizIndex = localStorage.getItem('selectedQuizIndex');
    if (savedQuizIndex !== null) {
        document.getElementById('quiz-selector').value = savedQuizIndex;
    }
    
    // Load the selected quiz (either default or from localStorage)
    loadSelectedQuiz();
    
    // Event listener for quiz selection change
    document.getElementById('quiz-selector').addEventListener('change', function() {
        // Save selected quiz index to localStorage
        localStorage.setItem('selectedQuizIndex', this.value);
        loadSelectedQuiz();
    });
    
    // Function to load the selected quiz
    function loadSelectedQuiz() {
        const quizIndex = parseInt(document.getElementById('quiz-selector').value);
        // Load quiz logic here (this should already exist in your code)
        currentQuiz = quizIndex;
        document.getElementById('total-questions').textContent = quizes[currentQuiz].questions.length;
        initializeQuiz();
    }
});
