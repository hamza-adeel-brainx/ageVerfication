const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");
const btn = document.getElementById("btn");
btn.addEventListener("click", verifyAge)

function verifyAge() {
    const today = new Date;
    const dob = new Date(year.value,month.value,day.value);

    if (day.value == "" || month.value == "" || year.value.length == "") {
        alert(" fill all fields ");
   
    }

    else if (day.value < 1 || day.value > 31 || month.value < 1 || month.value > 12 || year.value < 1970 || year.value > 2023) {
        alert("Invalid DOB");
    } else {
        var monthDiff = today- dob.getTime();  
        var age_dt = new Date(monthDiff);   
        // console.log(age_dt,"age-dt")
        var year_dt = age_dt.getUTCFullYear();  
        // console.log(year_dt,"year_dt-dt")
        var age = Math.abs(year_dt - 1970);  
        console.log(age)
         if(age < 15)
         {
             alert("Your age is restricted");
                 
         }
         else{
 
             window.location.replace("https://www.google.com/");
         }
    }

}