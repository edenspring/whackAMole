// Write your JS here.

// window.addEventListener('DOMContentLoaded', () => {

//   setInterval(() => {
//     const moleHeads = document.querySelectorAll('.wgs__molehead');
//     for (let moleHead of moleHeads) {
//       moleHead.classList.toggle('wgs__molehead--hidden');
//     }
//   }, 1000);

// });
document.addEventListener("DOMContentLoaded", () => {

  let heads = document.querySelectorAll(".wgs__molehead")
  heads.forEach(head=> head.addEventListener("click", (event)=>{
    if(event.target.className === "wgs__molehead"){
      event.target.classList.add("wgs__molehead--hidden", "wgs__molehead--whacked")
    }
  }))

  function popUpRandomMole() {
    let moles = document.querySelectorAll(".wgs__molehead:not(.wgs__molehead--whacked)");
    if(moles.length === 0){
      // const winning = document.createElement('img')
      // winning.src = './youwin.jpg'
      // winning.className = 'end'
      let pf = document.querySelector('.pf')
      pf.innerHTML = `<img class='end' src='./youwin.jpg'>`;
      return;
    }
    const rand = Math.floor(Math.random() * moles.length);
    let selected = moles[rand];
    selected.classList.remove("wgs__molehead--hidden");
    setTimeout(hideMole, 1000, selected);
  }

  function hideMole(mole) {
    mole.classList.add("wgs__molehead--hidden");
    setTimeout(popUpRandomMole, 1000);
  }

  popUpRandomMole();
});
