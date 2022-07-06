// this works by randomly generating a question from each of the functions
// below, then the main function displays them all for the user as
// a quiz.
// THESE ARE ALL Y/N QUESTIONS.

window.onquestion = 0;

function set_question(array) {
  var random_pos = Math.floor(Math.random() * array.length);
  document.getElementById("question").innerHTML = array[random_pos];
}

function generate_question_1() {
  document.getElementById("number").innerHTML = "1";
  var possible_questions = ["Are you below 18?"];
  set_question(possible_questions);
}

function generate_question_2() {
  document.getElementById("number").innerHTML = "2";
  var possible_questions = [
    "Do you already have a pet?",
    "Have you played video games before?",
    "Do you have an iPhone?",
  ];
  set_question(possible_questions);
}

function generate_question_3() {
  document.getElementById("number").innerHTML = "3";
  var possible_questions = [
    "Do you use an alarm clock daily?",
    "Do you believe that this will work?",
    "Does your house have central heating?",
  ];
  set_question(possible_questions);
}

function generate_question_4() {
  document.getElementById("number").innerHTML = "4";
  var possible_questions = [
    "Are you a man/male?",
    "Are you a woman/female?",
    "Are you non-binary?",
  ];
  set_question(possible_questions);
}

function generate_question_5() {
  document.getElementById("number").innerHTML = "5";
  var possible_questions = [
    "Does your house have a lot of space?",
    "Does your friend group have over five people in it?",
    "Have you ever killed an animal?",
  ];
  set_question(possible_questions);
}

function generate_question_6() {
  document.getElementById("number").innerHTML = "6";
  var possible_questions = [
    "Do you spend over 3 hours a day (of your free time) on a computer?",
    "Have you ever said 'GG EZ' unironically in a game?",
    "Are you using a laptop?",
  ];
  set_question(possible_questions);
}

function generate_question_7() {
  document.getElementById("number").innerHTML = "7";
  var possible_questions = [
    "Do you think you'd be good at feeding a pet?",
    "Do you go on holidays often?",
    "Do you see yourself cleaning up your pet's excretion?",
  ];
  set_question(possible_questions);
}

function generate_question_8() {
  document.getElementById("number").innerHTML = "8";
  var possible_questions = [
    "Would you allow your pet to go around your house?",
    "Would you allow your pet to go outside?",
    "Would you not allow your pet to go upstairs in your house?",
  ];
  set_question(possible_questions);
}

function generate_question_9() {
  document.getElementById("number").innerHTML = "9";
  var possible_questions = ["Can I be arsed to write more questions?"];
  set_question(possible_questions);
}

function generate_question_10() {
  document.getElementById("number").innerHTML = "10";
  var possible_questions = ["No, I can't."];
  set_question(possible_questions);
}

function submit() {
  generate_new_question();
}

function generate_new_question() {
  if (onquestion == 1) {
    generate_question_1();
  } else if (onquestion == 2) {
    generate_question_2();
  } else if (onquestion == 3) {
    generate_question_3();
  } else if (onquestion == 4) {
    generate_question_4();
  } else if (onquestion == 5) {
    generate_question_5();
  } else if (onquestion == 6) {
    generate_question_6();
  } else if (onquestion == 7) {
    generate_question_7();
  } else if (onquestion == 8) {
    generate_question_8();
  } else if (onquestion == 9) {
    generate_question_9();
  } else if (onquestion == 10) {
    generate_question_10();
  } else {
    done();
  }
  onquestion += 1;
}

function reset() {
  onquestion = 0;
  document.getElementById("first").innerHTML =
    "Question <span id='number'>1</span>";
  document.getElementById("number").innerHTML = "1";
  document.getElementById("question").innerHTML = "";
  onquestion = 1;
  generate_new_question();
  document.getElementById("buttons").innerHTML = `
  <button class="submit-button" id="true" onclick="submit(); return false">
    YES
  </button>
  <button class="submit-button" id="false" onclick="submit(); return false">
    NO
  </button>`;
}

function done() {
  document.getElementById("first").innerHTML = "You have finished the quiz!";
  pet_array = [
    "Cat",
    "Dog",
    "Hamster",
    "Parrot",
    "Guinea Pig",
    "Rabbit",
    "Axolotl",
  ]; // ignore this. this generation is based off of the person's answers!
  var random_pos = Math.floor(Math.random() * pet_array.length);
  document.getElementById("question").innerHTML =
    "As a pet, you should get a " + pet_array[random_pos] + "!";
  document.getElementById("buttons").innerHTML = `
  <button class="submit-button" id="true" onclick="reset(); return false">
    Do the test again
  </button>
  `;
}
