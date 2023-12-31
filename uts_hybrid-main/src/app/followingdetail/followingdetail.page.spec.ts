import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FollowingdetailPage } from './followingdetail.page';

describe('FollowingdetailPage', () => {
  let component: FollowingdetailPage;
  let fixture: ComponentFixture<FollowingdetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FollowingdetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
