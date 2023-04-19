import { Component } from '@angular/core';



@Component({
    selector: 'app-landing-page',
    templateUrl: './landing-page.component.html',
    styleUrls: ['./landing-page.component.css']

})


export class LandingPageComponent {
    items = ['Inicio','Productos','Servicios','Trabajo'];
    titulo = 'Transformamos ideas en soluciones digitales';
}