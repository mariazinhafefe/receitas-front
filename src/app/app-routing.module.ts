import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PaginaInicialComponent } from './pages/pagina-inicial/pagina-inicial.component';
import { ReceitaFavoritaComponent } from './pages/receita/receita-favorita/receita-favorita.component';


const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
    data: { titulo: "Login" },
  },
  {
    path: "",
    redirectTo: "/login",
    pathMatch: "full",
  },
  {
    path: "receitas",
    component: HomeComponent,
    data: { titulo: "Home" },
    children: [
      {
        path: "",
        component: PaginaInicialComponent,
      },
      {
        path: "favorita",
        component: ReceitaFavoritaComponent,
      },
    ],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
