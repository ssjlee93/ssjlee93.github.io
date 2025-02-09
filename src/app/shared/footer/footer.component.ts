import { Component } from '@angular/core';
import { LogoComponent } from "../logo/logo.component";

@Component({
  selector: 'app-footer',
  imports: [LogoComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  standalone: true
})
export class FooterComponent {

}
