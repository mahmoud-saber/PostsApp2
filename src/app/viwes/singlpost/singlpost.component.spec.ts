import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglpostComponent } from './singlpost.component';

describe('SinglpostComponent', () => {
  let component: SinglpostComponent;
  let fixture: ComponentFixture<SinglpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglpostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
