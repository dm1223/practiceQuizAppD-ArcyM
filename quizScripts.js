const questions = [
    {
    question: "What is the capital of France?",
    answers: ["Berlin", "Madrid", "Paris", "Rome"],
    correct: 2
    },
    {
    question: "Which programming language is used for web development?",
    answers: ["Python", "JavaScript", "C++", "Ruby"],
    correct: 1
    }
   ];
   let index = 0;

   const quizQuestion = document.getElementById("question-text");
   const answerButton1 = document.getElementById("button-1");
   const answerButton2 = document.getElementById("button-2");
   const answerButton3 = document.getElementById("button-3");
   const answerButton4 = document.getElementById("button-4");
   const quizFeedback = document.getElementById("feedback");
   const nextQButton = document.getElementById("next-question");



   function displayQuestion(question, answers){
    quizQuestion.textContent = question;

    answerButton1.textContent = answers[0];
    answerButton1.disabled = false; 

    answerButton2.textContent = answers[1];
    answerButton2.disabled = false; 

    answerButton3.textContent = answers[2];
    answerButton3.disabled = false; 

    answerButton4.textContent = answers[3];
    answerButton4.disabled = false; 

    quizFeedback.textContent = "";
    nextQButton.style.display = "none";

   }



   function handleAnswerSelection(event){
        const selectButton = event.target;

        isCorrect = selectButton === questions[index].answers[questions.correct];

        feedback.textContent = isCorrect ? "Correct!" : "Wrong answer.";
            
        answerButton1.disabled = true;
        answerButton2.disabled = true;
        answerButton3.disabled = true;
        answerButton4.disabled = true;

        nextQButton.style.display = "block";

        


   }
  
   function nextQuestion() {
    index++;

   }



   answerButton1.addEventListener("click", handleAnswerSelection);
   answerButton2.addEventListener("click", handleAnswerSelection);
   answerButton3.addEventListener("click", handleAnswerSelection);
   answerButton4.addEventListener("click", handleAnswerSelection);

   nextQButton.addEventListener("click", nextQuestion);

   function nextQuestion() {
     currentQuestion++;
     if (currentQuestion < questions.length) {
     loadQuestion();
     } else {
     questionElement.textContent = "Quiz completed!";
     nextQButton.forEach(button => button.style.display =
    "none");
     feedbackElement.textContent = "Great job!";
     nextButton.style.display = "none";
     }
    }
    



   
   
