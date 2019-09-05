import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CordsViewComponent } from './cords-view.component';

describe('CordsViewComponent', () => {
  let component: CordsViewComponent;
  let fixture: ComponentFixture<CordsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CordsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CordsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
