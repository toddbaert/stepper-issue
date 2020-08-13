import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DtIconModule } from '@dynatrace/barista-components/icon';
import { DtStepperModule } from '@dynatrace/barista-components/stepper';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        DtIconModule.forRoot({ svgIconLocation: '/assets/icons/{{name}}.svg' }),
        DtStepperModule,
        HttpClientModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
