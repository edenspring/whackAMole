// Write your JS here.

// window.addEventListener('DOMContentLoaded', () => {

//   setInterval(() => {
//     const moleHeads = document.querySelectorAll('.wgs__molehead');
//     for (let moleHead of moleHeads) {
//       moleHead.classList.toggle('wgs__molehead--hidden');
//     }
//   }, 1000);

// });

let counter = 0;
let turnsRemaining = 30;
let timer = 1000;

document.addEventListener("DOMContentLoaded", () => {

  let score = document.getElementById('score');
  let remaining = document.getElementById('moles');

  let heads = document.querySelectorAll(".wgs__molehead")
  heads.forEach(head=> head.addEventListener("click", (event)=>{
    if(event.target.className === "wgs__molehead"){
      event.target.classList.add("wgs__molehead--hidden")
      counter++;
      score.innerHTML = `Score: ${counter}`;
      timer = timer - 25;
    }
  }))

  function popUpRandomMole() {
    let moles = document.querySelectorAll(".wgs__molehead");
    if(turnsRemaining === 0){
      // const winning = document.createElement('img')
      // winning.src = './youwin.jpg'
      // winning.className = 'end'
      let pf = document.querySelector('.pf')
      let message = document.getElementById('message');
      message.innerHTML = "Game Over";
      pf.innerHTML = `<img class='end' src='./youwin.jpg'>`;
      return;
    }
    const rand = Math.floor(Math.random() * 8);
    let selected = moles[rand];
    selected.classList.remove("wgs__molehead--hidden");
    setTimeout(hideMole, timer, selected);
  }

  function hideMole(mole) {
    mole.classList.add("wgs__molehead--hidden");
    turnsRemaining--;
    remaining.innerHTML = `Moles remaining: ${turnsRemaining}`;
    setTimeout(popUpRandomMole, timer);
  }

  popUpRandomMole();
});
