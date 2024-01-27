import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AlertsComponent } from './alerts/alerts.component';
import { CardsComponent } from './cards/cards.component';
import { CouponsComponent } from './coupons/coupons.component';
import { DataComponent } from './data/data.component';
import { LimitsComponent } from './limits/limits.component';
import { SavingrecommendationsComponent } from './savingrecommendations/savingrecommendations.component';

const routes: Routes = [
  {path : '', component : LoginComponent},
  {path : 'navbar', component : HeaderComponent,
    children : [
      {path : 'home', component : HomeComponent},
      {path : 'alerts', component : AlertsComponent},
      {path : 'cards', component : CardsComponent},
      {path : 'coupons', component : CouponsComponent},
      {path : 'data', component : DataComponent},
      {path : 'limits', component : LimitsComponent},
      {path : 'recommendations', component : SavingrecommendationsComponent}
    ]
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }