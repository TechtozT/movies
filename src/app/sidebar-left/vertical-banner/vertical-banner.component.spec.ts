import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalBannerComponent } from './vertical-banner.component';

describe('VerticalBannerComponent', () => {
  let component: VerticalBannerComponent;
  let fixture: ComponentFixture<VerticalBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerticalBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerticalBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
