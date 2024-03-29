let questionProgress = document.getElementById('qustion-progress');
let questionPara = document.getElementById('question-para');
let moveBtn = document.getElementById('movebtn');
let playBtn = document.getElementById('playbtn');

let answerOne = document.getElementById('answer1');
let answerTwo = document.getElementById('answer2');
let answerThree = document.getElementById('answer3');
let answerFour = document.getElementById('answer4');

//Choices text
let answerOneTxt = document.getElementById('answer1txt');
let answerTwoTxt = document.getElementById('answer2txt');
let answerThreeTxt = document.getElementById('answer3txt');
let answerFourTxt = document.getElementById('answer4txt');

let questionPage = 1; //Variable for which question page your on
let correct = 0; //tracks how many correct answers you have
let wrong = 0; //tracks how many incorrect answers you have
let total = 0; //your total score
let pagedisable = 0; //Disables the ability to select multiple answers

moveBtn.style.display = 'none';
playBtn.style.display = 'none';

//=====Create new page====
class pageCreation {
  constructor(
    quizProgress,
    quizPara,
    answerOne,
    answerTwo,
    answerThree,
    answerFour
  ) {
    this.quizProgress = quizProgress;
    this.quizPara = quizPara;
    this.answerOne = answerOne;
    this.answerTwo = answerTwo;
    this.answerThree = answerThree;
    this.answerFour = answerFour;
  }

  updatePage() {
    questionProgress.innerText = this.quizProgress;
    questionPara.innerText = this.quizPara;

    answerOneTxt.innerText = this.answerOne;
    answerTwoTxt.innerText = this.answerTwo;
    answerThreeTxt.innerText = this.answerThree;
    answerFourTxt.innerText = this.answerFour;
  }
}

//===Answer events===
answerOne.addEventListener('click', function () {
  moveBtn.style.display = 'flex';
  moveBtn.classList.remove('transition');
  playBtn.style.display = 'none';

  switch (questionPage) {
    case 1:
      if (pagedisable === 0) {
        correct++;
        pagedisable++;

        moveBtn.style.backgroundColor = '#42c406';
        answerOne.style.backgroundColor = '#42c406';

        correctAnswer();
        console.log('Correct');
      } else {
        console.log('page is disabled');
      }
      break;

    case 5:
      if (pagedisable === 0) {
        correct++;
        pagedisable++;

        moveBtn.style.backgroundColor = '#42c406';
        answerOne.style.backgroundColor = '#42c406';

        correctAnswer();
        console.log('Correct');
      } else {
        console.log('page is disabled');
      }
      break;
    default:
      if (pagedisable === 0) {
        wrong++;
        pagedisable++;
        moveBtn.style.backgroundColor = '#db3a04';
        answerOne.style.backgroundColor = '#db3a04';

        correctAnswer();
        console.log('Wrong');
      } else {
        console.log('page is disabled');
      }
  }
});

answerTwo.addEventListener('click', function () {
  moveBtn.style.display = 'flex';
  moveBtn.classList.remove('transition');
  playBtn.style.display = 'none';

  switch (questionPage) {
    case 3:
      if (pagedisable === 0) {
        correct++;
        pagedisable++;
        moveBtn.style.backgroundColor = '#42c406';
        answerTwo.style.backgroundColor = '#42c406';

        correctAnswer();
        console.log('Correct');
        break;
      }
    default:
      if (pagedisable === 0) {
        wrong++;
        pagedisable++;
        moveBtn.style.backgroundColor = '#db3a04';
        answerTwo.style.backgroundColor = '#db3a04';

        correctAnswer();
        console.log('Wrong');
      }
  }
});

answerThree.addEventListener('click', function () {
  moveBtn.style.display = 'flex';
  moveBtn.classList.remove('transition');
  playBtn.style.display = 'none';

  switch (questionPage) {
    case 2:
      if (pagedisable === 0) {
        correct++;
        pagedisable++;

        moveBtn.style.backgroundColor = '#42c406';
        answerThree.style.backgroundColor = '#42c406';

        correctAnswer();
        console.log('Correct');
        break;
      }
    default:
      wrong++;
      pagedisable++;

      moveBtn.style.backgroundColor = '#db3a04';
      answerThree.style.backgroundColor = '#db3a04';

      correctAnswer();
      console.log('Wrong');
  }
});

answerFour.addEventListener('click', function () {
  moveBtn.style.display = 'flex';
  moveBtn.classList.remove('transition');
  playBtn.style.display = 'none';

  switch (questionPage) {
    case 4:
      if (pagedisable === 0) {
        correct++;
        pagedisable++;
        moveBtn.style.backgroundColor = '#42c406';
        answerFour.style.backgroundColor = '#42c406';

        correctAnswer();
        console.log('Correct');
      }
    default:
      if (pagedisable === 0) {
        wrong++;
        pagedisable++;

        moveBtn.style.backgroundColor = '#db3a04';
        answerFour.style.backgroundColor = '#db3a04';

        correctAnswer();
        console.log('Wrong');
      }
  }
});

//used to progress to the next page
moveBtn.addEventListener('click', function () {
  pagedisable = 0;

  moveBtn.classList.add('transition');

  if (questionPage === 5) {
    questionPage = 6;
    moveBtn.style.display = 'none';
  }

  nextPage();
});

//Changes the questions
const nextPage = () => {
  switch (questionPage) {
    case 1:
      questionPage++;

      const questionPageOne = new pageCreation(
        'Question 2 of 5',
        'What is the opposite of an utopia?',
        'Egalitarianism',
        'Megatopia',
        'Distopia',
        'Supertopia'
      );

      clearBoard();
      questionPageOne.updatePage();
      break;
    case 2:
      questionPage++;

      const questionPageThree = new pageCreation('Question 3 of 5', 'What TV show takes place in the fictional city of Bedrock?', 'Family guy', 'The simpsons', 'Rick and morty');

      clearBoard();
      questionPageThree.updatePage();
      break;
    case 3:
      questionPage++;

      const questionPageFour = new pageCreation('Question 4 of 5', 'What did the Romans call Scotland?', 'Scotland', 'Britian', 'New rome', 'Caledonia');

      clearBoard();
      questionPageFour.updatePage();
      break;
    case 4:
      questionPage++;

      const questionPageFive = new pageCreation('Question 5 of 5', 'The Black Forest is located in what European country?', 'Germany', 'Poland', 'Russia', 'Norway');

      clearBoard();
      questionPageFive.updatePage();
      break;
    case 5:
      questionPage++;

      const questionPageFiveBack = new pageCreation('Question 5 of 5', 'The Black Forest is located in what European country?', 'Germany', 'Poland', 'Russia', 'Norway')

      clearBoard();
      questionPageFiveBack.updatePage();
      break;
    case 6:
      questionProgress.innerText = 'Finished!';
      questionPara.innerText = `You got ${correct} out of 5 correct!`;
      questionProgress.style.marginLeft = '30vw';
      questionPara.style.marginLeft = '30vw';
      questionProgress.style.textAlign = 'center';
      questionPara.style.textAlign = 'center';
      playBtn.style.marginLeft = '33vw';

      playBtn.style.display = 'flex';

      answerOneTxt.innerText = '';
      answerTwoTxt.innerText = '';
      answerThreeTxt.innerText = '';
      answerFourTxt.innerText = '';

      answerOne.style.display = 'none';
      answerTwo.style.display = 'none';
      answerThree.style.display = 'none';
      answerFour.style.display = 'none';
      break;
  }
};

//Shows after the quiz is finished, if clicked restarts the quiz
playBtn.addEventListener('click', function () {
  questionPage = 1;
  correct = 0;
  wrong = 0;
  total = 0;
  pagedisable = 0;

  questionProgress.style.marginLeft = '0vw';
  questionPara.style.marginLeft = '0vw';
  questionProgress.style.textAlign = 'left';
  questionPara.style.textAlign = 'left';

  playBtn.style.display = 'none';


  const questionPageOne = new pageCreation('Question 1 of 5', 'Who was the first u.s president?', 'Washington', 'Adams', 'Biden', 'Grant')

  answerOne.style.display = 'flex';
  answerTwo.style.display = 'flex';
  answerThree.style.display = 'flex';
  answerFour.style.display = 'flex';

  clearBoard();
  questionPageOne.updatePage();
});

//Changes the border color of the answer buttons
const correctAnswer = () => {
  switch (questionPage) {
    case 1:
      answerOne.style.borderColor = '#42c406';
      answerTwo.style.borderColor = '#db3a04';
      answerThree.style.borderColor = '#db3a04';
      answerFour.style.borderColor = '#db3a04';
      break;
    case 2:
      answerOne.style.borderColor = '#db3a04';
      answerTwo.style.borderColor = '#db3a04';
      answerThree.style.borderColor = '#42c406';
      answerFour.style.borderColor = '#db3a04';
      break;
    case 3:
      answerOne.style.borderColor = '#db3a04';
      answerTwo.style.borderColor = '#42c406';
      answerThree.style.borderColor = '#db3a04';
      answerFour.style.borderColor = '#db3a04';
      break;
    case 4:
      answerOne.style.borderColor = '#db3a04';
      answerTwo.style.borderColor = '#db3a04';
      answerThree.style.borderColor = '#db3a04';
      answerFour.style.borderColor = '#42c406';
      break;
    case 5:
      answerOne.style.borderColor = '#42c406';
      answerTwo.style.borderColor = '#db3a04';
      answerThree.style.borderColor = '#db3a04';
      answerFour.style.borderColor = '#db3a04';
      break;
  }
};

//Resets the quiz page
const clearBoard = () => {
  answerOne.style.borderColor = 'transparent';
  answerTwo.style.borderColor = 'transparent';
  answerThree.style.borderColor = 'transparent';
  answerFour.style.borderColor = 'transparent';

  answerOne.style.backgroundColor = '#2e3856';
  answerTwo.style.backgroundColor = '#2e3856';
  answerThree.style.backgroundColor = '#2e3856';
  answerFour.style.backgroundColor = '#2e3856';
};
