import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-cockpit",
  templateUrl: "./cockpit.component.html",
  styleUrls: ["./cockpit.component.scss"]
})
export class CockpitComponent implements OnInit {
  serverName = "";
  serverContent = "";

  constructor() {}

  ngOnInit(): void {}

  onAddServer() {}

  onAddBlueprint() {}
}
