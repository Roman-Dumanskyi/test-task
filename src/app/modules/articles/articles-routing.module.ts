import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@auth';
import { ROUTES_DATA } from '@shared';
import {
  CreateEditArticleComponent,
  PreviewArticleComponent,
} from './components';
import { ListComponent, WrapperComponent } from './containers';
import { ArticleEditGuard } from './services';

const routes: Routes = [
  {
    path: ROUTES_DATA.ARTICLES.children.EDIT.path,
    component: CreateEditArticleComponent,
    canActivate: [ArticleEditGuard],
    data: {
      title: ROUTES_DATA.AUTH.children.SIGN_IN.title,
    },
  },
  {
    path: ROUTES_DATA.ARTICLES.children.ADD.path,
    component: CreateEditArticleComponent,
    data: {
      title: ROUTES_DATA.AUTH.children.SIGN_IN.title,
    },
  },
  {
    path: '',
    component: WrapperComponent,
    children: [
      {
        path: '',
        component: ListComponent,
      },
      {
        path: ':id',
        component: PreviewArticleComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArticlesRoutingModule {}
