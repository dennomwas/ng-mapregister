import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMapComponent } from './update-map.component';

describe('UpdateMapComponent', () => {
  let component: UpdateMapComponent;
  let fixture: ComponentFixture<UpdateMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
