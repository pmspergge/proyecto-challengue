import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

    items = ['Inicio','Productos','Servicios','Trabajo'];

    contactClicked() {
        // Agrega el código para manejar el evento de clic del botón
        console.log("Contacto clickeado");
    }

    isMenuOpen = false;

    toggleMenu(): void {
      this.isMenuOpen = !this.isMenuOpen;
    }
}

