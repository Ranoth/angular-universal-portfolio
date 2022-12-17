import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostNavHeaderComponent } from './post-nav-header.component';

describe('PostNavHeaderComponent', () => {
  let component: PostNavHeaderComponent;
  let fixture: ComponentFixture<PostNavHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostNavHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostNavHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
