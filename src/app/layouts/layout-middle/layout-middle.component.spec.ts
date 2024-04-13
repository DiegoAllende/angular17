import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutMiddleComponent } from './layout-middle.component';

describe('LayoutMiddleComponent', () => {
  let component: LayoutMiddleComponent;
  let fixture: ComponentFixture<LayoutMiddleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutMiddleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LayoutMiddleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
