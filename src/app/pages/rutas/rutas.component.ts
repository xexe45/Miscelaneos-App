import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-rutas",
  templateUrl: "./rutas.component.html",
  styleUrls: ["./rutas.component.scss"]
})
export class RutasComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      console.log("Componente Padre", params["id"]);
    });
  }
}
