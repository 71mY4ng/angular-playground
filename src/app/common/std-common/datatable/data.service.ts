import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class DataService<T> {
  
  abstract getDatum(): Observable<T[]>;

}
