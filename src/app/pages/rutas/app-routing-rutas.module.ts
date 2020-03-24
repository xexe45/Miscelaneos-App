import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RutasComponent } from "./rutas.component";
import { RutaHomeComponent } from "../../components/rutas/ruta-home/ruta-home.component";
import { RutaNuevoComponent } from "../../components/rutas/ruta-nuevo/ruta-nuevo.component";
import { RutaEditarComponent } from "../../components/rutas/ruta-editar/ruta-editar.component";

const routesRoute: Routes = [
  {
    path: "rutas/:id",
    component: RutasComponent,
    children: [
      { path: "inicio", component: RutaHomeComponent },
      { path: "nuevo", component: RutaNuevoComponent },
      { path: "editar", component: RutaEditarComponent },
      { path: "**", redirectTo: "inicio", pathMatch: "full" }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routesRoute)],
  exports: [RouterModule]
})
export class AppRoutingRutasModule {}
