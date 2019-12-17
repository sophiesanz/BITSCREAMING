import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculasCarouselComponent } from './peliculas-carousel.component';

describe('PeliculasCarouselComponent', () => {
  let component: PeliculasCarouselComponent;
  let fixture: ComponentFixture<PeliculasCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeliculasCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculasCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
