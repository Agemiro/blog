import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackPostListPageComponent } from './back-post-list-page.component';

describe('BackPostListPageComponent', () => {
  let component: BackPostListPageComponent;
  let fixture: ComponentFixture<BackPostListPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BackPostListPageComponent]
    });
    fixture = TestBed.createComponent(BackPostListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
