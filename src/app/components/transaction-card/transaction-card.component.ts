import { Txn, User } from './../../interface/user';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-transaction-card',
  templateUrl: './transaction-card.component.html',
  styleUrls: ['./transaction-card.component.css']
})
export class TransactionCardComponent {
  @Input() txn : Txn | undefined ;
  @Input() user : User | undefined ;
}
