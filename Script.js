let investedAmount = document.getElementById("invested-amount");
let returnamount = document.getElementById("return-amount")
let totalvalue = document.getElementById("total-value")
let circle = document.querySelector('.cb-circle')
// Monthly Investment
let monthlyInvestmentInput = document.getElementById("monthly-investment-input");
let monthlyInvestmentSlider = document.getElementById("monthly-investment-slider");

// Expected Returns
let expectedReturnsInput = document.getElementById("expected-returns-input");
let expectedReturnsSlider = document.getElementById("expected-returns-slider");

// Time Period
let timePeriodInput = document.getElementById("time-period-input");
let timePeriodSlider = document.getElementById("time-period-slider");

circle.style.background = `conic-gradient(#98a4ff ${185}deg  , #5367ff 0deg)`

// Event listeners
monthlyInvestmentInput.addEventListener("input", (e) => {
  monthlyInvestmentSlider.value = e.target.value;

  investedAmount.innerHTML = '₹' +  (e.target.value *12 * timePeriodInput.value)

  totalvalue.innerHTML = '₹' +  Math.round(((((1+(expectedReturnsInput.value/1200))**(timePeriodInput.value*12))-1)/(expectedReturnsInput.value/1200))*e.target.value*(1+(expectedReturnsInput.value/1200)))

 returnamount.innerHTML = '₹' + Math.round(((((1+(expectedReturnsInput.value/1200))**(timePeriodInput.value*12))-1)/(expectedReturnsInput.value/1200))*e.target.value*(1+(expectedReturnsInput.value/1200)) - ((e.target.value *12 * timePeriodInput.value)))



});

monthlyInvestmentSlider.addEventListener("input", (e) => {
  monthlyInvestmentInput.value = e.target.value;
  investedAmount.innerHTML = '₹' + (e.target.value * 12 * timePeriodSlider.value);

  
  totalvalue.innerHTML = '₹' + Math.round(((((1+(expectedReturnsSlider.value/1200))**((timePeriodSlider.value*12) ))-1)/(expectedReturnsSlider.value/1200))*e.target.value*(1+((expectedReturnsSlider.value)/1200)))

  returnamount.innerHTML = '₹' + Math.round(((((1+(expectedReturnsSlider.value/1200))**((timePeriodSlider.value*12) ))-1)/(expectedReturnsSlider.value/1200))*e.target.value*(1+((expectedReturnsSlider.value)/1200)) - (e.target.value * 12 * timePeriodSlider.value))



});


// Expected Returns
expectedReturnsInput.addEventListener("input", (e) => {
  expectedReturnsSlider.value = e.target.value;

 
totalvalue.innerHTML = '₹' + Math.round(((((1+e.target.value/1200)**((timePeriodInput.value*12)))-1)/(e.target.value/1200))*monthlyInvestmentInput.value*((e.target.value/1200)+1))

let j= Math.round(((((1+e.target.value/1200)**((timePeriodInput.value*12)))-1)/(e.target.value/1200))*monthlyInvestmentInput.value*((e.target.value/1200)+1))

returnamount.innerHTML = '₹' + Math.round(((((1+e.target.value/1200)**((timePeriodInput.value*12)))-1)/(e.target.value/1200))*monthlyInvestmentInput.value*((e.target.value/1200)+1) - (monthlyInvestmentInput.value * 12 * timePeriodInput.value))

let k = Math.round(((((1+e.target.value/1200)**((timePeriodInput.value*12)))-1)/(e.target.value/1200))*monthlyInvestmentInput.value*((e.target.value/1200)+1) - (monthlyInvestmentInput.value * 12 * timePeriodInput.value))

circle.style.background = `conic-gradient(#98a4ff ${((100-((k/j)*100))*3.6)}deg  ,#5367ff 0deg)`


});

expectedReturnsSlider.addEventListener("input", (e) => {
  expectedReturnsInput.value = e.target.value;

  totalvalue.innerHTML = '₹' + Math.round(((((1+e.target.value/1200)**((timePeriodSlider.value*12)))-1)/(e.target.value/1200))*monthlyInvestmentSlider.value*((e.target.value/1200)+1))
  
let x = Math.round(((((1+e.target.value/1200)**((timePeriodSlider.value*12)))-1)/(e.target.value/1200))*monthlyInvestmentSlider.value*((e.target.value/1200)+1))

 returnamount.innerHTML =  '₹' + Math.round(((((1+e.target.value/1200)**((timePeriodSlider.value*12)))-1)/(e.target.value/1200))*monthlyInvestmentSlider.value*((e.target.value/1200)+1) - (monthlyInvestmentSlider.value * 12 * timePeriodSlider.value))

 let y = Math.round(((((1+e.target.value/1200)**((timePeriodSlider.value*12)))-1)/(e.target.value/1200))*monthlyInvestmentSlider.value*((e.target.value/1200)+1) - (monthlyInvestmentSlider.value * 12 * timePeriodSlider.value))



 circle.style.background = `conic-gradient(#98a4ff ${((100-((y/x)*100))*3.6)}deg  ,#5367ff 0deg)`


});

// Time Period
timePeriodInput.addEventListener("input", (e) => {
  timePeriodSlider.value = e.target.value;

  investedAmount.innerHTML = '₹' + (monthlyInvestmentSlider.value * 12 * timePeriodInput.value);

  totalvalue.innerHTML = '₹' + Math.round(((((1+(expectedReturnsInput.value/1200))**(e.target.value*12))-1)/(expectedReturnsInput.value/1200))*(1+(expectedReturnsInput.value/1200))* monthlyInvestmentInput.value)

let g = Math.round(((((1+(expectedReturnsInput.value/1200))**(e.target.value*12))-1)/(expectedReturnsInput.value/1200))*(1+(expectedReturnsInput.value/1200))* monthlyInvestmentInput.value)

   returnamount.innerHTML =  '₹' + Math.round(((((1+(expectedReturnsInput.value/1200))**(e.target.value*12))-1)/(expectedReturnsInput.value/1200))*(1+(expectedReturnsInput.value/1200))* monthlyInvestmentInput.value - ((monthlyInvestmentInput.value * 12 * e.target.value)))

 let h = Math.round(((((1+(expectedReturnsInput.value/1200))**(e.target.value*12))-1)/(expectedReturnsInput.value/1200))*(1+(expectedReturnsInput.value/1200))* monthlyInvestmentInput.value - ((monthlyInvestmentInput.value * 12 * e.target.value)))

 circle.style.background = `conic-gradient(#98a4ff ${((100-((h/g)*100))*3.6)}deg  ,#5367ff 0deg)`

});

timePeriodSlider.addEventListener("input", (e) => {
  timePeriodInput.value = e.target.value;
  investedAmount.innerHTML = '₹' + (e.target.value * 12 * monthlyInvestmentSlider.value);

  totalvalue.innerHTML =  '₹' + Math.round(((((1+(expectedReturnsSlider.value/1200))**(e.target.value*12))-1)/(expectedReturnsSlider.value/1200))*(1+(expectedReturnsSlider.value/1200))* monthlyInvestmentSlider.value)

  let t = Math.round(((((1+(expectedReturnsSlider.value/1200))**(e.target.value*12))-1)/(expectedReturnsSlider.value/1200))*(1+(expectedReturnsSlider.value/1200))* monthlyInvestmentSlider.value)

  returnamount.innerHTML =  '₹' +  Math.round(((((1+(expectedReturnsSlider.value/1200))**(e.target.value*12))-1)/(expectedReturnsSlider.value/1200))*(1+(expectedReturnsSlider.value/1200))* monthlyInvestmentSlider.value  - ((monthlyInvestmentSlider.value * 12 * e.target.value)))

  let u = Math.round(((((1+(expectedReturnsSlider.value/1200))**(e.target.value*12))-1)/(expectedReturnsSlider.value/1200))*(1+(expectedReturnsSlider.value/1200))* monthlyInvestmentSlider.value  - ((monthlyInvestmentSlider.value * 12 * e.target.value)))

  circle.style.background = `conic-gradient(#98a4ff ${((100-((u/t)*100))*3.6)}deg  ,#5367ff 0deg)`

});

































