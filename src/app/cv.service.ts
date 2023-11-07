import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  succsessSource = new BehaviorSubject<boolean>(false);
  constructor() {}



}
