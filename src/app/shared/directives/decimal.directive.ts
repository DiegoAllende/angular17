import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[dirDecimal]',
  standalone: true
})
export class DecimalDirective {



  // TECLAS PERMITIDAS
  /*private specialKeys: Array<string> = [
    "Backspace",
    "Tab",
    "Delete",
    "Insert",
  ];*/

  @Input() min!: number;
  @Input() max!: number;

  @Input() decimalPlaces: number = 2;
  @Input() negative = 0;
  constructor(private el: ElementRef, public renderer: Renderer2) {
    console.log("dirDecimal: ", el.nativeElement.value);
  }

  @HostListener('input', ['$event.target.value']) onInput(e: string) {
    console.log("e: ", e);
    this.validateFormt(e);
  }

  private validateFormt(val: string) {
    let initalValue: string = val;
    initalValue = initalValue.replace(/[^\.|0-9]/g, '');
    console.log("initalValue: ", initalValue);
    // VALIDAR SOLO UN PUNTO DECIMAL
    const count = (initalValue.match(/\./g) || []).length;
    console.log("match: ", initalValue.match(/\./g));
    console.log("count: ", count);
    for (let i = 1; i < count; i++) {
      initalValue = this.repaceSecondDotOccurrence(initalValue);
      console.log("initalValue2: ", initalValue);
    }
    console.log("initalValue3: ", initalValue);
    this.renderer.setProperty(this.el.nativeElement, 'value', initalValue);
    // this.el.nativeElement.value = initalValue;
  }

  repaceSecondDotOccurrence(inputString: string): string {
    let t = 0;
    return inputString.replace(/\./g, function (match) {
      t++;
      return (t === 2) ? '' : match;
    });
  }

  // **********************************************************+

  // private checkAllowNegative(value: string) {
  //   if (this.decimalPlaces <= 0) {
  //     return String(value).match(new RegExp(/^-?\d+$/));
  //   } else {
  //     var regExpString = "^-?\\s*((\\d+(\\.\\d{0," + this.decimalPlaces + "})?)|((\\d*(\\.\\d{1," + this.decimalPlaces + "}))))\\s*$";
  //     return String(value).match(new RegExp(regExpString));
  //   }
  // }

  // private check(value: string) {
  //   if (this.decimalPlaces <= 0) {
  //     return String(value).match(new RegExp(/^\d+$/));
  //   } else {
  //     var regExpString =
  //       "^\\s*((\\d+(\\.\\d{0," +
  //       this.decimalPlaces +
  //       "})?)|((\\d*(\\.\\d{1," +
  //       this.decimalPlaces +
  //       "}))))\\s*$";
  //     return String(value).match(new RegExp(regExpString));
  //   }
  // }

  // private run(oldValue:any) {
  //   setTimeout(() => {
  //     let currentValue: string = this.el.nativeElement.value;
  //     let allowNegative = this.negative > 0 ? true : false;

  //     if (allowNegative) {
  //       if (
  //         !["", "-"].includes(currentValue) &&
  //         !this.checkAllowNegative(currentValue)
  //       ) {
  //         this.el.nativeElement.value = oldValue;
  //       }
  //     } else {
  //       if (currentValue !== "" && !this.check(currentValue)) {
  //         this.el.nativeElement.value = oldValue;
  //       }
  //     }
  //   });
  // }

  // @HostListener("keydown", ["$event"])
  // onKeyDown(event: KeyboardEvent) {
  //   this.run(this.el.nativeElement.value);
  // }

  // @HostListener("paste", ["$event"])
  // onPaste(event: ClipboardEvent) {
  //   this.run(this.el.nativeElement.value);
  // }

}
