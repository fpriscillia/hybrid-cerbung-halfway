import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReadcerbungPage } from './readcerbung.page';

describe('ReadcerbungPage', () => {
  let component: ReadcerbungPage;
  let fixture: ComponentFixture<ReadcerbungPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ReadcerbungPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
