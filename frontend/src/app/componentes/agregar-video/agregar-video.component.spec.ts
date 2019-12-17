import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarVideoComponent } from './agregar-video.component';

describe('AgregarVideoComponent', () => {
  let component: AgregarVideoComponent;
  let fixture: ComponentFixture<AgregarVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
