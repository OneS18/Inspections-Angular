import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowInscpectionComponent } from './show-inscpection.component';

describe('ShowInscpectionComponent', () => {
  let component: ShowInscpectionComponent;
  let fixture: ComponentFixture<ShowInscpectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowInscpectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowInscpectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
