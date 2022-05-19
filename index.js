const billValue = document.getElementById("bill_value");
const tip = document.getElementById("tipvalue_percentage");
const peopleValue = document.getElementById("people");
const resetButton = document.querySelector('button')

let total = document.getElementById("tip_value_total");
let tip_percentage = document.getElementById("tip_percentage");
let tipValue = document.getElementById("tip_value");
let numberPeople = document.getElementById("number_of_people");
let billForPeople = document.getElementById("bill_for_people");
let tipForPeople = document.getElementById("tip_for_people");
let valor = 0;
let gorjeta = 0;
let people = 1;



billValue.addEventListener("input", handleUserInput);
tip.addEventListener("input", handleTip);
peopleValue.addEventListener("input", qunatityOfPeople);
resetButton.addEventListener('click',reset)


function handleUserInput(evento) {
  valor = Number(evento.target.value);
  billTotal();
}

function handleTip(e) {
  gorjeta = Number(e.target.value);
  tip_percentage.textContent = `${gorjeta.toString()}%`;
  console.dir(e)
  billTotal();
}

function billTotal() {
  let soma = valor + (valor * gorjeta) / 100;
  total.textContent = `$${soma.toString()}`;
  tipValue.textContent = `$${(valor * gorjeta) / 100}`;
  billEach()
}

function qunatityOfPeople(event) {
  people = Number(event.target.value);
  numberPeople.textContent = `${people} people`;
  billEach()
};

function billEach(){
  billForPeople.textContent = (valor / people).toFixed(2)
  tipForPeople.textContent = ((valor * gorjeta/100)/people).toFixed(2)
}

function reset(){
  billValue.value = "";
  total.textContent ="$"
  tipValue.textContent = "$";
  numberPeople.textContent = 'people';
  billForPeople.textContent = "$";
  tipForPeople.textContent ="$";
  tip.value = 0
  peopleValue.value = 1
  tip_percentage.textContent = "%"
}