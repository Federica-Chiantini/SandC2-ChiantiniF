import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroPostsComponent } from './filtro-posts.component';

describe('FiltroPostsComponent', () => {
  let component: FiltroPostsComponent;
  let fixture: ComponentFixture<FiltroPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FiltroPostsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltroPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
