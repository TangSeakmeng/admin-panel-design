import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './shared/layouts/main-layout/main-layout.component';
import { RootLayoutComponent } from './shared/layouts/root-layout/root-layout.component';
import { SummarizedStatLayoutComponent } from './shared/layouts/summarized-stat-layout/summarized-stat-layout.component';

const routes: Routes = [
  {
    path: '',
    component: RootLayoutComponent,
    children: [
      {
        path: '',
        component: SummarizedStatLayoutComponent,
        children: [
          {
            path: '',
            component: MainLayoutComponent,
            loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
