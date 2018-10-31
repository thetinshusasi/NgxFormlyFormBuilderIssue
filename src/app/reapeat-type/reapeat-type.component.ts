import { Component, OnInit } from '@angular/core';
import { FieldArrayType, FormlyFormBuilder } from '../../../node_modules/@ngx-formly/core';

@Component({
  selector: 'app-reapeat-type',
  templateUrl: './reapeat-type.component.html',
  styleUrls: ['./reapeat-type.component.css']
})
export class ReapeatTypeComponent extends FieldArrayType {
  constructor(builder: FormlyFormBuilder) {
    super(builder);
  }
}
