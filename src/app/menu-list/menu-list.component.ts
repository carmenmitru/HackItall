import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {initializeApp , database} from 'firebase';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
@Component({
    moduleId: module.id,
    selector: 'menu-list',
    templateUrl: './menu-list.component.html'
})
export class MenuComponent implements OnInit {
     menuList = [];
    userFilter: any = { nume: '' };
     $menus: any ;
     $orders: any ;
     norder ;
     constructor(private http: Http, private  af: AngularFire) { 
         this.$menus = this.af.database.list('meniuri');
         this.$orders = this.af.database.list('orders');
 
  }
    
  sendMenus(obj) {
    console.log(obj);

    let headers = new Headers();
    headers.append('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token');
    headers.append('Access-Control-Allow-Methods', "POST, GET, OPTIONS, PUT, DELETE");
    headers.append('Accept', 'application/json');
    const options = new RequestOptions({ headers: headers });
    const body = ({
	"Id":69,
	"ContactRoleId":0,
	"EventSubscriptionId":4,
	"NotificationTypeId":4,
	"OtherValue":"test123",
	"RecipientTypeId":3
});
    return this.http.post('http://localhost:3000/readmenu', body, headers).subscribe(res => {
            console.log(res);
    },
    err => {
        console.log(err);
    });
  }
    ngOnInit() { 
         this.$menus.subscribe(item => this.menuList = item);

       
         setTimeout(() => {
                 this.http.get('http://localhost:3000/welcome').subscribe((res: Response) => {
                console.log(res);
          }); 
         }, 3000);

         setTimeout(() => {
                 this.http.get('http://localhost:3000/readmenu').subscribe((res: Response) => {
                console.log(res);
          }); 
         }, 9000);

      //  this.sendMenus(this.menuList);
        
    }


    placeOrder(idMeniu) {
            console.log(idMeniu,this.norder);
            this.$orders.push(
                { 'idmeniu': idMeniu,
                  'status': 'pending' 
                });
                this.norder = 0;
    }
          

                
         
     
        
    

   
}
