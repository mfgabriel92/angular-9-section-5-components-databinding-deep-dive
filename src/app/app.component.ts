import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  servers = [];

  onAddServerClick(server: { name: string; content: string }) {
    this.servers.push({
      type: "server",
      name: server.name,
      content: server.content
    });
  }

  onAddBlueprintClick(server: { name: string; content: string }) {
    this.servers.push({
      type: "blueprint",
      name: server.name,
      content: server.content
    });
  }
}
