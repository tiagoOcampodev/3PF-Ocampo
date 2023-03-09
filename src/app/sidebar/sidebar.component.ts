import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SesionService } from '../core/services/sesion.service';
import { Sesion } from '../models/sesion';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  
  constructor(
    private router: Router,
    private sesion: SesionService
  ){} 

  redigirInicio(){
    this.router.navigate(['inicio']);
  }

  logout(){
    let sesionLogout: Sesion = {
      sesionActiva: false,
      usuarioActivo: undefined
    }
    this.sesion.logout(sesionLogout);
    this.router.navigate(['auth/login']);
  }
}
