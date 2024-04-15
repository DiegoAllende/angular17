import { NgFor } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';
import { getListGC } from '@data/mock/mockListGc';

@Component({
  selector: 'app-gcom-bandeja',
  standalone: true,
  imports: [NgFor],
  templateUrl: './gcom-bandeja.component.html',
  styleUrl: './gcom-bandeja.component.scss'
})
export class GcomBandejaComponent {
  private _router = inject(Router);

  @Input() inEstado: string = "";

  list: any[] = [];

  ngOnInit(): void {
    this.getList(this.inEstado);
  }

  // SERVICIOS
  getList(estado: string) {
    this.list = getListGC(estado);
  }

  // BOTONES
  btnEdit(item: any) {
    this._router.navigate([`${this._router.url}/editar`]);
  }
}
