import { Component } from "@angular/core";
import{MainMenuComponent} from "./main-menu/main-menu.component";
import{TopMenuComponent} from "./top-menu/top-menu.component";

@Component({
    standalone:true,
    selector:'app-header',
    templateUrl:'./header.component.html',
    styleUrl:'./header.component.scss',
    imports:[MainMenuComponent,TopMenuComponent]
})  

export class HeaderComponent{

}