import {Directive, ElementRef, Input, Renderer } from '@angular/core';

@Directive({ selector: '[userdirective]' })

export class UserDirective {

	constructor(el: ElementRef, renderer: Renderer) {
		renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'yellow');
	}
}
