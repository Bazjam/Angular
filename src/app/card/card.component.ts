import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card', //
  templateUrl: './card.component.html', // link na html
  styleUrls: ['./card.component.scss'], //link na sccs - style
  interpolation: ['{{', '}}'], // Ustanovka svoej interpoljaciji, zamena {} na [] i t.d.

})

export class CardComponent implements OnInit {
  
  title = 'My Title';

  changeTitle() {
    this.title = 'BTN Change This Title';
  }

  number = 5;
  array = [1, 4, 5, 4, 12, 35]; // Angular po umolcaniju vizivaet join ctobi preobrozovatj v straku i vivesti nash [] na ekran
  object = {
    // Angular pozvoljaet vivesti oject v html
    name: 'Sergio',
    age: 36,
    country: 'Latvija',
    city: 'Riga',
  };

  func() {
    return 'String from Function'; // esli funkcija vozvrashaet stoku to ejo mozno naprjamuju peredatj v HTML
  }

  funcBtn() {
    setTimeout(() => {
      this.imgUrl = this.imgUrl2;
    }, 3000);
  }


  inputText = ""

  funcModelChange(){
    console.log(this.inputText);
    
  }
  
  inputValue(event:any) {
    const value = event.target.value
    this.title = value
  }


  inputValue2(value:any) {
    this.title = value
  }

  disabledBtn = true;

  imgUrl =
    'https://www.suicideinfo.ca/wp-content/uploads/2016/07/Small-Talk-Logo.png';
  imgUrl2 =
    'https://smalltotall.info/wp-content/uploads/2017/04/google-favicon-vector-400x400.png';

  //ngOnInit() rasprastronjaetsja na vse <app-card></app-card>
  ngOnInit(): void {
    setTimeout(() => {
      this.disabledBtn = false;
    }, 2000);
  }
}
