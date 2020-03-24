import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-ruta-nuevo",
  templateUrl: "./ruta-nuevo.component.html",
  styleUrls: ["./ruta-nuevo.component.scss"]
})
export class RutaNuevoComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.parent.params.subscribe(params => {
      console.log("Ruta Hija Nuevo");
      console.log(params);
    });
  }
}
