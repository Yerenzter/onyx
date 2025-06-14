const lines = [
  "Yung nagbabasa ay walang jowa!",
  "Bro, alam mo ba?",
  "Yung mga araw at sandali na nagkakasama at nag uusap kayo palagi...",
  "mga tamis niyang ngiti at boses na hindi mo makakalimutan.",
  "Hinahatid, sinusundo at dinadalawan pag may oras ka sa kanya.",
  "Ngunit sa sandali'y iyon umiba ang ihip ng hangin...",
  "mga pinagsamahan at sandali ay mananatiling alaala nalang.",
  "Alaala na hindi maibabalik...",
  "Pero nababalik ito ng sakit ng nararamdaman mula sa tamis ng nakaraan.",
  "Pero wag mo kakalimutan...",
  "Na magbayad ka na ng utang mo kay Aling Puring.",
  "HAHAHA! You got roasted bro!",
  "BTW, Thank for your attention :)",
];

const slider = new Slider(lines);
const message = document.querySelector("#message");
const liwaton = document.querySelector("#liwaton");

const start = document.querySelector("#start");
const content = document.querySelector("#content");
const startNow = document.querySelector("#start-now");
const bgm = document.querySelector("#bgm");

function slideshow() {
  let runner = setInterval(() => {
    if (slider.count === slider.total) {
      clearInterval(runner);
      slider.count = 0;
      liwaton.style.opacity = 1;
      bgm.pause();
      bgm.currentTime = 0;
      return;
    }
    console.log(slider.count);
    message.textContent = slider.Next();
    message.style.opacity = 1;

    bgm.play();

    setTimeout(() => {
      message.style.opacity = 0;
    }, 4500);
  }, 5000);

  return runner;
}

start.style.opacity = 1;

startNow.addEventListener("click", () => {
  start.style.opacity = 0;

  setTimeout(() => {
    document.body.style.backgroundImage = "url('wwwroot/img/alone.jpg')";
    start.style.display = "none";
    content.style.opacity = 1;

    slideshow();
  }, 1000);
});

liwaton.addEventListener("click", () => {
  slideshow();
  liwaton.style.opacity = 0;
});
