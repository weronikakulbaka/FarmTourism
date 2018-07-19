import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: "./app.component.html",
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  photoUrl = 'assets/images/agro.jpg';
  content: string =``;
  constructor(){ 
   
  }
  
  showContent(){
    document.getElementById("overlay").style.display = "block";
    document.getElementById("back").style.display = "inline";

    this.content = `<p>Jeśli szukają Państwo świetnego miejsca do odpoczynku oraz wyciszenia się, to ta oferta jest dla Was. 
    Nie znajdą Państwo ciekawszego i bardziej kolorowego miejsca w Polsce, niż niniejsze Gospodarstwo jak i jego okolica. 
    Przepiękny krajobraz, interesujące miejsca, pasjonujące trasy wycieczek pieszych - oraz rowerowych, to tylko 
    nieliczne atuty tej oferty. Prócz wspaniałego położenia geograficznego, gospodarstwo posiada, również doskonałe warunki 
    domowe: dwa pokoje, dwie łazienki, kuchnia, przedpokój - a to wszystko do Państwa dyspozycji. Przed domkiem wypoczynkowym 
    znajduje się taras, gdzie mogą państwo odpocząć. Wokół domu rosną piękne kwiaty, które nadają urokliwości budynkowi.
    <br /><br />
    Do dyspozycji gości: <br />
    Wypożyczalnia sprzętu rekreacyjnego, Grill, Miejsce na ognisko 
    <br /><br />
    Udogodnienia:<br />
    Możliwość zlecenia prasowania, Możliwość zlecenia prania
    <br /><br />
    Dla zmotoryzowanych:<br />
    Parking
    <br /><br />
    Atrakcje dla dzieci:<br />
    Plac zabaw dla dzieci
    <br /><br />
    Cena: od 30 zł za osobę</p>`;

    document.getElementById("text").style.display = "block";
    document.getElementById('text').innerHTML = this.content;
  }

  showContact(){
    document.getElementById("overlay").style.display = "block";
    document.getElementById("back").style.display = "inline";

    this.content = `<p>Aby zarezerwować pokój/domek proszę dzwonić pod numer:
    <br /><br />
    <i class="fas fa-phone"></i> 
    693-537-160
    </p>`;
    
    document.getElementById("text").style.display = "block";
    document.getElementById('text').innerHTML = this.content;
  }

  showGallery(){
    document.getElementById("overlay").style.display = "block";
    document.getElementById("back").style.display = "inline";
      this.content = `
      <div class="content" style="max-width:1500px">
        <img class="mySlides" src="assets/images/agro1.jpg" style="width:100%;max-height:1365px">
        <img class="mySlides" src="assets/images/agro2.jpg" style="width:100%;max-height:1365px">
        <img class="mySlides" src="assets/images/agro3.jpg" style="width:100%;max-height:1365px">
        <img class="mySlides" src="assets/images/agro4.jpg" style="width:100%;max-height:1365px">
      </div>`;

    document.getElementById("text").style.display = "block";
    document.getElementById('text').innerHTML = this.content;
  }
  

  off(){
    document.getElementById("overlay").style.display = "none";
    document.getElementById("back").style.display = "none";
    document.getElementById("text").style.display = "none";
  }
}
