//doms
var audio = document.querySelector(".audio");
var mainForm = document.querySelector(".main-form");
var input = document.querySelector(".input-text");
var submitBtn = document.querySelector(".submit-btn");
var answer = document.querySelector(".info-text");
var body = document.querySelector(".body");
//js vars
var rec = new webkitSpeechRecognition();
mainForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  input.classList.add("visually-hidden");
  submitBtn.classList.add("submit-btn--circle");
  submitBtn.classList.remove("visually-hidden");
  answer.classList.remove("d-none")
  audio.play();
  setTimeout(() => {
    rec.start();
    body.classList.add("body--light")
  }, 4700);
});