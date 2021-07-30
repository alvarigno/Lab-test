import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log(this.Randomw());
    this.ReadDataFromArray();
  }

  public Randomw(){
    return Math.floor(Math.random() * 1000);
  }

  public ReadDataFromArray(){

    let found:string = null;
    const array1 = [{'GlsDes':'uNo','DlsVal':'1'},{'GlsDes':'cuatro','DlsVal':'4'},{'GlsDes':'cinCo','DlsVal':'5'}];

    found = array1.find(el => el.GlsDes.toUpperCase() == 'UNO').DlsVal;
    console.log(found);

    found = array1.find(el => el.GlsDes.toUpperCase() == 'CUATRO').DlsVal;
    console.log(found);
    
    found = array1.find(el => el.GlsDes.toUpperCase() == 'CINCO').DlsVal;
    console.log(found);

  }

}
