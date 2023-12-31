import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Create2Page } from './create2.page';

describe('Create2Page', () => {
  let component: Create2Page;
  let fixture: ComponentFixture<Create2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Create2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
