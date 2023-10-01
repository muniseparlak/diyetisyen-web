var saatEl = document.querySelector('#saat')
var dakikaEl =document.querySelector('#dakika')
var saniyeEl = document.querySelector('#saniye')
var pmamEl = document.querySelector('#pmam')


function guncelSaat (){
    let hour = new Date().getHours()
    let minute = new Date().getMinutes()
    let seconds = new Date().getSeconds()
    let pmam = "AM"


if(hour > 12){
    hour = hour -12;
    pmam = "PM"
}

hour = hour <10 ? "0"+hour : hour;
minute = minute <10 ? "0"+minute : minute;
seconds = seconds<10 ? "0"+seconds : seconds


saatEl.innerHTML = hour;
dakikaEl.innerHTML = minute;
saniyeEl.innerHTML =seconds;
pmamEl.innerHTML = pmam;
setTimeout(() => {
    guncelSaat();
}, 1000);
}


guncelSaat()



let button = document.querySelector('.button')
let saglik = document.querySelector('.saglık')

button.addEventListener('click', (e)=> {
    e.preventDefault()
 const boy = document.querySelector('.boy').value
 const kilo = document.querySelector('.kilo').value
    let bki = document.querySelector('.sonuc')

    var b = Number(boy)
    var k = Number(kilo)

   var sonuc = (k / (b*b)).toFixed(3)

  bki.textContent =sonuc

  if(sonuc>=0 && sonuc<=18.4){
    bki.textContent =sonuc
    saglik.innerHTML = "Zayıf"
  }else if(sonuc>=18.5 && sonuc<=24.9){
    bki.textContent =sonuc
    saglik.innerHTML = "Normal"
    }else if(sonuc>=25 && sonuc<=29.9){
        bki.textContent =sonuc
    saglik.innerHTML = "Hafif Kilolu"
   }else if(sonuc>=30 && sonuc<=34.9){
    bki.textContent =sonuc
    saglik.innerHTML = "Obez"}
})




