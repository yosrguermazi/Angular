import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCVComponent } from './detail-cv.component';

describe('DetailCVComponent', () => {
  let component: DetailCVComponent;
  let fixture: ComponentFixture<DetailCVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailCVComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailCVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
