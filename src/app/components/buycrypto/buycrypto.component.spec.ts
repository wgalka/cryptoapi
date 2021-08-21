import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuycryptoComponent } from './buycrypto.component';

describe('BuycryptoComponent', () => {
  let component: BuycryptoComponent;
  let fixture: ComponentFixture<BuycryptoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuycryptoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuycryptoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
