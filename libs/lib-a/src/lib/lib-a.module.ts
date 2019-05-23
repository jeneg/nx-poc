import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LibBModule} from '@poc/lib-b';

@NgModule({
  imports: [CommonModule, LibBModule]
})
export class LibAModule {}
