import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";
import {
  FormlyFieldConfig,
  FormlyFormOptions,
  FormlyFormBuilder
} from "@ngx-formly/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  form = new FormGroup({});
  model = {
    investments: [
      {
        investmentName: "mouse"
      }
    ]
  };
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
    {
      key: "investments",
      type: "repeat",
      fieldArray: {
        fieldGroupClassName: "row",
        templateOptions: {
          btnText: "Add another investment"
        },
        fieldGroup: [
          {
            className: "col-sm-4",
            type: "input",
            key: "investmentName",
            templateOptions: {
              label: "Name of Investment:",
              required: true
            }
          }
        ]
      }
    }
  ];

  constructor(private builder: FormlyFormBuilder) {
    debugger;
    this.builder.buildForm(this.form, this.fields, this.model, this.options);
    console.log(this.fields);
    this.fields[0].fieldGroup[0].fieldGroup[0].focus = true;
  }
}
