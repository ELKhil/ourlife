import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Iposts } from '../Models/Iposts';


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private postForm! : FormGroup;

  constructor(
    private httpClient: HttpClient ) { }


    get(): Observable<Iposts[]>{
      return this.httpClient.get<Iposts[]>(environment.api_url + '/posts');
    }

    getPage(pagination : number): Observable<Iposts[]>{
      return this.httpClient.get<Iposts[]>(environment.api_url + '/posts?_page='+pagination+'&_limit=10');
    }
  
    post(value : Iposts){
      return this.httpClient.post<any>(environment.api_url + '/posts', value);
    }


  



    //return last post from the array

   

}
