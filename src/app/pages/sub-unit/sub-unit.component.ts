import { HttpErrorResponse } from '@angular/common/http';
import {Component, OnDestroy, OnInit} from '@angular/core';
import { SubUnit } from './sub-unit';
import { SubUnitService } from './sub-unit.service';

@Component({
  selector: 'ngx-dashboard',
  templateUrl: './sub-unit.component.html',
})
export class SubUnitComponent implements OnInit{
  public subUnits: SubUnit[];

  constructor(private subUnitService: SubUnitService) {}
  
  ngOnInit() {
    this.getSubUnits();
  }

  public getSubUnits(): void {
    this.subUnitService.getSubUnits().subscribe(
      (response: SubUnit[]) => {
        this.subUnits = response;
        console.log(this.subUnits);
      },
      (error: HttpErrorResponse) => {
        console.log(error);
        alert(error.message);
      }
    );
  }
}
