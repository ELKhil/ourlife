import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserForm } from '../Models/UserForm';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }


  get(): Observable<UserForm[]>{
    return this.http.get<UserForm[]>(environment.api_url +'/user');
  }
  
  post(value : UserForm){
    return this.http.post<any>(environment.api_url + '/api/user', value);
  }

  
}
