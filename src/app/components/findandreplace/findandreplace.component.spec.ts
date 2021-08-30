import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindandreplaceComponent } from './findandreplace.component';

describe('FindandreplaceComponent', () => {
  let component: FindandreplaceComponent;
  let fixture: ComponentFixture<FindandreplaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindandreplaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindandreplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
