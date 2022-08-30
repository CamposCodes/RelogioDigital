
let body = document.querySelector('body');
let localImage = document.querySelector('#imageTime');

function styleMorning(){
    body.style.background = "var(--morning)";
    localImage.innerHTML = '<img src="./imagens/morning.png" alt="">';
}
function styleAfternoon(){
    body.style.background = "var(--afternoon)";
    localImage.innerHTML = '<img src="./imagens/afternoon.png" alt="">';
}
function styleNight(){
    body.style.background = "var(--night)";
    localImage.innerHTML = '<img src="./imagens/nigth.png" alt="">';
}

styleAfternoon();

//////////////////////////////////////////////////

const horas = document.querySelector('#horas');
const minutos = document.querySelector('#minutos');
const segundos = document.querySelector('#segundos');

const relogio = setInterval(function time(){
    
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    if(hr < 10){
       hr = '0' + hr; 
    } 
    if(min < 10){
       min = '0' + min; 
    } 
    if(s < 10){
       s = '0' + s; 
    }
    
    if(hr >= '00' && hr < '12'){
        styleMorning();
    }
    else if(hr >='12' && hr < '18' ){
        styleAfternoon();
    }
    else{
        styleNight();
    }
        
    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;
});

const dia = document.querySelector('#dia');
const mes = document.querySelector('#mes');
const ano = document.querySelector('#ano');

const data = setInterval(function time(){
    
    let dateToday = new Date();
    let d = dateToday.getDate();
    let m = dateToday.getUTCMonth() + 1;
    let a = dateToday.getFullYear();

    if(d < 10){
        d = '0' + d; 
    } 
    if(m < 10){
        m = '0' + m; 
    } 

    dia.textContent = d;
    mes.textContent = m;
    ano.textContent = a;
});

