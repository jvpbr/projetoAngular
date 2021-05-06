import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  server = environment.server

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllTema(): Observable<Tema[]>{
    return this.http.get<Tema[]>(`${this.server}/tema`, this.token)
  }

  getByIdTema(id: number): Observable<Tema>{
    return this.http.get<Tema>(`${this.server}/tema/${id}`, this.token)
  }

  postTema(tema: Tema): Observable<Tema>{
    return this.http.post<Tema>(`${this.server}/tema`, tema, this.token)
  }

  putTema(tema: Tema):Observable<Tema>{
    return this.http.put<Tema>(`${this.server}/tema`, tema, this.token)
  }

  deleteTema(id: number){
    return this.http.delete(`${this.server}/tema/${id}`, this.token)
  }

}
