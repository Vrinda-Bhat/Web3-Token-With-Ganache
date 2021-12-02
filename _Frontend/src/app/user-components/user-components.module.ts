import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WalletBalanceComponent } from './wallet-balance/wallet-balance.component';
import { TransferPointsComponent } from './transfer-points/transfer-points.component';
import { FormsModule } from '@angular/forms';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';



@NgModule({
  declarations: [
    UserDashboardComponent,
    WalletBalanceComponent,
    TransferPointsComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    WalletBalanceComponent,
    TransferPointsComponent,
    UserDashboardComponent
  ]
})
export class UserComponentsModule { }
