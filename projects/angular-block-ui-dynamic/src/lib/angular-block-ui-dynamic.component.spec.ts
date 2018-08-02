import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularBlockUiDynamicComponent } from './angular-block-ui-dynamic.component';

describe('AngularBlockUiDynamicComponent', () => {
  let component: AngularBlockUiDynamicComponent;
  let fixture: ComponentFixture<AngularBlockUiDynamicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularBlockUiDynamicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularBlockUiDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
