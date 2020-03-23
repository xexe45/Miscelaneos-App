import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { InicioComponent } from "./pages/inicio/inicio.component";
import { RutasComponent } from "./pages/rutas/rutas.component";

const routes: Routes = [
  { path: "home", component: InicioComponent },
  { path: "rutas", component: RutasComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
