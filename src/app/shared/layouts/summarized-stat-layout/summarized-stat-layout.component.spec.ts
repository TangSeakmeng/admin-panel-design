import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummarizedStatLayoutComponent } from './summarized-stat-layout.component';

describe('SummarizedStatLayoutComponent', () => {
  let component: SummarizedStatLayoutComponent;
  let fixture: ComponentFixture<SummarizedStatLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummarizedStatLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummarizedStatLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
