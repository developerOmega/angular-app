import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleAdminNewComponent } from './article-admin-new.component';

describe('ArticleAdminNewComponent', () => {
  let component: ArticleAdminNewComponent;
  let fixture: ComponentFixture<ArticleAdminNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleAdminNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleAdminNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
