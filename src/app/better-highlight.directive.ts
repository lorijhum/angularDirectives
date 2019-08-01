import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';


@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string;
  @Input() highlightColor: string = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;
  @HostBinding('style.color') color: string = 'black';
  
  constructor(private eleRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
//   this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', 'blue')
//   this.renderer.setStyle(this.eleRef.nativeElement, 'color', 'white')
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseover (eventData: Event){
   //  this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', 'blue')
  //  this.renderer.setStyle(this.eleRef.nativeElement, 'color', 'white')
    this.backgroundColor = this.highlightColor;
    this.color = 'white';

  }

  @HostListener('mouseleave') mouseleave (eventData: Event){
 //   this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', 'transparent')
 //   this.renderer.setStyle(this.eleRef.nativeElement, 'color', 'black')
    this.backgroundColor = this.defaultColor;
    this.color = 'black';

  }
}
