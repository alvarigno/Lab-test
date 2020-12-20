import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

//Routes
import { APP_ROUTING } from './app-routing.module';

//Services
import { DataService } from './servicios/data.service';

//Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/Services/services.component';
import { ServiceComponent } from './components/service/service.component';

//Charts
import { ChartsModule, ThemeService } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ServiceComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ChartsModule,
    APP_ROUTING
  ],
  exports:[
    NavbarComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [
    DataService,
    ThemeService
  ],
  bootstrap: [AppComponent, NavbarComponent]
})
export class AppModule { }
