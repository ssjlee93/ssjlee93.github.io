import {ChangeDetectionStrategy, Component, viewChild} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatAccordion, MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-exp',
  imports: [
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './exp.component.html',
  styleUrl: './exp.component.scss',
  providers: [provideNativeDateAdapter()]
})
export class ExpComponent {
  accordion = viewChild.required(MatAccordion);

  infosysStartDate = new Date(2021, 12, 21);
  infosysEndDate = new Date(2024, 7, 24);
  infosysDate = `${this.infosysStartDate.toLocaleString("default", {month: "short"})} ${this.infosysStartDate.getFullYear()} 
  - ${this.infosysEndDate.toLocaleString("default", { month : "short" })} ${this.infosysEndDate.getFullYear()}`;
}
