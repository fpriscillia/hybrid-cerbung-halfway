import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Create3Page } from './create3.page';

describe('Create3Page', () => {
  let component: Create3Page;
  let fixture: ComponentFixture<Create3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Create3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
