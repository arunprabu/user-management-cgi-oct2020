import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

// Decorator
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private REST_API_URL = 'http://jsonplaceholder.typicode.com/users';

  constructor( private http: HttpClient ) { }

  createUser( userData ){ // 1. get the data from comp
    console.log(userData);

    // 2. send the data to REST API
      // 2.1. Identify the REST API End Point - http://jsonplaceholder.typicode.com/users
      // 2.2. What HTTP Method? POST
      // 2.3. What REST API Client? HttpClient
    return this.http.post(this.REST_API_URL, userData)
      .pipe(map( (res: any) => {  // 3. get the resp from REST API
        console.log(res);
        // 4. send it back to the comp
        return res;
      }));
  }

  getUsers(){ // 1. get the request from comp
    console.log('Inside getUser()');

    // 2.1 Identify the REST API End Point - REST_API_URL
    // 2.2 What HTTP Method? GET
    // 2.3 What REST API Client? HttpClient

    return this.http.get(this.REST_API_URL)
      .pipe(map( (res: any) => {  // 3. get the resp from REST API
        console.log(res);
        // flip, filter, sort, remove
        // 4. send it back to the comp
        return res;
      }));
  }

  getUserById(userId){
    console.log(userId);
    return this.http.get(this.REST_API_URL + '/' + userId)
      .pipe(map( (res: any) => {
        console.log(res);
        return res;
      }));
  }

  updateUser( userData ){
    console.log(userData);
    return this.http.put(this.REST_API_URL + '/' + userData.id, userData)
      .pipe(map( (res: any) => {
        console.log(res);
        return res;
      }));
  }
}
