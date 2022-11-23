import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employe } from '../model/employe';
const URL = 'http://localhost:3000/EXERCICE/employe';
@Injectable({
  providedIn: 'root'
})

export class EmployeService {
  getemploye():Observable<Employe[]>{
    return this.http.get<Employe[]>(URL);
    }
  constructor(private http:HttpClient) { }

}
