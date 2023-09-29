import { Component } from '@angular/core';
import { Txn, TxnRequest, User } from 'src/app/interface/user';
import { ApiServicesService } from 'src/app/services/api-services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  private Txns: Txn[] = [];
  public user1 : User={"userId":22,"username":"emmma_watson","email":"emma.wat@eg.com"};
  public user2 : User={"userId":23,"username":"emmma_watsonq","email":"emma.theree@eg.com"};
  public txns:TxnRequest={"description":"movieTickets19999","amount":500.123,"isPaid":false,"fromUser":this.user1,
  "toUser":this.user2};//last_updated:new Date().toString()};

  public txnsR:TxnRequest={"description":"movieTickets19999","amount":500.123,"isPaid":true,"fromUser":this.user1,
  "toUser":this.user2}//,last_updated:new Date().toString()};
  public txReq: TxnRequest={
    "description": "pppppp",
    "amount": 777.123,
    "fromUser": {
        "userId": 22,
        "username": "emmma_watson",
        "email": "emma.wat@eg.com"
    },
    "toUser": {
        "userId": 23,
        "username": "emmma_watsonq",
        "email": "emma.theree@eg.com"
    },
     "isPaid": true
}
constructor(private api:ApiServicesService){}
// ngOnInit(): void {
//   this.api.getTransactions_user(20).subscribe((txns)=>(this.Txns = txns));
//   // this.api.getUserId("emma.smith@example.com").subscribe((a)=>(console.log(a)));
//   // this.api.createUser({"username":"emmma_watson","email":"emma.wat@eg.com"})
//   // this.api.createUser(this.user2)
//   // .subscribe((x)=>(console.log(x)));
//   console.log(this.txns);
//   // this.api.createTxn(this.txns).subscribe((x)=>(console.log(x)));

//   this.api.updateTxn(31,this.txReq).subscribe((x)=>(console.log(x)));
// }

}


