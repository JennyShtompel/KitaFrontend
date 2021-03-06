import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EinrichtungComponent } from './einrichtung.component';

describe('EinrichtungComponent', () => {
  let component: EinrichtungComponent;
  let fixture: ComponentFixture<EinrichtungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EinrichtungComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EinrichtungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
