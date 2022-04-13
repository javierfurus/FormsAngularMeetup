import {
  Directive,
  ElementRef,
  Renderer2,
  OnInit,
  HostListener,
  HostBinding,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appHighlightOnHover]',
})
export class HighlightOnHoverDirective implements OnInit {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.color = this.defaultColor;
  }

  @Input() defaultColor = 'blue';
  @Input() appHighlightOnHover: string = 'lime';

  @HostBinding('style.color') color: string = this.defaultColor;

  @HostListener('mouseenter') mouseover() {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      'grey'
    );

    this.color = this.appHighlightOnHover;
  }

  @HostListener('mouseleave') mouseleave() {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      'transparent'
    );
    this.color = this.defaultColor;
  }
}
