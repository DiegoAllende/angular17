import {
  Directive,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[dirPrice]',
  standalone: true,
})
export class PriceDirective implements OnInit {
  defaultValue = '000';
  isTouched?: boolean;
  constructor(public el: ElementRef, public renderer: Renderer2) {}

  ngOnInit(): void {
    this.currencyFormat(this.defaultValue);
  }

  @HostListener('focus', ['$event.target.value']) touched(e: string) {
    this.isTouched = true;
    this.currencyFormat(e);
  }
  // @HostListener('blur', ['$event.target.value']) clear(e: string) {
  //   if (e === '0.00') {
  //     this.isTouched = false;
  //     this.renderer.setProperty(this.el.nativeElement, 'value', '');
  //   }
  // }

  @HostListener('click', ['$event.target.value']) onClick(e: string) {
    // this.el.nativeElement.setSelectionRange(e.length,e.length);
  }

  @HostListener('input', ['$event.target.value']) onInput(e: string) {
    this.currencyFormat(e);
  }

  @HostListener('paste', ['$event']) onPaste(event: ClipboardEvent) {
    event.preventDefault();
    this.currencyFormat(event.clipboardData!.getData('text/plain'));
  }

  private currencyFormat(value: string) {
    value = !value.length && this.isTouched ? this.defaultValue : value;
    value = this.removeZero([...value]);
    value = this.addZero([...value]);
    value = value.replace(/\D/g, '');
    value = value.replace(/(\d)(\d{2})$/, '$1.$2');
    value = new Intl.NumberFormat('en-US', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    }).format(Number(value));
    this.renderer.setProperty(this.el.nativeElement, 'value', value);
  }

  private removeZero = (value: string[]) =>
    (value.filter((e) => e !== '.' && e !== ',').length > 3 && value[0] === '0'
      ? value.slice(1)
      : value
    ).join('');

  private addZero = (value: string[]) =>
    (value.filter((e) => e !== '.' && e !== ',').length < 3 && this.isTouched
      ? ['0', ...value]
      : value
    ).join('');
}
