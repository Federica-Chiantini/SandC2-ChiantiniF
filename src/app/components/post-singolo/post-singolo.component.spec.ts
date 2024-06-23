import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostSingoloComponent } from './post-singolo.component';

describe('PostSingoloComponent', () => {
  let component: PostSingoloComponent;
  let fixture: ComponentFixture<PostSingoloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostSingoloComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostSingoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
