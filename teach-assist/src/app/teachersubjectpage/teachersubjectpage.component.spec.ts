import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachersubjectpageComponent } from './teachersubjectpage.component';

describe('TeachersubjectpageComponent', () => {
  let component: TeachersubjectpageComponent;
  let fixture: ComponentFixture<TeachersubjectpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeachersubjectpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeachersubjectpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
