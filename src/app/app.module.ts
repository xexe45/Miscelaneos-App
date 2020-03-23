import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppMaterialModule } from "./app-material.module";
import { NavbarComponent } from "./components/shared/navbar/navbar.component";
import { InicioComponent } from "./pages/inicio/inicio.component";
import { RutasComponent } from "./pages/rutas/rutas.component";
import { NgStylecComponent } from "./components/ng-stylec/ng-stylec.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ClasesComponent } from './components/clases/clases.component';
import { AsincronoComponent } from './components/asincrono/asincrono.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    RutasComponent,
    NgStylecComponent,
    ClasesComponent,
    AsincronoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
