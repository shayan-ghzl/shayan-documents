import { Component } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/card";
import * as i2 from "@angular/material/radio";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/material/slider";
import * as i5 from "@angular/material/progress-bar";
/**
 * @title Configurable progress-bar
 */
export class ProgressBarConfigurableExample {
    constructor() {
        this.color = 'primary';
        this.mode = 'determinate';
        this.value = 50;
        this.bufferValue = 75;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: ProgressBarConfigurableExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.4", type: ProgressBarConfigurableExample, isStandalone: true, selector: "progress-bar-configurable-example", ngImport: i0, template: "<mat-card class=\"example-card\">\r\n  <mat-card-content>\r\n    <h2 class=\"example-h2\">Progress bar configuration</h2>\r\n\r\n    <section class=\"example-section\">\r\n      <label class=\"example-margin\">Color:</label>\r\n      <mat-radio-group [(ngModel)]=\"color\">\r\n        <mat-radio-button class=\"example-margin\" value=\"primary\">\r\n          Primary\r\n        </mat-radio-button>\r\n        <mat-radio-button class=\"example-margin\" value=\"accent\">\r\n          Accent\r\n        </mat-radio-button>\r\n        <mat-radio-button class=\"example-margin\" value=\"warn\">\r\n          Warn\r\n        </mat-radio-button>\r\n      </mat-radio-group>\r\n    </section>\r\n\r\n    <section class=\"example-section\">\r\n      <label class=\"example-margin\">Mode:</label>\r\n      <mat-radio-group [(ngModel)]=\"mode\">\r\n        <mat-radio-button class=\"example-margin\" value=\"determinate\">\r\n          Determinate\r\n        </mat-radio-button>\r\n        <mat-radio-button class=\"example-margin\" value=\"indeterminate\">\r\n          Indeterminate\r\n        </mat-radio-button>\r\n        <mat-radio-button class=\"example-margin\" value=\"buffer\">\r\n          Buffer\r\n        </mat-radio-button>\r\n        <mat-radio-button class=\"example-margin\" value=\"query\">\r\n          Query\r\n        </mat-radio-button>\r\n      </mat-radio-group>\r\n    </section>\r\n\r\n    @if (mode === 'determinate' || mode === 'buffer') {\r\n      <section class=\"example-section\">\r\n        <label class=\"example-margin\">Progress:</label>\r\n        <mat-slider class=\"example-margin\">\r\n          <input type=\"range\" [(ngModel)]=\"value\" matSliderThumb>\r\n        </mat-slider>\r\n      </section>\r\n    }\r\n    @if (mode === 'buffer') {\r\n      <section class=\"example-section\">\r\n        <label class=\"example-margin\">Buffer:</label>\r\n        <mat-slider class=\"example-margin\">\r\n          <input type=\"range\" [(ngModel)]=\"bufferValue\" matSliderThumb>\r\n        </mat-slider>\r\n      </section>\r\n    }\r\n  </mat-card-content>\r\n</mat-card>\r\n\r\n<mat-card class=\"example-card\">\r\n  <mat-card-content>\r\n    <h2 class=\"example-h2\">Result</h2>\r\n\r\n    <section class=\"example-section\">\r\n      <mat-progress-bar\r\n          class=\"example-margin\"\r\n          [color]=\"color\"\r\n          [mode]=\"mode\"\r\n          [value]=\"value\"\r\n          [bufferValue]=\"bufferValue\">\r\n      </mat-progress-bar>\r\n    </section>\r\n  </mat-card-content>\r\n</mat-card>\r\n", styles: [".example-h2 {\r\n  margin: 10px;\r\n}\r\n\r\n.example-section {\r\n  display: flex;\r\n  align-content: center;\r\n  align-items: center;\r\n  height: 60px;\r\n}\r\n\r\n.example-margin {\r\n  margin: 0 10px;\r\n}\r\n\r\n.example-card {\r\n  margin-bottom: 10px;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: MatCardModule }, { kind: "component", type: i1.MatCard, selector: "mat-card", inputs: ["appearance"], exportAs: ["matCard"] }, { kind: "directive", type: i1.MatCardContent, selector: "mat-card-content" }, { kind: "ngmodule", type: MatRadioModule }, { kind: "directive", type: i2.MatRadioGroup, selector: "mat-radio-group", inputs: ["color", "name", "labelPosition", "value", "selected", "disabled", "required"], outputs: ["change"], exportAs: ["matRadioGroup"] }, { kind: "component", type: i2.MatRadioButton, selector: "mat-radio-button", inputs: ["id", "name", "aria-label", "aria-labelledby", "aria-describedby", "disableRipple", "tabIndex", "checked", "value", "labelPosition", "disabled", "required", "color"], outputs: ["change"], exportAs: ["matRadioButton"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i3.RangeValueAccessor, selector: "input[type=range][formControlName],input[type=range][formControl],input[type=range][ngModel]" }, { kind: "directive", type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "ngmodule", type: MatSliderModule }, { kind: "component", type: i4.MatSlider, selector: "mat-slider", inputs: ["disabled", "discrete", "showTickMarks", "min", "color", "disableRipple", "max", "step", "displayWith"], exportAs: ["matSlider"] }, { kind: "directive", type: i4.MatSliderThumb, selector: "input[matSliderThumb]", inputs: ["value"], outputs: ["valueChange", "dragStart", "dragEnd"], exportAs: ["matSliderThumb"] }, { kind: "ngmodule", type: MatProgressBarModule }, { kind: "component", type: i5.MatProgressBar, selector: "mat-progress-bar", inputs: ["color", "value", "bufferValue", "mode"], outputs: ["animationEnd"], exportAs: ["matProgressBar"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: ProgressBarConfigurableExample, decorators: [{
            type: Component,
            args: [{ selector: 'progress-bar-configurable-example', standalone: true, imports: [MatCardModule, MatRadioModule, FormsModule, MatSliderModule, MatProgressBarModule], template: "<mat-card class=\"example-card\">\r\n  <mat-card-content>\r\n    <h2 class=\"example-h2\">Progress bar configuration</h2>\r\n\r\n    <section class=\"example-section\">\r\n      <label class=\"example-margin\">Color:</label>\r\n      <mat-radio-group [(ngModel)]=\"color\">\r\n        <mat-radio-button class=\"example-margin\" value=\"primary\">\r\n          Primary\r\n        </mat-radio-button>\r\n        <mat-radio-button class=\"example-margin\" value=\"accent\">\r\n          Accent\r\n        </mat-radio-button>\r\n        <mat-radio-button class=\"example-margin\" value=\"warn\">\r\n          Warn\r\n        </mat-radio-button>\r\n      </mat-radio-group>\r\n    </section>\r\n\r\n    <section class=\"example-section\">\r\n      <label class=\"example-margin\">Mode:</label>\r\n      <mat-radio-group [(ngModel)]=\"mode\">\r\n        <mat-radio-button class=\"example-margin\" value=\"determinate\">\r\n          Determinate\r\n        </mat-radio-button>\r\n        <mat-radio-button class=\"example-margin\" value=\"indeterminate\">\r\n          Indeterminate\r\n        </mat-radio-button>\r\n        <mat-radio-button class=\"example-margin\" value=\"buffer\">\r\n          Buffer\r\n        </mat-radio-button>\r\n        <mat-radio-button class=\"example-margin\" value=\"query\">\r\n          Query\r\n        </mat-radio-button>\r\n      </mat-radio-group>\r\n    </section>\r\n\r\n    @if (mode === 'determinate' || mode === 'buffer') {\r\n      <section class=\"example-section\">\r\n        <label class=\"example-margin\">Progress:</label>\r\n        <mat-slider class=\"example-margin\">\r\n          <input type=\"range\" [(ngModel)]=\"value\" matSliderThumb>\r\n        </mat-slider>\r\n      </section>\r\n    }\r\n    @if (mode === 'buffer') {\r\n      <section class=\"example-section\">\r\n        <label class=\"example-margin\">Buffer:</label>\r\n        <mat-slider class=\"example-margin\">\r\n          <input type=\"range\" [(ngModel)]=\"bufferValue\" matSliderThumb>\r\n        </mat-slider>\r\n      </section>\r\n    }\r\n  </mat-card-content>\r\n</mat-card>\r\n\r\n<mat-card class=\"example-card\">\r\n  <mat-card-content>\r\n    <h2 class=\"example-h2\">Result</h2>\r\n\r\n    <section class=\"example-section\">\r\n      <mat-progress-bar\r\n          class=\"example-margin\"\r\n          [color]=\"color\"\r\n          [mode]=\"mode\"\r\n          [value]=\"value\"\r\n          [bufferValue]=\"bufferValue\">\r\n      </mat-progress-bar>\r\n    </section>\r\n  </mat-card-content>\r\n</mat-card>\r\n", styles: [".example-h2 {\r\n  margin: 10px;\r\n}\r\n\r\n.example-section {\r\n  display: flex;\r\n  align-content: center;\r\n  align-items: center;\r\n  height: 60px;\r\n}\r\n\r\n.example-margin {\r\n  margin: 0 10px;\r\n}\r\n\r\n.example-card {\r\n  margin-bottom: 10px;\r\n}\r\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MtYmFyLWNvbmZpZ3VyYWJsZS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvcHJvZ3Jlc3MtYmFyL3Byb2dyZXNzLWJhci1jb25maWd1cmFibGUvcHJvZ3Jlc3MtYmFyLWNvbmZpZ3VyYWJsZS1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvcHJvZ3Jlc3MtYmFyL3Byb2dyZXNzLWJhci1jb25maWd1cmFibGUvcHJvZ3Jlc3MtYmFyLWNvbmZpZ3VyYWJsZS1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV4QyxPQUFPLEVBQWtCLG9CQUFvQixFQUFDLE1BQU0sZ0NBQWdDLENBQUM7QUFDckYsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDOzs7Ozs7O0FBRXJEOztHQUVHO0FBUUgsTUFBTSxPQUFPLDhCQUE4QjtJQVAzQztRQVFFLFVBQUssR0FBaUIsU0FBUyxDQUFDO1FBQ2hDLFNBQUksR0FBb0IsYUFBYSxDQUFDO1FBQ3RDLFVBQUssR0FBRyxFQUFFLENBQUM7UUFDWCxnQkFBVyxHQUFHLEVBQUUsQ0FBQztLQUNsQjs4R0FMWSw4QkFBOEI7a0dBQTlCLDhCQUE4Qiw2RkNsQjNDLHEvRUF1RUEsdVVEdkRZLGFBQWEsME5BQUUsY0FBYyxzaUJBQUUsV0FBVyw0d0JBQUUsZUFBZSxrYUFBRSxvQkFBb0I7OzJGQUVoRiw4QkFBOEI7a0JBUDFDLFNBQVM7K0JBQ0UsbUNBQW1DLGNBR2pDLElBQUksV0FDUCxDQUFDLGFBQWEsRUFBRSxjQUFjLEVBQUUsV0FBVyxFQUFFLGVBQWUsRUFBRSxvQkFBb0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtUaGVtZVBhbGV0dGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xyXG5pbXBvcnQge1Byb2dyZXNzQmFyTW9kZSwgTWF0UHJvZ3Jlc3NCYXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Byb2dyZXNzLWJhcic7XHJcbmltcG9ydCB7TWF0U2xpZGVyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zbGlkZXInO1xyXG5pbXBvcnQge0Zvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7TWF0UmFkaW9Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3JhZGlvJztcclxuaW1wb3J0IHtNYXRDYXJkTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jYXJkJztcclxuXHJcbi8qKlxyXG4gKiBAdGl0bGUgQ29uZmlndXJhYmxlIHByb2dyZXNzLWJhclxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwcm9ncmVzcy1iYXItY29uZmlndXJhYmxlLWV4YW1wbGUnLFxyXG4gIHRlbXBsYXRlVXJsOiAncHJvZ3Jlc3MtYmFyLWNvbmZpZ3VyYWJsZS1leGFtcGxlLmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWydwcm9ncmVzcy1iYXItY29uZmlndXJhYmxlLWV4YW1wbGUuY3NzJ10sXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBpbXBvcnRzOiBbTWF0Q2FyZE1vZHVsZSwgTWF0UmFkaW9Nb2R1bGUsIEZvcm1zTW9kdWxlLCBNYXRTbGlkZXJNb2R1bGUsIE1hdFByb2dyZXNzQmFyTW9kdWxlXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFByb2dyZXNzQmFyQ29uZmlndXJhYmxlRXhhbXBsZSB7XHJcbiAgY29sb3I6IFRoZW1lUGFsZXR0ZSA9ICdwcmltYXJ5JztcclxuICBtb2RlOiBQcm9ncmVzc0Jhck1vZGUgPSAnZGV0ZXJtaW5hdGUnO1xyXG4gIHZhbHVlID0gNTA7XHJcbiAgYnVmZmVyVmFsdWUgPSA3NTtcclxufVxyXG4iLCI8bWF0LWNhcmQgY2xhc3M9XCJleGFtcGxlLWNhcmRcIj5cclxuICA8bWF0LWNhcmQtY29udGVudD5cclxuICAgIDxoMiBjbGFzcz1cImV4YW1wbGUtaDJcIj5Qcm9ncmVzcyBiYXIgY29uZmlndXJhdGlvbjwvaDI+XHJcblxyXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJleGFtcGxlLXNlY3Rpb25cIj5cclxuICAgICAgPGxhYmVsIGNsYXNzPVwiZXhhbXBsZS1tYXJnaW5cIj5Db2xvcjo8L2xhYmVsPlxyXG4gICAgICA8bWF0LXJhZGlvLWdyb3VwIFsobmdNb2RlbCldPVwiY29sb3JcIj5cclxuICAgICAgICA8bWF0LXJhZGlvLWJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtbWFyZ2luXCIgdmFsdWU9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICBQcmltYXJ5XHJcbiAgICAgICAgPC9tYXQtcmFkaW8tYnV0dG9uPlxyXG4gICAgICAgIDxtYXQtcmFkaW8tYnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1tYXJnaW5cIiB2YWx1ZT1cImFjY2VudFwiPlxyXG4gICAgICAgICAgQWNjZW50XHJcbiAgICAgICAgPC9tYXQtcmFkaW8tYnV0dG9uPlxyXG4gICAgICAgIDxtYXQtcmFkaW8tYnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1tYXJnaW5cIiB2YWx1ZT1cIndhcm5cIj5cclxuICAgICAgICAgIFdhcm5cclxuICAgICAgICA8L21hdC1yYWRpby1idXR0b24+XHJcbiAgICAgIDwvbWF0LXJhZGlvLWdyb3VwPlxyXG4gICAgPC9zZWN0aW9uPlxyXG5cclxuICAgIDxzZWN0aW9uIGNsYXNzPVwiZXhhbXBsZS1zZWN0aW9uXCI+XHJcbiAgICAgIDxsYWJlbCBjbGFzcz1cImV4YW1wbGUtbWFyZ2luXCI+TW9kZTo8L2xhYmVsPlxyXG4gICAgICA8bWF0LXJhZGlvLWdyb3VwIFsobmdNb2RlbCldPVwibW9kZVwiPlxyXG4gICAgICAgIDxtYXQtcmFkaW8tYnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1tYXJnaW5cIiB2YWx1ZT1cImRldGVybWluYXRlXCI+XHJcbiAgICAgICAgICBEZXRlcm1pbmF0ZVxyXG4gICAgICAgIDwvbWF0LXJhZGlvLWJ1dHRvbj5cclxuICAgICAgICA8bWF0LXJhZGlvLWJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtbWFyZ2luXCIgdmFsdWU9XCJpbmRldGVybWluYXRlXCI+XHJcbiAgICAgICAgICBJbmRldGVybWluYXRlXHJcbiAgICAgICAgPC9tYXQtcmFkaW8tYnV0dG9uPlxyXG4gICAgICAgIDxtYXQtcmFkaW8tYnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1tYXJnaW5cIiB2YWx1ZT1cImJ1ZmZlclwiPlxyXG4gICAgICAgICAgQnVmZmVyXHJcbiAgICAgICAgPC9tYXQtcmFkaW8tYnV0dG9uPlxyXG4gICAgICAgIDxtYXQtcmFkaW8tYnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1tYXJnaW5cIiB2YWx1ZT1cInF1ZXJ5XCI+XHJcbiAgICAgICAgICBRdWVyeVxyXG4gICAgICAgIDwvbWF0LXJhZGlvLWJ1dHRvbj5cclxuICAgICAgPC9tYXQtcmFkaW8tZ3JvdXA+XHJcbiAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgQGlmIChtb2RlID09PSAnZGV0ZXJtaW5hdGUnIHx8IG1vZGUgPT09ICdidWZmZXInKSB7XHJcbiAgICAgIDxzZWN0aW9uIGNsYXNzPVwiZXhhbXBsZS1zZWN0aW9uXCI+XHJcbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiZXhhbXBsZS1tYXJnaW5cIj5Qcm9ncmVzczo8L2xhYmVsPlxyXG4gICAgICAgIDxtYXQtc2xpZGVyIGNsYXNzPVwiZXhhbXBsZS1tYXJnaW5cIj5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFuZ2VcIiBbKG5nTW9kZWwpXT1cInZhbHVlXCIgbWF0U2xpZGVyVGh1bWI+XHJcbiAgICAgICAgPC9tYXQtc2xpZGVyPlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICB9XHJcbiAgICBAaWYgKG1vZGUgPT09ICdidWZmZXInKSB7XHJcbiAgICAgIDxzZWN0aW9uIGNsYXNzPVwiZXhhbXBsZS1zZWN0aW9uXCI+XHJcbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiZXhhbXBsZS1tYXJnaW5cIj5CdWZmZXI6PC9sYWJlbD5cclxuICAgICAgICA8bWF0LXNsaWRlciBjbGFzcz1cImV4YW1wbGUtbWFyZ2luXCI+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhbmdlXCIgWyhuZ01vZGVsKV09XCJidWZmZXJWYWx1ZVwiIG1hdFNsaWRlclRodW1iPlxyXG4gICAgICAgIDwvbWF0LXNsaWRlcj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgfVxyXG4gIDwvbWF0LWNhcmQtY29udGVudD5cclxuPC9tYXQtY2FyZD5cclxuXHJcbjxtYXQtY2FyZCBjbGFzcz1cImV4YW1wbGUtY2FyZFwiPlxyXG4gIDxtYXQtY2FyZC1jb250ZW50PlxyXG4gICAgPGgyIGNsYXNzPVwiZXhhbXBsZS1oMlwiPlJlc3VsdDwvaDI+XHJcblxyXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJleGFtcGxlLXNlY3Rpb25cIj5cclxuICAgICAgPG1hdC1wcm9ncmVzcy1iYXJcclxuICAgICAgICAgIGNsYXNzPVwiZXhhbXBsZS1tYXJnaW5cIlxyXG4gICAgICAgICAgW2NvbG9yXT1cImNvbG9yXCJcclxuICAgICAgICAgIFttb2RlXT1cIm1vZGVcIlxyXG4gICAgICAgICAgW3ZhbHVlXT1cInZhbHVlXCJcclxuICAgICAgICAgIFtidWZmZXJWYWx1ZV09XCJidWZmZXJWYWx1ZVwiPlxyXG4gICAgICA8L21hdC1wcm9ncmVzcy1iYXI+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgPC9tYXQtY2FyZC1jb250ZW50PlxyXG48L21hdC1jYXJkPlxyXG4iXX0=