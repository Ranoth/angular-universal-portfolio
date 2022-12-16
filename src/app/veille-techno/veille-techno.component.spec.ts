import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeilleTechnoComponent } from './veille-techno.component';

describe('VeilleTechnoComponent', () => {
  let component: VeilleTechnoComponent;
  let fixture: ComponentFixture<VeilleTechnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeilleTechnoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VeilleTechnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
