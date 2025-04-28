import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SvgIconComponent } from './svg-icon.component';

@NgModule({
  declarations: [SvgIconComponent],
  imports: [],
  exports: [SvgIconComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SvgIconModule {}
