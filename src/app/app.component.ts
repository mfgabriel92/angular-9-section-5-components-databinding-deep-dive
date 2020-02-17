import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  servers = [{ type: "server", name: "Lorem", content: "Lorem ipsum" }];
}
