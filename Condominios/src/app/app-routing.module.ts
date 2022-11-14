import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SindicoComponent } from './sindico/sindico.component';
import { MoradorComponent } from './morador/morador.component';
import { HomeComponent } from './home/home.component';
import { CaixaComponent} from './caixa/caixa.component';
import { ConsultaPagamentosComponent} from './consulta-pagamentos/consulta-pagamentos.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'sindico', component: SindicoComponent},
  {path: 'morador', component: MoradorComponent},
  {path: 'caixa', component: CaixaComponent},
  {path: 'consultaPagamentos', component: ConsultaPagamentosComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
