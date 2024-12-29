import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Student } from '../models/student';
//import { HttpClient } from '@angular/common/http';
//import { Mapping } from '../models/mapping';
//import { Server } from '../models/server';

//const BASE_URL = 'http://localhost:2999';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private studentSubject = new BehaviorSubject<Student>({id: 2945, name: 'Erol Balkan'});

  constructor() { }

  getStudent() {
    return this.studentSubject.asObservable();
  }
}
