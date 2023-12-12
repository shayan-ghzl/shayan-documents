import { Component } from '@angular/core';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/datepicker";
import * as i3 from "@angular/forms";
/** @title Date range picker forms integration */
export class DateRangePickerFormsExample {
    constructor() {
        this.range = new FormGroup({
            start: new FormControl(null),
            end: new FormControl(null),
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: DateRangePickerFormsExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.4", type: DateRangePickerFormsExample, isStandalone: true, selector: "date-range-picker-forms-example", ngImport: i0, template: "<mat-form-field>\r\n  <mat-label>Enter a date range</mat-label>\r\n  <mat-date-range-input [formGroup]=\"range\" [rangePicker]=\"picker\">\r\n    <input matStartDate formControlName=\"start\" placeholder=\"Start date\">\r\n    <input matEndDate formControlName=\"end\" placeholder=\"End date\">\r\n  </mat-date-range-input>\r\n  <mat-hint>MM/DD/YYYY \u2013 MM/DD/YYYY</mat-hint>\r\n  <mat-datepicker-toggle matIconSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n  <mat-date-range-picker #picker></mat-date-range-picker>\r\n\r\n  @if (range.controls.start.hasError('matStartDateInvalid')) {\r\n    <mat-error>Invalid start date</mat-error>\r\n  }\r\n  @if (range.controls.end.hasError('matEndDateInvalid')) {\r\n    <mat-error>Invalid end date</mat-error>\r\n  }\r\n</mat-form-field>\r\n\r\n<p>Selected range: {{range.value | json}}</p>\r\n", dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "directive", type: i1.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i1.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "directive", type: i1.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "ngmodule", type: MatDatepickerModule }, { kind: "component", type: i2.MatDatepickerToggle, selector: "mat-datepicker-toggle", inputs: ["for", "tabIndex", "aria-label", "disabled", "disableRipple"], exportAs: ["matDatepickerToggle"] }, { kind: "component", type: i2.MatDateRangeInput, selector: "mat-date-range-input", inputs: ["rangePicker", "required", "dateFilter", "min", "max", "disabled", "separator", "comparisonStart", "comparisonEnd"], exportAs: ["matDateRangeInput"] }, { kind: "directive", type: i2.MatStartDate, selector: "input[matStartDate]", outputs: ["dateChange", "dateInput"] }, { kind: "directive", type: i2.MatEndDate, selector: "input[matEndDate]", outputs: ["dateChange", "dateInput"] }, { kind: "component", type: i2.MatDateRangePicker, selector: "mat-date-range-picker", exportAs: ["matDateRangePicker"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i3.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i3.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "pipe", type: JsonPipe, name: "json" }, { kind: "ngmodule", type: MatNativeDateModule }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: DateRangePickerFormsExample, decorators: [{
            type: Component,
            args: [{ selector: 'date-range-picker-forms-example', standalone: true, imports: [
                        MatFormFieldModule,
                        MatDatepickerModule,
                        FormsModule,
                        ReactiveFormsModule,
                        JsonPipe,
                        MatNativeDateModule,
                    ], template: "<mat-form-field>\r\n  <mat-label>Enter a date range</mat-label>\r\n  <mat-date-range-input [formGroup]=\"range\" [rangePicker]=\"picker\">\r\n    <input matStartDate formControlName=\"start\" placeholder=\"Start date\">\r\n    <input matEndDate formControlName=\"end\" placeholder=\"End date\">\r\n  </mat-date-range-input>\r\n  <mat-hint>MM/DD/YYYY \u2013 MM/DD/YYYY</mat-hint>\r\n  <mat-datepicker-toggle matIconSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n  <mat-date-range-picker #picker></mat-date-range-picker>\r\n\r\n  @if (range.controls.start.hasError('matStartDateInvalid')) {\r\n    <mat-error>Invalid start date</mat-error>\r\n  }\r\n  @if (range.controls.end.hasError('matEndDateInvalid')) {\r\n    <mat-error>Invalid end date</mat-error>\r\n  }\r\n</mat-form-field>\r\n\r\n<p>Selected range: {{range.value | json}}</p>\r\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1yYW5nZS1waWNrZXItZm9ybXMtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZS1yYW5nZS1waWNrZXItZm9ybXMvZGF0ZS1yYW5nZS1waWNrZXItZm9ybXMtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZS1yYW5nZS1waWNrZXItZm9ybXMvZGF0ZS1yYW5nZS1waWNrZXItZm9ybXMtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLFNBQVMsRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEYsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBQ2pFLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBQ2hFLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHdCQUF3QixDQUFDOzs7OztBQUUzRCxpREFBaUQ7QUFjakQsTUFBTSxPQUFPLDJCQUEyQjtJQWJ4QztRQWNFLFVBQUssR0FBRyxJQUFJLFNBQVMsQ0FBQztZQUNwQixLQUFLLEVBQUUsSUFBSSxXQUFXLENBQWMsSUFBSSxDQUFDO1lBQ3pDLEdBQUcsRUFBRSxJQUFJLFdBQVcsQ0FBYyxJQUFJLENBQUM7U0FDeEMsQ0FBQyxDQUFDO0tBQ0o7OEdBTFksMkJBQTJCO2tHQUEzQiwyQkFBMkIsMkZDckJ4Qyw2MEJBbUJBLDJDRE5JLGtCQUFrQixnbUJBQ2xCLG1CQUFtQixvekJBQ25CLFdBQVcsa2pCQUNYLG1CQUFtQiwyVUFDbkIsUUFBUSw0Q0FDUixtQkFBbUI7OzJGQUdWLDJCQUEyQjtrQkFidkMsU0FBUzsrQkFDRSxpQ0FBaUMsY0FFL0IsSUFBSSxXQUNQO3dCQUNQLGtCQUFrQjt3QkFDbEIsbUJBQW1CO3dCQUNuQixXQUFXO3dCQUNYLG1CQUFtQjt3QkFDbkIsUUFBUTt3QkFDUixtQkFBbUI7cUJBQ3BCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0Zvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7SnNvblBpcGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7TWF0RGF0ZXBpY2tlck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGF0ZXBpY2tlcic7XHJcbmltcG9ydCB7TWF0Rm9ybUZpZWxkTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcclxuaW1wb3J0IHtNYXROYXRpdmVEYXRlTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcclxuXHJcbi8qKiBAdGl0bGUgRGF0ZSByYW5nZSBwaWNrZXIgZm9ybXMgaW50ZWdyYXRpb24gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdkYXRlLXJhbmdlLXBpY2tlci1mb3Jtcy1leGFtcGxlJyxcclxuICB0ZW1wbGF0ZVVybDogJ2RhdGUtcmFuZ2UtcGlja2VyLWZvcm1zLWV4YW1wbGUuaHRtbCcsXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBNYXRGb3JtRmllbGRNb2R1bGUsXHJcbiAgICBNYXREYXRlcGlja2VyTW9kdWxlLFxyXG4gICAgRm9ybXNNb2R1bGUsXHJcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG4gICAgSnNvblBpcGUsXHJcbiAgICBNYXROYXRpdmVEYXRlTW9kdWxlLFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEYXRlUmFuZ2VQaWNrZXJGb3Jtc0V4YW1wbGUge1xyXG4gIHJhbmdlID0gbmV3IEZvcm1Hcm91cCh7XHJcbiAgICBzdGFydDogbmV3IEZvcm1Db250cm9sPERhdGUgfCBudWxsPihudWxsKSxcclxuICAgIGVuZDogbmV3IEZvcm1Db250cm9sPERhdGUgfCBudWxsPihudWxsKSxcclxuICB9KTtcclxufVxyXG4iLCI8bWF0LWZvcm0tZmllbGQ+XHJcbiAgPG1hdC1sYWJlbD5FbnRlciBhIGRhdGUgcmFuZ2U8L21hdC1sYWJlbD5cclxuICA8bWF0LWRhdGUtcmFuZ2UtaW5wdXQgW2Zvcm1Hcm91cF09XCJyYW5nZVwiIFtyYW5nZVBpY2tlcl09XCJwaWNrZXJcIj5cclxuICAgIDxpbnB1dCBtYXRTdGFydERhdGUgZm9ybUNvbnRyb2xOYW1lPVwic3RhcnRcIiBwbGFjZWhvbGRlcj1cIlN0YXJ0IGRhdGVcIj5cclxuICAgIDxpbnB1dCBtYXRFbmREYXRlIGZvcm1Db250cm9sTmFtZT1cImVuZFwiIHBsYWNlaG9sZGVyPVwiRW5kIGRhdGVcIj5cclxuICA8L21hdC1kYXRlLXJhbmdlLWlucHV0PlxyXG4gIDxtYXQtaGludD5NTS9ERC9ZWVlZIOKAkyBNTS9ERC9ZWVlZPC9tYXQtaGludD5cclxuICA8bWF0LWRhdGVwaWNrZXItdG9nZ2xlIG1hdEljb25TdWZmaXggW2Zvcl09XCJwaWNrZXJcIj48L21hdC1kYXRlcGlja2VyLXRvZ2dsZT5cclxuICA8bWF0LWRhdGUtcmFuZ2UtcGlja2VyICNwaWNrZXI+PC9tYXQtZGF0ZS1yYW5nZS1waWNrZXI+XHJcblxyXG4gIEBpZiAocmFuZ2UuY29udHJvbHMuc3RhcnQuaGFzRXJyb3IoJ21hdFN0YXJ0RGF0ZUludmFsaWQnKSkge1xyXG4gICAgPG1hdC1lcnJvcj5JbnZhbGlkIHN0YXJ0IGRhdGU8L21hdC1lcnJvcj5cclxuICB9XHJcbiAgQGlmIChyYW5nZS5jb250cm9scy5lbmQuaGFzRXJyb3IoJ21hdEVuZERhdGVJbnZhbGlkJykpIHtcclxuICAgIDxtYXQtZXJyb3I+SW52YWxpZCBlbmQgZGF0ZTwvbWF0LWVycm9yPlxyXG4gIH1cclxuPC9tYXQtZm9ybS1maWVsZD5cclxuXHJcbjxwPlNlbGVjdGVkIHJhbmdlOiB7e3JhbmdlLnZhbHVlIHwganNvbn19PC9wPlxyXG4iXX0=