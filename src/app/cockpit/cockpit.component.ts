import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-cockpit",
  templateUrl: "./cockpit.component.html",
  styleUrls: ["./cockpit.component.scss"]
})
export class CockpitComponent implements OnInit {
  serverName = "";
  serverContent = "";

  @Output()
  onServerCreated = new EventEmitter<{ name: string; content: string }>();
  @Output()
  onBlueprintCreated = new EventEmitter<{ name: string; content: string }>();

  constructor() {}

  ngOnInit(): void {}

  onAddServer() {
    this.onServerCreated.emit({
      name: this.serverName,
      content: this.serverContent
    });
  }

  onAddBlueprint() {
    this.onBlueprintCreated.emit({
      name: this.serverName,
      content: this.serverContent
    });
  }
}
