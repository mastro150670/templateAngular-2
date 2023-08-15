import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyUsSectionComponent } from './why-us-section.component';

describe('WhyUsSectionComponent', () => {
  let component: WhyUsSectionComponent;
  let fixture: ComponentFixture<WhyUsSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhyUsSectionComponent]
    });
    fixture = TestBed.createComponent(WhyUsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
