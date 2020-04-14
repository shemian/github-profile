import { Injectable } from '@angular/core';
import { User } from "./user";
import { environment } from "../environments/environment";
import { Repo } from "./repo";
import { HttpBackend, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserSeviceService {

  foundUser: User;
  allRepo:Repo;
  apiKey: string = environment.apiKey;


  constructor(private http:HttpClient) { 
    this.foundUser = new User('', '', '', '', '', '', 0, 0, 0, new Date());
    new User('', '', '', '', '', '', 0, 0, 0, new Date());
   }


   searchUser( userName:string){
    interface Responce {
     url: string;
     name: string;
     email: string;
     login: string;
     html_url: string;
     location: string;
     public_repos: number;
     followers: number;
     following: number;
     avatar_url: string;
     created_at: Date
    }
    return new Promise((resolve, reject) => {
     this.http
       .get<Responce>(
         'https://api.github.com/users/' +
           userName +
           '?access_token=' +
           environment.apiKey
       )
       .toPromise()
       .then(
         (result) => {
           this.foundUser = result;
           console.log(this.foundUser);
           resolve();
         },
         (error) => {
           console.log(error);
           reject();
         }
       );
   });
 }

 // getting repo info

 getRepos(userName) {
   interface Repos {
     name: string;
     html_url: string;
     description: string;
     forks: number;
     watchers_count: number;
     language: string;
     created_at: Date;
   }
   return new Promise((resolve, reject) => {
     this.http
       .get<Repos>(
         'https://api.github.com/users/' +
           userName +
           '/repos?order=created&sort=asc?access_token=' +
           environment.apiKey
       )
       .toPromise()
       .then(
         (results) => {
           this.allRepo = results;
           resolve();
         },
         (error) => {
           console.log(error);
           reject();
         }
       );
   });
 }
  
}
