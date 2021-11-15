import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabnavPage } from './tabnav.page';
const routes: Routes = [
  {
    path: 'tabs',
    component: TabnavPage,
    children:[
      {
        path:'about',
        loadChildren:() => import('../about/about.module').then(m=>m.AboutPageModule)
      },{
        path:'photos',
        children:[
          {
          path:'',
          loadChildren:() => import('../home/home.module').then(m=>m.HomePageModule)
          },
          {
            path:':photo_id',
            loadChildren:() => import('../detail/detail.module').then(m=>m.DetailPageModule)
          }
        ]
      }
    ]
  },{
    path: '',
    redirectTo: '/tabs/about',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabnavPageRoutingModule {}
