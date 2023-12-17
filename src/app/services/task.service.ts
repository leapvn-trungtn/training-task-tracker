import { Task } from './../Task';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { url } from 'inspector';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  }),
};

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiURL = 'http://localhost:5000/tasks'
  constructor(private http: HttpClient) {}



  getTasks() : Observable<Task[]> {
    return this.http.get<Task[]>(this.apiURL);
  }

  deleteTask(task:Task) : Observable<Task>{
    const url = `${this.apiURL}/${task.id}`;
    return this.http.delete<Task>(url);
  }

  changeStatus(task: Task): Observable<Task>{
    const url = `${this.apiURL}/${task.id}`;
    if (task.reminder == true){
      task.reminder = false;
      return this.http.put<Task>(url,task,httpOptions);
    }else {
      task.reminder = true;
      return this.http.put<Task>(url,task,httpOptions);
    }
  }

  addTask(task:Task) : Observable<Task>{
    return this.http.post<Task>(this.apiURL,task,httpOptions);

  }

}
