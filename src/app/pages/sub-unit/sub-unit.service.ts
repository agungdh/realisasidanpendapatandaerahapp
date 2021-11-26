import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SubUnit } from './sub-unit';
import { environment } from '../../../environments/environment';

@Injectable({providedIn: 'root'})
export class SubUnitService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient){}

  public getSubUnits(): Observable<SubUnit[]> {
    return this.http.get<SubUnit[]>(`${this.apiServerUrl}/refsubunit/`);
  }
}