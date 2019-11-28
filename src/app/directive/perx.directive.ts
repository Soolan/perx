import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import {Config} from '../settings/config';

@Directive({
  selector: '[appPerx]'
})
export class PerxDirective implements OnInit {
  @Input() size: string;
  style: any = this.elementRef.nativeElement.style;

  constructor(private elementRef: ElementRef) {
  }

  ngOnInit(): void {
    this.style.backgroundImage = 'url(assets/images/perx.png)';
    this.style.backgroundRepeat = 'no-repeat';
    this.style.backgroundSize = 'contain';
    this.style.display = 'inline-block';
    this.style.position = 'relative';
    this.setLogoSize(this.size);
  }

  private setLogoSize(size: string) {
    const logo = new Config().logo;
    switch (size) {
      case 'p':
        const p = logo[0].paragraph;
        this.style.bottom = p.bottom;
        this.style.width = p.width;
        this.style.height = p.height;
        break;

      case 'h1':
        const h1 = logo[1].heading1;
        this.style.bottom = h1.bottom;
        this.style.width = h1.width;
        this.style.height = h1.height;
        break;

      default:
        console.log('not a valid size');
    }
  }
}
