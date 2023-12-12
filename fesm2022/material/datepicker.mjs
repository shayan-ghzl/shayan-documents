import * as i0 from '@angular/core';
import { Component, Injectable, ChangeDetectionStrategy, Inject, ViewEncapsulation } from '@angular/core';
import * as i3$1 from '@angular/forms';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as i1$1 from '@angular/material/core';
import { MatNativeDateModule, MAT_DATE_FORMATS, DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';
import * as i3 from '@angular/material/datepicker';
import { MatDatepickerModule, DateRange, MAT_DATE_RANGE_SELECTION_STRATEGY } from '@angular/material/datepicker';
import * as i1 from '@angular/material/form-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import { JsonPipe } from '@angular/common';
import * as i4 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';
import * as i2 from '@angular/material/input';
import { MatInputModule } from '@angular/material/input';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as i6 from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS, MAT_MOMENT_DATE_FORMATS } from '@angular/material-moment-adapter';
import * as _rollupMoment from 'moment';
import _rollupMoment__default from 'moment';
import * as i1$2 from '@angular/material/card';
import { MatCardModule } from '@angular/material/card';
import 'moment/locale/ja';
import 'moment/locale/fr';

const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();
/** @title Date range picker comparison ranges */
class DateRangePickerComparisonExample {
    constructor() {
        this.campaignOne = new FormGroup({
            start: new FormControl(new Date(year, month, 13)),
            end: new FormControl(new Date(year, month, 16)),
        });
        this.campaignTwo = new FormGroup({
            start: new FormControl(new Date(year, month, 15)),
            end: new FormControl(new Date(year, month, 19)),
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: DateRangePickerComparisonExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: DateRangePickerComparisonExample, isStandalone: true, selector: "date-range-picker-comparison-example", ngImport: i0, template: "<mat-form-field class=\"example-form-field\">\r\n  <mat-label>First campaign</mat-label>\r\n  <mat-date-range-input\r\n    [formGroup]=\"campaignOne\"\r\n    [rangePicker]=\"campaignOnePicker\"\r\n    [comparisonStart]=\"campaignTwo.value.start\"\r\n    [comparisonEnd]=\"campaignTwo.value.end\">\r\n    <input matStartDate placeholder=\"Start date\" formControlName=\"start\">\r\n    <input matEndDate placeholder=\"End date\" formControlName=\"end\">\r\n  </mat-date-range-input>\r\n  <mat-hint>MM/DD/YYYY \u2013 MM/DD/YYYY</mat-hint>\r\n  <mat-datepicker-toggle matIconSuffix [for]=\"campaignOnePicker\"></mat-datepicker-toggle>\r\n  <mat-date-range-picker #campaignOnePicker></mat-date-range-picker>\r\n</mat-form-field>\r\n\r\n<mat-form-field class=\"example-form-field\">\r\n  <mat-label>Second campaign</mat-label>\r\n  <mat-date-range-input\r\n    [formGroup]=\"campaignTwo\"\r\n    [rangePicker]=\"campaignTwoPicker\"\r\n    [comparisonStart]=\"campaignOne.value.start\"\r\n    [comparisonEnd]=\"campaignOne.value.end\">\r\n    <input matStartDate placeholder=\"Start date\" formControlName=\"start\">\r\n    <input matEndDate placeholder=\"End date\" formControlName=\"end\">\r\n  </mat-date-range-input>\r\n  <mat-datepicker-toggle matIconSuffix [for]=\"campaignTwoPicker\"></mat-datepicker-toggle>\r\n  <mat-hint>MM/DD/YYYY \u2013 MM/DD/YYYY</mat-hint>\r\n  <mat-date-range-picker #campaignTwoPicker></mat-date-range-picker>\r\n</mat-form-field>\r\n", styles: [".example-form-field {\r\n  margin: 0 8px 16px 0;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "directive", type: i1.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i1.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "ngmodule", type: MatDatepickerModule }, { kind: "component", type: i3.MatDatepickerToggle, selector: "mat-datepicker-toggle", inputs: ["for", "tabIndex", "aria-label", "disabled", "disableRipple"], exportAs: ["matDatepickerToggle"] }, { kind: "component", type: i3.MatDateRangeInput, selector: "mat-date-range-input", inputs: ["rangePicker", "required", "dateFilter", "min", "max", "disabled", "separator", "comparisonStart", "comparisonEnd"], exportAs: ["matDateRangeInput"] }, { kind: "directive", type: i3.MatStartDate, selector: "input[matStartDate]", outputs: ["dateChange", "dateInput"] }, { kind: "directive", type: i3.MatEndDate, selector: "input[matEndDate]", outputs: ["dateChange", "dateInput"] }, { kind: "component", type: i3.MatDateRangePicker, selector: "mat-date-range-picker", exportAs: ["matDateRangePicker"] }, { kind: "ngmodule", type: MatNativeDateModule }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i3$1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i3$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3$1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i3$1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i3$1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: DateRangePickerComparisonExample, decorators: [{
            type: Component,
            args: [{ selector: 'date-range-picker-comparison-example', standalone: true, imports: [
                        MatFormFieldModule,
                        MatDatepickerModule,
                        MatNativeDateModule,
                        FormsModule,
                        ReactiveFormsModule,
                    ], template: "<mat-form-field class=\"example-form-field\">\r\n  <mat-label>First campaign</mat-label>\r\n  <mat-date-range-input\r\n    [formGroup]=\"campaignOne\"\r\n    [rangePicker]=\"campaignOnePicker\"\r\n    [comparisonStart]=\"campaignTwo.value.start\"\r\n    [comparisonEnd]=\"campaignTwo.value.end\">\r\n    <input matStartDate placeholder=\"Start date\" formControlName=\"start\">\r\n    <input matEndDate placeholder=\"End date\" formControlName=\"end\">\r\n  </mat-date-range-input>\r\n  <mat-hint>MM/DD/YYYY \u2013 MM/DD/YYYY</mat-hint>\r\n  <mat-datepicker-toggle matIconSuffix [for]=\"campaignOnePicker\"></mat-datepicker-toggle>\r\n  <mat-date-range-picker #campaignOnePicker></mat-date-range-picker>\r\n</mat-form-field>\r\n\r\n<mat-form-field class=\"example-form-field\">\r\n  <mat-label>Second campaign</mat-label>\r\n  <mat-date-range-input\r\n    [formGroup]=\"campaignTwo\"\r\n    [rangePicker]=\"campaignTwoPicker\"\r\n    [comparisonStart]=\"campaignOne.value.start\"\r\n    [comparisonEnd]=\"campaignOne.value.end\">\r\n    <input matStartDate placeholder=\"Start date\" formControlName=\"start\">\r\n    <input matEndDate placeholder=\"End date\" formControlName=\"end\">\r\n  </mat-date-range-input>\r\n  <mat-datepicker-toggle matIconSuffix [for]=\"campaignTwoPicker\"></mat-datepicker-toggle>\r\n  <mat-hint>MM/DD/YYYY \u2013 MM/DD/YYYY</mat-hint>\r\n  <mat-date-range-picker #campaignTwoPicker></mat-date-range-picker>\r\n</mat-form-field>\r\n", styles: [".example-form-field {\r\n  margin: 0 8px 16px 0;\r\n}\r\n"] }]
        }] });

/** @title Date range picker forms integration */
class DateRangePickerFormsExample {
    constructor() {
        this.range = new FormGroup({
            start: new FormControl(null),
            end: new FormControl(null),
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: DateRangePickerFormsExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.4", type: DateRangePickerFormsExample, isStandalone: true, selector: "date-range-picker-forms-example", ngImport: i0, template: "<mat-form-field>\r\n  <mat-label>Enter a date range</mat-label>\r\n  <mat-date-range-input [formGroup]=\"range\" [rangePicker]=\"picker\">\r\n    <input matStartDate formControlName=\"start\" placeholder=\"Start date\">\r\n    <input matEndDate formControlName=\"end\" placeholder=\"End date\">\r\n  </mat-date-range-input>\r\n  <mat-hint>MM/DD/YYYY \u2013 MM/DD/YYYY</mat-hint>\r\n  <mat-datepicker-toggle matIconSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n  <mat-date-range-picker #picker></mat-date-range-picker>\r\n\r\n  @if (range.controls.start.hasError('matStartDateInvalid')) {\r\n    <mat-error>Invalid start date</mat-error>\r\n  }\r\n  @if (range.controls.end.hasError('matEndDateInvalid')) {\r\n    <mat-error>Invalid end date</mat-error>\r\n  }\r\n</mat-form-field>\r\n\r\n<p>Selected range: {{range.value | json}}</p>\r\n", dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "directive", type: i1.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i1.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "directive", type: i1.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "ngmodule", type: MatDatepickerModule }, { kind: "component", type: i3.MatDatepickerToggle, selector: "mat-datepicker-toggle", inputs: ["for", "tabIndex", "aria-label", "disabled", "disableRipple"], exportAs: ["matDatepickerToggle"] }, { kind: "component", type: i3.MatDateRangeInput, selector: "mat-date-range-input", inputs: ["rangePicker", "required", "dateFilter", "min", "max", "disabled", "separator", "comparisonStart", "comparisonEnd"], exportAs: ["matDateRangeInput"] }, { kind: "directive", type: i3.MatStartDate, selector: "input[matStartDate]", outputs: ["dateChange", "dateInput"] }, { kind: "directive", type: i3.MatEndDate, selector: "input[matEndDate]", outputs: ["dateChange", "dateInput"] }, { kind: "component", type: i3.MatDateRangePicker, selector: "mat-date-range-picker", exportAs: ["matDateRangePicker"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i3$1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i3$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3$1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i3$1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i3$1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "pipe", type: JsonPipe, name: "json" }, { kind: "ngmodule", type: MatNativeDateModule }] }); }
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

/** @title Basic date range picker */
class DateRangePickerOverviewExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: DateRangePickerOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: DateRangePickerOverviewExample, isStandalone: true, selector: "date-range-picker-overview-example", ngImport: i0, template: "<mat-form-field>\r\n  <mat-label>Enter a date range</mat-label>\r\n  <mat-date-range-input [rangePicker]=\"picker\">\r\n    <input matStartDate placeholder=\"Start date\">\r\n    <input matEndDate placeholder=\"End date\">\r\n  </mat-date-range-input>\r\n  <mat-hint>MM/DD/YYYY \u2013 MM/DD/YYYY</mat-hint>\r\n  <mat-datepicker-toggle matIconSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n  <mat-date-range-picker #picker></mat-date-range-picker>\r\n</mat-form-field>\r\n", dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "directive", type: i1.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i1.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "ngmodule", type: MatDatepickerModule }, { kind: "component", type: i3.MatDatepickerToggle, selector: "mat-datepicker-toggle", inputs: ["for", "tabIndex", "aria-label", "disabled", "disableRipple"], exportAs: ["matDatepickerToggle"] }, { kind: "component", type: i3.MatDateRangeInput, selector: "mat-date-range-input", inputs: ["rangePicker", "required", "dateFilter", "min", "max", "disabled", "separator", "comparisonStart", "comparisonEnd"], exportAs: ["matDateRangeInput"] }, { kind: "directive", type: i3.MatStartDate, selector: "input[matStartDate]", outputs: ["dateChange", "dateInput"] }, { kind: "directive", type: i3.MatEndDate, selector: "input[matEndDate]", outputs: ["dateChange", "dateInput"] }, { kind: "component", type: i3.MatDateRangePicker, selector: "mat-date-range-picker", exportAs: ["matDateRangePicker"] }, { kind: "ngmodule", type: MatNativeDateModule }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: DateRangePickerOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'date-range-picker-overview-example', standalone: true, imports: [MatFormFieldModule, MatDatepickerModule, MatNativeDateModule], template: "<mat-form-field>\r\n  <mat-label>Enter a date range</mat-label>\r\n  <mat-date-range-input [rangePicker]=\"picker\">\r\n    <input matStartDate placeholder=\"Start date\">\r\n    <input matEndDate placeholder=\"End date\">\r\n  </mat-date-range-input>\r\n  <mat-hint>MM/DD/YYYY \u2013 MM/DD/YYYY</mat-hint>\r\n  <mat-datepicker-toggle matIconSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n  <mat-date-range-picker #picker></mat-date-range-picker>\r\n</mat-form-field>\r\n" }]
        }] });

class FiveDayRangeSelectionStrategy {
    constructor(_dateAdapter) {
        this._dateAdapter = _dateAdapter;
    }
    selectionFinished(date) {
        return this._createFiveDayRange(date);
    }
    createPreview(activeDate) {
        return this._createFiveDayRange(activeDate);
    }
    _createFiveDayRange(date) {
        if (date) {
            const start = this._dateAdapter.addCalendarDays(date, -2);
            const end = this._dateAdapter.addCalendarDays(date, 2);
            return new DateRange(start, end);
        }
        return new DateRange(null, null);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: FiveDayRangeSelectionStrategy, deps: [{ token: i1$1.DateAdapter }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: FiveDayRangeSelectionStrategy }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: FiveDayRangeSelectionStrategy, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1$1.DateAdapter }] });
/** @title Date range picker with custom a selection strategy */
class DateRangePickerSelectionStrategyExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: DateRangePickerSelectionStrategyExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: DateRangePickerSelectionStrategyExample, isStandalone: true, selector: "date-range-picker-selection-strategy-example", providers: [
            {
                provide: MAT_DATE_RANGE_SELECTION_STRATEGY,
                useClass: FiveDayRangeSelectionStrategy,
            },
        ], ngImport: i0, template: "<mat-form-field>\r\n  <mat-label>Enter a date range</mat-label>\r\n  <mat-date-range-input [rangePicker]=\"picker\">\r\n    <input matStartDate placeholder=\"Start date\">\r\n    <input matEndDate placeholder=\"End date\">\r\n  </mat-date-range-input>\r\n  <mat-hint>MM/DD/YYYY \u2013 MM/DD/YYYY</mat-hint>\r\n  <mat-datepicker-toggle matIconSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n  <mat-date-range-picker #picker></mat-date-range-picker>\r\n</mat-form-field>\r\n", dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "directive", type: i1.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i1.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "ngmodule", type: MatDatepickerModule }, { kind: "component", type: i3.MatDatepickerToggle, selector: "mat-datepicker-toggle", inputs: ["for", "tabIndex", "aria-label", "disabled", "disableRipple"], exportAs: ["matDatepickerToggle"] }, { kind: "component", type: i3.MatDateRangeInput, selector: "mat-date-range-input", inputs: ["rangePicker", "required", "dateFilter", "min", "max", "disabled", "separator", "comparisonStart", "comparisonEnd"], exportAs: ["matDateRangeInput"] }, { kind: "directive", type: i3.MatStartDate, selector: "input[matStartDate]", outputs: ["dateChange", "dateInput"] }, { kind: "directive", type: i3.MatEndDate, selector: "input[matEndDate]", outputs: ["dateChange", "dateInput"] }, { kind: "component", type: i3.MatDateRangePicker, selector: "mat-date-range-picker", exportAs: ["matDateRangePicker"] }, { kind: "ngmodule", type: MatNativeDateModule }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: DateRangePickerSelectionStrategyExample, decorators: [{
            type: Component,
            args: [{ selector: 'date-range-picker-selection-strategy-example', providers: [
                        {
                            provide: MAT_DATE_RANGE_SELECTION_STRATEGY,
                            useClass: FiveDayRangeSelectionStrategy,
                        },
                    ], standalone: true, imports: [MatFormFieldModule, MatDatepickerModule, MatNativeDateModule], template: "<mat-form-field>\r\n  <mat-label>Enter a date range</mat-label>\r\n  <mat-date-range-input [rangePicker]=\"picker\">\r\n    <input matStartDate placeholder=\"Start date\">\r\n    <input matEndDate placeholder=\"End date\">\r\n  </mat-date-range-input>\r\n  <mat-hint>MM/DD/YYYY \u2013 MM/DD/YYYY</mat-hint>\r\n  <mat-datepicker-toggle matIconSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n  <mat-date-range-picker #picker></mat-date-range-picker>\r\n</mat-form-field>\r\n" }]
        }] });

/** @title Datepicker action buttons */
class DatepickerActionsExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: DatepickerActionsExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: DatepickerActionsExample, isStandalone: true, selector: "datepicker-actions-example", ngImport: i0, template: "<mat-form-field class=\"example-form-field\">\r\n  <mat-label>Choose a date</mat-label>\r\n  <input matInput [matDatepicker]=\"datepicker\">\r\n  <mat-hint>MM/DD/YYYY</mat-hint>\r\n  <mat-datepicker-toggle matIconSuffix [for]=\"datepicker\"></mat-datepicker-toggle>\r\n<!-- #docregion datepicker-actions -->\r\n  <mat-datepicker #datepicker>\r\n    <mat-datepicker-actions>\r\n      <button mat-button matDatepickerCancel>Cancel</button>\r\n      <button mat-raised-button color=\"primary\" matDatepickerApply>Apply</button>\r\n    </mat-datepicker-actions>\r\n  </mat-datepicker>\r\n<!-- #enddocregion datepicker-actions -->\r\n</mat-form-field>\r\n\r\n<mat-form-field class=\"example-form-field\">\r\n  <mat-label>Enter a date range</mat-label>\r\n  <mat-date-range-input [rangePicker]=\"rangePicker\">\r\n    <input matStartDate placeholder=\"Start date\">\r\n    <input matEndDate placeholder=\"End date\">\r\n  </mat-date-range-input>\r\n  <mat-hint>MM/DD/YYYY \u2013 MM/DD/YYYY</mat-hint>\r\n  <mat-datepicker-toggle matIconSuffix [for]=\"rangePicker\"></mat-datepicker-toggle>\r\n<!-- #docregion date-range-picker-actions -->\r\n  <mat-date-range-picker #rangePicker>\r\n    <mat-date-range-picker-actions>\r\n      <button mat-button matDateRangePickerCancel>Cancel</button>\r\n      <button mat-raised-button color=\"primary\" matDateRangePickerApply>Apply</button>\r\n    </mat-date-range-picker-actions>\r\n  </mat-date-range-picker>\r\n<!-- #enddocregion date-range-picker-actions -->\r\n</mat-form-field>\r\n", styles: [".example-form-field {\r\n  margin-right: 20px;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "directive", type: i1.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i1.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i2.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: MatDatepickerModule }, { kind: "component", type: i3.MatDatepicker, selector: "mat-datepicker", exportAs: ["matDatepicker"] }, { kind: "directive", type: i3.MatDatepickerInput, selector: "input[matDatepicker]", inputs: ["matDatepicker", "min", "max", "matDatepickerFilter"], exportAs: ["matDatepickerInput"] }, { kind: "component", type: i3.MatDatepickerToggle, selector: "mat-datepicker-toggle", inputs: ["for", "tabIndex", "aria-label", "disabled", "disableRipple"], exportAs: ["matDatepickerToggle"] }, { kind: "component", type: i3.MatDateRangeInput, selector: "mat-date-range-input", inputs: ["rangePicker", "required", "dateFilter", "min", "max", "disabled", "separator", "comparisonStart", "comparisonEnd"], exportAs: ["matDateRangeInput"] }, { kind: "directive", type: i3.MatStartDate, selector: "input[matStartDate]", outputs: ["dateChange", "dateInput"] }, { kind: "directive", type: i3.MatEndDate, selector: "input[matEndDate]", outputs: ["dateChange", "dateInput"] }, { kind: "component", type: i3.MatDateRangePicker, selector: "mat-date-range-picker", exportAs: ["matDateRangePicker"] }, { kind: "component", type: i3.MatDatepickerActions, selector: "mat-datepicker-actions, mat-date-range-picker-actions" }, { kind: "directive", type: i3.MatDatepickerCancel, selector: "[matDatepickerCancel], [matDateRangePickerCancel]" }, { kind: "directive", type: i3.MatDatepickerApply, selector: "[matDatepickerApply], [matDateRangePickerApply]" }, { kind: "ngmodule", type: MatNativeDateModule }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i4.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: DatepickerActionsExample, decorators: [{
            type: Component,
            args: [{ selector: 'datepicker-actions-example', standalone: true, imports: [
                        MatFormFieldModule,
                        MatInputModule,
                        MatDatepickerModule,
                        MatNativeDateModule,
                        MatButtonModule,
                    ], template: "<mat-form-field class=\"example-form-field\">\r\n  <mat-label>Choose a date</mat-label>\r\n  <input matInput [matDatepicker]=\"datepicker\">\r\n  <mat-hint>MM/DD/YYYY</mat-hint>\r\n  <mat-datepicker-toggle matIconSuffix [for]=\"datepicker\"></mat-datepicker-toggle>\r\n<!-- #docregion datepicker-actions -->\r\n  <mat-datepicker #datepicker>\r\n    <mat-datepicker-actions>\r\n      <button mat-button matDatepickerCancel>Cancel</button>\r\n      <button mat-raised-button color=\"primary\" matDatepickerApply>Apply</button>\r\n    </mat-datepicker-actions>\r\n  </mat-datepicker>\r\n<!-- #enddocregion datepicker-actions -->\r\n</mat-form-field>\r\n\r\n<mat-form-field class=\"example-form-field\">\r\n  <mat-label>Enter a date range</mat-label>\r\n  <mat-date-range-input [rangePicker]=\"rangePicker\">\r\n    <input matStartDate placeholder=\"Start date\">\r\n    <input matEndDate placeholder=\"End date\">\r\n  </mat-date-range-input>\r\n  <mat-hint>MM/DD/YYYY \u2013 MM/DD/YYYY</mat-hint>\r\n  <mat-datepicker-toggle matIconSuffix [for]=\"rangePicker\"></mat-datepicker-toggle>\r\n<!-- #docregion date-range-picker-actions -->\r\n  <mat-date-range-picker #rangePicker>\r\n    <mat-date-range-picker-actions>\r\n      <button mat-button matDateRangePickerCancel>Cancel</button>\r\n      <button mat-raised-button color=\"primary\" matDateRangePickerApply>Apply</button>\r\n    </mat-date-range-picker-actions>\r\n  </mat-date-range-picker>\r\n<!-- #enddocregion date-range-picker-actions -->\r\n</mat-form-field>\r\n", styles: [".example-form-field {\r\n  margin-right: 20px;\r\n}\r\n"] }]
        }] });

/** @title Datepicker open method */
class DatepickerApiExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: DatepickerApiExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: DatepickerApiExample, isStandalone: true, selector: "datepicker-api-example", ngImport: i0, template: "<mat-form-field class=\"example-full-width\">\r\n  <mat-label>Choose a date</mat-label>\r\n  <input matInput [matDatepicker]=\"picker\">\r\n  <mat-hint>MM/DD/YYYY</mat-hint>\r\n  <mat-datepicker #picker></mat-datepicker>\r\n</mat-form-field>\r\n<button mat-raised-button (click)=\"picker.open()\">Open</button>\r\n", styles: ["mat-form-field {\r\n  margin-right: 12px;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "directive", type: i1.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i2.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: MatNativeDateModule }, { kind: "ngmodule", type: MatDatepickerModule }, { kind: "component", type: i3.MatDatepicker, selector: "mat-datepicker", exportAs: ["matDatepicker"] }, { kind: "directive", type: i3.MatDatepickerInput, selector: "input[matDatepicker]", inputs: ["matDatepicker", "min", "max", "matDatepickerFilter"], exportAs: ["matDatepickerInput"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i4.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: DatepickerApiExample, decorators: [{
            type: Component,
            args: [{ selector: 'datepicker-api-example', standalone: true, imports: [
                        MatFormFieldModule,
                        MatInputModule,
                        MatNativeDateModule,
                        MatDatepickerModule,
                        MatButtonModule,
                    ], template: "<mat-form-field class=\"example-full-width\">\r\n  <mat-label>Choose a date</mat-label>\r\n  <input matInput [matDatepicker]=\"picker\">\r\n  <mat-hint>MM/DD/YYYY</mat-hint>\r\n  <mat-datepicker #picker></mat-datepicker>\r\n</mat-form-field>\r\n<button mat-raised-button (click)=\"picker.open()\">Open</button>\r\n", styles: ["mat-form-field {\r\n  margin-right: 12px;\r\n}\r\n"] }]
        }] });

/** @title Datepicker palette colors */
class DatepickerColorExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: DatepickerColorExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: DatepickerColorExample, isStandalone: true, selector: "datepicker-color-example", ngImport: i0, template: "<mat-form-field color=\"accent\">\r\n  <mat-label>Inherited calendar color</mat-label>\r\n  <input matInput [matDatepicker]=\"picker1\">\r\n  <mat-hint>MM/DD/YYYY</mat-hint>\r\n  <mat-datepicker-toggle matIconSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n  <mat-datepicker #picker1></mat-datepicker>\r\n</mat-form-field>\r\n\r\n<mat-form-field color=\"accent\">\r\n  <mat-label>Custom calendar color</mat-label>\r\n  <input matInput [matDatepicker]=\"picker2\">\r\n  <mat-hint>MM/DD/YYYY</mat-hint>\r\n  <mat-datepicker-toggle matIconSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n  <mat-datepicker #picker2 color=\"primary\"></mat-datepicker>\r\n</mat-form-field>\r\n", styles: ["mat-form-field {\r\n  margin-right: 12px;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "directive", type: i1.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i1.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i2.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: MatNativeDateModule }, { kind: "ngmodule", type: MatDatepickerModule }, { kind: "component", type: i3.MatDatepicker, selector: "mat-datepicker", exportAs: ["matDatepicker"] }, { kind: "directive", type: i3.MatDatepickerInput, selector: "input[matDatepicker]", inputs: ["matDatepicker", "min", "max", "matDatepickerFilter"], exportAs: ["matDatepickerInput"] }, { kind: "component", type: i3.MatDatepickerToggle, selector: "mat-datepicker-toggle", inputs: ["for", "tabIndex", "aria-label", "disabled", "disableRipple"], exportAs: ["matDatepickerToggle"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: DatepickerColorExample, decorators: [{
            type: Component,
            args: [{ selector: 'datepicker-color-example', standalone: true, imports: [MatFormFieldModule, MatInputModule, MatNativeDateModule, MatDatepickerModule], template: "<mat-form-field color=\"accent\">\r\n  <mat-label>Inherited calendar color</mat-label>\r\n  <input matInput [matDatepicker]=\"picker1\">\r\n  <mat-hint>MM/DD/YYYY</mat-hint>\r\n  <mat-datepicker-toggle matIconSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n  <mat-datepicker #picker1></mat-datepicker>\r\n</mat-form-field>\r\n\r\n<mat-form-field color=\"accent\">\r\n  <mat-label>Custom calendar color</mat-label>\r\n  <input matInput [matDatepicker]=\"picker2\">\r\n  <mat-hint>MM/DD/YYYY</mat-hint>\r\n  <mat-datepicker-toggle matIconSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n  <mat-datepicker #picker2 color=\"primary\"></mat-datepicker>\r\n</mat-form-field>\r\n", styles: ["mat-form-field {\r\n  margin-right: 12px;\r\n}\r\n"] }]
        }] });

/** @title Datepicker with custom calendar header */
class DatepickerCustomHeaderExample {
    constructor() {
        this.exampleHeader = ExampleHeader;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: DatepickerCustomHeaderExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: DatepickerCustomHeaderExample, isStandalone: true, selector: "datepicker-custom-header-example", ngImport: i0, template: "<mat-form-field>\r\n  <mat-label>Custom calendar header</mat-label>\r\n  <input matInput [matDatepicker]=\"picker\">\r\n  <mat-hint>MM/DD/YYYY</mat-hint>\r\n  <mat-datepicker-toggle matIconSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n  <mat-datepicker #picker [calendarHeaderComponent]=\"exampleHeader\"></mat-datepicker>\r\n</mat-form-field>\r\n", dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "directive", type: i1.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i1.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i2.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: MatNativeDateModule }, { kind: "ngmodule", type: MatDatepickerModule }, { kind: "component", type: i3.MatDatepicker, selector: "mat-datepicker", exportAs: ["matDatepicker"] }, { kind: "directive", type: i3.MatDatepickerInput, selector: "input[matDatepicker]", inputs: ["matDatepicker", "min", "max", "matDatepickerFilter"], exportAs: ["matDatepickerInput"] }, { kind: "component", type: i3.MatDatepickerToggle, selector: "mat-datepicker-toggle", inputs: ["for", "tabIndex", "aria-label", "disabled", "disableRipple"], exportAs: ["matDatepickerToggle"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: DatepickerCustomHeaderExample, decorators: [{
            type: Component,
            args: [{ selector: 'datepicker-custom-header-example', changeDetection: ChangeDetectionStrategy.OnPush, standalone: true, imports: [MatFormFieldModule, MatInputModule, MatNativeDateModule, MatDatepickerModule], template: "<mat-form-field>\r\n  <mat-label>Custom calendar header</mat-label>\r\n  <input matInput [matDatepicker]=\"picker\">\r\n  <mat-hint>MM/DD/YYYY</mat-hint>\r\n  <mat-datepicker-toggle matIconSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n  <mat-datepicker #picker [calendarHeaderComponent]=\"exampleHeader\"></mat-datepicker>\r\n</mat-form-field>\r\n" }]
        }] });
/** Custom header component for datepicker. */
class ExampleHeader {
    constructor(_calendar, _dateAdapter, _dateFormats, cdr) {
        this._calendar = _calendar;
        this._dateAdapter = _dateAdapter;
        this._dateFormats = _dateFormats;
        this._destroyed = new Subject();
        _calendar.stateChanges.pipe(takeUntil(this._destroyed)).subscribe(() => cdr.markForCheck());
    }
    ngOnDestroy() {
        this._destroyed.next();
        this._destroyed.complete();
    }
    get periodLabel() {
        return this._dateAdapter
            .format(this._calendar.activeDate, this._dateFormats.display.monthYearLabel)
            .toLocaleUpperCase();
    }
    previousClicked(mode) {
        this._calendar.activeDate =
            mode === 'month'
                ? this._dateAdapter.addCalendarMonths(this._calendar.activeDate, -1)
                : this._dateAdapter.addCalendarYears(this._calendar.activeDate, -1);
    }
    nextClicked(mode) {
        this._calendar.activeDate =
            mode === 'month'
                ? this._dateAdapter.addCalendarMonths(this._calendar.activeDate, 1)
                : this._dateAdapter.addCalendarYears(this._calendar.activeDate, 1);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: ExampleHeader, deps: [{ token: i3.MatCalendar }, { token: i1$1.DateAdapter }, { token: MAT_DATE_FORMATS }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: ExampleHeader, isStandalone: true, selector: "example-header", ngImport: i0, template: `
    <div class="example-header">
      <button mat-icon-button (click)="previousClicked('year')">
        <mat-icon>keyboard_double_arrow_left</mat-icon>
      </button>
      <button mat-icon-button (click)="previousClicked('month')">
        <mat-icon>keyboard_arrow_left</mat-icon>
      </button>
      <span class="example-header-label">{{periodLabel}}</span>
      <button mat-icon-button (click)="nextClicked('month')">
        <mat-icon>keyboard_arrow_right</mat-icon>
      </button>
      <button mat-icon-button (click)="nextClicked('year')">
        <mat-icon>keyboard_double_arrow_right</mat-icon>
      </button>
    </div>
  `, isInline: true, styles: ["\n    .example-header {\n      display: flex;\n      align-items: center;\n      padding: 0.5em;\n    }\n\n    .example-header-label {\n      flex: 1;\n      height: 1em;\n      font-weight: 500;\n      text-align: center;\n    }\n  "], dependencies: [{ kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i4.MatIconButton, selector: "button[mat-icon-button]", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i6.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: ExampleHeader, decorators: [{
            type: Component,
            args: [{ selector: 'example-header', template: `
    <div class="example-header">
      <button mat-icon-button (click)="previousClicked('year')">
        <mat-icon>keyboard_double_arrow_left</mat-icon>
      </button>
      <button mat-icon-button (click)="previousClicked('month')">
        <mat-icon>keyboard_arrow_left</mat-icon>
      </button>
      <span class="example-header-label">{{periodLabel}}</span>
      <button mat-icon-button (click)="nextClicked('month')">
        <mat-icon>keyboard_arrow_right</mat-icon>
      </button>
      <button mat-icon-button (click)="nextClicked('year')">
        <mat-icon>keyboard_double_arrow_right</mat-icon>
      </button>
    </div>
  `, changeDetection: ChangeDetectionStrategy.OnPush, standalone: true, imports: [MatButtonModule, MatIconModule], styles: ["\n    .example-header {\n      display: flex;\n      align-items: center;\n      padding: 0.5em;\n    }\n\n    .example-header-label {\n      flex: 1;\n      height: 1em;\n      font-weight: 500;\n      text-align: center;\n    }\n  "] }]
        }], ctorParameters: () => [{ type: i3.MatCalendar }, { type: i1$1.DateAdapter }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [MAT_DATE_FORMATS]
                }] }, { type: i0.ChangeDetectorRef }] });

/** @title Datepicker with custom icon */
class DatepickerCustomIconExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: DatepickerCustomIconExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: DatepickerCustomIconExample, isStandalone: true, selector: "datepicker-custom-icon-example", ngImport: i0, template: "<mat-form-field class=\"example-full-width\">\r\n  <mat-label>Choose a date</mat-label>\r\n  <input matInput [matDatepicker]=\"picker\">\r\n  <mat-hint>MM/DD/YYYY</mat-hint>\r\n  <mat-datepicker-toggle matIconSuffix [for]=\"picker\">\r\n    <mat-icon matDatepickerToggleIcon>keyboard_arrow_down</mat-icon>\r\n  </mat-datepicker-toggle>\r\n  <mat-datepicker #picker></mat-datepicker>\r\n</mat-form-field>\r\n", dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "directive", type: i1.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i1.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i2.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: MatDatepickerModule }, { kind: "component", type: i3.MatDatepicker, selector: "mat-datepicker", exportAs: ["matDatepicker"] }, { kind: "directive", type: i3.MatDatepickerInput, selector: "input[matDatepicker]", inputs: ["matDatepicker", "min", "max", "matDatepickerFilter"], exportAs: ["matDatepickerInput"] }, { kind: "component", type: i3.MatDatepickerToggle, selector: "mat-datepicker-toggle", inputs: ["for", "tabIndex", "aria-label", "disabled", "disableRipple"], exportAs: ["matDatepickerToggle"] }, { kind: "directive", type: i3.MatDatepickerToggleIcon, selector: "[matDatepickerToggleIcon]" }, { kind: "ngmodule", type: MatNativeDateModule }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i6.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: DatepickerCustomIconExample, decorators: [{
            type: Component,
            args: [{ selector: 'datepicker-custom-icon-example', standalone: true, imports: [
                        MatFormFieldModule,
                        MatInputModule,
                        MatDatepickerModule,
                        MatNativeDateModule,
                        MatIconModule,
                    ], template: "<mat-form-field class=\"example-full-width\">\r\n  <mat-label>Choose a date</mat-label>\r\n  <input matInput [matDatepicker]=\"picker\">\r\n  <mat-hint>MM/DD/YYYY</mat-hint>\r\n  <mat-datepicker-toggle matIconSuffix [for]=\"picker\">\r\n    <mat-icon matDatepickerToggleIcon>keyboard_arrow_down</mat-icon>\r\n  </mat-datepicker-toggle>\r\n  <mat-datepicker #picker></mat-datepicker>\r\n</mat-form-field>\r\n" }]
        }] });

/** @title Datepicker with custom date classes */
class DatepickerDateClassExample {
    constructor() {
        this.dateClass = (cellDate, view) => {
            // Only highligh dates inside the month view.
            if (view === 'month') {
                const date = cellDate.getDate();
                // Highlight the 1st and 20th day of each month.
                return date === 1 || date === 20 ? 'example-custom-date-class' : '';
            }
            return '';
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: DatepickerDateClassExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: DatepickerDateClassExample, isStandalone: true, selector: "datepicker-date-class-example", ngImport: i0, template: "<mat-form-field class=\"example-full-width\">\r\n  <mat-label>Choose a date</mat-label>\r\n  <input matInput [matDatepicker]=\"picker\">\r\n  <mat-hint>MM/DD/YYYY</mat-hint>\r\n  <mat-datepicker-toggle matIconSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n  <mat-datepicker [dateClass]=\"dateClass\" #picker></mat-datepicker>\r\n</mat-form-field>\r\n", styles: ["button.example-custom-date-class {\r\n  background: orange;\r\n  border-radius: 100%;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "directive", type: i1.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i1.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i2.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: MatNativeDateModule }, { kind: "ngmodule", type: MatDatepickerModule }, { kind: "component", type: i3.MatDatepicker, selector: "mat-datepicker", exportAs: ["matDatepicker"] }, { kind: "directive", type: i3.MatDatepickerInput, selector: "input[matDatepicker]", inputs: ["matDatepicker", "min", "max", "matDatepickerFilter"], exportAs: ["matDatepickerInput"] }, { kind: "component", type: i3.MatDatepickerToggle, selector: "mat-datepicker-toggle", inputs: ["for", "tabIndex", "aria-label", "disabled", "disableRipple"], exportAs: ["matDatepickerToggle"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: DatepickerDateClassExample, decorators: [{
            type: Component,
            args: [{ selector: 'datepicker-date-class-example', encapsulation: ViewEncapsulation.None, standalone: true, imports: [MatFormFieldModule, MatInputModule, MatNativeDateModule, MatDatepickerModule], template: "<mat-form-field class=\"example-full-width\">\r\n  <mat-label>Choose a date</mat-label>\r\n  <input matInput [matDatepicker]=\"picker\">\r\n  <mat-hint>MM/DD/YYYY</mat-hint>\r\n  <mat-datepicker-toggle matIconSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n  <mat-datepicker [dateClass]=\"dateClass\" #picker></mat-datepicker>\r\n</mat-form-field>\r\n", styles: ["button.example-custom-date-class {\r\n  background: orange;\r\n  border-radius: 100%;\r\n}\r\n"] }]
        }] });

/** @title Disabled datepicker */
class DatepickerDisabledExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: DatepickerDisabledExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: DatepickerDisabledExample, isStandalone: true, selector: "datepicker-disabled-example", ngImport: i0, template: "<p>\r\n  <mat-form-field>\r\n    <mat-label>Completely disabled</mat-label>\r\n    <input matInput [matDatepicker]=\"dp1\" disabled>\r\n    <mat-hint>MM/DD/YYYY</mat-hint>\r\n    <mat-datepicker-toggle matIconSuffix [for]=\"dp1\"></mat-datepicker-toggle>\r\n    <mat-datepicker #dp1></mat-datepicker>\r\n  </mat-form-field>\r\n</p>\r\n\r\n<p>\r\n  <mat-form-field>\r\n    <mat-label>Popup disabled</mat-label>\r\n    <input matInput [matDatepicker]=\"dp2\">\r\n    <mat-hint>MM/DD/YYYY</mat-hint>\r\n    <mat-datepicker-toggle matIconSuffix [for]=\"dp2\" disabled></mat-datepicker-toggle>\r\n    <mat-datepicker #dp2></mat-datepicker>\r\n  </mat-form-field>\r\n</p>\r\n\r\n<p>\r\n  <mat-form-field>\r\n    <mat-label>Input disabled</mat-label>\r\n    <input matInput [matDatepicker]=\"dp3\" disabled>\r\n    <mat-hint>MM/DD/YYYY</mat-hint>\r\n    <mat-datepicker-toggle matIconSuffix [for]=\"dp3\"></mat-datepicker-toggle>\r\n    <mat-datepicker #dp3 disabled=\"false\"></mat-datepicker>\r\n  </mat-form-field>\r\n</p>\r\n", dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "directive", type: i1.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i1.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i2.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: MatNativeDateModule }, { kind: "ngmodule", type: MatDatepickerModule }, { kind: "component", type: i3.MatDatepicker, selector: "mat-datepicker", exportAs: ["matDatepicker"] }, { kind: "directive", type: i3.MatDatepickerInput, selector: "input[matDatepicker]", inputs: ["matDatepicker", "min", "max", "matDatepickerFilter"], exportAs: ["matDatepickerInput"] }, { kind: "component", type: i3.MatDatepickerToggle, selector: "mat-datepicker-toggle", inputs: ["for", "tabIndex", "aria-label", "disabled", "disableRipple"], exportAs: ["matDatepickerToggle"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: DatepickerDisabledExample, decorators: [{
            type: Component,
            args: [{ selector: 'datepicker-disabled-example', standalone: true, imports: [MatFormFieldModule, MatInputModule, MatNativeDateModule, MatDatepickerModule], template: "<p>\r\n  <mat-form-field>\r\n    <mat-label>Completely disabled</mat-label>\r\n    <input matInput [matDatepicker]=\"dp1\" disabled>\r\n    <mat-hint>MM/DD/YYYY</mat-hint>\r\n    <mat-datepicker-toggle matIconSuffix [for]=\"dp1\"></mat-datepicker-toggle>\r\n    <mat-datepicker #dp1></mat-datepicker>\r\n  </mat-form-field>\r\n</p>\r\n\r\n<p>\r\n  <mat-form-field>\r\n    <mat-label>Popup disabled</mat-label>\r\n    <input matInput [matDatepicker]=\"dp2\">\r\n    <mat-hint>MM/DD/YYYY</mat-hint>\r\n    <mat-datepicker-toggle matIconSuffix [for]=\"dp2\" disabled></mat-datepicker-toggle>\r\n    <mat-datepicker #dp2></mat-datepicker>\r\n  </mat-form-field>\r\n</p>\r\n\r\n<p>\r\n  <mat-form-field>\r\n    <mat-label>Input disabled</mat-label>\r\n    <input matInput [matDatepicker]=\"dp3\" disabled>\r\n    <mat-hint>MM/DD/YYYY</mat-hint>\r\n    <mat-datepicker-toggle matIconSuffix [for]=\"dp3\"></mat-datepicker-toggle>\r\n    <mat-datepicker #dp3 disabled=\"false\"></mat-datepicker>\r\n  </mat-form-field>\r\n</p>\r\n" }]
        }] });

/** @title Datepicker input and change events */
class DatepickerEventsExample {
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

/** @title Datepicker with filter validation */
class DatepickerFilterExample {
    constructor() {
        this.myFilter = (d) => {
            const day = (d || new Date()).getDay();
            // Prevent Saturday and Sunday from being selected.
            return day !== 0 && day !== 6;
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: DatepickerFilterExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: DatepickerFilterExample, isStandalone: true, selector: "datepicker-filter-example", ngImport: i0, template: "<mat-form-field class=\"example-full-width\">\r\n  <mat-label>Choose a date</mat-label>\r\n  <input matInput [matDatepickerFilter]=\"myFilter\" [matDatepicker]=\"picker\">\r\n  <mat-hint>MM/DD/YYYY</mat-hint>\r\n  <mat-datepicker-toggle matIconSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n  <mat-datepicker #picker></mat-datepicker>\r\n</mat-form-field>\r\n", dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "directive", type: i1.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i1.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i2.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: MatNativeDateModule }, { kind: "ngmodule", type: MatDatepickerModule }, { kind: "component", type: i3.MatDatepicker, selector: "mat-datepicker", exportAs: ["matDatepicker"] }, { kind: "directive", type: i3.MatDatepickerInput, selector: "input[matDatepicker]", inputs: ["matDatepicker", "min", "max", "matDatepickerFilter"], exportAs: ["matDatepickerInput"] }, { kind: "component", type: i3.MatDatepickerToggle, selector: "mat-datepicker-toggle", inputs: ["for", "tabIndex", "aria-label", "disabled", "disableRipple"], exportAs: ["matDatepickerToggle"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: DatepickerFilterExample, decorators: [{
            type: Component,
            args: [{ selector: 'datepicker-filter-example', standalone: true, imports: [MatFormFieldModule, MatInputModule, MatNativeDateModule, MatDatepickerModule], template: "<mat-form-field class=\"example-full-width\">\r\n  <mat-label>Choose a date</mat-label>\r\n  <input matInput [matDatepickerFilter]=\"myFilter\" [matDatepicker]=\"picker\">\r\n  <mat-hint>MM/DD/YYYY</mat-hint>\r\n  <mat-datepicker-toggle matIconSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n  <mat-datepicker #picker></mat-datepicker>\r\n</mat-form-field>\r\n" }]
        }] });

const moment$2 = _rollupMoment__default || _rollupMoment;
// See the Moment.js docs for the meaning of these formats:
// https://momentjs.com/docs/#/displaying/format/
const MY_FORMATS$1 = {
    parse: {
        dateInput: 'LL',
    },
    display: {
        dateInput: 'LL',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY',
    },
};
/** @title Datepicker with custom formats */
class DatepickerFormatsExample {
    constructor() {
        this.date = new FormControl(moment$2());
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: DatepickerFormatsExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: DatepickerFormatsExample, isStandalone: true, selector: "datepicker-formats-example", providers: [
            // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
            // application's root module. We provide it at the component level here, due to limitations of
            // our example generation script.
            {
                provide: DateAdapter,
                useClass: MomentDateAdapter,
                deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
            },
            { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS$1 },
        ], ngImport: i0, template: "<mat-form-field>\r\n  <mat-label>Verbose datepicker</mat-label>\r\n  <input matInput [matDatepicker]=\"dp\" [formControl]=\"date\">\r\n  <mat-hint>MMMM DD, YYYY</mat-hint>\r\n  <mat-datepicker-toggle matIconSuffix [for]=\"dp\"></mat-datepicker-toggle>\r\n  <mat-datepicker #dp></mat-datepicker>\r\n</mat-form-field>\r\n", dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "directive", type: i1.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i1.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i2.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: MatDatepickerModule }, { kind: "component", type: i3.MatDatepicker, selector: "mat-datepicker", exportAs: ["matDatepicker"] }, { kind: "directive", type: i3.MatDatepickerInput, selector: "input[matDatepicker]", inputs: ["matDatepicker", "min", "max", "matDatepickerFilter"], exportAs: ["matDatepickerInput"] }, { kind: "component", type: i3.MatDatepickerToggle, selector: "mat-datepicker-toggle", inputs: ["for", "tabIndex", "aria-label", "disabled", "disableRipple"], exportAs: ["matDatepickerToggle"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i3$1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i3$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i3$1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: DatepickerFormatsExample, decorators: [{
            type: Component,
            args: [{ selector: 'datepicker-formats-example', providers: [
                        // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                        // application's root module. We provide it at the component level here, due to limitations of
                        // our example generation script.
                        {
                            provide: DateAdapter,
                            useClass: MomentDateAdapter,
                            deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
                        },
                        { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS$1 },
                    ], standalone: true, imports: [
                        MatFormFieldModule,
                        MatInputModule,
                        MatDatepickerModule,
                        FormsModule,
                        ReactiveFormsModule,
                    ], template: "<mat-form-field>\r\n  <mat-label>Verbose datepicker</mat-label>\r\n  <input matInput [matDatepicker]=\"dp\" [formControl]=\"date\">\r\n  <mat-hint>MMMM DD, YYYY</mat-hint>\r\n  <mat-datepicker-toggle matIconSuffix [for]=\"dp\"></mat-datepicker-toggle>\r\n  <mat-datepicker #dp></mat-datepicker>\r\n</mat-form-field>\r\n" }]
        }] });

/**
 * @title Testing with MatDatepickerInputHarness
 */
class DatepickerHarnessExample {
    constructor() {
        this.date = null;
        this.minDate = null;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: DatepickerHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: DatepickerHarnessExample, isStandalone: true, selector: "datepicker-harness-example", ngImport: i0, template: "<input\r\n    matInput\r\n    [matDatepicker]=\"picker\"\r\n    [(ngModel)]=\"date\"\r\n    [min]=\"minDate\">\r\n<mat-datepicker #picker></mat-datepicker>\r\n", dependencies: [{ kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i2.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: MatDatepickerModule }, { kind: "component", type: i3.MatDatepicker, selector: "mat-datepicker", exportAs: ["matDatepicker"] }, { kind: "directive", type: i3.MatDatepickerInput, selector: "input[matDatepicker]", inputs: ["matDatepicker", "min", "max", "matDatepickerFilter"], exportAs: ["matDatepickerInput"] }, { kind: "ngmodule", type: MatNativeDateModule }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i3$1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i3$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3$1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: DatepickerHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'datepicker-harness-example', standalone: true, imports: [MatInputModule, MatDatepickerModule, MatNativeDateModule, FormsModule], template: "<input\r\n    matInput\r\n    [matDatepicker]=\"picker\"\r\n    [(ngModel)]=\"date\"\r\n    [min]=\"minDate\">\r\n<mat-datepicker #picker></mat-datepicker>\r\n" }]
        }] });

/** @title Datepicker inline calendar example */
class DatepickerInlineCalendarExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: DatepickerInlineCalendarExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: DatepickerInlineCalendarExample, isStandalone: true, selector: "datepicker-inline-calendar-example", ngImport: i0, template: "<mat-card class=\"demo-inline-calendar-card\">\r\n  <mat-calendar [(selected)]=\"selected\"></mat-calendar>\r\n</mat-card>\r\n<p>Selected date: {{selected}}</p>\r\n", styles: [".demo-inline-calendar-card {\r\n  width: 300px;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: MatCardModule }, { kind: "component", type: i1$2.MatCard, selector: "mat-card", inputs: ["appearance"], exportAs: ["matCard"] }, { kind: "ngmodule", type: MatDatepickerModule }, { kind: "component", type: i3.MatCalendar, selector: "mat-calendar", inputs: ["headerComponent", "startAt", "startView", "selected", "minDate", "maxDate", "dateFilter", "dateClass", "comparisonStart", "comparisonEnd", "startDateAccessibleName", "endDateAccessibleName"], outputs: ["selectedChange", "yearSelected", "monthSelected", "viewChanged", "_userSelection", "_userDragDrop"], exportAs: ["matCalendar"] }, { kind: "ngmodule", type: MatNativeDateModule }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: DatepickerInlineCalendarExample, decorators: [{
            type: Component,
            args: [{ selector: 'datepicker-inline-calendar-example', standalone: true, imports: [MatCardModule, MatDatepickerModule, MatNativeDateModule], template: "<mat-card class=\"demo-inline-calendar-card\">\r\n  <mat-calendar [(selected)]=\"selected\"></mat-calendar>\r\n</mat-card>\r\n<p>Selected date: {{selected}}</p>\r\n", styles: [".demo-inline-calendar-card {\r\n  width: 300px;\r\n}\r\n"] }]
        }] });

/** @title Datepicker with different locale */
class DatepickerLocaleExample {
    constructor(_adapter, _intl, _locale) {
        this._adapter = _adapter;
        this._intl = _intl;
        this._locale = _locale;
    }
    ngOnInit() {
        this.updateCloseButtonLabel('カレンダーを閉じる');
    }
    french() {
        this._locale = 'fr';
        this._adapter.setLocale(this._locale);
        this.updateCloseButtonLabel('Fermer le calendrier');
    }
    updateCloseButtonLabel(label) {
        this._intl.closeCalendarLabel = label;
        this._intl.changes.next();
    }
    getDateFormatString() {
        if (this._locale === 'ja-JP') {
            return 'YYYY/MM/DD';
        }
        else if (this._locale === 'fr') {
            return 'DD/MM/YYYY';
        }
        return '';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: DatepickerLocaleExample, deps: [{ token: i1$1.DateAdapter }, { token: i3.MatDatepickerIntl }, { token: MAT_DATE_LOCALE }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: DatepickerLocaleExample, isStandalone: true, selector: "datepicker-locale-example", providers: [
            // The locale would typically be provided on the root module of your application. We do it at
            // the component level here, due to limitations of our example generation script.
            { provide: MAT_DATE_LOCALE, useValue: 'ja-JP' },
            // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
            // `MatMomentDateModule` in your applications root module. We provide it at the component level
            // here, due to limitations of our example generation script.
            {
                provide: DateAdapter,
                useClass: MomentDateAdapter,
                deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
            },
            { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
        ], ngImport: i0, template: "<mat-form-field>\r\n  <mat-label>Different locale</mat-label>\r\n  <input matInput [matDatepicker]=\"dp\">\r\n  <mat-hint>{{getDateFormatString()}}</mat-hint>\r\n  <mat-datepicker-toggle matIconSuffix [for]=\"dp\"></mat-datepicker-toggle>\r\n  <mat-datepicker #dp></mat-datepicker>\r\n</mat-form-field>\r\n<button mat-button (click)=\"french()\">Dynamically switch to French</button>\r\n", styles: ["mat-form-field {\r\n  margin-right: 12px;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "directive", type: i1.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i1.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i2.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: MatDatepickerModule }, { kind: "component", type: i3.MatDatepicker, selector: "mat-datepicker", exportAs: ["matDatepicker"] }, { kind: "directive", type: i3.MatDatepickerInput, selector: "input[matDatepicker]", inputs: ["matDatepicker", "min", "max", "matDatepickerFilter"], exportAs: ["matDatepickerInput"] }, { kind: "component", type: i3.MatDatepickerToggle, selector: "mat-datepicker-toggle", inputs: ["for", "tabIndex", "aria-label", "disabled", "disableRipple"], exportAs: ["matDatepickerToggle"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i4.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: DatepickerLocaleExample, decorators: [{
            type: Component,
            args: [{ selector: 'datepicker-locale-example', providers: [
                        // The locale would typically be provided on the root module of your application. We do it at
                        // the component level here, due to limitations of our example generation script.
                        { provide: MAT_DATE_LOCALE, useValue: 'ja-JP' },
                        // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
                        // `MatMomentDateModule` in your applications root module. We provide it at the component level
                        // here, due to limitations of our example generation script.
                        {
                            provide: DateAdapter,
                            useClass: MomentDateAdapter,
                            deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
                        },
                        { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
                    ], standalone: true, imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule, MatButtonModule], template: "<mat-form-field>\r\n  <mat-label>Different locale</mat-label>\r\n  <input matInput [matDatepicker]=\"dp\">\r\n  <mat-hint>{{getDateFormatString()}}</mat-hint>\r\n  <mat-datepicker-toggle matIconSuffix [for]=\"dp\"></mat-datepicker-toggle>\r\n  <mat-datepicker #dp></mat-datepicker>\r\n</mat-form-field>\r\n<button mat-button (click)=\"french()\">Dynamically switch to French</button>\r\n", styles: ["mat-form-field {\r\n  margin-right: 12px;\r\n}\r\n"] }]
        }], ctorParameters: () => [{ type: i1$1.DateAdapter }, { type: i3.MatDatepickerIntl }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [MAT_DATE_LOCALE]
                }] }] });

/** @title Datepicker with min & max validation */
class DatepickerMinMaxExample {
    constructor() {
        // Set the minimum to January 1st 20 years in the past and December 31st a year in the future.
        const currentYear = new Date().getFullYear();
        this.minDate = new Date(currentYear - 20, 0, 1);
        this.maxDate = new Date(currentYear + 1, 11, 31);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: DatepickerMinMaxExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: DatepickerMinMaxExample, isStandalone: true, selector: "datepicker-min-max-example", ngImport: i0, template: "<mat-form-field class=\"example-full-width\">\r\n  <mat-label>Choose a date</mat-label>\r\n  <input matInput [min]=\"minDate\" [max]=\"maxDate\" [matDatepicker]=\"picker\">\r\n  <mat-hint>MM/DD/YYYY</mat-hint>\r\n  <mat-datepicker-toggle matIconSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n  <mat-datepicker #picker></mat-datepicker>\r\n</mat-form-field>\r\n", dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "directive", type: i1.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i1.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i2.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: MatDatepickerModule }, { kind: "component", type: i3.MatDatepicker, selector: "mat-datepicker", exportAs: ["matDatepicker"] }, { kind: "directive", type: i3.MatDatepickerInput, selector: "input[matDatepicker]", inputs: ["matDatepicker", "min", "max", "matDatepickerFilter"], exportAs: ["matDatepickerInput"] }, { kind: "component", type: i3.MatDatepickerToggle, selector: "mat-datepicker-toggle", inputs: ["for", "tabIndex", "aria-label", "disabled", "disableRipple"], exportAs: ["matDatepickerToggle"] }, { kind: "ngmodule", type: MatNativeDateModule }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: DatepickerMinMaxExample, decorators: [{
            type: Component,
            args: [{ selector: 'datepicker-min-max-example', standalone: true, imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule], template: "<mat-form-field class=\"example-full-width\">\r\n  <mat-label>Choose a date</mat-label>\r\n  <input matInput [min]=\"minDate\" [max]=\"maxDate\" [matDatepicker]=\"picker\">\r\n  <mat-hint>MM/DD/YYYY</mat-hint>\r\n  <mat-datepicker-toggle matIconSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n  <mat-datepicker #picker></mat-datepicker>\r\n</mat-form-field>\r\n" }]
        }], ctorParameters: () => [] });

const moment$1 = _rollupMoment__default || _rollupMoment;
/** @title Datepicker that uses Moment.js dates */
class DatepickerMomentExample {
    constructor() {
        // Datepicker takes `Moment` objects instead of `Date` objects.
        this.date = new FormControl(moment$1([2017, 0, 1]));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: DatepickerMomentExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: DatepickerMomentExample, isStandalone: true, selector: "datepicker-moment-example", providers: [
            // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
            // `MatMomentDateModule` in your applications root module. We provide it at the component level
            // here, due to limitations of our example generation script.
            { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
            { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
        ], ngImport: i0, template: "<mat-form-field>\r\n  <mat-label>Moment.js datepicker</mat-label>\r\n  <input matInput [matDatepicker]=\"dp\" [formControl]=\"date\">\r\n  <mat-hint>MM/DD/YYYY</mat-hint>\r\n  <mat-datepicker-toggle matIconSuffix [for]=\"dp\"></mat-datepicker-toggle>\r\n  <mat-datepicker #dp></mat-datepicker>\r\n</mat-form-field>\r\n", dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "directive", type: i1.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i1.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i2.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: MatDatepickerModule }, { kind: "component", type: i3.MatDatepicker, selector: "mat-datepicker", exportAs: ["matDatepicker"] }, { kind: "directive", type: i3.MatDatepickerInput, selector: "input[matDatepicker]", inputs: ["matDatepicker", "min", "max", "matDatepickerFilter"], exportAs: ["matDatepickerInput"] }, { kind: "component", type: i3.MatDatepickerToggle, selector: "mat-datepicker-toggle", inputs: ["for", "tabIndex", "aria-label", "disabled", "disableRipple"], exportAs: ["matDatepickerToggle"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i3$1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i3$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i3$1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: DatepickerMomentExample, decorators: [{
            type: Component,
            args: [{ selector: 'datepicker-moment-example', providers: [
                        // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
                        // `MatMomentDateModule` in your applications root module. We provide it at the component level
                        // here, due to limitations of our example generation script.
                        { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
                        { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
                    ], standalone: true, imports: [
                        MatFormFieldModule,
                        MatInputModule,
                        MatDatepickerModule,
                        FormsModule,
                        ReactiveFormsModule,
                    ], template: "<mat-form-field>\r\n  <mat-label>Moment.js datepicker</mat-label>\r\n  <input matInput [matDatepicker]=\"dp\" [formControl]=\"date\">\r\n  <mat-hint>MM/DD/YYYY</mat-hint>\r\n  <mat-datepicker-toggle matIconSuffix [for]=\"dp\"></mat-datepicker-toggle>\r\n  <mat-datepicker #dp></mat-datepicker>\r\n</mat-form-field>\r\n" }]
        }] });

/** @title Basic datepicker */
class DatepickerOverviewExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: DatepickerOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: DatepickerOverviewExample, isStandalone: true, selector: "datepicker-overview-example", ngImport: i0, template: "<mat-form-field>\r\n  <mat-label>Choose a date</mat-label>\r\n<!-- #docregion toggle -->\r\n  <input matInput [matDatepicker]=\"picker\">\r\n  <mat-hint>MM/DD/YYYY</mat-hint>\r\n  <mat-datepicker-toggle matIconSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n  <mat-datepicker #picker></mat-datepicker>\r\n<!-- #enddocregion toggle -->\r\n</mat-form-field>\r\n", dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "directive", type: i1.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i1.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i2.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: MatDatepickerModule }, { kind: "component", type: i3.MatDatepicker, selector: "mat-datepicker", exportAs: ["matDatepicker"] }, { kind: "directive", type: i3.MatDatepickerInput, selector: "input[matDatepicker]", inputs: ["matDatepicker", "min", "max", "matDatepickerFilter"], exportAs: ["matDatepickerInput"] }, { kind: "component", type: i3.MatDatepickerToggle, selector: "mat-datepicker-toggle", inputs: ["for", "tabIndex", "aria-label", "disabled", "disableRipple"], exportAs: ["matDatepickerToggle"] }, { kind: "ngmodule", type: MatNativeDateModule }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: DatepickerOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'datepicker-overview-example', standalone: true, imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule], template: "<mat-form-field>\r\n  <mat-label>Choose a date</mat-label>\r\n<!-- #docregion toggle -->\r\n  <input matInput [matDatepicker]=\"picker\">\r\n  <mat-hint>MM/DD/YYYY</mat-hint>\r\n  <mat-datepicker-toggle matIconSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n  <mat-datepicker #picker></mat-datepicker>\r\n<!-- #enddocregion toggle -->\r\n</mat-form-field>\r\n" }]
        }] });

/** @title Datepicker start date */
class DatepickerStartViewExample {
    constructor() {
        this.startDate = new Date(1990, 0, 1);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: DatepickerStartViewExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: DatepickerStartViewExample, isStandalone: true, selector: "datepicker-start-view-example", ngImport: i0, template: "<mat-form-field>\r\n  <mat-label>Choose a date</mat-label>\r\n  <input matInput [matDatepicker]=\"picker\">\r\n  <mat-hint>MM/DD/YYYY</mat-hint>\r\n  <mat-datepicker-toggle matIconSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n  <mat-datepicker #picker startView=\"year\" [startAt]=\"startDate\"></mat-datepicker>\r\n</mat-form-field>\r\n", dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "directive", type: i1.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i1.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i2.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: MatDatepickerModule }, { kind: "component", type: i3.MatDatepicker, selector: "mat-datepicker", exportAs: ["matDatepicker"] }, { kind: "directive", type: i3.MatDatepickerInput, selector: "input[matDatepicker]", inputs: ["matDatepicker", "min", "max", "matDatepickerFilter"], exportAs: ["matDatepickerInput"] }, { kind: "component", type: i3.MatDatepickerToggle, selector: "mat-datepicker-toggle", inputs: ["for", "tabIndex", "aria-label", "disabled", "disableRipple"], exportAs: ["matDatepickerToggle"] }, { kind: "ngmodule", type: MatNativeDateModule }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: DatepickerStartViewExample, decorators: [{
            type: Component,
            args: [{ selector: 'datepicker-start-view-example', standalone: true, imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule], template: "<mat-form-field>\r\n  <mat-label>Choose a date</mat-label>\r\n  <input matInput [matDatepicker]=\"picker\">\r\n  <mat-hint>MM/DD/YYYY</mat-hint>\r\n  <mat-datepicker-toggle matIconSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n  <mat-datepicker #picker startView=\"year\" [startAt]=\"startDate\"></mat-datepicker>\r\n</mat-form-field>\r\n" }]
        }] });

/** @title Datepicker touch UI */
class DatepickerTouchExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: DatepickerTouchExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: DatepickerTouchExample, isStandalone: true, selector: "datepicker-touch-example", ngImport: i0, template: "<mat-form-field class=\"example-full-width\">\r\n  <mat-label>Choose a date</mat-label>\r\n  <input matInput [matDatepicker]=\"picker\">\r\n  <mat-hint>MM/DD/YYYY</mat-hint>\r\n  <mat-datepicker-toggle matIconSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n  <mat-datepicker touchUi #picker></mat-datepicker>\r\n</mat-form-field>\r\n", dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "directive", type: i1.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i1.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i2.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: MatDatepickerModule }, { kind: "component", type: i3.MatDatepicker, selector: "mat-datepicker", exportAs: ["matDatepicker"] }, { kind: "directive", type: i3.MatDatepickerInput, selector: "input[matDatepicker]", inputs: ["matDatepicker", "min", "max", "matDatepickerFilter"], exportAs: ["matDatepickerInput"] }, { kind: "component", type: i3.MatDatepickerToggle, selector: "mat-datepicker-toggle", inputs: ["for", "tabIndex", "aria-label", "disabled", "disableRipple"], exportAs: ["matDatepickerToggle"] }, { kind: "ngmodule", type: MatNativeDateModule }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: DatepickerTouchExample, decorators: [{
            type: Component,
            args: [{ selector: 'datepicker-touch-example', standalone: true, imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule], template: "<mat-form-field class=\"example-full-width\">\r\n  <mat-label>Choose a date</mat-label>\r\n  <input matInput [matDatepicker]=\"picker\">\r\n  <mat-hint>MM/DD/YYYY</mat-hint>\r\n  <mat-datepicker-toggle matIconSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n  <mat-datepicker touchUi #picker></mat-datepicker>\r\n</mat-form-field>\r\n" }]
        }] });

/** @title Datepicker selected value */
class DatepickerValueExample {
    constructor() {
        this.date = new FormControl(new Date());
        this.serializedDate = new FormControl(new Date().toISOString());
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: DatepickerValueExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: DatepickerValueExample, isStandalone: true, selector: "datepicker-value-example", ngImport: i0, template: "<mat-form-field>\r\n  <mat-label>Angular forms</mat-label>\r\n  <input matInput [matDatepicker]=\"picker1\" [formControl]=\"date\">\r\n  <mat-hint>MM/DD/YYYY</mat-hint>\r\n  <mat-datepicker-toggle matIconSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n  <mat-datepicker #picker1></mat-datepicker>\r\n</mat-form-field>\r\n\r\n<mat-form-field>\r\n  <mat-label>Angular forms (w/ deserialization)</mat-label>\r\n  <input matInput [matDatepicker]=\"picker2\"\r\n         [formControl]=\"serializedDate\">\r\n  <mat-hint>MM/DD/YYYY</mat-hint>\r\n  <mat-datepicker-toggle matIconSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n  <mat-datepicker #picker2></mat-datepicker>\r\n</mat-form-field>\r\n\r\n<mat-form-field>\r\n  <mat-label>Value binding</mat-label>\r\n  <input matInput [matDatepicker]=\"picker3\" [value]=\"date.value\">\r\n  <mat-hint>MM/DD/YYYY</mat-hint>\r\n  <mat-datepicker-toggle matIconSuffix [for]=\"picker3\"></mat-datepicker-toggle>\r\n  <mat-datepicker #picker3></mat-datepicker>\r\n</mat-form-field>\r\n", styles: ["mat-form-field {\r\n  margin-right: 12px;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "directive", type: i1.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i1.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i2.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: MatDatepickerModule }, { kind: "component", type: i3.MatDatepicker, selector: "mat-datepicker", exportAs: ["matDatepicker"] }, { kind: "directive", type: i3.MatDatepickerInput, selector: "input[matDatepicker]", inputs: ["matDatepicker", "min", "max", "matDatepickerFilter"], exportAs: ["matDatepickerInput"] }, { kind: "component", type: i3.MatDatepickerToggle, selector: "mat-datepicker-toggle", inputs: ["for", "tabIndex", "aria-label", "disabled", "disableRipple"], exportAs: ["matDatepickerToggle"] }, { kind: "ngmodule", type: MatNativeDateModule }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i3$1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i3$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i3$1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: DatepickerValueExample, decorators: [{
            type: Component,
            args: [{ selector: 'datepicker-value-example', standalone: true, imports: [
                        MatFormFieldModule,
                        MatInputModule,
                        MatDatepickerModule,
                        MatNativeDateModule,
                        FormsModule,
                        ReactiveFormsModule,
                    ], template: "<mat-form-field>\r\n  <mat-label>Angular forms</mat-label>\r\n  <input matInput [matDatepicker]=\"picker1\" [formControl]=\"date\">\r\n  <mat-hint>MM/DD/YYYY</mat-hint>\r\n  <mat-datepicker-toggle matIconSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n  <mat-datepicker #picker1></mat-datepicker>\r\n</mat-form-field>\r\n\r\n<mat-form-field>\r\n  <mat-label>Angular forms (w/ deserialization)</mat-label>\r\n  <input matInput [matDatepicker]=\"picker2\"\r\n         [formControl]=\"serializedDate\">\r\n  <mat-hint>MM/DD/YYYY</mat-hint>\r\n  <mat-datepicker-toggle matIconSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n  <mat-datepicker #picker2></mat-datepicker>\r\n</mat-form-field>\r\n\r\n<mat-form-field>\r\n  <mat-label>Value binding</mat-label>\r\n  <input matInput [matDatepicker]=\"picker3\" [value]=\"date.value\">\r\n  <mat-hint>MM/DD/YYYY</mat-hint>\r\n  <mat-datepicker-toggle matIconSuffix [for]=\"picker3\"></mat-datepicker-toggle>\r\n  <mat-datepicker #picker3></mat-datepicker>\r\n</mat-form-field>\r\n", styles: ["mat-form-field {\r\n  margin-right: 12px;\r\n}\r\n"] }]
        }] });

const moment = _rollupMoment__default || _rollupMoment;
// See the Moment.js docs for the meaning of these formats:
// https://momentjs.com/docs/#/displaying/format/
const MY_FORMATS = {
    parse: {
        dateInput: 'MM/YYYY',
    },
    display: {
        dateInput: 'MM/YYYY',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY',
    },
};
/** @title Datepicker emulating a Year and month picker */
class DatepickerViewsSelectionExample {
    constructor() {
        this.date = new FormControl(moment());
    }
    setMonthAndYear(normalizedMonthAndYear, datepicker) {
        const ctrlValue = this.date.value;
        ctrlValue.month(normalizedMonthAndYear.month());
        ctrlValue.year(normalizedMonthAndYear.year());
        this.date.setValue(ctrlValue);
        datepicker.close();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: DatepickerViewsSelectionExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: DatepickerViewsSelectionExample, isStandalone: true, selector: "datepicker-views-selection-example", providers: [
            // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
            // application's root module. We provide it at the component level here, due to limitations of
            // our example generation script.
            {
                provide: DateAdapter,
                useClass: MomentDateAdapter,
                deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
            },
            { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
        ], ngImport: i0, template: "<mat-form-field>\r\n  <mat-label>Month and Year</mat-label>\r\n  <input matInput [matDatepicker]=\"dp\" [formControl]=\"date\">\r\n  <mat-hint>MM/YYYY</mat-hint>\r\n  <mat-datepicker-toggle matIconSuffix [for]=\"dp\"></mat-datepicker-toggle>\r\n  <mat-datepicker #dp\r\n                  startView=\"multi-year\"\r\n                  (monthSelected)=\"setMonthAndYear($event, dp)\"\r\n                  panelClass=\"example-month-picker\">\r\n  </mat-datepicker>\r\n</mat-form-field>\r\n", styles: [".example-month-picker .mat-calendar-period-button {\r\n  pointer-events: none;\r\n}\r\n\r\n.example-month-picker .mat-calendar-arrow {\r\n  display: none;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "directive", type: i1.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i1.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i2.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: MatDatepickerModule }, { kind: "component", type: i3.MatDatepicker, selector: "mat-datepicker", exportAs: ["matDatepicker"] }, { kind: "directive", type: i3.MatDatepickerInput, selector: "input[matDatepicker]", inputs: ["matDatepicker", "min", "max", "matDatepickerFilter"], exportAs: ["matDatepickerInput"] }, { kind: "component", type: i3.MatDatepickerToggle, selector: "mat-datepicker-toggle", inputs: ["for", "tabIndex", "aria-label", "disabled", "disableRipple"], exportAs: ["matDatepickerToggle"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i3$1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i3$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i3$1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: DatepickerViewsSelectionExample, decorators: [{
            type: Component,
            args: [{ selector: 'datepicker-views-selection-example', providers: [
                        // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                        // application's root module. We provide it at the component level here, due to limitations of
                        // our example generation script.
                        {
                            provide: DateAdapter,
                            useClass: MomentDateAdapter,
                            deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
                        },
                        { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
                    ], encapsulation: ViewEncapsulation.None, standalone: true, imports: [
                        MatFormFieldModule,
                        MatInputModule,
                        MatDatepickerModule,
                        FormsModule,
                        ReactiveFormsModule,
                    ], template: "<mat-form-field>\r\n  <mat-label>Month and Year</mat-label>\r\n  <input matInput [matDatepicker]=\"dp\" [formControl]=\"date\">\r\n  <mat-hint>MM/YYYY</mat-hint>\r\n  <mat-datepicker-toggle matIconSuffix [for]=\"dp\"></mat-datepicker-toggle>\r\n  <mat-datepicker #dp\r\n                  startView=\"multi-year\"\r\n                  (monthSelected)=\"setMonthAndYear($event, dp)\"\r\n                  panelClass=\"example-month-picker\">\r\n  </mat-datepicker>\r\n</mat-form-field>\r\n", styles: [".example-month-picker .mat-calendar-period-button {\r\n  pointer-events: none;\r\n}\r\n\r\n.example-month-picker .mat-calendar-arrow {\r\n  display: none;\r\n}\r\n"] }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { DateRangePickerComparisonExample, DateRangePickerFormsExample, DateRangePickerOverviewExample, DateRangePickerSelectionStrategyExample, DatepickerActionsExample, DatepickerApiExample, DatepickerColorExample, DatepickerCustomHeaderExample, DatepickerCustomIconExample, DatepickerDateClassExample, DatepickerDisabledExample, DatepickerEventsExample, DatepickerFilterExample, DatepickerFormatsExample, DatepickerHarnessExample, DatepickerInlineCalendarExample, DatepickerLocaleExample, DatepickerMinMaxExample, DatepickerMomentExample, DatepickerOverviewExample, DatepickerStartViewExample, DatepickerTouchExample, DatepickerValueExample, DatepickerViewsSelectionExample, ExampleHeader };
//# sourceMappingURL=datepicker.mjs.map