//define function
function calculate(){
        //read value from input field
    let day = document.getElementById('day1').value;
    let month = document.getElementById('month1').value;
    let year = document.getElementById('year1').value;

    let dayCt = document.getElementById('day');
    let monthCt = document.getElementById('months');
    let yearCt = document.getElementById('year');

    //setting present day
    let date = new Date();
    let d2 = date.getDate();
    let m2 = date.getMonth(); m2++;
    let y2 = date.getFullYear();

    let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if(day>d2){
        d2=d2+months[m2-1];
        m2--;
    }

    if(month > m2){
        m2=m2+12;
        y2--;
    }

    dayCt.innerText = d2-day;
    monthCt.innerText = m2-month;
    yearCt.innerText = y2-year;
}