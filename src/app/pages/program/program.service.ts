import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Program } from './program';
import { environment } from '../../../environments/environment';

@Injectable({providedIn: 'root'})
export class ProgramService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient){}

  public getPrograms(kodeUrusan: number, kodeBidang: number, kodeUnit: number, kodeSubUnit: number): Observable<Program[]> {
    return this.http.get<Program[]>(`${this.apiServerUrl}/program/${kodeUrusan}/${kodeBidang}/${kodeUnit}/${kodeSubUnit}`);
  }
}