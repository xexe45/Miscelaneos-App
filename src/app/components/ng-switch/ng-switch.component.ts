import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-ng-switch",
  templateUrl: "./ng-switch.component.html",
  styleUrls: ["./ng-switch.component.scss"]
})
export class NgSwitchComponent implements OnInit {
  title = "ngSwitch - Multiples Decisiones";
  alerta = "info";
  constructor() {}

  ngOnInit(): void {}
}
