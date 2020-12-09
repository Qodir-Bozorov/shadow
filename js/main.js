//doms
var audio = document.querySelector(".audio");
var source = document.querySelector(".source");
var mainForm = document.querySelector(".main-form");
var input = document.querySelector(".input-text");
var submitBtn = document.querySelector(".submit-btn");
var answer = document.querySelector(".info-text");
var body = document.querySelector(".body");
//js vars
var rec = new webkitSpeechRecognition();
rec.lang = 'uz-UZ';
var myWords = [];
var botWords = [];

var audioplay = false;

// functions
function renderResult(text) {
  answer.textContent = text;
};

mainForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  input.classList.add("visually-hidden");
  submitBtn.classList.add("submit-btn--circle");
  submitBtn.classList.remove("visually-hidden");
  answer.classList.remove("d-none");
  audio.play();
  setTimeout(() => {
    rec.start();
    body.classList.add("body--light")
  }, 4700);
});

submitBtn.focus();


function detectWord(words) {
  for (let i = 0; i < myWords.length; i++) {
    const word = myWords[i];
    if (word.includes(words)) {
      return true;
    } else {
      return false;
    }
  }
};

rec.onresult = function (evt) {
  const voiceCode = evt.results[0][0].transcript;
  botWords.push(voiceCode);
  console.log(botWords);

  if (voiceCode.includes("yaxshi")) {
    renderResult("Menda biror gaping bormi?");
    setTimeout(() => {
      renderResult("Sal bandman ishing bo'lsa aytaver");
    }, 2000);
  } else if (voiceCode.includes("qoʻshiq")) {
    renderResult("Aha xo'p Xcho - No bro! tinglang");
    source.setAttribute('src', "aud/xcho_-_no-bro.mp3");
    source.setAttribute('type', "audio/mp3");
    audio.load();
    setTimeout(() => {
      audio.play();
      rec.stop();
      audio.classList.remove("visually-hidden");
    }, 4000);
    myWords.push(voiceCode);
  } else if (voiceCode.includes("salom")) {
    setTimeout(() => {
      renderResult("Va alaykum assalom! 🤨");
    }, 2000);
    myWords.push(voiceCode);
  } else if (voiceCode.includes("gaplar")) {
    renderResult("Tinchlik xudoga shukr!")
  }


  if (voiceCode.includes("qodir")) {
    if (detectWord("qodir")) {
      renderResult("Aha tanidim seni nima gap?");
      myWords.push(voiceCode);
    } else {
      renderResult("Assalomu alaykum! Qodir yaxshimi ishlaring? Nima yangiliklar");
      source.setAttribute('src', "aud/qodir.ogg");
      setTimeout(() => {
        audio.load();
        audio.play();
      }, 1000);
      myWords.push(voiceCode);
    }
  } else if (voiceCode.includes("zafar")) {
    renderResult("Ha Zafar ishlaring yaxshimi?");
    setTimeout(() => {
      renderResult("Men Abducoderman");
    }, 2000);
  } if (voiceCode.includes("tinchmisan")) {
    renderResult("Ha rahmat");
    setTimeout(() => {
      renderResult("O'zing tinchmi?");
    }, 2000);
    setTimeout(() => {
      renderResult("Senga bitta savol bor... Beraymi?");
    }, 4000);
    if (voiceCode.includes("mayli")) {
      renderResult("1 kilo guruchda nechta donasi bor?")
      if (voiceCode.includes("bilmadim")) {
        renderResult("Shuni sanab kel gaplashamiz...")
      }
    }
  };

  rec.onend = function (evt) {
    setTimeout(() => {
      rec.start();
    }, 10);
  }
};