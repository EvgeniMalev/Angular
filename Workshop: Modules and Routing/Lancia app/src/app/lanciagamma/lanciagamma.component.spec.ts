import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanciagammaComponent } from './lanciagamma.component';

describe('LanciagammaComponent', () => {
  let component: LanciagammaComponent;
  let fixture: ComponentFixture<LanciagammaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LanciagammaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LanciagammaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
