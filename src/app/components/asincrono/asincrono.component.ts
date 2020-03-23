import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-asincrono",
  templateUrl: "./asincrono.component.html",
  styleUrls: ["./asincrono.component.scss"]
})
export class AsincronoComponent implements OnInit {
  title = "Indicadores para procesos asincronos";
  loading = false;
  text = "Guardar Cambios";
  constructor() {}

  ngOnInit(): void {}

  guardar() {
    this.loading = true;
    this.text = "Espere Porfavor...";
    setTimeout(() => {
      this.loading = false;
      this.text = "Guardar Cambios";
    }, 3000);
  }
}
