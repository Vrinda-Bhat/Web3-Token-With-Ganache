import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './auth/login.guard';
import { AboutComponent } from './home-components/about/about.component';
import { HomeComponent } from './home-components/home/home.component';
import { LoginComponent } from './home-components/login/login.component';
import { DashboardComponent } from './admin-components/dashboard/dashboard.component';
import { IssuePointsComponent } from './admin-components/issue-points/issue-points.component';
import { PointsInCirculationComponent } from './admin-components/points-in-circulation/points-in-circulation.component';
import { LoginUserComponent } from './home-components/login-user/login-user.component';
import { UserDashboardComponent } from './user-components/user-dashboard/user-dashboard.component';
import { WalletBalanceComponent } from './user-components/wallet-balance/wallet-balance.component';
import { TransferPointsComponent } from './user-components/transfer-points/transfer-points.component';
import { UserLoginGuard } from './auth/user-login.guard';
import { RegisterUserComponent } from './home-components/register-user/register-user.component';

const routes: Routes = [
  { path: '',component: HomeComponent},
  { path: 'login',component: LoginComponent },
  { path: 'about',component: AboutComponent},
  { path: 'loginUser',component: LoginUserComponent},
  { path: 'registerUser',component: RegisterUserComponent},
  { path: 'dashboard',component: DashboardComponent, canActivate:[LoginGuard]},
  { path: 'issuePoints',component: IssuePointsComponent, canActivate:[LoginGuard]},
  { path: 'pointsInCirculation',component: PointsInCirculationComponent, canActivate:[LoginGuard]},
  { path: 'userDashboard',component: UserDashboardComponent, canActivate:[UserLoginGuard]},
  { path: 'walletBalance',component: WalletBalanceComponent, canActivate:[UserLoginGuard]},
  { path: 'transferPoints',component: TransferPointsComponent, canActivate:[UserLoginGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
