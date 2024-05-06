import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanciabetaComponent } from './lanciabeta.component';

describe('LanciabetaComponent', () => {
  let component: LanciabetaComponent;
  let fixture: ComponentFixture<LanciabetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LanciabetaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LanciabetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
