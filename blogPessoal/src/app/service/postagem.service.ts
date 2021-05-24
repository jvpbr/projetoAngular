import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  server = environment.server

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization',  localStorage.getItem('token') || '')
  }

  getAllPostagens(): Observable<Postagem[]>{
    return this.http.get<Postagem[]>(`${this.server}/postagens`, this.token)
  }

  getByIdPostagem(id: number): Observable<Postagem>{
    return this.http.get<Postagem>(`${this.server}/postagens/${id}`, this.token)
  }

  postPostagem(postagem: Postagem): Observable<Postagem>{
    return this.http.post<Postagem>(`${this.server}/postagens`, postagem, this.token)
  }

  putPostagem(postagem: Postagem): Observable<Postagem>{
    return this.http.put<Postagem>(`${this.server}/postagens`, postagem, this.token)
  }

  deletePostagem(id: number){
    return this.http.delete(`${this.server}/postagens/${id}`, this.token)
  }


}
