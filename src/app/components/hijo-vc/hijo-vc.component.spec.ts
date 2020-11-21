import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HijoVcComponent } from './hijo-vc.component';

describe('HijoVcComponent', () => {
  let component: HijoVcComponent;
  let fixture: ComponentFixture<HijoVcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HijoVcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HijoVcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
