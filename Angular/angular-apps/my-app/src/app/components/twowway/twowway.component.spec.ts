import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwowwayComponent } from './twowway.component';

describe('TwowwayComponent', () => {
  let component: TwowwayComponent;
  let fixture: ComponentFixture<TwowwayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwowwayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwowwayComponent);
    component = fixture.componentInstance;  
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
