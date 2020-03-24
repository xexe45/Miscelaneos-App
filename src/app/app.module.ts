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
import { ClasesComponent } from "./components/clases/clases.component";
import { AsincronoComponent } from "./components/asincrono/asincrono.component";
import { DirectivasComponent } from "./components/directivas/directivas.component";
import { ResaltadoDirective } from "./directives/resaltado.directive";
import { NgSwitchComponent } from "./components/ng-switch/ng-switch.component";
import { RutaHomeComponent } from "./components/rutas/ruta-home/ruta-home.component";
import { RutaNuevoComponent } from "./components/rutas/ruta-nuevo/ruta-nuevo.component";
import { RutaEditarComponent } from "./components/rutas/ruta-editar/ruta-editar.component";
import { AppRoutingRutasModule } from "./pages/rutas/app-routing-rutas.module";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    RutasComponent,
    NgStylecComponent,
    ClasesComponent,
    AsincronoComponent,
    DirectivasComponent,
    ResaltadoDirective,
    NgSwitchComponent,
    RutaHomeComponent,
    RutaNuevoComponent,
    RutaEditarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingRutasModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
