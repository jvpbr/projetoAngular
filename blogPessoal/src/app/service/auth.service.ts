import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { User } from '../model/User';
import { UserLogin } from '../model/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  server = environment.server

  token = localStorage.getItem('token')

  constructor(
    private http: HttpClient
  ) { }


  entrar(userLogin: UserLogin): Observable<UserLogin>{
    return this.http.post<UserLogin>(`${this.server}/usuarios/logar`, userLogin)
  }

  cadastrar(user: User): Observable<User>{
    return this.http.post<User>(`${this.server}/usuarios/cadastrar`, user)
  }

  getByIdUser(id: number): Observable<User>{
    return this.http.get<User>(`${this.server}/usuarios/${id}`)
  }

  logado(){
    let ok: boolean = false
    let token = localStorage.getItem('token')

    if(token != null){
      ok = true
    }

    return ok
  }

}
