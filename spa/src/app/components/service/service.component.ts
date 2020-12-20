import { Component } from '@angular/core';

//para recibir parámetros
import { ActivatedRoute } from '@angular/router';

//Servicio
import { DataService  } from '../../servicios/data.service';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-service',
  templateUrl: './service.component.html'
})

export class ServiceComponent {

  product:any;

  urlstring:string;

  showchart:boolean = false;

  dateFormat:string = 'd-MM-yyyy hh:mm:ss';

  public SystemName: string = "Comportamiento";
  firstCopy = false;

  // data
  public lineChartData: Array<number> = [];

  public labelCharts: Array<any> = [
    { data: this.lineChartData, label: this.SystemName }
  ];
  // labels
  public lineChartLabels: Array<any> = [];


  constructor( 
    private _activateRoute: ActivatedRoute,
    private _dataServicios: DataService
    ) { 

    this._activateRoute.params.subscribe(param => {
      
      if(param['id'] == 0){

        this.urlstring = 'last';

      }else if(param['id'] == 1){

        this.urlstring = 'values/cobre';

      }else if(param['id'] == 2){

        this.urlstring = 'date/cobre/02-01-2020';

      }
      
      const datePipe = new DatePipe('en-US');

      this.product = this._dataServicios.get(this.urlstring).subscribe((data: any[])=>{

        if(param['id'] == 0){

          this.product = data['cobre'];
          this.showchart = false;

        }else if(param['id'] == 1){

          this.product = data;
          const testjson = JSON.stringify(this._dataServicios.ObjectToArray(this.product.values));

          JSON.parse(testjson,(key, value) => {
              
            let datestring = datePipe.transform(key, this.dateFormat);
            this.lineChartData.push(value);
            this.lineChartLabels.push(datestring); 
              
          });

          this.showchart = true;

        }else if(param['id'] == 2){

          this.product = data;

          let datestring = datePipe.transform(this.product['date'], this.dateFormat);
          this.lineChartData.push(this.product['value']);
          this.lineChartLabels.push(datestring); 
          this.showchart = true;

        } else {

          this.product = data;
          this.showchart = false;
        }


      });

    });


  }

  ngOnInit() {
  }

  public lineChartOptions: any = {
    responsive: true,
    scales: {
      yAxes: [
        {
          ticks: {
            max: 3,
            min: 2.5
          }
        }
      ],
      xAxes: [{}]
    },
    plugins: {
      datalabels: {
        display: true,
        align: "top",
        anchor: "end",
        color: "#222",

        font: {
          family: "FontAwesome",
          size: 14
        }
      },
      deferred: false
    }
  };

  _lineChartColors: Array<any> = [
    {
      backgroundColor: "red",
      borderColor: "red",
      pointBackgroundColor: "red",
      pointBorderColor: "red",
      pointHoverBackgroundColor: "red",
      pointHoverBorderColor: "red"
    }
  ];

  public ChartType = "bar";

  public chartClicked(e: any): void {
    //console.log(e);
  }
  public chartHovered(e: any): void {
    //console.log(e);
  }

}
