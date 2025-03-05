import { ChangeDetectionStrategy, Component, viewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import experiences from './exp.content.json';
import { Exp } from './exp.model';
import { Highlight } from './highlight.model';

@Component({
  selector: 'app-exp',
  imports: [
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatListModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './exp.component.html',
  styleUrl: './exp.component.scss',
  providers: [provideNativeDateAdapter()]
})
export class ExpComponent {
  accordion = viewChild.required(MatAccordion);

  // load experiences from JSON file
  // and map it to Exp interface
  exps: Exp[] = experiences.map(e => {
    const exp: {} = {
      ...e,
      highlights: e.highlights.map(h => h as Highlight),
      startDate: new Date(e.startDate).setHours(0, 0, 0, 0),
      endDate: new Date(e.endDate).setHours(0, 0, 0, 0),
      dates: `${new Date(e.startDate).toLocaleString("default", { month: "short" })} ${new Date(e.startDate).getFullYear()} 
      - ${new Date(e.endDate).toLocaleString("default", { month: "short" })} ${new Date(e.endDate).getFullYear()}`
    };
    return exp as Exp;
  }).sort((a, b) => b.endDate.valueOf() - a.endDate.valueOf())

}
