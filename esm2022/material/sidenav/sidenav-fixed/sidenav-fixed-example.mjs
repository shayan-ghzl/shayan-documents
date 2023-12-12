import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/toolbar";
import * as i3 from "@angular/material/sidenav";
import * as i4 from "@angular/material/checkbox";
import * as i5 from "@angular/material/form-field";
import * as i6 from "@angular/material/button";
import * as i7 from "@angular/material/input";
/** @title Fixed sidenav */
export class SidenavFixedExample {
    constructor(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.options = this._formBuilder.group({
            bottom: 0,
            fixed: false,
            top: 0,
        });
        this.shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: SidenavFixedExample, deps: [{ token: i1.FormBuilder }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.4", type: SidenavFixedExample, isStandalone: true, selector: "sidenav-fixed-example", ngImport: i0, template: "@if (shouldRun) {\r\n  <mat-toolbar class=\"example-header\">Header</mat-toolbar>\r\n\r\n  <mat-sidenav-container class=\"example-container\">\r\n    <mat-sidenav #sidenav mode=\"side\" opened class=\"example-sidenav\"\r\n                 [fixedInViewport]=\"options.value.fixed\" [fixedTopGap]=\"options.value.top\"\r\n                 [fixedBottomGap]=\"options.value.bottom\">\r\n      {{options.value.fixed ? 'Fixed' : 'Non-fixed'}} Sidenav\r\n    </mat-sidenav>\r\n\r\n    <mat-sidenav-content [formGroup]=\"options\">\r\n      <p><mat-checkbox formControlName=\"fixed\">Fixed</mat-checkbox></p>\r\n      <p><mat-form-field>\r\n        <mat-label>Top gap</mat-label>\r\n        <input matInput type=\"number\" formControlName=\"top\">\r\n      </mat-form-field></p>\r\n      <p><mat-form-field>\r\n        <mat-label>Bottom gap</mat-label>\r\n        <input matInput type=\"number\" formControlName=\"bottom\">\r\n      </mat-form-field></p>\r\n      <p><button mat-button (click)=\"sidenav.toggle()\">Toggle</button></p>\r\n    </mat-sidenav-content>\r\n  </mat-sidenav-container>\r\n\r\n  <mat-toolbar class=\"example-footer\">Footer</mat-toolbar>\r\n} @else {\r\n  <div>Please open on StackBlitz to see result</div>\r\n}\r\n", styles: [".example-container {\r\n  position: absolute;\r\n  top: 60px;\r\n  bottom: 60px;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n\r\n.example-sidenav {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 200px;\r\n  background: rgba(255, 0, 0, 0.5);\r\n}\r\n\r\n.example-header {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n\r\n.example-footer {\r\n  position: fixed;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: MatToolbarModule }, { kind: "component", type: i2.MatToolbar, selector: "mat-toolbar", inputs: ["color"], exportAs: ["matToolbar"] }, { kind: "ngmodule", type: MatSidenavModule }, { kind: "component", type: i3.MatSidenav, selector: "mat-sidenav", inputs: ["fixedInViewport", "fixedTopGap", "fixedBottomGap"], exportAs: ["matSidenav"] }, { kind: "component", type: i3.MatSidenavContainer, selector: "mat-sidenav-container", exportAs: ["matSidenavContainer"] }, { kind: "component", type: i3.MatSidenavContent, selector: "mat-sidenav-content" }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NumberValueAccessor, selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "ngmodule", type: MatCheckboxModule }, { kind: "component", type: i4.MatCheckbox, selector: "mat-checkbox", inputs: ["aria-label", "aria-labelledby", "aria-describedby", "id", "required", "labelPosition", "name", "value", "disableRipple", "tabIndex", "color", "checked", "disabled", "indeterminate"], outputs: ["change", "indeterminateChange"], exportAs: ["matCheckbox"] }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i5.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i5.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i6.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i7.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: SidenavFixedExample, decorators: [{
            type: Component,
            args: [{ selector: 'sidenav-fixed-example', standalone: true, imports: [
                        MatToolbarModule,
                        MatSidenavModule,
                        FormsModule,
                        ReactiveFormsModule,
                        MatCheckboxModule,
                        MatFormFieldModule,
                        MatButtonModule,
                        MatInputModule,
                    ], template: "@if (shouldRun) {\r\n  <mat-toolbar class=\"example-header\">Header</mat-toolbar>\r\n\r\n  <mat-sidenav-container class=\"example-container\">\r\n    <mat-sidenav #sidenav mode=\"side\" opened class=\"example-sidenav\"\r\n                 [fixedInViewport]=\"options.value.fixed\" [fixedTopGap]=\"options.value.top\"\r\n                 [fixedBottomGap]=\"options.value.bottom\">\r\n      {{options.value.fixed ? 'Fixed' : 'Non-fixed'}} Sidenav\r\n    </mat-sidenav>\r\n\r\n    <mat-sidenav-content [formGroup]=\"options\">\r\n      <p><mat-checkbox formControlName=\"fixed\">Fixed</mat-checkbox></p>\r\n      <p><mat-form-field>\r\n        <mat-label>Top gap</mat-label>\r\n        <input matInput type=\"number\" formControlName=\"top\">\r\n      </mat-form-field></p>\r\n      <p><mat-form-field>\r\n        <mat-label>Bottom gap</mat-label>\r\n        <input matInput type=\"number\" formControlName=\"bottom\">\r\n      </mat-form-field></p>\r\n      <p><button mat-button (click)=\"sidenav.toggle()\">Toggle</button></p>\r\n    </mat-sidenav-content>\r\n  </mat-sidenav-container>\r\n\r\n  <mat-toolbar class=\"example-footer\">Footer</mat-toolbar>\r\n} @else {\r\n  <div>Please open on StackBlitz to see result</div>\r\n}\r\n", styles: [".example-container {\r\n  position: absolute;\r\n  top: 60px;\r\n  bottom: 60px;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n\r\n.example-sidenav {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 200px;\r\n  background: rgba(255, 0, 0, 0.5);\r\n}\r\n\r\n.example-header {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n\r\n.example-footer {\r\n  position: fixed;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n"] }]
        }], ctorParameters: () => [{ type: i1.FormBuilder }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZW5hdi1maXhlZC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2lkZW5hdi9zaWRlbmF2LWZpeGVkL3NpZGVuYXYtZml4ZWQtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NpZGVuYXYvc2lkZW5hdi1maXhlZC9zaWRlbmF2LWZpeGVkLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxXQUFXLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0UsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBQ2hFLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBQzdELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQzNELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQzNELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7Ozs7O0FBRXZELDJCQUEyQjtBQWlCM0IsTUFBTSxPQUFPLG1CQUFtQjtJQU85QixZQUFvQixZQUF5QjtRQUF6QixpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQU43QyxZQUFPLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7WUFDaEMsTUFBTSxFQUFFLENBQUM7WUFDVCxLQUFLLEVBQUUsS0FBSztZQUNaLEdBQUcsRUFBRSxDQUFDO1NBQ1AsQ0FBQyxDQUFDO1FBSUgsY0FBUyxHQUFHLDBDQUEwQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRmxDLENBQUM7OEdBUHRDLG1CQUFtQjtrR0FBbkIsbUJBQW1CLGlGQzFCaEMsa3RDQTRCQSxtaEJEWkksZ0JBQWdCLGdKQUNoQixnQkFBZ0IsMFlBQ2hCLFdBQVcsb3RCQUNYLG1CQUFtQiwrVUFDbkIsaUJBQWlCLDZXQUNqQixrQkFBa0IsMFNBQ2xCLGVBQWUsMk5BQ2YsY0FBYzs7MkZBR0wsbUJBQW1CO2tCQWhCL0IsU0FBUzsrQkFDRSx1QkFBdUIsY0FHckIsSUFBSSxXQUNQO3dCQUNQLGdCQUFnQjt3QkFDaEIsZ0JBQWdCO3dCQUNoQixXQUFXO3dCQUNYLG1CQUFtQjt3QkFDbkIsaUJBQWlCO3dCQUNqQixrQkFBa0I7d0JBQ2xCLGVBQWU7d0JBQ2YsY0FBYztxQkFDZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtGb3JtQnVpbGRlciwgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHtNYXRCdXR0b25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XHJcbmltcG9ydCB7TWF0Rm9ybUZpZWxkTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcclxuaW1wb3J0IHtNYXRDaGVja2JveE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2hlY2tib3gnO1xyXG5pbXBvcnQge01hdFNpZGVuYXZNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NpZGVuYXYnO1xyXG5pbXBvcnQge01hdFRvb2xiYXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Rvb2xiYXInO1xyXG5pbXBvcnQge01hdElucHV0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XHJcblxyXG4vKiogQHRpdGxlIEZpeGVkIHNpZGVuYXYgKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzaWRlbmF2LWZpeGVkLWV4YW1wbGUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnc2lkZW5hdi1maXhlZC1leGFtcGxlLmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWydzaWRlbmF2LWZpeGVkLWV4YW1wbGUuY3NzJ10sXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBNYXRUb29sYmFyTW9kdWxlLFxyXG4gICAgTWF0U2lkZW5hdk1vZHVsZSxcclxuICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcclxuICAgIE1hdENoZWNrYm94TW9kdWxlLFxyXG4gICAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxyXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxyXG4gICAgTWF0SW5wdXRNb2R1bGUsXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFNpZGVuYXZGaXhlZEV4YW1wbGUge1xyXG4gIG9wdGlvbnMgPSB0aGlzLl9mb3JtQnVpbGRlci5ncm91cCh7XHJcbiAgICBib3R0b206IDAsXHJcbiAgICBmaXhlZDogZmFsc2UsXHJcbiAgICB0b3A6IDAsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2Zvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcikge31cclxuXHJcbiAgc2hvdWxkUnVuID0gLyhefC4pKHN0YWNrYmxpdHp8d2ViY29udGFpbmVyKS4oaW98Y29tKSQvLnRlc3Qod2luZG93LmxvY2F0aW9uLmhvc3QpO1xyXG59XHJcbiIsIkBpZiAoc2hvdWxkUnVuKSB7XHJcbiAgPG1hdC10b29sYmFyIGNsYXNzPVwiZXhhbXBsZS1oZWFkZXJcIj5IZWFkZXI8L21hdC10b29sYmFyPlxyXG5cclxuICA8bWF0LXNpZGVuYXYtY29udGFpbmVyIGNsYXNzPVwiZXhhbXBsZS1jb250YWluZXJcIj5cclxuICAgIDxtYXQtc2lkZW5hdiAjc2lkZW5hdiBtb2RlPVwic2lkZVwiIG9wZW5lZCBjbGFzcz1cImV4YW1wbGUtc2lkZW5hdlwiXHJcbiAgICAgICAgICAgICAgICAgW2ZpeGVkSW5WaWV3cG9ydF09XCJvcHRpb25zLnZhbHVlLmZpeGVkXCIgW2ZpeGVkVG9wR2FwXT1cIm9wdGlvbnMudmFsdWUudG9wXCJcclxuICAgICAgICAgICAgICAgICBbZml4ZWRCb3R0b21HYXBdPVwib3B0aW9ucy52YWx1ZS5ib3R0b21cIj5cclxuICAgICAge3tvcHRpb25zLnZhbHVlLmZpeGVkID8gJ0ZpeGVkJyA6ICdOb24tZml4ZWQnfX0gU2lkZW5hdlxyXG4gICAgPC9tYXQtc2lkZW5hdj5cclxuXHJcbiAgICA8bWF0LXNpZGVuYXYtY29udGVudCBbZm9ybUdyb3VwXT1cIm9wdGlvbnNcIj5cclxuICAgICAgPHA+PG1hdC1jaGVja2JveCBmb3JtQ29udHJvbE5hbWU9XCJmaXhlZFwiPkZpeGVkPC9tYXQtY2hlY2tib3g+PC9wPlxyXG4gICAgICA8cD48bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPG1hdC1sYWJlbD5Ub3AgZ2FwPC9tYXQtbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IG1hdElucHV0IHR5cGU9XCJudW1iZXJcIiBmb3JtQ29udHJvbE5hbWU9XCJ0b3BcIj5cclxuICAgICAgPC9tYXQtZm9ybS1maWVsZD48L3A+XHJcbiAgICAgIDxwPjxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICA8bWF0LWxhYmVsPkJvdHRvbSBnYXA8L21hdC1sYWJlbD5cclxuICAgICAgICA8aW5wdXQgbWF0SW5wdXQgdHlwZT1cIm51bWJlclwiIGZvcm1Db250cm9sTmFtZT1cImJvdHRvbVwiPlxyXG4gICAgICA8L21hdC1mb3JtLWZpZWxkPjwvcD5cclxuICAgICAgPHA+PGJ1dHRvbiBtYXQtYnV0dG9uIChjbGljayk9XCJzaWRlbmF2LnRvZ2dsZSgpXCI+VG9nZ2xlPC9idXR0b24+PC9wPlxyXG4gICAgPC9tYXQtc2lkZW5hdi1jb250ZW50PlxyXG4gIDwvbWF0LXNpZGVuYXYtY29udGFpbmVyPlxyXG5cclxuICA8bWF0LXRvb2xiYXIgY2xhc3M9XCJleGFtcGxlLWZvb3RlclwiPkZvb3RlcjwvbWF0LXRvb2xiYXI+XHJcbn0gQGVsc2Uge1xyXG4gIDxkaXY+UGxlYXNlIG9wZW4gb24gU3RhY2tCbGl0eiB0byBzZWUgcmVzdWx0PC9kaXY+XHJcbn1cclxuIl19