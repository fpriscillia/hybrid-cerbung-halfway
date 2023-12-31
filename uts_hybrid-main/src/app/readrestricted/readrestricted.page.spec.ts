import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReadrestrictedPage } from './readrestricted.page';

describe('ReadrestrictedPage', () => {
  let component: ReadrestrictedPage;
  let fixture: ComponentFixture<ReadrestrictedPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ReadrestrictedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
