import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { FolderTutorialComponent } from './components/tutorials-folder/tutorials-folder.component';
import { LanciabetaComponent } from './lanciabeta/lanciabeta.component';
import { LanciagammaComponent } from './lanciagamma/lanciagamma.component';

const routes: Routes = [
  { path: '', redirectTo: 'tutorials', pathMatch: 'full' },
  { path: 'tutorials', component: TutorialsListComponent },
  { path: 'tutorials/:id', component: TutorialDetailsComponent },
  { path: 'add', component: AddTutorialComponent },
  { path: 'folder', component: FolderTutorialComponent },
  { path: 'beta', component: LanciabetaComponent },
  { path: 'gamma', component: LanciagammaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
