import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeerHelpComponent } from './peer-help.component';

describe('PeerHelpComponent', () => {
  let component: PeerHelpComponent;
  let fixture: ComponentFixture<PeerHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeerHelpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PeerHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
