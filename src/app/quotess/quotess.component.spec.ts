import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotessComponent } from './quotess.component';

describe('QuotessComponent', () => {
  let component: QuotessComponent;
  let fixture: ComponentFixture<QuotessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
