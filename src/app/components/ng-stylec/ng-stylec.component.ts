import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-ng-stylec",
  templateUrl: "./ng-stylec.component.html",
  styleUrls: ["./ng-stylec.component.scss"]
})
export class NgStylecComponent implements OnInit {
  title = "ngStyle con directivas de atributos.";
  size = 20;
  color = "red";
  constructor() {}

  ngOnInit(): void {}
}
