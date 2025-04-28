import { Component, Input, OnInit, ElementRef } from '@angular/core';
import '../../svg-icon.js'; // Import the Web Component

@Component({
  selector: 'ang-svg-icon',
  template: `
    <svg-icon
      [attr.icon]="icon"
      [attr.size]="size"
      [attr.color]="color"
      [attr.viewBox]="viewBox"
    >
    </svg-icon>
  `,
})
export class SvgIconComponent implements OnInit {
  @Input() icon!: string;
  @Input() size: number | string = 24;
  @Input() color: string = 'black';
  @Input() viewBox: string = '0 0 24 24';

  constructor() {}

  ngOnInit() {}
}
