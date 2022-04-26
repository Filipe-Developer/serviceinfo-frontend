import { ProdutoCreateComponent } from './views/components/produto/produto-create/produto-create.component';
import { HomeComponent } from './views/components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoReadComponent } from './views/components/produto/produto-read/produto-read.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'produtos',
    component: ProdutoReadComponent
  },
  {
    path: 'produto/create',
    component: ProdutoCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
