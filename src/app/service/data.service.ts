import {Injectable} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map, pluck} from 'rxjs/operators';
import {Book} from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
  }

  public getData(): Observable<any> {
    return this.http
      .get('./assets/mocks/example.json')
      .pipe(
        pluck('data')
      );
  }
}
