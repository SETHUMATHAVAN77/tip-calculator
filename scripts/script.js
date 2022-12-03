'use strict';
// elements
const billInputEl =document.getElementById('bill');
const personsInputEl =document.getElementById('people');

const tipInputsEl = document.querySelectorAll('.tip-percent');

const customTipEl = document.getElementById('custom-tip');

const btnReset = document.getElementById('btn-reset');

const amountEl = document.getElementById('amount');

const totalEl  = document.getElementById('total');

// global variables
let persons, bill,tipPercent;


// functions
      function init(){
  persons = 0;
  bill = 0;
  tipPercent = 0;

amountEl.innerText =`$0.00`;
totalEl.innerText = `$0.00`;

personsInputEl.value = null;
billInputEl.value = null;
customTipEl.value = null;

      }
    function calcBill(tipPercent){
      persons = Number(personsInputEl.value);
    bill = Number(billInputEl.value);
  
    const totalTip = bill * tipPercent;
    const totalBill = bill + tipPercent;
    const tipPerPerson = totalTip / persons;
    const billPerPerson = totalBill /persons;
    
    amountEl.innerText = '$'+tipPerPerson.toFixed(2);
    totalEl.innerText ='$'+billPerPerson.toFixed(2);
      
    }
  
// }

// event listeners
for(let i=0; i<tipInputsEl.length;i++){
  tipInputsEl[i].addEventListener('click', function(){
    tipPercent = Number(this.value)/100;
    calcBill(tipPercent);
  });
}

customTipEl.addEventListener('change', function(){
  tipPercent = Number(this.value)/100;
  calcBill(tipPercent);
  this.value = null;
  });


  btnReset.addEventListener('click',function(){
    init();
  });

  // initial settings
  init();





