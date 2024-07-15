hrs=0;
min=0;
sec=0;

if(hrs<10){
    hrs="0"+hrs
}
if(sec<10){
    sec="0"+sec
}
if(min<10){
    min="0"+min
}
document.getElementsByClassName("htime")[0].innerHTML = hrs
document.getElementsByClassName("htime")[1].innerHTML = min
document.getElementsByClassName("htime")[2].innerHTML = sec


function funstart(){
    q=setInterval(stopwatch,1000)
}
function funstop(){
    clearInterval(q)
}
function funreset(){
    document.getElementsByClassName("htime")[0].innerHTML = "00"
    document.getElementsByClassName("htime")[1].innerHTML = "00"
    document.getElementsByClassName("htime")[2].innerHTML = "00"
    hrs="00";
    min="00";
    sec="00";
    clearInterval(q)
}
function stopwatch(){
    sec++;
    if(sec  == 60){
        min++;
        sec=0;
        if(min<10){
            min="0"+min
        }
    }
    if(min  == 60){
        hrs++;
        min=0;
        sec=0;
        if(hrs<10){
            hrs="0"+hrs
        }
    }
   
    if(sec<10){
        sec="0"+sec
    }
   
    document.getElementsByClassName("htime")[0].innerHTML = hrs
    document.getElementsByClassName("htime")[1].innerHTML = min
    document.getElementsByClassName("htime")[2].innerHTML = sec
}
