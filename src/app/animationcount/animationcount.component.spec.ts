import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationcountComponent } from './animationcount.component';

describe('AnimationcountComponent', () => {
  let component: AnimationcountComponent;
  let fixture: ComponentFixture<AnimationcountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimationcountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimationcountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
