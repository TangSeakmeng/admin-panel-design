import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightsideSummarizedStatComponent } from './rightside-summarized-stat.component';

describe('RightsideSummarizedStatComponent', () => {
  let component: RightsideSummarizedStatComponent;
  let fixture: ComponentFixture<RightsideSummarizedStatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightsideSummarizedStatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RightsideSummarizedStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
