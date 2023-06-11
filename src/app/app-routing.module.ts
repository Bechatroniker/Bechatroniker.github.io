import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebdavComponent } from './service/webdav/webdav.component';

const routes: Routes = [
  {
    path: 'imageupload',
    component: WebdavComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }
