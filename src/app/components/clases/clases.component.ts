import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-clases",
  templateUrl: "./clases.component.html",
  styleUrls: ["./clases.component.scss"]
})
export class ClasesComponent implements OnInit {
  title = "ngClass";
  alerta = "alert-success";
  constructor() {}

  ngOnInit(): void {}
}
