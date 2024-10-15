import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatologComponent } from './catolog.component';

describe('CatologComponent', () => {
  let component: CatologComponent;
  let fixture: ComponentFixture<CatologComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CatologComponent]
    });
    fixture = TestBed.createComponent(CatologComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
