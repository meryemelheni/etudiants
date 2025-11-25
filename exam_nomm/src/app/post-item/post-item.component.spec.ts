import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostItemComponent } from './post-item.component';
import { Post } from '../models/post';

describe('PostItemComponent', () => {
  let component: PostItemComponent;
  let fixture: ComponentFixture<PostItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PostItemComponent);
    component = fixture.componentInstance;
    const mockPost: Post = {
      id: '1',
      titre: 'Premier post',
      contenu: 'détails premier post',
    };
    component.post = mockPost;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
