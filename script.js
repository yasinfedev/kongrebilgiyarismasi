let currentQuestion = 0;
let score = 0;
let countdown;
let timeLeft = 30;

function startQuiz() {
  document.getElementById('welcome-screen').classList.add('d-none');
  document.getElementById('quiz-screen').classList.remove('d-none');
  showQuestion();
}

function showQuestion() {
  clearInterval(countdown);

  const q = questions[currentQuestion];
  const stageNumber = Math.floor(currentQuestion / 5) + 1;
  const category = q.category;
  let pointValue = category === "green" ? 10 : category === "yellow" ? 15 : 20;

  const card = document.getElementById('question-card');
  card.className = `card p-4 ${category}`;
  document.getElementById('question-number').innerText = `${stageNumber}. Aşama - Soru ${currentQuestion + 1}`;
  document.getElementById('question-text').innerText = q.question;

  timeLeft = category === "green" ? 30 : category === "yellow" ? 45 : 60;

  const optionsDiv = document.getElementById('options');
  optionsDiv.innerHTML = '';
  for (let key in q.options) {
    const btn = document.createElement('button');
    btn.className = 'btn btn-outline-dark option-btn';
    btn.innerText = `${key}: ${q.options[key]}`;
    btn.onclick = () => handleAnswer(btn, key === q.correct, pointValue);
    optionsDiv.appendChild(btn);
  }

  const pointInfo = document.createElement('div');
  pointInfo.className = "mt-3 fw-bold";
  pointInfo.innerText = `📌 Bu soru ${pointValue} puandır.`;
  optionsDiv.appendChild(pointInfo);

  document.getElementById('timer').innerText = `⏱️ ${timeLeft}`;
  countdown = setInterval(() => {
    timeLeft--;
    document.getElementById('timer').innerText = `⏱️ ${timeLeft}`;
    if (timeLeft === 0) {
      clearInterval(countdown);
      revealCorrectAnswer();
    }
  }, 1000);
}

function handleAnswer(button, isCorrect, points) {
  clearInterval(countdown);
  if (isCorrect) score += points;
  button.classList.add(isCorrect ? 'correct' : 'incorrect');
  revealCorrectAnswer();
}

function revealCorrectAnswer() {
  const q = questions[currentQuestion];
  const buttons = document.querySelectorAll('.option-btn');
  buttons.forEach(btn => {
    if (btn.innerText.startsWith(q.correct)) {
      btn.classList.add('correct');
    } else {
      btn.classList.add('incorrect');
    }
    btn.disabled = true;
  });
}

function nextQuestion() {
  currentQuestion++;
  const totalQuestions = questions.length;

  if (currentQuestion < totalQuestions) {
    const isNewStage = currentQuestion % 5 === 0;
    if (isNewStage) {
      showStageScore(Math.floor(currentQuestion / 5));
    } else {
      showQuestion();
    }
  } else {
    showFinalScreen();
  }
}

function showStageScore(stage) {
  const quizScreen = document.getElementById('quiz-screen');
  quizScreen.innerHTML = `
    <div class="text-center p-5">
      <h2>✅ ${stage}. Aşama tamamlandı!</h2>
      <h4>🎯 Şu anki toplam puanınız: ${score}</h4>
      <button class="btn btn-primary mt-3" onclick="continueToNext()">Devam Et</button>
    </div>
  `;
}

function continueToNext() {
  const quizScreen = document.getElementById('quiz-screen');
  quizScreen.innerHTML = `
    <div class="card p-4" id="question-card">
      <div class="d-flex justify-content-between">
        <h5 id="question-number"></h5>
        <span id="timer" class="fw-bold"></span>
      </div>
      <h4 id="question-text" class="mt-3"></h4>
      <div id="options" class="mt-4"></div>
      <div class="text-end mt-3">
        <button class="btn btn-success" onclick="nextQuestion()">Sıradaki Soru</button>
      </div>
    </div>
  `;
  showQuestion();
}

function showFinalScreen() {
  document.getElementById('quiz-screen').classList.add('d-none');
  const endScreen = document.getElementById('end-screen');
  endScreen.classList.remove('d-none');
  endScreen.innerHTML = `
    <h2 class="text-center">🏁 Yarışmamız sona erdi, teşekkür ederiz.</h2>
    <h4 class="text-center mt-3">Toplam Puanınız: ${score}</h4>
  `;
}
