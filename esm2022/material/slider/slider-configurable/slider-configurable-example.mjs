import { Component } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/card";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/input";
import * as i4 from "@angular/forms";
import * as i5 from "@angular/material/checkbox";
import * as i6 from "@angular/material/slider";
/**
 * @title Configurable slider
 */
export class SliderConfigurableExample {
    constructor() {
        this.disabled = false;
        this.max = 100;
        this.min = 0;
        this.showTicks = false;
        this.step = 1;
        this.thumbLabel = false;
        this.value = 0;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: SliderConfigurableExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: SliderConfigurableExample, isStandalone: true, selector: "slider-configurable-example", ngImport: i0, template: "<mat-card>\r\n  <mat-card-content>\r\n    <h2 class=\"example-h2\">Slider configuration</h2>\r\n\r\n    <section class=\"example-section\">\r\n      <mat-form-field class=\"example-margin example-width\">\r\n        <mat-label>Value</mat-label>\r\n        <input matInput type=\"number\" [(ngModel)]=\"value\">\r\n      </mat-form-field>\r\n      <mat-form-field class=\"example-margin example-width\">\r\n        <mat-label>Min value</mat-label>\r\n        <input matInput type=\"number\" [(ngModel)]=\"min\">\r\n      </mat-form-field>\r\n      <mat-form-field class=\"example-margin example-width\">\r\n        <mat-label>Max value</mat-label>\r\n        <input matInput type=\"number\" [(ngModel)]=\"max\">\r\n      </mat-form-field>\r\n      <mat-form-field class=\"example-margin example-width\">\r\n        <mat-label>Step size</mat-label>\r\n        <input matInput type=\"number\" [(ngModel)]=\"step\">\r\n      </mat-form-field>\r\n    </section>\r\n\r\n    <section class=\"example-section\">\r\n      <mat-checkbox [(ngModel)]=\"showTicks\">Show ticks</mat-checkbox>\r\n    </section>\r\n\r\n    <section class=\"example-section\">\r\n      <mat-checkbox [(ngModel)]=\"thumbLabel\">Show thumb label</mat-checkbox>\r\n    </section>\r\n\r\n    <section class=\"example-section\">\r\n      <mat-checkbox [(ngModel)]=\"disabled\">Disabled</mat-checkbox>\r\n    </section>\r\n  </mat-card-content>\r\n</mat-card>\r\n\r\n<mat-card class=\"example-result-card\">\r\n  <mat-card-content>\r\n    <h2>Result</h2>\r\n\r\n    <div class=\"example-label-container\">\r\n      <label id=\"example-name-label\" class=\"example-name-label\">Value</label>\r\n      <label class=\"example-value-label\">{{slider.value}}</label>\r\n    </div>\r\n    <mat-slider\r\n        class=\"example-margin\"\r\n        [disabled]=\"disabled\"\r\n        [max]=\"max\"\r\n        [min]=\"min\"\r\n        [step]=\"step\"\r\n        [discrete]=\"thumbLabel\"\r\n        [showTickMarks]=\"showTicks\">\r\n      <input matSliderThumb [(ngModel)]=\"value\" #slider>\r\n    </mat-slider>\r\n  </mat-card-content>\r\n</mat-card>\r\n", styles: [".example-h2 {\r\n  margin-left: 10px;\r\n  margin-right: 10px;\r\n}\r\n\r\n.example-section {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  align-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.example-margin {\r\n  margin: 8px;\r\n}\r\n\r\n.example-width {\r\n  max-width: 180px;\r\n  width: 100%;\r\n}\r\n\r\n.mat-mdc-slider {\r\n  max-width: 300px;\r\n  width: 100%;\r\n}\r\n\r\n.mat-mdc-card + .mat-mdc-card {\r\n  margin-top: 8px;\r\n}\r\n\r\n.example-result-card h2 {\r\n  margin: 0 8px;\r\n}\r\n\r\n.example-label-container {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin: 20px 10px 0;\r\n  max-width: 284px;\r\n}\r\n\r\n.example-result-card .example-value-label {\r\n  font-weight: 600;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: MatCardModule }, { kind: "component", type: i1.MatCard, selector: "mat-card", inputs: ["appearance"], exportAs: ["matCard"] }, { kind: "directive", type: i1.MatCardContent, selector: "mat-card-content" }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i2.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i2.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i3.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i4.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i4.NumberValueAccessor, selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]" }, { kind: "directive", type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i4.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "ngmodule", type: MatCheckboxModule }, { kind: "component", type: i5.MatCheckbox, selector: "mat-checkbox", inputs: ["aria-label", "aria-labelledby", "aria-describedby", "id", "required", "labelPosition", "name", "value", "disableRipple", "tabIndex", "color", "checked", "disabled", "indeterminate"], outputs: ["change", "indeterminateChange"], exportAs: ["matCheckbox"] }, { kind: "ngmodule", type: MatSliderModule }, { kind: "component", type: i6.MatSlider, selector: "mat-slider", inputs: ["disabled", "discrete", "showTickMarks", "min", "color", "disableRipple", "max", "step", "displayWith"], exportAs: ["matSlider"] }, { kind: "directive", type: i6.MatSliderThumb, selector: "input[matSliderThumb]", inputs: ["value"], outputs: ["valueChange", "dragStart", "dragEnd"], exportAs: ["matSliderThumb"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: SliderConfigurableExample, decorators: [{
            type: Component,
            args: [{ selector: 'slider-configurable-example', standalone: true, imports: [
                        MatCardModule,
                        MatFormFieldModule,
                        MatInputModule,
                        FormsModule,
                        MatCheckboxModule,
                        MatSliderModule,
                    ], template: "<mat-card>\r\n  <mat-card-content>\r\n    <h2 class=\"example-h2\">Slider configuration</h2>\r\n\r\n    <section class=\"example-section\">\r\n      <mat-form-field class=\"example-margin example-width\">\r\n        <mat-label>Value</mat-label>\r\n        <input matInput type=\"number\" [(ngModel)]=\"value\">\r\n      </mat-form-field>\r\n      <mat-form-field class=\"example-margin example-width\">\r\n        <mat-label>Min value</mat-label>\r\n        <input matInput type=\"number\" [(ngModel)]=\"min\">\r\n      </mat-form-field>\r\n      <mat-form-field class=\"example-margin example-width\">\r\n        <mat-label>Max value</mat-label>\r\n        <input matInput type=\"number\" [(ngModel)]=\"max\">\r\n      </mat-form-field>\r\n      <mat-form-field class=\"example-margin example-width\">\r\n        <mat-label>Step size</mat-label>\r\n        <input matInput type=\"number\" [(ngModel)]=\"step\">\r\n      </mat-form-field>\r\n    </section>\r\n\r\n    <section class=\"example-section\">\r\n      <mat-checkbox [(ngModel)]=\"showTicks\">Show ticks</mat-checkbox>\r\n    </section>\r\n\r\n    <section class=\"example-section\">\r\n      <mat-checkbox [(ngModel)]=\"thumbLabel\">Show thumb label</mat-checkbox>\r\n    </section>\r\n\r\n    <section class=\"example-section\">\r\n      <mat-checkbox [(ngModel)]=\"disabled\">Disabled</mat-checkbox>\r\n    </section>\r\n  </mat-card-content>\r\n</mat-card>\r\n\r\n<mat-card class=\"example-result-card\">\r\n  <mat-card-content>\r\n    <h2>Result</h2>\r\n\r\n    <div class=\"example-label-container\">\r\n      <label id=\"example-name-label\" class=\"example-name-label\">Value</label>\r\n      <label class=\"example-value-label\">{{slider.value}}</label>\r\n    </div>\r\n    <mat-slider\r\n        class=\"example-margin\"\r\n        [disabled]=\"disabled\"\r\n        [max]=\"max\"\r\n        [min]=\"min\"\r\n        [step]=\"step\"\r\n        [discrete]=\"thumbLabel\"\r\n        [showTickMarks]=\"showTicks\">\r\n      <input matSliderThumb [(ngModel)]=\"value\" #slider>\r\n    </mat-slider>\r\n  </mat-card-content>\r\n</mat-card>\r\n", styles: [".example-h2 {\r\n  margin-left: 10px;\r\n  margin-right: 10px;\r\n}\r\n\r\n.example-section {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  align-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.example-margin {\r\n  margin: 8px;\r\n}\r\n\r\n.example-width {\r\n  max-width: 180px;\r\n  width: 100%;\r\n}\r\n\r\n.mat-mdc-slider {\r\n  max-width: 300px;\r\n  width: 100%;\r\n}\r\n\r\n.mat-mdc-card + .mat-mdc-card {\r\n  margin-top: 8px;\r\n}\r\n\r\n.example-result-card h2 {\r\n  margin: 0 8px;\r\n}\r\n\r\n.example-label-container {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin: 20px 10px 0;\r\n  max-width: 284px;\r\n}\r\n\r\n.example-result-card .example-value-label {\r\n  font-weight: 600;\r\n}\r\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLWNvbmZpZ3VyYWJsZS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2xpZGVyL3NsaWRlci1jb25maWd1cmFibGUvc2xpZGVyLWNvbmZpZ3VyYWJsZS1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2xpZGVyL3NsaWRlci1jb25maWd1cmFibGUvc2xpZGVyLWNvbmZpZ3VyYWJsZS1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDN0QsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQztBQUNoRSxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7O0FBRXJEOztHQUVHO0FBZUgsTUFBTSxPQUFPLHlCQUF5QjtJQWR0QztRQWVFLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsUUFBRyxHQUFHLEdBQUcsQ0FBQztRQUNWLFFBQUcsR0FBRyxDQUFDLENBQUM7UUFDUixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLFNBQUksR0FBRyxDQUFDLENBQUM7UUFDVCxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLFVBQUssR0FBRyxDQUFDLENBQUM7S0FDWDs4R0FSWSx5QkFBeUI7a0dBQXpCLHlCQUF5Qix1RkN6QnRDLCtqRUF5REEsd3hCRHhDSSxhQUFhLDBOQUNiLGtCQUFrQiwwU0FDbEIsY0FBYywwV0FDZCxXQUFXLGd4QkFDWCxpQkFBaUIsNldBQ2pCLGVBQWU7OzJGQUdOLHlCQUF5QjtrQkFkckMsU0FBUzsrQkFDRSw2QkFBNkIsY0FHM0IsSUFBSSxXQUNQO3dCQUNQLGFBQWE7d0JBQ2Isa0JBQWtCO3dCQUNsQixjQUFjO3dCQUNkLFdBQVc7d0JBQ1gsaUJBQWlCO3dCQUNqQixlQUFlO3FCQUNoQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtNYXRTbGlkZXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NsaWRlcic7XHJcbmltcG9ydCB7TWF0Q2hlY2tib3hNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NoZWNrYm94JztcclxuaW1wb3J0IHtGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQge01hdElucHV0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XHJcbmltcG9ydCB7TWF0Rm9ybUZpZWxkTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcclxuaW1wb3J0IHtNYXRDYXJkTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jYXJkJztcclxuXHJcbi8qKlxyXG4gKiBAdGl0bGUgQ29uZmlndXJhYmxlIHNsaWRlclxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzbGlkZXItY29uZmlndXJhYmxlLWV4YW1wbGUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnc2xpZGVyLWNvbmZpZ3VyYWJsZS1leGFtcGxlLmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWydzbGlkZXItY29uZmlndXJhYmxlLWV4YW1wbGUuY3NzJ10sXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBNYXRDYXJkTW9kdWxlLFxyXG4gICAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxyXG4gICAgTWF0SW5wdXRNb2R1bGUsXHJcbiAgICBGb3Jtc01vZHVsZSxcclxuICAgIE1hdENoZWNrYm94TW9kdWxlLFxyXG4gICAgTWF0U2xpZGVyTW9kdWxlLFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTbGlkZXJDb25maWd1cmFibGVFeGFtcGxlIHtcclxuICBkaXNhYmxlZCA9IGZhbHNlO1xyXG4gIG1heCA9IDEwMDtcclxuICBtaW4gPSAwO1xyXG4gIHNob3dUaWNrcyA9IGZhbHNlO1xyXG4gIHN0ZXAgPSAxO1xyXG4gIHRodW1iTGFiZWwgPSBmYWxzZTtcclxuICB2YWx1ZSA9IDA7XHJcbn1cclxuIiwiPG1hdC1jYXJkPlxyXG4gIDxtYXQtY2FyZC1jb250ZW50PlxyXG4gICAgPGgyIGNsYXNzPVwiZXhhbXBsZS1oMlwiPlNsaWRlciBjb25maWd1cmF0aW9uPC9oMj5cclxuXHJcbiAgICA8c2VjdGlvbiBjbGFzcz1cImV4YW1wbGUtc2VjdGlvblwiPlxyXG4gICAgICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJleGFtcGxlLW1hcmdpbiBleGFtcGxlLXdpZHRoXCI+XHJcbiAgICAgICAgPG1hdC1sYWJlbD5WYWx1ZTwvbWF0LWxhYmVsPlxyXG4gICAgICAgIDxpbnB1dCBtYXRJbnB1dCB0eXBlPVwibnVtYmVyXCIgWyhuZ01vZGVsKV09XCJ2YWx1ZVwiPlxyXG4gICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJleGFtcGxlLW1hcmdpbiBleGFtcGxlLXdpZHRoXCI+XHJcbiAgICAgICAgPG1hdC1sYWJlbD5NaW4gdmFsdWU8L21hdC1sYWJlbD5cclxuICAgICAgICA8aW5wdXQgbWF0SW5wdXQgdHlwZT1cIm51bWJlclwiIFsobmdNb2RlbCldPVwibWluXCI+XHJcbiAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImV4YW1wbGUtbWFyZ2luIGV4YW1wbGUtd2lkdGhcIj5cclxuICAgICAgICA8bWF0LWxhYmVsPk1heCB2YWx1ZTwvbWF0LWxhYmVsPlxyXG4gICAgICAgIDxpbnB1dCBtYXRJbnB1dCB0eXBlPVwibnVtYmVyXCIgWyhuZ01vZGVsKV09XCJtYXhcIj5cclxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZXhhbXBsZS1tYXJnaW4gZXhhbXBsZS13aWR0aFwiPlxyXG4gICAgICAgIDxtYXQtbGFiZWw+U3RlcCBzaXplPC9tYXQtbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IG1hdElucHV0IHR5cGU9XCJudW1iZXJcIiBbKG5nTW9kZWwpXT1cInN0ZXBcIj5cclxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICA8c2VjdGlvbiBjbGFzcz1cImV4YW1wbGUtc2VjdGlvblwiPlxyXG4gICAgICA8bWF0LWNoZWNrYm94IFsobmdNb2RlbCldPVwic2hvd1RpY2tzXCI+U2hvdyB0aWNrczwvbWF0LWNoZWNrYm94PlxyXG4gICAgPC9zZWN0aW9uPlxyXG5cclxuICAgIDxzZWN0aW9uIGNsYXNzPVwiZXhhbXBsZS1zZWN0aW9uXCI+XHJcbiAgICAgIDxtYXQtY2hlY2tib3ggWyhuZ01vZGVsKV09XCJ0aHVtYkxhYmVsXCI+U2hvdyB0aHVtYiBsYWJlbDwvbWF0LWNoZWNrYm94PlxyXG4gICAgPC9zZWN0aW9uPlxyXG5cclxuICAgIDxzZWN0aW9uIGNsYXNzPVwiZXhhbXBsZS1zZWN0aW9uXCI+XHJcbiAgICAgIDxtYXQtY2hlY2tib3ggWyhuZ01vZGVsKV09XCJkaXNhYmxlZFwiPkRpc2FibGVkPC9tYXQtY2hlY2tib3g+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgPC9tYXQtY2FyZC1jb250ZW50PlxyXG48L21hdC1jYXJkPlxyXG5cclxuPG1hdC1jYXJkIGNsYXNzPVwiZXhhbXBsZS1yZXN1bHQtY2FyZFwiPlxyXG4gIDxtYXQtY2FyZC1jb250ZW50PlxyXG4gICAgPGgyPlJlc3VsdDwvaDI+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cImV4YW1wbGUtbGFiZWwtY29udGFpbmVyXCI+XHJcbiAgICAgIDxsYWJlbCBpZD1cImV4YW1wbGUtbmFtZS1sYWJlbFwiIGNsYXNzPVwiZXhhbXBsZS1uYW1lLWxhYmVsXCI+VmFsdWU8L2xhYmVsPlxyXG4gICAgICA8bGFiZWwgY2xhc3M9XCJleGFtcGxlLXZhbHVlLWxhYmVsXCI+e3tzbGlkZXIudmFsdWV9fTwvbGFiZWw+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxtYXQtc2xpZGVyXHJcbiAgICAgICAgY2xhc3M9XCJleGFtcGxlLW1hcmdpblwiXHJcbiAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcclxuICAgICAgICBbbWF4XT1cIm1heFwiXHJcbiAgICAgICAgW21pbl09XCJtaW5cIlxyXG4gICAgICAgIFtzdGVwXT1cInN0ZXBcIlxyXG4gICAgICAgIFtkaXNjcmV0ZV09XCJ0aHVtYkxhYmVsXCJcclxuICAgICAgICBbc2hvd1RpY2tNYXJrc109XCJzaG93VGlja3NcIj5cclxuICAgICAgPGlucHV0IG1hdFNsaWRlclRodW1iIFsobmdNb2RlbCldPVwidmFsdWVcIiAjc2xpZGVyPlxyXG4gICAgPC9tYXQtc2xpZGVyPlxyXG4gIDwvbWF0LWNhcmQtY29udGVudD5cclxuPC9tYXQtY2FyZD5cclxuIl19