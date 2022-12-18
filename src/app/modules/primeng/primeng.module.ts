import { NgModule } from '@angular/core';
import {ButtonModule} from "primeng/button";

const PRIMENG = [
  ButtonModule
]
@NgModule({
  imports: [PRIMENG],
  exports: [PRIMENG]
})
export class PrimengModule { }
