import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauChartComponent } from './tableau-chart.component';

describe('TableauChartComponent', () => {
  let component: TableauChartComponent;
  let fixture: ComponentFixture<TableauChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableauChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableauChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
