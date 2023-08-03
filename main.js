
function updateDate(){

    let yearResult = document.getElementById("yearResult");
    let monthResult = document.getElementById("monthResult");
    let daysResult = document.getElementById("daysResult");

    let dayTitle = document.getElementById("dayTitle");
    let monthTitle = document.getElementById("monthTitle");
    let yearTitle = document.getElementById("yearTitle");
    
    dayTitle.className = "tittle";
    monthTitle.className = "tittle";
    yearTitle.className = "tittle";
    
    let dayError = document.getElementById("dayError");
    let monthError = document.getElementById("monthError");
    let yearError = document.getElementById("yearError");

    dayError.innerHTML = "";
    monthError.innerHTML = "";
    yearError.innerHTML = "";

    let inputDay = document.getElementById("day-input");
    let valueDay = parseInt(inputDay.value);      

    let inputMonth = document.getElementById("month-input");
    let valueMonth = parseInt(inputMonth.value);  

    let inputYear = document.getElementById("year-input");
    let valueYear = parseInt(inputYear.value);  

    let today = new Date();
    let date = new Date(valueYear, valueMonth -1, valueDay);

    if (date.getDate() === valueDay &&
        date.getMonth() === valueMonth -1 &&
        date.getFullYear() === valueYear &&
        date < today){        
        
        let days = today.getDate() - date.getDate();
        let months = today.getMonth() - date.getMonth();
        let years = today.getFullYear() - date.getFullYear();      

        date.setFullYear(today.getFullYear());

        if (date > today){
            years -= 1;
            months < 0 ? months+= 12: months;
            months === 0 && days < 0 ? months+= 11 : months;
        }

        date.setMonth(today.getMonth()-1);
        let diasMS = today - date;
        diasMS = diasMS / (1000 *60 *60 *24 );

        days < 0 ? days = Math.round(diasMS) : days;
        
        daysResult.innerHTML = days;
        monthResult.innerHTML = months;
        yearResult.innerHTML = years;
        animar();
        
    } else if (valueDay && valueMonth && valueYear) {
        daysResult.innerHTML = "- -";
        monthResult.innerHTML = "- -";
        yearResult.innerHTML = "- -";

        if (date.getDate() != valueDay) {
            dayError.innerHTML = "Must be a valid date";
            dayError.className ="error";        
            dayTitle.classList.add("error");
        } else if (date.getMonth() != valueMonth -1){
            monthError.innerHTML = "Must be a valid month";
            monthError.className ="error";
            monthTitle.className = "error";
        } else {
            yearError.innerHTML = "Must be a valid year";
            yearError.className ="error";
            yearTitle.className = "error";
        }            
        
    }
    
}

async function animar(){
    let yearResult = document.getElementById("yearResult");
    let monthResult = document.getElementById("monthResult");
    let daysResult = document.getElementById("daysResult");
    let img = document.getElementById("img");
    
    yearResult.className = "animacion";
    monthResult.className = "animacion";
    daysResult.className = "animacion";
    img.className = "animacion-imagen";
    setTimeout(() => {
        yearResult.className = "";
        monthResult.className = "";
        daysResult.className = "";        
        img.className = "";    
    }, 600);
    

}