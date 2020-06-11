import { Component, Input, OnInit } from "@angular/core";
import { HttpService } from "./shared/http.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(private httpService: HttpService) { }


}
