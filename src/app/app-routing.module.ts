import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'insert-data',
    loadChildren: () => import('./pages/insert-data/insert-data.module').then( m => m.InsertDataPageModule)
  },
  {
    path: 'author',
    loadChildren: () => import('./pages/author/author.module').then( m => m.AuthorPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
