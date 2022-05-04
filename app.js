// ELEMENT SELECTORS
let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");

// VARIABLES
let count = 0;

// FUNCTIONS
//This function is called when the user clicks the increment button
function increment() {
  count += 1;
  countEl.textContent = count;
}
//This function is called when the user clicks the save button
function save() {
  let countStr = count ;
  countEl.textContent= 0;
  if(count<1){
      let number = document.createElement('p')
      number.className = 'previous-day previous-day-red'
      number.innerHTML = `${countStr}`
      let div = document.querySelector('div.previous-day-container')
      div.appendChild(number)
  }
  else if(count>=1){
    let number = document.createElement('p')
      number.className = 'previous-day previous-day-green'
      number.innerHTML = `${countStr}`
      let div = document.querySelector('div.previous-day-container')
      div.appendChild(number)
}
  count = 0;
}