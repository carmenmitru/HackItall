import { Component, OnInit } from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
@Component({
    moduleId: module.id,
    selector: 'navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    $orders:any;
    countOrders;
    constructor(private af:AngularFire) {
         this.$orders = this.af.database.list('orders');
     }

    ngOnInit() { 
        this.$orders.subscribe(x=>{
            console.log(x.length);
            this.countOrders = x.length;
        })
    }
}