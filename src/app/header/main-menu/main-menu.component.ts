import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    standalone:true,
    selector: 'main-menu',
    templateUrl: './main-menu.component.html',
    styleUrls: ['./main-menu.component.scss'],
    imports:[CommonModule],
})
export class MainMenuComponent {
    mainMenuItems:string[]=["Home","Products","Sale","Contacts","Services"]
}
