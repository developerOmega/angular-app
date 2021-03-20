import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleAdminShowComponent } from './article-admin-show.component';

describe('ArticleAdminShowComponent', () => {
  let component: ArticleAdminShowComponent;
  let fixture: ComponentFixture<ArticleAdminShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleAdminShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleAdminShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
