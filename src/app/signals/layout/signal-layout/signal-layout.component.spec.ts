import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalLayoutComponent } from './signal-layout.component';

describe('SignalLayoutComponent', () => {
  let component: SignalLayoutComponent;
  let fixture: ComponentFixture<SignalLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignalLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignalLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
