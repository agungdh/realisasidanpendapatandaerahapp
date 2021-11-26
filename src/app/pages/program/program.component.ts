import { HttpErrorResponse } from '@angular/common/http';
import {Component, OnDestroy, OnInit} from '@angular/core';
import { Program } from './program';
import { ProgramService } from './program.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ngx-dashboard',
  templateUrl: './program.component.html',
})
export class ProgramComponent implements OnInit{
  public programs: Program[];
  
  private kodeUrusan: number;
  private kodeBidang: number;
  private kodeUnit: number;
  private kodeSubUnit: number;

  constructor(
    private programService: ProgramService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
    
  }
  
  ngOnInit() {
    this.kodeUrusan = parseInt(this.activatedRoute.snapshot.paramMap.get('kodeUrusan'));
    this.kodeBidang = parseInt(this.activatedRoute.snapshot.paramMap.get('kodeBidang'));
    this.kodeUnit = parseInt(this.activatedRoute.snapshot.paramMap.get('kodeUnit'));
    this.kodeSubUnit = parseInt(this.activatedRoute.snapshot.paramMap.get('kodeSubUnit'));
    
    this.getPrograms();
  }

  public getPrograms(): void {
    this.programService.getPrograms(
      this.kodeUrusan,
      this.kodeBidang,
      this.kodeUnit,
      this.kodeSubUnit,
    ).subscribe(
      (response: Program[]) => {
        this.programs = response;
      }
    );
  }
}
