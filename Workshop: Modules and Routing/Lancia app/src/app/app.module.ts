import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import { LanciaypsilovComponent } from './lanciaypsilov/lanciaypsilov.component';
import { LanciagammaComponent } from './lanciagamma/lanciagamma.component';
import { LanciabetaComponent } from './lanciabeta/lanciabeta.component';
import { LanciaroComponent } from './lanciaro/lanciaro.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTutorialComponent,
    TutorialDetailsComponent,
    TutorialsListComponent,
    LanciaypsilovComponent,
    LanciagammaComponent,
    LanciabetaComponent,
    LanciaroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
