import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {MainComponent} from "../layout/main.component";
import {HomeComponent} from "./home/home.component";
import {MapsComponent} from "./maps/maps.component";

/**
 * modules总路由
 */
const routes: Routes = [
  { path: '', redirectTo: 'AngularStudy', pathMatch: 'full' },
  {
    path: 'AngularStudy',
    component: MainComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home',  component: HomeComponent },
      { path: 'maps',  component: MapsComponent },
      { path: '**', redirectTo: 'home' }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: []
})

export class RoutesRoutingModule {
}


