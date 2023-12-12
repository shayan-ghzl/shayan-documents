import { Component } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/input";
import * as i3 from "@angular/material/datepicker";
/** @title Datepicker input and change events */
export class DatepickerEventsExample {
    constructor() {
        this.events = [];
    }
    addEvent(type, event) {
        this.events.push(`${type}: ${event.value}`);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: DatepickerEventsExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.4", type: DatepickerEventsExample, isStandalone: true, selector: "datepicker-events-example", ngImport: i0, template: "<mat-form-field>\r\n  <mat-label>Input & change events</mat-label>\r\n  <input matInput [matDatepicker]=\"picker\"\r\n         (dateInput)=\"addEvent('input', $event)\" (dateChange)=\"addEvent('change', $event)\">\r\n  <mat-hint>MM/DD/YYYY</mat-hint>\r\n  <mat-datepicker-toggle matIconSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n  <mat-datepicker #picker></mat-datepicker>\r\n</mat-form-field>\r\n\r\n<div class=\"example-events\">\r\n  @for (e of events; track e) {\r\n    <div>{{e}}</div>\r\n  }\r\n</div>\r\n", styles: [".example-events {\r\n  height: 200px;\r\n  border: 1px solid #555;\r\n  overflow: auto;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "directive", type: i1.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i1.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i2.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: MatNativeDateModule }, { kind: "ngmodule", type: MatDatepickerModule }, { kind: "component", type: i3.MatDatepicker, selector: "mat-datepicker", exportAs: ["matDatepicker"] }, { kind: "directive", type: i3.MatDatepickerInput, selector: "input[matDatepicker]", inputs: ["matDatepicker", "min", "max", "matDatepickerFilter"], exportAs: ["matDatepickerInput"] }, { kind: "component", type: i3.MatDatepickerToggle, selector: "mat-datepicker-toggle", inputs: ["for", "tabIndex", "aria-label", "disabled", "disableRipple"], exportAs: ["matDatepickerToggle"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: DatepickerEventsExample, decorators: [{
            type: Component,
            args: [{ selector: 'datepicker-events-example', standalone: true, imports: [MatFormFieldModule, MatInputModule, MatNativeDateModule, MatDatepickerModule], template: "<mat-form-field>\r\n  <mat-label>Input & change events</mat-label>\r\n  <input matInput [matDatepicker]=\"picker\"\r\n         (dateInput)=\"addEvent('input', $event)\" (dateChange)=\"addEvent('change', $event)\">\r\n  <mat-hint>MM/DD/YYYY</mat-hint>\r\n  <mat-datepicker-toggle matIconSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n  <mat-datepicker #picker></mat-datepicker>\r\n</mat-form-field>\r\n\r\n<div class=\"example-events\">\r\n  @for (e of events; track e) {\r\n    <div>{{e}}</div>\r\n  }\r\n</div>\r\n", styles: [".example-events {\r\n  height: 200px;\r\n  border: 1px solid #555;\r\n  overflow: auto;\r\n}\r\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1ldmVudHMtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1ldmVudHMvZGF0ZXBpY2tlci1ldmVudHMtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1ldmVudHMvZGF0ZXBpY2tlci1ldmVudHMtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUEwQixtQkFBbUIsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBQzFGLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQztBQUNoRSxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7QUFFM0QsZ0RBQWdEO0FBUWhELE1BQU0sT0FBTyx1QkFBdUI7SUFQcEM7UUFRRSxXQUFNLEdBQWEsRUFBRSxDQUFDO0tBS3ZCO0lBSEMsUUFBUSxDQUFDLElBQVksRUFBRSxLQUFvQztRQUN6RCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksS0FBSyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUM5QyxDQUFDOzhHQUxVLHVCQUF1QjtrR0FBdkIsdUJBQXVCLHFGQ2RwQywwZ0JBY0EseUpERlksa0JBQWtCLG1nQkFBRSxjQUFjLDBXQUFFLG1CQUFtQiw4QkFBRSxtQkFBbUI7OzJGQUUzRSx1QkFBdUI7a0JBUG5DLFNBQVM7K0JBQ0UsMkJBQTJCLGNBR3pCLElBQUksV0FDUCxDQUFDLGtCQUFrQixFQUFFLGNBQWMsRUFBRSxtQkFBbUIsRUFBRSxtQkFBbUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtNYXREYXRlcGlja2VySW5wdXRFdmVudCwgTWF0RGF0ZXBpY2tlck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGF0ZXBpY2tlcic7XHJcbmltcG9ydCB7TWF0SW5wdXRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcclxuaW1wb3J0IHtNYXRGb3JtRmllbGRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xyXG5pbXBvcnQge01hdE5hdGl2ZURhdGVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xyXG5cclxuLyoqIEB0aXRsZSBEYXRlcGlja2VyIGlucHV0IGFuZCBjaGFuZ2UgZXZlbnRzICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZGF0ZXBpY2tlci1ldmVudHMtZXhhbXBsZScsXHJcbiAgdGVtcGxhdGVVcmw6ICdkYXRlcGlja2VyLWV2ZW50cy1leGFtcGxlLmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWydkYXRlcGlja2VyLWV2ZW50cy1leGFtcGxlLmNzcyddLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgaW1wb3J0czogW01hdEZvcm1GaWVsZE1vZHVsZSwgTWF0SW5wdXRNb2R1bGUsIE1hdE5hdGl2ZURhdGVNb2R1bGUsIE1hdERhdGVwaWNrZXJNb2R1bGVdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGF0ZXBpY2tlckV2ZW50c0V4YW1wbGUge1xyXG4gIGV2ZW50czogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgYWRkRXZlbnQodHlwZTogc3RyaW5nLCBldmVudDogTWF0RGF0ZXBpY2tlcklucHV0RXZlbnQ8RGF0ZT4pIHtcclxuICAgIHRoaXMuZXZlbnRzLnB1c2goYCR7dHlwZX06ICR7ZXZlbnQudmFsdWV9YCk7XHJcbiAgfVxyXG59XHJcbiIsIjxtYXQtZm9ybS1maWVsZD5cclxuICA8bWF0LWxhYmVsPklucHV0ICYgY2hhbmdlIGV2ZW50czwvbWF0LWxhYmVsPlxyXG4gIDxpbnB1dCBtYXRJbnB1dCBbbWF0RGF0ZXBpY2tlcl09XCJwaWNrZXJcIlxyXG4gICAgICAgICAoZGF0ZUlucHV0KT1cImFkZEV2ZW50KCdpbnB1dCcsICRldmVudClcIiAoZGF0ZUNoYW5nZSk9XCJhZGRFdmVudCgnY2hhbmdlJywgJGV2ZW50KVwiPlxyXG4gIDxtYXQtaGludD5NTS9ERC9ZWVlZPC9tYXQtaGludD5cclxuICA8bWF0LWRhdGVwaWNrZXItdG9nZ2xlIG1hdEljb25TdWZmaXggW2Zvcl09XCJwaWNrZXJcIj48L21hdC1kYXRlcGlja2VyLXRvZ2dsZT5cclxuICA8bWF0LWRhdGVwaWNrZXIgI3BpY2tlcj48L21hdC1kYXRlcGlja2VyPlxyXG48L21hdC1mb3JtLWZpZWxkPlxyXG5cclxuPGRpdiBjbGFzcz1cImV4YW1wbGUtZXZlbnRzXCI+XHJcbiAgQGZvciAoZSBvZiBldmVudHM7IHRyYWNrIGUpIHtcclxuICAgIDxkaXY+e3tlfX08L2Rpdj5cclxuICB9XHJcbjwvZGl2PlxyXG4iXX0=