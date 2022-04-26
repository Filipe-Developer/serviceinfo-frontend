import { Produto } from 'src/app/models/produto';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  baseUrl: String = environment.baseUrl;
  
  constructor(private http: HttpClient) { }

  findAll():Observable<Produto[]>{
    const url = this.baseUrl + "/produtos";
    return this.http.get<Produto[]>(url);
  }
}
