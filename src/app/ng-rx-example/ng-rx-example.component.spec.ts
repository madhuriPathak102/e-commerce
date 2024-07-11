import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgRxExampleComponent } from './ng-rx-example.component';

describe('NgRxExampleComponent', () => {
  let component: NgRxExampleComponent;
  let fixture: ComponentFixture<NgRxExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgRxExampleComponent]
    });
    fixture = TestBed.createComponent(NgRxExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
