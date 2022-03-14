import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditInscpectionComponent } from './add-edit-inscpection.component';

describe('AddEditInscpectionComponent', () => {
  let component: AddEditInscpectionComponent;
  let fixture: ComponentFixture<AddEditInscpectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditInscpectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditInscpectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
