import { firebaseConfig } from './../environments/firebase-config';
import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {initializeApp , database} from 'firebase';
import {AngularFire, FirebaseListObservable} from 'angularfire2';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
 
  constructor(private http: Http, private  af: AngularFire) { 
     
     const menus: FirebaseListObservable<any> =  af.database.list('meniuri');
     
    
  }




  
}
