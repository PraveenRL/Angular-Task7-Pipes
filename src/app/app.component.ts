import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pipes';

  user : any;
  choice(value){
    this.user=value;
  };

  alphaCase = 'THIS IS THE EXAMPLE FOR ALPHABETS TYPECAST';
  percentVar = '0.98';
  money = '30';
  sliceVar = 'THIS IS THE EXAMPLE FOR ALPHABETS TYPECAST';
  sliceVar1 = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  testDate = new Date (1997, 9, 24);
  digit = '234.54';
  digit1 = '2.5';

  factor = '';
  power = '';
  

}
