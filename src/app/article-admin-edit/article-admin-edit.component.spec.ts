import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleAdminEditComponent } from './article-admin-edit.component';

describe('ArticleAdminEditComponent', () => {
  let component: ArticleAdminEditComponent;
  let fixture: ComponentFixture<ArticleAdminEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleAdminEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleAdminEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
