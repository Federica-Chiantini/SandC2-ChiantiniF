import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GruppoPostsComponent } from './gruppo-posts.component';

describe('GruppoPostsComponent', () => {
  let component: GruppoPostsComponent;
  let fixture: ComponentFixture<GruppoPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GruppoPostsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GruppoPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
