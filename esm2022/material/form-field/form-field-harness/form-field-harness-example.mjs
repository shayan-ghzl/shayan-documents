import { Component } from '@angular/core';
import { FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/input";
import * as i3 from "@angular/forms";
/**
 * @title Testing with MatFormFieldHarness
 */
export class FormFieldHarnessExample {
    constructor() {
        this.requiredControl = new FormControl('Initial value', [Validators.required]);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: FormFieldHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: FormFieldHarnessExample, isStandalone: true, selector: "form-field-harness-example", ngImport: i0, template: "<mat-form-field id=\"with-errors\">\r\n  <span class=\"custom-control\">Custom control harness</span>\r\n  <input matInput [formControl]=\"requiredControl\">\r\n\r\n  <mat-error>Error</mat-error>\r\n  <mat-hint align=\"start\">Hint</mat-hint>\r\n</mat-form-field>\r\n", dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i1.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i2.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i3.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: FormFieldHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'form-field-harness-example', standalone: true, imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule], template: "<mat-form-field id=\"with-errors\">\r\n  <span class=\"custom-control\">Custom control harness</span>\r\n  <input matInput [formControl]=\"requiredControl\">\r\n\r\n  <mat-error>Error</mat-error>\r\n  <mat-hint align=\"start\">Hint</mat-hint>\r\n</mat-form-field>\r\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC1oYXJuZXNzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9mb3JtLWZpZWxkL2Zvcm0tZmllbGQtaGFybmVzcy9mb3JtLWZpZWxkLWhhcm5lc3MtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2Zvcm0tZmllbGQvZm9ybS1maWVsZC1oYXJuZXNzL2Zvcm0tZmllbGQtaGFybmVzcy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsV0FBVyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RixPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sOEJBQThCLENBQUM7Ozs7O0FBRWhFOztHQUVHO0FBT0gsTUFBTSxPQUFPLHVCQUF1QjtJQU5wQztRQU9FLG9CQUFlLEdBQUcsSUFBSSxXQUFXLENBQUMsZUFBZSxFQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7S0FDM0U7OEdBRlksdUJBQXVCO2tHQUF2Qix1QkFBdUIsc0ZDZHBDLDZRQU9BLDJDREtZLGtCQUFrQiw4WkFBRSxjQUFjLDBXQUFFLFdBQVcsc1pBQUUsbUJBQW1COzsyRkFFbkUsdUJBQXVCO2tCQU5uQyxTQUFTOytCQUNFLDRCQUE0QixjQUUxQixJQUFJLFdBQ1AsQ0FBQyxrQkFBa0IsRUFBRSxjQUFjLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0Zvcm1Db250cm9sLCBWYWxpZGF0b3JzLCBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQge01hdElucHV0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XHJcbmltcG9ydCB7TWF0Rm9ybUZpZWxkTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcclxuXHJcbi8qKlxyXG4gKiBAdGl0bGUgVGVzdGluZyB3aXRoIE1hdEZvcm1GaWVsZEhhcm5lc3NcclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZm9ybS1maWVsZC1oYXJuZXNzLWV4YW1wbGUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnZm9ybS1maWVsZC1oYXJuZXNzLWV4YW1wbGUuaHRtbCcsXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBpbXBvcnRzOiBbTWF0Rm9ybUZpZWxkTW9kdWxlLCBNYXRJbnB1dE1vZHVsZSwgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGVdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRm9ybUZpZWxkSGFybmVzc0V4YW1wbGUge1xyXG4gIHJlcXVpcmVkQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgnSW5pdGlhbCB2YWx1ZScsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXSk7XHJcbn1cclxuIiwiPG1hdC1mb3JtLWZpZWxkIGlkPVwid2l0aC1lcnJvcnNcIj5cclxuICA8c3BhbiBjbGFzcz1cImN1c3RvbS1jb250cm9sXCI+Q3VzdG9tIGNvbnRyb2wgaGFybmVzczwvc3Bhbj5cclxuICA8aW5wdXQgbWF0SW5wdXQgW2Zvcm1Db250cm9sXT1cInJlcXVpcmVkQ29udHJvbFwiPlxyXG5cclxuICA8bWF0LWVycm9yPkVycm9yPC9tYXQtZXJyb3I+XHJcbiAgPG1hdC1oaW50IGFsaWduPVwic3RhcnRcIj5IaW50PC9tYXQtaGludD5cclxuPC9tYXQtZm9ybS1maWVsZD5cclxuIl19