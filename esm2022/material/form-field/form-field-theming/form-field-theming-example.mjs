import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/select";
import * as i3 from "@angular/material/core";
import * as i4 from "@angular/forms";
/** @title Form field theming */
export class FormFieldThemingExample {
    constructor() {
        this.colorControl = new FormControl('primary');
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: FormFieldThemingExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: FormFieldThemingExample, isStandalone: true, selector: "form-field-theming-example", ngImport: i0, template: "<mat-form-field [color]=\"colorControl.value!\">\r\n  <mat-label>Color</mat-label>\r\n  <mat-select [formControl]=\"colorControl\">\r\n    <mat-option value=\"primary\">Primary</mat-option>\r\n    <mat-option value=\"accent\">Accent</mat-option>\r\n    <mat-option value=\"warn\">Warn</mat-option>\r\n  </mat-select>\r\n</mat-form-field>\r\n", styles: [".example-container mat-form-field + mat-form-field {\r\n  margin-left: 8px;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatSelectModule }, { kind: "component", type: i2.MatSelect, selector: "mat-select", inputs: ["aria-describedby", "panelClass", "disabled", "disableRipple", "tabIndex", "hideSingleSelectionIndicator", "placeholder", "required", "multiple", "disableOptionCentering", "compareWith", "value", "aria-label", "aria-labelledby", "errorStateMatcher", "typeaheadDebounceInterval", "sortComparator", "id", "panelWidth"], outputs: ["openedChange", "opened", "closed", "selectionChange", "valueChange"], exportAs: ["matSelect"] }, { kind: "component", type: i3.MatOption, selector: "mat-option", inputs: ["value", "id", "disabled"], outputs: ["onSelectionChange"], exportAs: ["matOption"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i4.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: FormFieldThemingExample, decorators: [{
            type: Component,
            args: [{ selector: 'form-field-theming-example', standalone: true, imports: [MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule], template: "<mat-form-field [color]=\"colorControl.value!\">\r\n  <mat-label>Color</mat-label>\r\n  <mat-select [formControl]=\"colorControl\">\r\n    <mat-option value=\"primary\">Primary</mat-option>\r\n    <mat-option value=\"accent\">Accent</mat-option>\r\n    <mat-option value=\"warn\">Warn</mat-option>\r\n  </mat-select>\r\n</mat-form-field>\r\n", styles: [".example-container mat-form-field + mat-form-field {\r\n  margin-left: 8px;\r\n}\r\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC10aGVtaW5nLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9mb3JtLWZpZWxkL2Zvcm0tZmllbGQtdGhlbWluZy9mb3JtLWZpZWxkLXRoZW1pbmctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2Zvcm0tZmllbGQvZm9ybS1maWVsZC10aGVtaW5nL2Zvcm0tZmllbGQtdGhlbWluZy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsV0FBVyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBRTdFLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQzs7Ozs7O0FBRWhFLGdDQUFnQztBQVFoQyxNQUFNLE9BQU8sdUJBQXVCO0lBUHBDO1FBUUUsaUJBQVksR0FBRyxJQUFJLFdBQVcsQ0FBQyxTQUF5QixDQUFDLENBQUM7S0FDM0Q7OEdBRlksdUJBQXVCO2tHQUF2Qix1QkFBdUIsc0ZDZHBDLHVWQVFBLDZJRElZLGtCQUFrQiwwU0FBRSxlQUFlLG1yQkFBRSxXQUFXLHNJQUFFLG1CQUFtQjs7MkZBRXBFLHVCQUF1QjtrQkFQbkMsU0FBUzsrQkFDRSw0QkFBNEIsY0FHMUIsSUFBSSxXQUNQLENBQUMsa0JBQWtCLEVBQUUsZUFBZSxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtGb3JtQ29udHJvbCwgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHtUaGVtZVBhbGV0dGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xyXG5pbXBvcnQge01hdFNlbGVjdE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2VsZWN0JztcclxuaW1wb3J0IHtNYXRGb3JtRmllbGRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xyXG5cclxuLyoqIEB0aXRsZSBGb3JtIGZpZWxkIHRoZW1pbmcgKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdmb3JtLWZpZWxkLXRoZW1pbmctZXhhbXBsZScsXHJcbiAgdGVtcGxhdGVVcmw6ICdmb3JtLWZpZWxkLXRoZW1pbmctZXhhbXBsZS5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnZm9ybS1maWVsZC10aGVtaW5nLWV4YW1wbGUuY3NzJ10sXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBpbXBvcnRzOiBbTWF0Rm9ybUZpZWxkTW9kdWxlLCBNYXRTZWxlY3RNb2R1bGUsIEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEZvcm1GaWVsZFRoZW1pbmdFeGFtcGxlIHtcclxuICBjb2xvckNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woJ3ByaW1hcnknIGFzIFRoZW1lUGFsZXR0ZSk7XHJcbn1cclxuIiwiPG1hdC1mb3JtLWZpZWxkIFtjb2xvcl09XCJjb2xvckNvbnRyb2wudmFsdWUhXCI+XHJcbiAgPG1hdC1sYWJlbD5Db2xvcjwvbWF0LWxhYmVsPlxyXG4gIDxtYXQtc2VsZWN0IFtmb3JtQ29udHJvbF09XCJjb2xvckNvbnRyb2xcIj5cclxuICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwicHJpbWFyeVwiPlByaW1hcnk8L21hdC1vcHRpb24+XHJcbiAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cImFjY2VudFwiPkFjY2VudDwvbWF0LW9wdGlvbj5cclxuICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwid2FyblwiPldhcm48L21hdC1vcHRpb24+XHJcbiAgPC9tYXQtc2VsZWN0PlxyXG48L21hdC1mb3JtLWZpZWxkPlxyXG4iXX0=