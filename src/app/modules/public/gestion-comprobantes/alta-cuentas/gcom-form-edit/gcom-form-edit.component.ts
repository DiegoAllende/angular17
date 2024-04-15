import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-gcom-form-edit',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './gcom-form-edit.component.html',
  styleUrl: './gcom-form-edit.component.scss'
})
export class GcomFormEditComponent {
  private _fb = inject(FormBuilder);
  myForm: FormGroup = this._fb.group({
    // Seccion 1
    tipoAccion: [null, [Validators.required]],
    compania: [null, [Validators.required]],
    cuentaContable: [null],
    isCuentaContable: [null],
    // Seccion 2
    tipoCuenta: [null, [Validators.required]],
    riesgoAn: [null, [Validators.required]],
    riesgoFi: [null],
    comentario: [null],
  });

  onSubmit() {
    if(this.myForm.invalid) {
      console.log("datos invalidos");
    }
  }
}
