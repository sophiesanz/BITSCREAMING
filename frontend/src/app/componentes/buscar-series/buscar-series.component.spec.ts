import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarSeriesComponent } from './buscar-series.component';

describe('BuscarSeriesComponent', () => {
  let component: BuscarSeriesComponent;
  let fixture: ComponentFixture<BuscarSeriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarSeriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
