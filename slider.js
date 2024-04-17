let monthlyinput  = document.getElementById("monthly-investment-input")
let monthlyslider = document.getElementById("monthly-investment-slider")

let returninput  = document.getElementById("expected-returns-input")
let returnslider = document.getElementById("expected-returns-slider")

let yearinput = document.getElementById("time-period-input")
let yearslider = document.getElementById("time-period-slider")




function slider() {

    valpercent = (monthlyslider.value/monthlyslider.max)*100
    monthlyslider.style.background = `linear-gradient(to right , #00d09c ${valpercent}% ,  #ecedef ${valpercent}%)`

     monthlyinput.addEventListener("input" , (e)=>{
       valpercent = (e.target.value/monthlyinput.max)*100
     monthlyslider.style.background = `linear-gradient(to right , #00d09c ${valpercent}% ,  #ecedef ${valpercent}%)`
     })

    monthlyslider.addEventListener("input" , (e)=>{
        valpercent = (e.target.value/monthlyslider.max)*100
 monthlyslider.style.background = `linear-gradient(to right , #00d09c ${valpercent}% ,  #ecedef ${valpercent}%)`
    })
    

    valpercent = (returnslider.value/returnslider.max)*100
    returnslider.style.background = `linear-gradient(to right , #00d09c ${valpercent}% , #ecedef ${valpercent}%)`

    
    returninput.addEventListener("input" , (e)=>{
        valpercent = (e.target.value/returninput.max)*100
        returnslider.style.background = `linear-gradient(to right , #00d09c ${valpercent}% , #ecedef ${valpercent}%)`
    })

    returnslider.addEventListener("input" , (e)=>{
        valpercent = (e.target.value/returnslider.max)*100
       returnslider.style.background = `linear-gradient(to right , #00d09c ${valpercent}% , #ecedef ${valpercent}%)`
    })

    valpercent = (yearslider.value/yearslider.max)*100
    yearslider.style.background = `linear-gradient(to right , #00d09c ${valpercent}% , #ecedef ${valpercent}%)`
    
    yearinput.addEventListener("input" , (e)=>{
        valpercent = (e.target.value/yearinput.max)*100
        yearslider.style.background = `linear-gradient(to right , #00d09c ${valpercent}% , #ecedef ${valpercent}%)`
    })

   yearslider.addEventListener("input" , (e)=>{
    valpercent = (e.target.value/yearslider.max)*100
    yearslider.style.background = `linear-gradient(to right , #00d09c ${valpercent}% , #ecedef ${valpercent}%)`
   })


}

slider();


