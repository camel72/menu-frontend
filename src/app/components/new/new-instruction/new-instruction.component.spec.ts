import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewInstructionComponent } from './new-instruction.component';

describe('NewInstructionComponent', () => {
  let component: NewInstructionComponent;
  let fixture: ComponentFixture<NewInstructionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewInstructionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewInstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
