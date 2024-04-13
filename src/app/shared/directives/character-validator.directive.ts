import { Directive, HostListener, Input } from '@angular/core';
import { CharacterType } from '../../core/models/directives.models';
import { ALLOWED_KEYS, INPUT_PATTERNS } from '../../core/constants/directives.constants';

@Directive({
  selector: '[characterType]',
  standalone: true,
})
export class CharacterValidatorDirective {
  @Input() characterType!: CharacterType;

  @HostListener('keydown', ['$event'])
  onKeydown(event: KeyboardEvent) {
    const pattern = INPUT_PATTERNS.find(
      (p) => p.type === this.characterType
    )?.pattern || /[a-zA-Z0-9]/;
    const isAllowed = ALLOWED_KEYS.includes(event.key);

    if (!pattern.test(event.key) && !isAllowed) {
      event.preventDefault();
    }
  }
}
