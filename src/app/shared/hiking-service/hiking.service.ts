import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/defaultIfEmpty';
import {Hiking} from '../interfaces/hiking';

@Injectable()
export class HikingService {
  // private property to store all backend URLs
  private _backendURL: any;

  constructor(private _http: HttpClient) {
    this._backendURL = {};

    // build backend base url
    let baseUrl = `${environment.backend.protocol}://${environment.backend.host}`;
    if (environment.backend.port) {
      baseUrl += `:${environment.backend.port}`;
    }

    // build all backend urls
    Object.keys(environment.backend.endpoints).forEach(k => this._backendURL[k] = `${baseUrl}${environment.backend.endpoints[k]}`);
  }

  /**
   * Function to return one hiking for current id
   *
   * @param id
   *
   * @returns {Observable<Hiking>}
   */
  fetchOne(id: string): Observable<any> {
    return this._http.get(this._backendURL.oneHikings.replace(':id', id), this._options());
  }

  /**
   * Function to create a new hiking
   *
   * @param hiking
   *
   * @returns {Observable<Hiking>}
   */
  create(hiking): Observable<any> {
    return this._http.post(this._backendURL.allHikings, hiking, this._options());
  }

  /**
   * Function to update one hiking
   *
   * @param hiking
   *
   * @returns {Observable<Hiking>}
   */
  update(hiking: any): Observable<any> {
    return this._http.put(this._backendURL.oneHikings.replace(':id', hiking.id), hiking, this._options());
  }

  /**
   * Function to delete one hiking for current id
   *
   * @param id
   *
   * @returns {Observable<any[]>}
   */
  delete(id: string): Observable<any[] | ArrayBuffer> {
    return this._http.delete(this._backendURL.oneHikings.replace(':id', id), this._options())
      .filter(_ => !!_)
      .defaultIfEmpty([]);
  }

  /**
   * Function to return request options
   *
   * @returns {Hiking}
   */
  private _options(headerList: Object = {}): any {
    const headers = new HttpHeaders(Object.assign({ 'Content-Type': 'application/json' }, headerList));
    return { headers };
  }
}
