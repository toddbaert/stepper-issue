import { Component, ViewChild } from '@angular/core';
import { DtStepper } from '@dynatrace/barista-components/stepper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  @ViewChild(DtStepper) stepper: DtStepper;

  things = [];

  onNextStep() {
    this.things = [1, 2, 3]; // removing this will make everything work. The change on this prop is related to the problem.
    this.stepper.next();
    console.log('onNextStep');
  }

}
