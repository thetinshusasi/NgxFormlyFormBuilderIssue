import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReapeatTypeComponent } from './reapeat-type.component';

describe('ReapeatTypeComponent', () => {
  let component: ReapeatTypeComponent;
  let fixture: ComponentFixture<ReapeatTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReapeatTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReapeatTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
