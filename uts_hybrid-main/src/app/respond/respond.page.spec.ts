import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RespondPage } from './respond.page';

describe('RespondPage', () => {
  let component: RespondPage;
  let fixture: ComponentFixture<RespondPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RespondPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
