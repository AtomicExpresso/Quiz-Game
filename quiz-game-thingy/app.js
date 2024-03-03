let questionProgress = document.getElementById('qustion-progress');
let questionPara = document.getElementById('question-para');
let moveBtn = document.getElementById('movebtn');
let playBtn = document.getElementById('playbtn');

let answerOne = document.getElementById('answer1');
let answerTwo = document.getElementById('answer2');
let answerThree = document.getElementById('answer3');
let answerFour = document.getElementById('answer4');

let answerOneTxt = document.getElementById('answer1txt');
let answerTwoTxt = document.getElementById('answer2txt');
let answerThreeTxt = document.getElementById('answer3txt');
let answerFourTxt = document.getElementById('answer4txt');

let questionPage = 1;
let correct = 0;
let wrong = 0;
let total = 0;
let pagedisable = 0;

moveBtn.style.display = 'none';
playBtn.style.display = 'none';

answerOne.addEventListener('click', function () {
  moveBtn.style.display = 'flex';
  moveBtn.classList.remove('transition');
  playBtn.style.display = 'none';

  if (questionPage === 1) {
    if (pagedisable === 0) {
      correct++;
      pagedisable++;

      moveBtn.style.backgroundColor = '#42c406';
      answerOne.style.backgroundColor = '#42c406';

      answerOne.style.borderColor = '#42c406';
      answerTwo.style.borderColor = '#db3a04';
      answerThree.style.borderColor = '#db3a04';
      answerFour.style.borderColor = '#db3a04';

      console.log('Correct');
    } else {
      console.log('page is disabled');
    }
  } else if (questionPage === 2) {
    if (pagedisable === 0) {
      wrong++;
      pagedisable++;
      moveBtn.style.backgroundColor = '#db3a04';
      answerOne.style.backgroundColor = '#db3a04';

      answerOne.style.borderColor = '#db3a04';
      answerTwo.style.borderColor = '#db3a04';
      answerThree.style.borderColor = '#42c406';
      answerFour.style.borderColor = '#db3a04';

      console.log('Wrong');
    } else {
      console.log('page is disabled');
    }
  } else if (questionPage === 3) {
    if (pagedisable === 0) {
      wrong++;
      pagedisable++;
      moveBtn.style.backgroundColor = '#db3a04';
      answerOne.style.backgroundColor = '#db3a04';

      answerOne.style.borderColor = '#db3a04';
      answerTwo.style.borderColor = '#db3a04';
      answerThree.style.borderColor = '#42c406';
      answerFour.style.borderColor = '#db3a04';

      console.log('Wrong');
    } else {
      console.log('page is disabled');
    }
  } else if (questionPage === 4) {
    if (pagedisable === 0) {
      wrong++;
      pagedisable++;
      moveBtn.style.backgroundColor = '#db3a04';
      answerOne.style.backgroundColor = '#db3a04';

      answerOne.style.borderColor = '#db3a04';
      answerTwo.style.borderColor = '#db3a04';
      answerThree.style.borderColor = '#42c406';
      answerFour.style.borderColor = '#db3a04';

      console.log('Wrong');
    } else {
      console.log('page is disabled');
    }
  } else if (questionPage === 5) {
    if (pagedisable === 0) {
      correct++;
      pagedisable++;

      moveBtn.style.backgroundColor = '#42c406';
      answerOne.style.backgroundColor = '#42c406';

      answerOne.style.borderColor = '#42c406';
      answerTwo.style.borderColor = '#db3a04';
      answerThree.style.borderColor = '#db3a04';
      answerFour.style.borderColor = '#db3a04';

      console.log('Correct');
    } else {
      console.log('page is disabled');
    }
  }
});

answerTwo.addEventListener('click', function () {
  moveBtn.style.display = 'flex';
  moveBtn.classList.remove('transition');
  playBtn.style.display = 'none';

  if (questionPage === 1) {
    if (pagedisable === 0) {
      wrong++;
      pagedisable++;
      moveBtn.style.backgroundColor = '#db3a04';
      answerTwo.style.backgroundColor = '#db3a04';

      answerOne.style.borderColor = '#42c406';
      answerTwo.style.borderColor = '#db3a04';
      answerThree.style.borderColor = '#db3a04';
      answerFour.style.borderColor = '#db3a04';

      console.log('Wrong');
    }
  } else if (questionPage === 2) {
    if (pagedisable === 0) {
      wrong++;
      pagedisable++;
      moveBtn.style.backgroundColor = '#db3a04';
      answerTwo.style.backgroundColor = '#db3a04';

      answerOne.style.borderColor = '#db3a04';
      answerTwo.style.borderColor = '#db3a04';
      answerThree.style.borderColor = '#42c406';
      answerFour.style.borderColor = '#db3a04';

      console.log('Wrong');
    }
  } else if (questionPage === 3) {
    if (pagedisable === 0) {
      correct++;
      pagedisable++;
      moveBtn.style.backgroundColor = '#42c406';
      answerTwo.style.backgroundColor = '#42c406';

      answerOne.style.borderColor = '#db3a04';
      answerTwo.style.borderColor = '#42c406';
      answerThree.style.borderColor = '#db3a04';
      answerFour.style.borderColor = '#db3a04';

      console.log('Wrong');
    }
  } else if (questionPage === 4) {
    if (pagedisable === 0) {
      wrong++;
      pagedisable++;
      moveBtn.style.backgroundColor = '#db3a04';
      answerTwo.style.backgroundColor = '#db3a04';

      answerOne.style.borderColor = '#db3a04';
      answerTwo.style.borderColor = '#db3a04';
      answerThree.style.borderColor = '#42c406';
      answerFour.style.borderColor = '#db3a04';

      console.log('Wrong');
    }
  } else if (questionPage === 5) {
    if (pagedisable === 0) {
      wrong++;
      pagedisable++;
      moveBtn.style.backgroundColor = '#db3a04';
      answerTwo.style.backgroundColor = '#db3a04';

      answerOne.style.borderColor = '#42c406';
      answerTwo.style.borderColor = '#db3a04';
      answerThree.style.borderColor = '#db3a04';
      answerFour.style.borderColor = '#db3a04';

      console.log('Wrong');
    }
  }
});

answerThree.addEventListener('click', function () {
  moveBtn.style.display = 'flex';
  moveBtn.classList.remove('transition');
  playBtn.style.display = 'none';

  if (questionPage === 1) {
    if (pagedisable === 0) {
      wrong++;
      pagedisable++;

      moveBtn.style.backgroundColor = '#db3a04';
      answerThree.style.backgroundColor = '#db3a04';

      answerOne.style.borderColor = '#42c406';
      answerTwo.style.borderColor = '#db3a04';
      answerThree.style.borderColor = '#db3a04';
      answerFour.style.borderColor = '#db3a04';

      console.log('Wrong');
    }
  } else if (questionPage === 2) {
    if (pagedisable === 0) {
      correct++;
      pagedisable++;

      moveBtn.style.backgroundColor = '#42c406';
      answerThree.style.backgroundColor = '#42c406';

      answerOne.style.borderColor = '#db3a04';
      answerTwo.style.borderColor = '#db3a04';
      answerThree.style.borderColor = '#42c406';
      answerFour.style.borderColor = '#db3a04';

      console.log('Correct');
    } else {
      console.log('page is disabled');
    }
  } else if (questionPage === 3) {
    if (pagedisable === 0) {
      wrong++;
      pagedisable++;

      moveBtn.style.backgroundColor = '#db3a04';
      answerThree.style.backgroundColor = '#db3a04';

      answerOne.style.borderColor = '#42c406';
      answerTwo.style.borderColor = '#db3a04';
      answerThree.style.borderColor = '#db3a04';
      answerFour.style.borderColor = '#db3a04';

      console.log('Wrong');
    }
  } else if (questionPage === 4) {
    if (pagedisable === 0) {
      wrong++;
      pagedisable++;

      moveBtn.style.backgroundColor = '#db3a04';
      answerThree.style.backgroundColor = '#db3a04';

      answerOne.style.borderColor = '#42c406';
      answerTwo.style.borderColor = '#db3a04';
      answerThree.style.borderColor = '#db3a04';
      answerFour.style.borderColor = '#db3a04';

      console.log('Wrong');
    }
  } else if (questionPage === 5) {
    if (pagedisable === 0) {
      wrong++;
      pagedisable++;

      moveBtn.style.backgroundColor = '#db3a04';
      answerThree.style.backgroundColor = '#db3a04';

      answerOne.style.borderColor = '#42c406';
      answerTwo.style.borderColor = '#db3a04';
      answerThree.style.borderColor = '#db3a04';
      answerFour.style.borderColor = '#db3a04';

      console.log('Wrong');
    }
  }
});

answerFour.addEventListener('click', function () {
  moveBtn.style.display = 'flex';
  moveBtn.classList.remove('transition');
  playBtn.style.display = 'none';

  if (questionPage === 1) {
    if (pagedisable === 0) {
      wrong++;
      pagedisable++;

      moveBtn.style.backgroundColor = '#db3a04';
      answerFour.style.backgroundColor = '#db3a04';

      answerOne.style.borderColor = '#42c406';
      answerTwo.style.borderColor = '#db3a04';
      answerThree.style.borderColor = '#db3a04';
      answerFour.style.borderColor = '#db3a04';

      console.log('Wrong');
    }
  } else if (questionPage === 2) {
    if (pagedisable === 0) {
      wrong++;
      pagedisable++;
      moveBtn.style.backgroundColor = '#db3a04';
      answerFour.style.backgroundColor = '#db3a04';

      answerOne.style.borderColor = '#db3a04';
      answerTwo.style.borderColor = '#db3a04';
      answerThree.style.borderColor = '#42c406';
      answerFour.style.borderColor = '#db3a04';

      console.log('Wrong');
    }
  } else if (questionPage === 3) {
    if (pagedisable === 0) {
      wrong++;
      pagedisable++;
      moveBtn.style.backgroundColor = '#db3a04';
      answerFour.style.backgroundColor = '#db3a04';

      answerOne.style.borderColor = '#db3a04';
      answerTwo.style.borderColor = '#db3a04';
      answerThree.style.borderColor = '#42c406';
      answerFour.style.borderColor = '#db3a04';

      console.log('Wrong');
    }
  } else if (questionPage === 4) {
    if (pagedisable === 0) {
      correct++;
      pagedisable++;
      moveBtn.style.backgroundColor = '#42c406';
      answerFour.style.backgroundColor = '#42c406';

      answerOne.style.borderColor = '#db3a04';
      answerTwo.style.borderColor = '#db3a04';
      answerThree.style.borderColor = '#db3a04';
      answerFour.style.borderColor = '#42c406';

      console.log('Crrect');
    }
  } else if (questionPage === 5) {
    if (pagedisable === 0) {
      wrong++;
      pagedisable++;
      moveBtn.style.backgroundColor = '#db3a04';
      answerFour.style.backgroundColor = '#db3a04';

      answerOne.style.borderColor = '#42c406';
      answerTwo.style.borderColor = '#db3a04';
      answerThree.style.borderColor = '#db3a04';
      answerFour.style.borderColor = '#db3a04';

      console.log('Wrong');
    }
  }
});

moveBtn.addEventListener('click', function () {
  pagedisable = 0;

  moveBtn.classList.add('transition');

  if (questionPage === 5) {
    questionPage = 6;
    moveBtn.style.display = 'none';
  }

  nextPage();
});

const nextPage = () => {
  if (questionPage === 1) {
    questionPage++;

    questionProgress.innerText = 'Question 2 of 5';
    questionPara.innerText = 'What is the opposite of an utopia?';

    answerOneTxt.innerText = 'Egalitarianism';
    answerTwoTxt.innerText = 'Megatopia';
    answerThreeTxt.innerText = 'Distopia';
    answerFourTxt.innerText = 'Supertopia';

    answerOne.style.borderColor = 'transparent';
    answerTwo.style.borderColor = 'transparent';
    answerThree.style.borderColor = 'transparent';
    answerFour.style.borderColor = 'transparent';

    answerOne.style.backgroundColor = '#2e3856';
    answerTwo.style.backgroundColor = '#2e3856';
    answerThree.style.backgroundColor = '#2e3856';
    answerFour.style.backgroundColor = '#2e3856';
  } else if (questionPage === 2) {
    questionPage++;

    questionProgress.innerText = 'Question 3 of 5';
    questionPara.innerText =
      'What TV show takes place in the fictional city of Bedrock?';

    answerOneTxt.innerText = 'Family guy';
    answerTwoTxt.innerText = 'The flintstones';
    answerThreeTxt.innerText = 'The simpsons';
    answerFourTxt.innerText = 'Rick and morty';

    answerOne.style.borderColor = 'transparent';
    answerTwo.style.borderColor = 'transparent';
    answerThree.style.borderColor = 'transparent';
    answerFour.style.borderColor = 'transparent';

    answerOne.style.backgroundColor = '#2e3856';
    answerTwo.style.backgroundColor = '#2e3856';
    answerThree.style.backgroundColor = '#2e3856';
    answerFour.style.backgroundColor = '#2e3856';
  } else if (questionPage === 3) {
    questionPage++;

    questionProgress.innerText = 'Question 4 of 5';
    questionPara.innerText = 'What did the Romans call Scotland?';

    answerOneTxt.innerText = 'Scotland';
    answerTwoTxt.innerText = 'Britian';
    answerThreeTxt.innerText = 'New rome';
    answerFourTxt.innerText = 'Caledonia';

    answerOne.style.borderColor = 'transparent';
    answerTwo.style.borderColor = 'transparent';
    answerThree.style.borderColor = 'transparent';
    answerFour.style.borderColor = 'transparent';

    answerOne.style.backgroundColor = '#2e3856';
    answerTwo.style.backgroundColor = '#2e3856';
    answerThree.style.backgroundColor = '#2e3856';
    answerFour.style.backgroundColor = '#2e3856';
  } else if (questionPage === 4) {
    questionPage++;

    questionProgress.innerText = 'Question 5 of 5';
    questionPara.innerText =
      'The Black Forest is located in what European country?';

    answerOneTxt.innerText = 'Germany';
    answerTwoTxt.innerText = 'Poland';
    answerThreeTxt.innerText = 'Russia';
    answerFourTxt.innerText = 'Norway';

    answerOne.style.borderColor = 'transparent';
    answerTwo.style.borderColor = 'transparent';
    answerThree.style.borderColor = 'transparent';
    answerFour.style.borderColor = 'transparent';

    answerOne.style.backgroundColor = '#2e3856';
    answerTwo.style.backgroundColor = '#2e3856';
    answerThree.style.backgroundColor = '#2e3856';
    answerFour.style.backgroundColor = '#2e3856';
  } else if (questionPage === 5) {
    questionPage++;

    questionProgress.innerText = 'Question 5 of 5';
    questionPara.innerText =
      'The Black Forest is located in what European country?';

    answerOneTxt.innerText = 'Germany';
    answerTwoTxt.innerText = 'Poland';
    answerThreeTxt.innerText = 'Russia';
    answerFourTxt.innerText = 'Norway';

    answerOne.style.borderColor = 'transparent';
    answerTwo.style.borderColor = 'transparent';
    answerThree.style.borderColor = 'transparent';
    answerFour.style.borderColor = 'transparent';

    answerOne.style.backgroundColor = '#2e3856';
    answerTwo.style.backgroundColor = '#2e3856';
    answerThree.style.backgroundColor = '#2e3856';
    answerFour.style.backgroundColor = '#2e3856';
  } else if (questionPage === 6) {
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
  }
};

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

  questionProgress.innerText = 'Question 1 of 5';
  questionPara.innerText = 'Who was the first u.s president?';

  answerOneTxt.innerText = 'Washington';
  answerTwoTxt.innerText = 'Adams';
  answerThreeTxt.innerText = 'Biden';
  answerFourTxt.innerText = 'Grant';

  answerOne.style.borderColor = 'transparent';
  answerTwo.style.borderColor = 'transparent';
  answerThree.style.borderColor = 'transparent';
  answerFour.style.borderColor = 'transparent';

  answerOne.style.backgroundColor = '#2e3856';
  answerTwo.style.backgroundColor = '#2e3856';
  answerThree.style.backgroundColor = '#2e3856';
  answerFour.style.backgroundColor = '#2e3856';

  answerOne.style.display = 'flex';
  answerTwo.style.display = 'flex';
  answerThree.style.display = 'flex';
  answerFour.style.display = 'flex';
});
