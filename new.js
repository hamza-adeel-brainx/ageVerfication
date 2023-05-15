document.getElementById("myBtn").addEventListener("click", (e) => verify(e));



function verify(e)
{
    e.preventDefault();
    let value1 = document.formdate.day.value;
    let value2 = document.formdate.month.value;
    let value3 = document.formdate.year.value;
    const dob = new Date(value3,value2,value1);

    



    let day = parseInt(value1);
    let month = parseInt(value2);
    let year = parseInt(value3);

    let ListofDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (month == 1 || month > 2) {
        if (day > ListofDays[month - 1]) {
            alert("Invalid date")     
            return false;
        }
    } else if (month == 2) {
        let leapYear = false;
        if ((!(year % 4) && year % 100) || !(year % 400)) leapYear = true;
        if ((leapYear == false) && (day >= 29)) {
            alert("Invalid date")
            return false;
        }
        else
            if ((leapYear == true) && (day > 29)) {
                alert('Invalid date format!');
                return false;
            }
    }

    if(value1=="" || value2=="" || value3=="")
    {
        alert("Day, Date or Year can not be empty");
    
    }
    else if(value1<=0 || value2<=0 || value3<=0 || value1 >31 || value2>12 || value3>2023 || value3 < 1970)
    {
        alert("Invalid");
        return false;
    }

    else
    {

       var month_diff = Date.now() - dob.getTime();  
       var age_dt = new Date(month_diff);   
       var year_dt = age_dt.getUTCFullYear();  
       var age = Math.abs(year_dt - 1970);  
        if(age < 15)
        {
            alert("Your age is restricted");
                
        }
        else{

            window.location.replace("https://www.google.com/");
        }
    }



}