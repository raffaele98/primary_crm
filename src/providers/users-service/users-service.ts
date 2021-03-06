import { Injectable } from '@angular/core';
import { AuthHttp } from 'angular2-jwt'

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

/*
 Generated class for the UsersServiceProvider provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
@Injectable()
export class UsersServiceProvider {
  data: any;

  constructor(public http: AuthHttp) {
    console.log('Hello UsersServiceProvider Provider');
  }

  index(){
    return this.http.get('https://multi-tenancy-crm.herokuapp.com/api/users')
      .map((res:any)=>res.json());
  }

  show(user_id:number){
    return this.http.get('https://multi-tenancy-crm.herokuapp.com/api/users/' + user_id)
      .map((res:any)=>res.json());
  }

  store(name:string, email:string, password:string, role_id:number, first_name:string, last_name:string,
        cell_phone:string, fax:string, address:string, postcode:string, province:string, nation:string,
        customer_id:number){
    let url:string = "https://multi-tenancy-crm.herokuapp.com/api/users";
    return this.http.post(url, JSON.stringify({name:name, first_name:first_name, last_name:last_name, email:email, password:password, customer_id:customer_id, role_id:role_id, cell_phone:cell_phone, fax:fax, address:address, postcode:postcode, province:province, nation:nation})).map((res:any)=>res.json());
  }

  update(name:string, email:string, password:string, role_id:number, first_name:string, last_name:string,
         cell_phone:string, fax:string, address:string, postcode:string, province:string, nation:string,
         user_id:number, customer_id?:number){
    let url: string = "https://multi-tenancy-crm.herokuapp.com/api/users/" + user_id;
    return this.http.put(url, JSON.stringify({name:name, first_name:first_name, last_name:last_name, email:email, password:password, customer_id:customer_id, role_id:role_id, cell_phone:cell_phone, fax:fax, address:address, postcode:postcode, province:province, nation:nation})).map((res:any)=>res.json());
  }

  delete(user_id:number){
    let url: string = "https://multi-tenancy-crm.herokuapp.com/api/users/" + user_id;
    return this.http.delete(url).map((res:any) => res.json());
  }

  getUserToSubscribe(){
    let url:string = "https://multi-tenancy-crm.herokuapp.com/api/subscriber";
    return this.http.get(url).map((res:any)=>res.json());
  }

  subscribe(role_id:number, user_id:number){
    let url:string = "https://multi-tenancy-crm.herokuapp.com/api/" + user_id + "/confirm";
    return this.http.post(url, JSON.stringify({role_id:role_id})).map((res:any)=>res.json());
  }



}
