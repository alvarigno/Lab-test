import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { Datakey } from '../models/datakey.model';


describe('DataService', () => {
  let service: DataService;
  const dummyPosts: Datakey = {
    key: 'uno',
    name: 'Precio del Cobre, dólares por libra',
    unit: 'dolar',
    date: 1577923200,
    value: 2.81
      };

  beforeEach(() => {
      TestBed.configureTestingModule({
          imports: [HttpClientModule],
          providers: [DataService]
      });
      service = TestBed.get(DataService);
  });

  it('Prueba relizada para detectar la correcta descarga de datos de la api.', () => {

    service.get('date/cobre/02-01-2020').subscribe(posts => {
      expect(posts.length).toBe(1);
      expect(posts).toEqual(dummyPosts);
    });
  
  });

  it('Deberìa estar funcionando el servicio con su última versión.', function () {
    service.get('last').subscribe(response => {
  
      console.log(response.status);
      console.log(response.headers.get('X-Custom-Header'));

      expect(response.status).toBe(200);

    });
  
  });



});
