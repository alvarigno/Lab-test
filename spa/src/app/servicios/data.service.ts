import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import { Datakey } from '../models/datakey.model';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  
  public ROOT_URl = 'https://www.indecon.online/';

  constructor(private http: HttpClient) {}

  public get(url):any{
    return this.http.get(this.ROOT_URl + url);
  }

  ObjectToArray(obj) {
    if (typeof(obj) === 'object') {
      var keys = Object.keys(obj);
      var allObjects = keys.every(x => typeof(obj[x]) === 'object');
      if (allObjects) {
        return keys.map(x => this.ObjectToArray(obj[x]));
      } else {
        var o = {};
        keys.forEach(x => {
          o[x] = this.ObjectToArray(obj[x])
        });
        return o;
      }
    } else {
      return obj;
    }
  }


}
