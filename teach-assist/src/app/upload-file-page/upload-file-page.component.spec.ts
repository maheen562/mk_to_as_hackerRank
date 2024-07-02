import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadFilePageComponent } from './upload-file-page.component';

describe('UploadFilePageComponent', () => {
  let component: UploadFilePageComponent;
  let fixture: ComponentFixture<UploadFilePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadFilePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UploadFilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
