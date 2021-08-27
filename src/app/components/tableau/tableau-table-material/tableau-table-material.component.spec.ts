import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauTableMaterialComponent } from './tableau-table-material.component';

describe('TableauTableMaterialComponent', () => {
  let component: TableauTableMaterialComponent;
  let fixture: ComponentFixture<TableauTableMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableauTableMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableauTableMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
