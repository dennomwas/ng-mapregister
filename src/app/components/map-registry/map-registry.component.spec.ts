import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapRegistryComponent } from './map-registry.component';

describe('MapRegistryComponent', () => {
  let component: MapRegistryComponent;
  let fixture: ComponentFixture<MapRegistryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapRegistryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapRegistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
