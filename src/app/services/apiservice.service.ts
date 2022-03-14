import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  apiUrl='https://localhost:44332/api/TodoItems'
  constructor(private http:HttpClient) { }

  getAllTodo():Observable<any>{
    return this.http.get(this.apiUrl)
    .pipe(tap(res=>console.log(res)));
  }
}
