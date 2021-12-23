import { HomeComponent } from './home/home.component';
import { ArticleComponent } from './article/article.component';
import { ArticleCommentComponent } from './article/article-comment/article-comment.component';
import { AuthComponent } from './auth/auth.component';
import { EditorComponent } from './editor/editor.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';


export const components: any[] = [
  ArticleComponent,
  ArticleCommentComponent,
  AuthComponent,
  EditorComponent,
  HomeComponent,
  ProfileComponent,
  SettingsComponent
];

export * from './home/home.component';
export * from './article/article.component';
export * from './article/article-comment/article-comment.component';
export * from './auth/auth.component';
export * from './editor/editor.component';
export * from './profile/profile.component';
export * from './settings/settings.component';
