import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSubjectPageComponent } from './student-subject-page.component';

describe('StudentSubjectPageComponent', () => {
  let component: StudentSubjectPageComponent;
  let fixture: ComponentFixture<StudentSubjectPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentSubjectPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentSubjectPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
