// QuizMaster Pro - Complete Quiz Application

class QuizApp {
  constructor() {
    // Game state
    this.currentScreen = "welcome"
    this.playerName = ""
    this.selectedDifficulty = "easy"
    this.selectedCategory = "all"
    this.currentQuestionIndex = 0
    this.score = 0
    this.timeLeft = 30
    this.timer = null
    this.gameStartTime = null
    this.gameEndTime = null
    this.userAnswers = []
    this.currentQuestions = []
    this.hintsUsed = 0

    // Question database
    this.questionDatabase = {
      science: [
        {
          question: "What is the chemical symbol for gold?",
          options: ["Go", "Gd", "Au", "Ag"],
          correct: 2,
          difficulty: "easy",
          hint: "Think about the Latin name 'aurum'",
        },
        {
          question: "Which planet is known as the Red Planet?",
          options: ["Venus", "Mars", "Jupiter", "Saturn"],
          correct: 1,
          difficulty: "easy",
          hint: "Named after the Roman god of war",
        },
        {
          question: "What is the largest organ in the human body?",
          options: ["Brain", "Liver", "Skin", "Heart"],
          correct: 2,
          difficulty: "medium",
          hint: "It covers your entire body",
        },
        {
          question: "What is the speed of light in vacuum?",
          options: ["299,792,458 m/s", "300,000,000 m/s", "299,000,000 m/s", "298,792,458 m/s"],
          correct: 0,
          difficulty: "hard",
          hint: "It's approximately 3 × 10^8 m/s",
        },
        {
          question: "Which gas makes up about 78% of Earth's atmosphere?",
          options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
          correct: 2,
          difficulty: "medium",
          hint: "It's not the gas we breathe for survival",
        },
      ],
      history: [
        {
          question: "In which year did World War II end?",
          options: ["1944", "1945", "1946", "1947"],
          correct: 1,
          difficulty: "easy",
          hint: "The same year the atomic bombs were dropped",
        },
        {
          question: "Who was the first person to walk on the moon?",
          options: ["Buzz Aldrin", "Neil Armstrong", "John Glenn", "Alan Shepard"],
          correct: 1,
          difficulty: "easy",
          hint: "He said 'That's one small step for man...'",
        },
        {
          question: "Which ancient wonder of the world was located in Alexandria?",
          options: ["Hanging Gardens", "Lighthouse", "Colossus", "Mausoleum"],
          correct: 1,
          difficulty: "medium",
          hint: "It helped ships navigate safely to shore",
        },
        {
          question: "The Treaty of Westphalia ended which major conflict?",
          options: ["Hundred Years' War", "Thirty Years' War", "Seven Years' War", "War of Spanish Succession"],
          correct: 1,
          difficulty: "hard",
          hint: "It established the principle of state sovereignty",
        },
        {
          question: "Which empire was ruled by Justinian I?",
          options: ["Roman Empire", "Byzantine Empire", "Ottoman Empire", "Holy Roman Empire"],
          correct: 1,
          difficulty: "medium",
          hint: "It was the eastern continuation of the Roman Empire",
        },
      ],
      geography: [
        {
          question: "What is the capital of Australia?",
          options: ["Sydney", "Melbourne", "Canberra", "Perth"],
          correct: 2,
          difficulty: "easy",
          hint: "It's not the largest city",
        },
        {
          question: "Which river is the longest in the world?",
          options: ["Amazon", "Nile", "Mississippi", "Yangtze"],
          correct: 1,
          difficulty: "easy",
          hint: "It flows through Egypt",
        },
        {
          question: "Which country has the most time zones?",
          options: ["Russia", "United States", "China", "France"],
          correct: 3,
          difficulty: "medium",
          hint: "Consider overseas territories",
        },
        {
          question: "What is the deepest point in Earth's oceans?",
          options: ["Puerto Rico Trench", "Java Trench", "Mariana Trench", "Peru-Chile Trench"],
          correct: 2,
          difficulty: "hard",
          hint: "Located in the Pacific Ocean near Guam",
        },
        {
          question: "Which desert is the largest in the world?",
          options: ["Sahara", "Arabian", "Gobi", "Antarctica"],
          correct: 3,
          difficulty: "medium",
          hint: "It's not hot and sandy",
        },
      ],
      sports: [
        {
          question: "How many players are on a basketball team on the court?",
          options: ["4", "5", "6", "7"],
          correct: 1,
          difficulty: "easy",
          hint: "Same as the number of fingers on one hand",
        },
        {
          question: "In which sport would you perform a slam dunk?",
          options: ["Tennis", "Basketball", "Volleyball", "Baseball"],
          correct: 1,
          difficulty: "easy",
          hint: "Michael Jordan was famous for these",
        },
        {
          question: "How often are the Summer Olympic Games held?",
          options: ["Every 2 years", "Every 3 years", "Every 4 years", "Every 5 years"],
          correct: 2,
          difficulty: "medium",
          hint: "Same interval as a U.S. presidential term",
        },
        {
          question: "Which country has won the most FIFA World Cups?",
          options: ["Germany", "Argentina", "Brazil", "Italy"],
          correct: 2,
          difficulty: "medium",
          hint: "Known for samba and carnival",
        },
        {
          question: "What is the maximum score possible in ten-pin bowling?",
          options: ["200", "250", "300", "350"],
          correct: 2,
          difficulty: "hard",
          hint: "It requires 12 strikes in a row",
        },
      ],
      entertainment: [
        {
          question: "Who directed the movie 'Jaws'?",
          options: ["George Lucas", "Steven Spielberg", "Martin Scorsese", "Francis Ford Coppola"],
          correct: 1,
          difficulty: "medium",
          hint: "He also directed E.T. and Jurassic Park",
        },
        {
          question: "Which band released the album 'Abbey Road'?",
          options: ["The Rolling Stones", "The Beatles", "Led Zeppelin", "Pink Floyd"],
          correct: 1,
          difficulty: "easy",
          hint: "They were from Liverpool",
        },
        {
          question: "What is the highest-grossing film of all time?",
          options: ["Titanic", "Avatar", "Avengers: Endgame", "Star Wars: The Force Awakens"],
          correct: 2,
          difficulty: "medium",
          hint: "It's a Marvel superhero movie from 2019",
        },
        {
          question: "Which Shakespeare play features the characters Romeo and Juliet?",
          options: ["Hamlet", "Macbeth", "Romeo and Juliet", "Othello"],
          correct: 2,
          difficulty: "easy",
          hint: "The answer is in the question",
        },
        {
          question: "Who composed 'The Four Seasons'?",
          options: ["Mozart", "Beethoven", "Vivaldi", "Bach"],
          correct: 2,
          difficulty: "hard",
          hint: "He was an Italian Baroque composer",
        },
      ],
    }

    this.init()
  }

  init() {
    this.setupEventListeners()
    this.loadPlayerData()
    this.showScreen("welcome")
  }

  setupEventListeners() {
    // Welcome screen
    document.getElementById("player-name").addEventListener("input", () => this.validatePlayerName())
    document.getElementById("start-quiz-btn").addEventListener("click", () => this.startQuiz())
    document.getElementById("view-leaderboard-btn").addEventListener("click", () => this.showLeaderboard())

    // Difficulty selection
    document.querySelectorAll(".difficulty-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => this.selectDifficulty(e.target.closest(".difficulty-btn")))
    })

    // Category selection
    document.querySelectorAll(".category-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => this.selectCategory(e.target.closest(".category-btn")))
    })

    // Quiz screen
    document.getElementById("quit-quiz-btn").addEventListener("click", () => this.quitQuiz())
    document.getElementById("skip-question-btn").addEventListener("click", () => this.skipQuestion())
    document.getElementById("hint-btn").addEventListener("click", () => this.showHint())

    // Results screen
    document.getElementById("play-again-btn").addEventListener("click", () => this.playAgain())
    document.getElementById("share-results-btn").addEventListener("click", () => this.shareResults())
    document.getElementById("view-answers-btn").addEventListener("click", () => this.showReviewScreen())

    // Leaderboard screen
    document.getElementById("back-to-home-btn").addEventListener("click", () => this.showScreen("welcome"))
    document.getElementById("clear-leaderboard-btn").addEventListener("click", () => this.clearLeaderboard())
    document.getElementById("leaderboard-filter").addEventListener("change", () => this.updateLeaderboard())

    // Review screen
    document.getElementById("close-review-btn").addEventListener("click", () => this.showScreen("results"))

    // Keyboard shortcuts
    document.addEventListener("keydown", (e) => this.handleKeyPress(e))

    // Prevent page refresh during quiz
    window.addEventListener("beforeunload", (e) => {
      if (this.currentScreen === "quiz") {
        e.preventDefault()
        e.returnValue = ""
      }
    })
  }

  validatePlayerName() {
    const nameInput = document.getElementById("player-name")
    const feedback = document.getElementById("name-feedback")
    const startBtn = document.getElementById("start-quiz-btn")

    const name = nameInput.value.trim()

    if (name.length === 0) {
      feedback.textContent = ""
      feedback.className = "input-feedback"
      startBtn.disabled = true
    } else if (name.length < 2) {
      feedback.textContent = "Name must be at least 2 characters"
      feedback.className = "input-feedback error"
      startBtn.disabled = true
    } else if (name.length > 20) {
      feedback.textContent = "Name must be less than 20 characters"
      feedback.className = "input-feedback error"
      startBtn.disabled = true
    } else {
      feedback.textContent = "Looks good!"
      feedback.className = "input-feedback success"
      startBtn.disabled = false
      this.playerName = name
    }
  }

  selectDifficulty(btn) {
    document.querySelectorAll(".difficulty-btn").forEach((b) => b.classList.remove("active"))
    btn.classList.add("active")
    this.selectedDifficulty = btn.dataset.difficulty
  }

  selectCategory(btn) {
    document.querySelectorAll(".category-btn").forEach((b) => b.classList.remove("active"))
    btn.classList.add("active")
    this.selectedCategory = btn.dataset.category
  }

  startQuiz() {
    if (!this.playerName) {
      this.showNotification("Please enter your name", "error")
      return
    }

    this.showLoading()

    // Prepare questions
    this.prepareQuestions()

    // Reset game state
    this.currentQuestionIndex = 0
    this.score = 0
    this.userAnswers = []
    this.hintsUsed = 0
    this.gameStartTime = Date.now()

    setTimeout(() => {
      this.hideLoading()
      this.showScreen("quiz")
      this.displayQuestion()
      this.startTimer()
    }, 1000)
  }

  prepareQuestions() {
    let questions = []

    if (this.selectedCategory === "all") {
      // Get questions from all categories
      Object.values(this.questionDatabase).forEach((categoryQuestions) => {
        questions = questions.concat(categoryQuestions)
      })
    } else {
      questions = this.questionDatabase[this.selectedCategory] || []
    }

    // Filter by difficulty
    if (this.selectedDifficulty !== "all") {
      questions = questions.filter((q) => q.difficulty === this.selectedDifficulty)
    }

    // Shuffle questions
    questions = this.shuffleArray(questions)

    // Select appropriate number of questions
    const questionCount = this.getQuestionCount()
    this.currentQuestions = questions.slice(0, questionCount)

    // Update total questions display
    document.getElementById("total-questions").textContent = this.currentQuestions.length
  }

  getQuestionCount() {
    switch (this.selectedDifficulty) {
      case "easy":
        return 10
      case "medium":
        return 15
      case "hard":
        return 20
      default:
        return 10
    }
  }

  displayQuestion() {
    if (this.currentQuestionIndex >= this.currentQuestions.length) {
      this.endQuiz()
      return
    }

    const question = this.currentQuestions[this.currentQuestionIndex]

    // Update question info
    document.getElementById("current-question-num").textContent = this.currentQuestionIndex + 1
    document.getElementById("question-category").textContent = this.getCategoryName(question)
    document.getElementById("question-difficulty").textContent =
      question.difficulty.charAt(0).toUpperCase() + question.difficulty.slice(1)
    document.getElementById("question-text").textContent = question.question
    document.getElementById("current-score").textContent = this.score

    // Update progress bar
    const progress = ((this.currentQuestionIndex + 1) / this.currentQuestions.length) * 100
    document.getElementById("progress-fill").style.width = `${progress}%`

    // Create options
    this.createOptions(question)

    // Reset timer
    this.resetTimer()

    // Enable controls
    document.getElementById("skip-question-btn").disabled = false
    document.getElementById("hint-btn").disabled = false
  }

  getCategoryName(question) {
    for (const [category, questions] of Object.entries(this.questionDatabase)) {
      if (questions.includes(question)) {
        return category.charAt(0).toUpperCase() + category.slice(1)
      }
    }
    return "General"
  }

  createOptions(question) {
    const container = document.getElementById("options-container")
    container.innerHTML = ""

    question.options.forEach((option, index) => {
      const btn = document.createElement("button")
      btn.className = "option-btn"
      btn.innerHTML = `<span class="option-letter">${String.fromCharCode(65 + index)}</span>${option}`
      btn.addEventListener("click", () => this.selectAnswer(index))
      container.appendChild(btn)
    })
  }

  selectAnswer(answerIndex) {
    const question = this.currentQuestions[this.currentQuestionIndex]
    const isCorrect = answerIndex === question.correct

    // Stop timer
    this.stopTimer()

    // Disable all options
    document.querySelectorAll(".option-btn").forEach((btn, index) => {
      btn.disabled = true
      btn.classList.add("disabled")

      if (index === question.correct) {
        btn.classList.add("correct")
      } else if (index === answerIndex && !isCorrect) {
        btn.classList.add("incorrect")
      }
    })

    // Update score
    if (isCorrect) {
      this.score += this.getPointsForQuestion()
      this.showNotification("Correct! +" + this.getPointsForQuestion() + " points", "success")
    } else {
      this.showNotification("Incorrect! The correct answer was " + question.options[question.correct], "error")
    }

    // Store answer
    this.userAnswers.push({
      question: question,
      userAnswer: answerIndex,
      correct: isCorrect,
      timeSpent: 30 - this.timeLeft,
    })

    // Disable controls
    document.getElementById("skip-question-btn").disabled = true
    document.getElementById("hint-btn").disabled = true

    // Move to next question after delay
    setTimeout(() => {
      this.nextQuestion()
    }, 2000)
  }

  getPointsForQuestion() {
    const basePoints = 10
    const difficultyMultiplier = {
      easy: 1,
      medium: 1.5,
      hard: 2,
    }

    const timeBonus = Math.floor(this.timeLeft / 5) // Bonus for quick answers
    const question = this.currentQuestions[this.currentQuestionIndex]

    return Math.floor(basePoints * difficultyMultiplier[question.difficulty] + timeBonus)
  }

  skipQuestion() {
    this.stopTimer()

    // Store skipped answer
    const question = this.currentQuestions[this.currentQuestionIndex]
    this.userAnswers.push({
      question: question,
      userAnswer: -1, // -1 indicates skipped
      correct: false,
      timeSpent: 30 - this.timeLeft,
    })

    this.showNotification("Question skipped", "info")
    this.nextQuestion()
  }

  showHint() {
    const question = this.currentQuestions[this.currentQuestionIndex]
    if (question.hint) {
      this.showNotification("Hint: " + question.hint, "info")
      this.hintsUsed++
      document.getElementById("hint-btn").disabled = true
    }
  }

  nextQuestion() {
    this.currentQuestionIndex++
    if (this.currentQuestionIndex < this.currentQuestions.length) {
      this.displayQuestion()
      this.startTimer()
    } else {
      this.endQuiz()
    }
  }

  startTimer() {
    this.timeLeft = 30
    this.updateTimerDisplay()

    this.timer = setInterval(() => {
      this.timeLeft--
      this.updateTimerDisplay()

      if (this.timeLeft <= 0) {
        this.handleTimeUp()
      }
    }, 1000)
  }

  updateTimerDisplay() {
    const timerText = document.getElementById("timer-text")
    const timerProgress = document.getElementById("timer-progress")

    timerText.textContent = this.timeLeft

    // Update circular progress
    const circumference = 2 * Math.PI * 45
    const progress = (this.timeLeft / 30) * circumference
    timerProgress.style.strokeDashoffset = circumference - progress

    // Change color based on time left
    if (this.timeLeft <= 5) {
      timerProgress.classList.add("danger")
      timerProgress.classList.remove("warning")
    } else if (this.timeLeft <= 10) {
      timerProgress.classList.add("warning")
      timerProgress.classList.remove("danger")
    } else {
      timerProgress.classList.remove("warning", "danger")
    }
  }

  handleTimeUp() {
    this.stopTimer()

    // Show correct answer
    const question = this.currentQuestions[this.currentQuestionIndex]
    document.querySelectorAll(".option-btn").forEach((btn, index) => {
      btn.disabled = true
      btn.classList.add("disabled")

      if (index === question.correct) {
        btn.classList.add("correct")
      }
    })

    // Store timeout answer
    this.userAnswers.push({
      question: question,
      userAnswer: -2, // -2 indicates timeout
      correct: false,
      timeSpent: 30,
    })

    this.showNotification("Time's up! The correct answer was " + question.options[question.correct], "warning")

    // Disable controls
    document.getElementById("skip-question-btn").disabled = true
    document.getElementById("hint-btn").disabled = true

    setTimeout(() => {
      this.nextQuestion()
    }, 2000)
  }

  stopTimer() {
    if (this.timer) {
      clearInterval(this.timer)
      this.timer = null
    }
  }

  resetTimer() {
    this.stopTimer()
    this.timeLeft = 30
    this.updateTimerDisplay()
  }

  endQuiz() {
    this.gameEndTime = Date.now()
    this.stopTimer()
    this.calculateResults()
    this.saveResults()
    this.showScreen("results")
  }

  calculateResults() {
    const totalQuestions = this.currentQuestions.length
    const correctAnswers = this.userAnswers.filter((a) => a.correct).length
    const incorrectAnswers = totalQuestions - correctAnswers
    const timeTaken = Math.floor((this.gameEndTime - this.gameStartTime) / 1000)
    const accuracy = Math.round((correctAnswers / totalQuestions) * 100)
    const percentage = Math.round((this.score / (totalQuestions * this.getMaxPointsPerQuestion())) * 100)

    // Update results display
    document.getElementById("final-score").textContent =
      `${this.score}/${totalQuestions * this.getMaxPointsPerQuestion()}`
    document.getElementById("score-percentage").textContent = `${percentage}%`
    document.getElementById("correct-count").textContent = correctAnswers
    document.getElementById("incorrect-count").textContent = incorrectAnswers
    document.getElementById("time-taken").textContent = this.formatTime(timeTaken)
    document.getElementById("accuracy-rate").textContent = `${accuracy}%`

    // Update trophy and message
    this.updateResultsTrophy(percentage)
    this.updateResultsMessage(percentage)

    // Update category breakdown
    this.updateCategoryBreakdown()
  }

  getMaxPointsPerQuestion() {
    const difficultyMultiplier = {
      easy: 1,
      medium: 1.5,
      hard: 2,
    }

    // Calculate average difficulty multiplier for mixed questions
    let totalMultiplier = 0
    this.currentQuestions.forEach((q) => {
      totalMultiplier += difficultyMultiplier[q.difficulty]
    })

    const avgMultiplier = totalMultiplier / this.currentQuestions.length
    return Math.floor(10 * avgMultiplier + 6) // 10 base + max 6 time bonus
  }

  updateResultsTrophy(percentage) {
    const trophy = document.getElementById("results-trophy")

    if (percentage >= 90) {
      trophy.textContent = "🏆"
      trophy.style.color = "#fbbf24"
    } else if (percentage >= 80) {
      trophy.textContent = "🥇"
      trophy.style.color = "#fbbf24"
    } else if (percentage >= 70) {
      trophy.textContent = "🥈"
      trophy.style.color = "#e5e7eb"
    } else if (percentage >= 60) {
      trophy.textContent = "🥉"
      trophy.style.color = "#d97706"
    } else {
      trophy.textContent = "📚"
      trophy.style.color = "#6b7280"
    }
  }

  updateResultsMessage(percentage) {
    const message = document.getElementById("results-message")
    const name = this.playerName

    if (percentage >= 90) {
      message.textContent = `Outstanding, ${name}! You're a quiz master! 🌟`
    } else if (percentage >= 80) {
      message.textContent = `Excellent work, ${name}! You really know your stuff! 👏`
    } else if (percentage >= 70) {
      message.textContent = `Great job, ${name}! You did really well! 😊`
    } else if (percentage >= 60) {
      message.textContent = `Good effort, ${name}! Keep learning! 📖`
    } else if (percentage >= 50) {
      message.textContent = `Not bad, ${name}! There's room for improvement! 💪`
    } else {
      message.textContent = `Don't give up, ${name}! Practice makes perfect! 🎯`
    }
  }

  updateCategoryBreakdown() {
    const breakdown = document.getElementById("category-breakdown")
    breakdown.innerHTML = ""

    // Group answers by category
    const categoryStats = {}

    this.userAnswers.forEach((answer) => {
      const category = this.getCategoryName(answer.question)

      if (!categoryStats[category]) {
        categoryStats[category] = { correct: 0, total: 0 }
      }

      categoryStats[category].total++
      if (answer.correct) {
        categoryStats[category].correct++
      }
    })

    // Create breakdown display
    Object.entries(categoryStats).forEach(([category, stats]) => {
      const div = document.createElement("div")
      div.className = "category-result"

      const percentage = Math.round((stats.correct / stats.total) * 100)

      div.innerHTML = `
                <span class="category-result-name">${category}</span>
                <span class="category-result-score">${stats.correct}/${stats.total} (${percentage}%)</span>
            `

      breakdown.appendChild(div)
    })
  }

  saveResults() {
    const result = {
      playerName: this.playerName,
      score: this.score,
      totalQuestions: this.currentQuestions.length,
      correctAnswers: this.userAnswers.filter((a) => a.correct).length,
      difficulty: this.selectedDifficulty,
      category: this.selectedCategory,
      timeTaken: this.gameEndTime - this.gameStartTime,
      hintsUsed: this.hintsUsed,
      date: new Date().toISOString(),
      answers: this.userAnswers,
    }

    // Save to leaderboard
    this.addToLeaderboard(result)

    // Save last result for review
    localStorage.setItem("lastQuizResult", JSON.stringify(result))
  }

  addToLeaderboard(result) {
    let leaderboard = JSON.parse(localStorage.getItem("quizLeaderboard") || "[]")

    leaderboard.push(result)
    leaderboard.sort((a, b) => b.score - a.score)
    leaderboard = leaderboard.slice(0, 50) // Keep top 50

    localStorage.setItem("quizLeaderboard", JSON.stringify(leaderboard))
  }

  quitQuiz() {
    if (confirm("Are you sure you want to quit the quiz? Your progress will be lost.")) {
      this.stopTimer()
      this.showScreen("welcome")
    }
  }

  playAgain() {
    this.showScreen("welcome")
  }

  shareResults() {
    const result = JSON.parse(localStorage.getItem("lastQuizResult"))
    if (!result) return

    const percentage = Math.round((result.correctAnswers / result.totalQuestions) * 100)
    const text = `I just scored ${result.score} points (${percentage}%) on QuizMaster Pro! 🧠✨ Can you beat my score?`

    if (navigator.share) {
      navigator
        .share({
          title: "QuizMaster Pro Results",
          text: text,
          url: window.location.href,
        })
        .catch(console.error)
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard
        .writeText(text + " " + window.location.href)
        .then(() => {
          this.showNotification("Results copied to clipboard!", "success")
        })
        .catch(() => {
          this.showNotification("Unable to share results", "error")
        })
    }
  }

  showReviewScreen() {
    this.showScreen("review")
    this.displayReview()
  }

  displayReview() {
    const container = document.getElementById("review-content")
    container.innerHTML = ""

    this.userAnswers.forEach((answer, index) => {
      const div = document.createElement("div")
      div.className = "review-question"

      const resultClass = answer.correct ? "correct" : "incorrect"
      const resultText = answer.correct
        ? "Correct"
        : answer.userAnswer === -1
          ? "Skipped"
          : answer.userAnswer === -2
            ? "Timeout"
            : "Incorrect"

      div.innerHTML = `
                <div class="review-question-header">
                    <span class="review-question-number">Question ${index + 1}</span>
                    <span class="review-question-result ${resultClass}">${resultText}</span>
                </div>
                <div class="review-question-text">${answer.question.question}</div>
                <div class="review-options">
                    ${answer.question.options
                      .map((option, optIndex) => {
                        let classes = "review-option"
                        if (optIndex === answer.question.correct) {
                          classes += " correct-answer"
                        }
                        if (optIndex === answer.userAnswer) {
                          classes += " user-answer"
                          if (!answer.correct) {
                            classes += " incorrect"
                          }
                        }
                        return `<div class="${classes}">${String.fromCharCode(65 + optIndex)}. ${option}</div>`
                      })
                      .join("")}
                </div>
            `

      container.appendChild(div)
    })
  }

  showLeaderboard() {
    this.showScreen("leaderboard")
    this.updateLeaderboard()
  }

  updateLeaderboard() {
    const filter = document.getElementById("leaderboard-filter").value
    const leaderboard = this.getFilteredLeaderboard(filter)
    const container = document.getElementById("leaderboard-list")

    container.innerHTML = ""

    if (leaderboard.length === 0) {
      container.innerHTML = `
                <div class="empty-leaderboard">
                    <div class="empty-leaderboard-icon">🏆</div>
                    <p>No scores yet. Be the first to play!</p>
                </div>
            `
      return
    }

    leaderboard.forEach((entry, index) => {
      const div = document.createElement("div")
      div.className = "leaderboard-entry"

      if (entry.playerName === this.playerName) {
        div.classList.add("current-player")
      }

      const rankClass = index === 0 ? "gold" : index === 1 ? "silver" : index === 2 ? "bronze" : ""
      const percentage = Math.round((entry.correctAnswers / entry.totalQuestions) * 100)

      div.innerHTML = `
                <span class="leaderboard-rank ${rankClass}">${index + 1}</span>
                <div class="leaderboard-info">
                    <div class="leaderboard-name">${entry.playerName}</div>
                    <div class="leaderboard-details">
                        ${entry.difficulty} • ${entry.category} • ${this.formatDate(entry.date)}
                    </div>
                </div>
                <div class="leaderboard-score">${entry.score} (${percentage}%)</div>
            `

      container.appendChild(div)
    })
  }

  getFilteredLeaderboard(filter) {
    let leaderboard = JSON.parse(localStorage.getItem("quizLeaderboard") || "[]")
    const now = new Date()

    switch (filter) {
      case "today":
        leaderboard = leaderboard.filter((entry) => {
          const entryDate = new Date(entry.date)
          return entryDate.toDateString() === now.toDateString()
        })
        break
      case "week":
        const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)
        leaderboard = leaderboard.filter((entry) => {
          const entryDate = new Date(entry.date)
          return entryDate >= weekAgo
        })
        break
    }

    return leaderboard.slice(0, 20) // Show top 20
  }

  clearLeaderboard() {
    if (confirm("Are you sure you want to clear the leaderboard? This action cannot be undone.")) {
      localStorage.removeItem("quizLeaderboard")
      this.updateLeaderboard()
      this.showNotification("Leaderboard cleared", "info")
    }
  }

  loadPlayerData() {
    const savedName = localStorage.getItem("lastPlayerName")
    if (savedName) {
      document.getElementById("player-name").value = savedName
      this.validatePlayerName()
    }
  }

  showScreen(screenName) {
    // Hide all screens
    document.querySelectorAll(".screen").forEach((screen) => {
      screen.classList.remove("active")
    })

    // Show target screen
    const targetScreen = document.getElementById(`${screenName}-screen`)
    if (targetScreen) {
      targetScreen.classList.add("active")
      this.currentScreen = screenName

      // Save player name
      if (screenName !== "welcome" && this.playerName) {
        localStorage.setItem("lastPlayerName", this.playerName)
      }
    }
  }

  showNotification(message, type = "info") {
    const container = document.getElementById("notification-container")
    const notification = document.createElement("div")
    notification.className = `notification ${type}`
    notification.textContent = message

    container.appendChild(notification)

    // Auto remove after 4 seconds
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification)
      }
    }, 4000)
  }

  showLoading() {
    document.getElementById("loading-overlay").classList.add("active")
  }

  hideLoading() {
    document.getElementById("loading-overlay").classList.remove("active")
  }

  handleKeyPress(e) {
    if (this.currentScreen === "quiz") {
      const key = e.key.toLowerCase()

      // Answer with A, B, C, D keys
      if (["a", "b", "c", "d"].includes(key)) {
        const index = key.charCodeAt(0) - 97
        const options = document.querySelectorAll(".option-btn")
        if (options[index] && !options[index].disabled) {
          this.selectAnswer(index)
        }
      }

      // Skip with Space
      if (e.code === "Space") {
        e.preventDefault()
        const skipBtn = document.getElementById("skip-question-btn")
        if (!skipBtn.disabled) {
          this.skipQuestion()
        }
      }

      // Hint with H
      if (key === "h") {
        const hintBtn = document.getElementById("hint-btn")
        if (!hintBtn.disabled) {
          this.showHint()
        }
      }
    }

    // Escape to go back
    if (e.key === "Escape") {
      if (this.currentScreen === "quiz") {
        this.quitQuiz()
      } else if (this.currentScreen === "review") {
        this.showScreen("results")
      } else if (this.currentScreen === "leaderboard") {
        this.showScreen("welcome")
      }
    }
  }

  shuffleArray(array) {
    const shuffled = [...array]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
  }

  formatTime(seconds) {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`
  }

  formatDate(dateString) {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })
  }
}

// Initialize the quiz application
document.addEventListener("DOMContentLoaded", () => {
  new QuizApp()
})

// Service Worker registration for PWA capabilities
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then((registration) => {
        console.log("SW registered: ", registration)
      })
      .catch((registrationError) => {
        console.log("SW registration failed: ", registrationError)
      })
  })
}
