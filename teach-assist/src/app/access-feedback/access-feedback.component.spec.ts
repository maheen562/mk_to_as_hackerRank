import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessFeedbackComponent } from './access-feedback.component';

describe('AccessFeedbackComponent', () => {
  let component: AccessFeedbackComponent;
  let fixture: ComponentFixture<AccessFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccessFeedbackComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccessFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
