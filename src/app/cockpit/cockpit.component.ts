import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef
} from "@angular/core";

@Component({
  selector: "app-cockpit",
  templateUrl: "./cockpit.component.html",
  styleUrls: ["./cockpit.component.scss"]
})
export class CockpitComponent implements OnInit {
  @ViewChild("serverNameInput", { static: true })
  serverName: ElementRef;
  @ViewChild("serverContentInput", { static: true })
  serverContent: ElementRef;

  @Output()
  onServerCreated = new EventEmitter<{ name: string; content: string }>();
  @Output()
  onBlueprintCreated = new EventEmitter<{ name: string; content: string }>();

  constructor() {}

  ngOnInit(): void {}

  onAddServer() {
    this.onServerCreated.emit({
      name: this.serverName.nativeElement.value,
      content: this.serverContent.nativeElement.value
    });
  }

  onAddBlueprint() {
    this.onBlueprintCreated.emit({
      name: this.serverName.nativeElement.value,
      content: this.serverContent.nativeElement.value
    });
  }
}
