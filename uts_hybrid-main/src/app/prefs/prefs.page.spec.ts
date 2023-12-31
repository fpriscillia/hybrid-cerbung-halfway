import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrefsPage } from './prefs.page';

describe('PrefsPage', () => {
  let component: PrefsPage;
  let fixture: ComponentFixture<PrefsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PrefsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
