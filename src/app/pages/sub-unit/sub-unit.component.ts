import { HttpErrorResponse } from '@angular/common/http';
import {Component, OnDestroy, OnInit} from '@angular/core';
import { SubUnit } from './sub-unit';
import { SubUnitService } from './sub-unit.service';
import { Router } from '@angular/router';
@Component({
  selector: 'ngx-dashboard',
  templateUrl: './sub-unit.component.html',
})
export class SubUnitComponent implements OnInit{
  public subUnits: SubUnit[];

  constructor(private subUnitService: SubUnitService, private router: Router) {}
  
  ngOnInit() {
    this.getSubUnits();
  }

  public goToProgram(subUnit: SubUnit): void {
    this.router.navigateByUrl(`/pages/program/${subUnit.kodeUrusan}/${subUnit.kodeBidang}/${subUnit.kodeUnit}/${subUnit.kodeSubUnit}`);
  }

  public getSubUnits(): void {
    this.subUnitService.getSubUnits().subscribe(
      (response: SubUnit[]) => {
        this.subUnits = response;
      }
    );
  }
}
