import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exchangecrypto } from './exchangecrypto';

describe('CurrencyformComponent', () => {
  let component: Exchangecrypto;
  let fixture: ComponentFixture<Exchangecrypto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exchangecrypto ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Exchangecrypto);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
