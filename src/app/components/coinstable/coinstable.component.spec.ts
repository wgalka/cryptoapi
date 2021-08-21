import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinstableComponent } from './coinstable.component';

describe('CoinstableComponent', () => {
  let component: CoinstableComponent;
  let fixture: ComponentFixture<CoinstableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoinstableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinstableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
