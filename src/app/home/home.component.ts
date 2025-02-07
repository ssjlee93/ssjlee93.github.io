import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { DocsHeaderComponent } from "./docs-header/docs-header.component";

@Component({
  selector: 'app-home',
  imports: [MatDividerModule, MatIconModule, DocsHeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true
})
export class HomeComponent {

}
