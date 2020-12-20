import { NgModule } from '@angular/core';
import { Component } from '@angular/core';

import { NavbarComponent } from './components/shared/navbar/navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@NgModule({
  declarations: [ AppComponent, NavbarComponent ],
  bootstrap: [ AppComponent ]
})

export class AppComponent {
  title = 'spa';
}
