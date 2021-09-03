import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieWidComponent } from './pie-wid.component';

describe('PieWidComponent', () => {
  let component: PieWidComponent;
  let fixture: ComponentFixture<PieWidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PieWidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PieWidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
