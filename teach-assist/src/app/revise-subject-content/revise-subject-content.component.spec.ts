import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviseSubjectContentComponent } from './revise-subject-content.component';

describe('ReviseSubjectContentComponent', () => {
  let component: ReviseSubjectContentComponent;
  let fixture: ComponentFixture<ReviseSubjectContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReviseSubjectContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReviseSubjectContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
