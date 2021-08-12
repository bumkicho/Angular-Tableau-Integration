import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { TableauTableComponent } from "./tableau-table.component";

describe("TableauTableComponent", () => {
  let component: TableauTableComponent;
  let fixture: ComponentFixture<TableauTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TableauTableComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableauTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
