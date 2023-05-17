const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");
const btn = document.getElementById("btn");
btn.addEventListener("click", validateInput)

function validateInput() {
    if (day.value == "" || month.value == "" || year.value.length == "") {
        alert(" fill all fields ");
    } else if (day.value < 1 || day.value > 31 || month.value < 1 || month.value > 12 || year.value < 1970 || year.value > 2023) {
        alert("Invalid DOB");
    } else if (month.value == 2) {
        if (Number(day.value) > 29) {
            alert("Invalid DOB");
        } else if (Number(day.value) == 29) {
            if (Number(year.value) % 4 != 0) {
                alert("Invalid DOB");
            } else {
                verifyAge();
            }
        } else {
            verifyAge();
        }
    } else {
        verifyAge();
    }
}

function verifyAge() {
    const today = new Date;
    const dob = new Date(year.value, month.value, day.value);
    let yearsDiff = today.getFullYear() - Number(year.value)
    if (yearsDiff < 15) {
        alert("age restricted");
    } else if (yearsDiff == 15) {
        let monthValue = Number(month.value);
        let currMonth = today.getMonth() + 1;
        if (monthValue < currMonth) {
            alert("age restricted");
        } else if (monthValue == currMonth) {
            let dayValue = Number(day.value);
            let currDay = today.getDate();
            if (dayValue < currDay) {
                alert("age restricted");
            } else {
                window.location.replace("https://www.google.com/");
            }
        }
    } else {
        window.location.replace("https://www.google.com/");
    }
}