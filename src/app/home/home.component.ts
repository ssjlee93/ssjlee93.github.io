import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { DocsHeaderComponent } from "./docs-header/docs-header.component";
import { ExpComponent } from './exp/exp.component';
import { CarouselComponent } from "./carousel/carousel.component";

@Component({
  selector: 'app-home',
  imports: [
    MatDividerModule,
    MatIconModule,
    DocsHeaderComponent,
    ExpComponent,
    CarouselComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true
})
export class HomeComponent {

}
