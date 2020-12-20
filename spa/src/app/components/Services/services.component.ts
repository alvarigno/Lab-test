import { Component, OnInit } from '@angular/core';

//para pasar parametros se debe usar:
import { Router } from '@angular/router';

//para recibir parámetros
import { ActivatedRoute } from '@angular/router';

//Servicio
import { DataService } from '../../servicios/data.service';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html'
})


export class ServicesComponent implements OnInit {

  //inicializar var, usando interfaz heroe del servicio
  //variables que es visible desde la component.html de este component.
  //una vez cargada con datos desde el servicio por medio del método ya es posibles ser usada.
  _termino:string = '';

  //
  _testData:any[] = [];
  fetchedData:any;

  //importar servicio por medio de una interfaz
  //esto llama de formas directa al constructor que está
  //dentro del servicio.
  constructor( 
    private _activateRoute: ActivatedRoute,
    private _dataServicio: DataService,
    private _router: Router
     ) { 

      this._activateRoute.params.subscribe(async param => {

        console.log(param['termino']);// aparace porque está declarado en el router.
  
        let dquery = '';
        dquery = param['termino'];

        console.log(dquery);

        if(dquery != '' && dquery != undefined ){

          this._termino = 'Estas buscando: '+ dquery;
          this.BuscarTest(param['termino']);

        }else{

          this._termino = '';
          this.cargaRecursos();
        }

        
  
      });

    console.log('Constructor, creando objetos.');

  }

  ngOnInit() {

    console.log('ngOnInit; pagina renderizada.');

  }

  cargaRecursos(){

    this._dataServicio.get('').subscribe((data: any[])=>{
      console.log(data);
      this._testData = data['apis'];
    });

  }

  verEjemplo(idstring: string){

    this._router.navigate(['/service', idstring ]);

  }

  BuscarTest(termino:string){

    let dataArr:any[] = [];
    termino = termino.toLowerCase();

    this._dataServicio.get('').subscribe((data: any[])=>{

      this._testData = data['apis'];

      for(let d of this._testData){

        let nombre = d.url_params.toLowerCase();

        if(nombre.indexOf( termino ) >= 0){
          
          dataArr.push(d);
          this._testData = dataArr;
        
        }
  
      }


    });

   }


}
