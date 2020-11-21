import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { UserComponent } from './components/user/user.component';
import { YoutubeComponent } from './components/youtube/youtube.component';
import { AtributoComponent } from './components/atributo/atributo.component';
import { ServicioComponent } from './components/servicio/servicio.component';
import { HttpClientModule } from '@angular/common/http';
import { PadreComponent } from './components/padre/padre.component';
import { HijoComponent } from './components/hijo/hijo.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { MiDirectivaDirective } from './directives/mi-directiva.directive';
import { SubjectsComponent } from './components/subjects/subjects.component';
import { BehaivorSubjectsComponent } from './components/behaivor-subjects/behaivor-subjects.component';
import { ViewChildComponent } from './components/view-child/view-child.component';
import { HijoVcComponent } from './components/hijo-vc/hijo-vc.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    YoutubeComponent,
    AtributoComponent,
    ServicioComponent,
    PadreComponent,
    HijoComponent,
    FormularioComponent,
    MiDirectivaDirective,
    SubjectsComponent,
    BehaivorSubjectsComponent,
    ViewChildComponent,
    HijoVcComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
