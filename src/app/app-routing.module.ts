import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TableComponent} from './component/table/table.component';
import {MyDirectivesComponent} from './component/my-directives/my-directives.component';


const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: 'table', component: TableComponent},
  {path: 'directives', component: MyDirectivesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
