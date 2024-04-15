import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MOCK_LIST_GC, getListGC } from '@data/mock/mockListGc';
import { GcomBandejaComponent } from '../components/gcom-bandeja/gcom-bandeja.component';

@Component({
  selector: 'app-solicitud',
  standalone: true,
  imports: [CommonModule, GcomBandejaComponent],
  templateUrl: './solicitud.component.html',
  styleUrl: './solicitud.component.scss'
})
export class SolicitudComponent implements OnInit {
  private _router = inject(Router);

  list: any[] = [];

  ngOnInit(): void {
    // this.getList("SOLICITUD");
  }

  // SERVICIOS
  

  // BOTONES
  
}
