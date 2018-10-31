import { Component, OnInit, OnChanges, Input, SimpleChanges, AfterViewInit, AfterViewChecked, AfterContentInit } from '@angular/core';
import { FormGroup } from '../../../node_modules/@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '../../../node_modules/@ngx-formly/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnChanges {

  form = new FormGroup({});
  @Input() model;
  options: FormlyFormOptions = {};
  @Input() fields: FormlyFieldConfig[];

  constructor() {

  }
  ngOnChanges(changes: SimpleChanges) {
    debugger;
    console.log('on changes');
    console.log(' Focus property present here');
    console.log(this.fields);
    console.log(this.fields[0].fieldGroup[0].fieldGroup[0].focus);
  }

  ngOnInit() {
    debugger;

    console.log('on Init');
    console.log(' Focus property present here');
    console.log(this.fields);
    console.log(this.fields[0].fieldGroup[0].fieldGroup[0].focus);

    
    setTimeout(() => {
      debugger;
      console.log('on timeout');
      console.log(' Focus property getting lost here');
      console.log(this.fields);
      console.log(this.fields[0].fieldGroup[0].fieldGroup[0].focus);
    }, 0);
  }



  submit() {
    console.log('on submit');
    console.log(this.fields);
    alert(JSON.stringify(this.model));
  }


}
