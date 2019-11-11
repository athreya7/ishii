import { Component } from "@angular/core";
import { CommonService } from "./common.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "athreya";
  data1: any;
  constructor(private commonService: CommonService) {}
  ngOnInit() {
    this.commonService.getData().subscribe(res => {
      console.log(res);
      this.data1 = res;
    });
  }
}
