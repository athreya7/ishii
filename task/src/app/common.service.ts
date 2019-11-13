import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class CommonService {
  constructor(private _http: HttpClient) {}

  getData() {
    return data;
  }
}

let data = [
  [
    {
      title: "Comp assy"
    },
    {
      cause: "Non Std Wheel Clearance",
      isActualCause: "Y",
      isSelectedCause: "Y"
    },
    {
      cause: "Non Std Wheel Clearance1",
      isActualCause: "N",
      isSelectedCause: "Y"
    },
    {
      cause: "Non Std Wheel Clearance1",
      isActualCause: "N",
      isSelectedCause: "N"
    }
  ],
  [
    {
      title: "Turb assy"
    },
    {
      cause: "Non Std Wheel Clearance",
      isActualCause: "Y",
      isSelectedCause: "Y"
    },
    {
      cause: "Non Std Wheel Clearance1",
      isActualCause: "N",
      isSelectedCause: "Y"
    },
    {
      cause: "Non Std Wheel Clearance1",
      isActualCause: "Y",
      isSelectedCause: "Y"
    }
  ],
  [
    {
      title: "Other assy"
    },
    {
      cause: "Non Std Wheel Clearance",
      isActualCause: "Y",
      isSelectedCause: "Y"
    },
    {
      cause: "Non Std Wheel Clearance1",
      isActualCause: "N",
      isSelectedCause: "Y"
    },
    {
      cause: "Non Std Wheel Clearance1",
      isActualCause: "Y",
      isSelectedCause: "Y"
    }
  ]
];
