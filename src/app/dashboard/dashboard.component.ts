import { NavbarComponent } from './../navbar/navbar.component';
import { Component, OnInit } from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import {ToastyService, ToastyConfig, ToastOptions, ToastData} from 'ng2-toasty';



@Component({
    moduleId: module.id,
    selector: 'dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    $orders;
    
    orderList;
    constructor(private af: AngularFire, private toastyService:ToastyService, private toastyConfig: ToastyConfig, private http: Http) { 
        this.$orders = this.af.database.list('orders');
         this.toastyConfig.theme = 'material';
    }

    ngOnInit() {
        this.$orders.subscribe(x => {
            this.orderList = x;
        });
        this.http.get('http://localhost:3000/welcomeDashboard').subscribe((res: Response) => {
                console.log(res);
        });
    }
    


    


}