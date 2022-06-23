import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftsideNavbarComponent } from './leftside-navbar.component';

describe('LeftsideNavbarComponent', () => {
  let component: LeftsideNavbarComponent;
  let fixture: ComponentFixture<LeftsideNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftsideNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftsideNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
