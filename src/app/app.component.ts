import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  servers = [];

  onAddServerClick(data: { name: string; content: string }) {
    this.servers.push({
      type: "server",
      name: data.name,
      content: data.content
    });
  }

  onAddBlueprintClick(data: { name: string; content: string }) {
    this.servers.push({
      type: "blueprint",
      name: data.name,
      content: data.content
    });
  }
}
