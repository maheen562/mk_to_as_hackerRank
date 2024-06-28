import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainpagebodyComponent } from './mainpagebody.component';

describe('MainpagebodyComponent', () => {
  let component: MainpagebodyComponent;
  let fixture: ComponentFixture<MainpagebodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainpagebodyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainpagebodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
