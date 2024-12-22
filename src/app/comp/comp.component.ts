import { Component, Input } from '@angular/core';
import { driver } from '../../driver';

@Component({
  selector: 'app-comp',
  imports: [],
  templateUrl: './comp.component.html',
  styleUrl: './comp.component.css'
})
export class CompComponent {
  @Input()
  vozac:driver | undefined;
  @Input()
  indks:number | undefined;
  onDrvView() {
    console.log("Klikna me");
  }
}
