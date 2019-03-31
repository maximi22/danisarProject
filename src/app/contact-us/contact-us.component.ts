import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})

export class ContactUsComponent implements OnInit {

  email:string;
  telefono:string;

submitDuda(duda) {
  console.log(duda.value);
  duda.value='';
  alert('Muchas Gracias!');
  
}


  constructor() { 
    this.email='danisar@live.com.ar'
    this.telefono='(0351)-xxxxxxxxx'

  }

  ngOnInit() {
  }

}
