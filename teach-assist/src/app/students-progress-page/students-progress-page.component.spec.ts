import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsProgressPageComponent } from './students-progress-page.component';

describe('StudentsProgressPageComponent', () => {
  let component: StudentsProgressPageComponent;
  let fixture: ComponentFixture<StudentsProgressPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentsProgressPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentsProgressPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
