import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

//para pasar parametros se debe usar:
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {


  constructor( 
    private _router: Router
  ) { }

  ngOnInit() {
  }


  buscarServicio(termino: string){


    this._router.navigate(['/services', termino ]);
    console.log(termino);

  }



}
