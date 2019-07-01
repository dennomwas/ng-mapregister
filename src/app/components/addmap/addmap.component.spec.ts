import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmapComponentComponent } from './addmap.component';

describe('AddmapComponentComponent', () => {
  let component: AddmapComponentComponent;
  let fixture: ComponentFixture<AddmapComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddmapComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmapComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
