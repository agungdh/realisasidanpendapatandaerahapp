import { NgModule } from '@angular/core';

import { SubUnitComponent } from './sub-unit.component';

import { SubUnitService } from './sub-unit.service';

@NgModule({
  imports: [],
  declarations: [
    SubUnitComponent,
  ],
  providers: [SubUnitService],
})

export class SubUnitModule { }
