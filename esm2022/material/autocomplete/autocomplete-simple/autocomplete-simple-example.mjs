import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/input";
import * as i4 from "@angular/material/autocomplete";
import * as i5 from "@angular/material/core";
/**
 * @title Simple autocomplete
 */
export class AutocompleteSimpleExample {
    constructor() {
        this.myControl = new FormControl('');
        this.options = ['One', 'Two', 'Three'];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: AutocompleteSimpleExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.4", type: AutocompleteSimpleExample, isStandalone: true, selector: "autocomplete-simple-example", ngImport: i0, template: "<form class=\"example-form\">\r\n  <mat-form-field class=\"example-full-width\">\r\n    <mat-label>Number</mat-label>\r\n<!-- #docregion input -->\r\n    <input type=\"text\"\r\n           placeholder=\"Pick one\"\r\n           aria-label=\"Number\"\r\n           matInput\r\n           [formControl]=\"myControl\"\r\n           [matAutocomplete]=\"auto\">\r\n<!-- #enddocregion input -->\r\n<!-- #docregion mat-autocomplete -->\r\n    <mat-autocomplete #auto=\"matAutocomplete\">\r\n      @for (option of options; track option) {\r\n        <mat-option [value]=\"option\">{{option}}</mat-option>\r\n      }\r\n    </mat-autocomplete>\r\n<!-- #enddocregion mat-autocomplete -->\r\n  </mat-form-field>\r\n</form>\r\n", styles: [".example-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n\r\n.example-full-width {\r\n  width: 100%;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1.NgForm, selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]", inputs: ["ngFormOptions"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i2.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i2.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i3.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: MatAutocompleteModule }, { kind: "component", type: i4.MatAutocomplete, selector: "mat-autocomplete", inputs: ["aria-label", "aria-labelledby", "displayWith", "autoActiveFirstOption", "autoSelectActiveOption", "requireSelection", "panelWidth", "disableRipple", "class", "hideSingleSelectionIndicator"], outputs: ["optionSelected", "opened", "closed", "optionActivated"], exportAs: ["matAutocomplete"] }, { kind: "component", type: i5.MatOption, selector: "mat-option", inputs: ["value", "id", "disabled"], outputs: ["onSelectionChange"], exportAs: ["matOption"] }, { kind: "directive", type: i4.MatAutocompleteTrigger, selector: "input[matAutocomplete], textarea[matAutocomplete]", inputs: ["matAutocomplete", "matAutocompletePosition", "matAutocompleteConnectedTo", "autocomplete", "matAutocompleteDisabled"], exportAs: ["matAutocompleteTrigger"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: AutocompleteSimpleExample, decorators: [{
            type: Component,
            args: [{ selector: 'autocomplete-simple-example', standalone: true, imports: [
                        FormsModule,
                        MatFormFieldModule,
                        MatInputModule,
                        MatAutocompleteModule,
                        ReactiveFormsModule,
                    ], template: "<form class=\"example-form\">\r\n  <mat-form-field class=\"example-full-width\">\r\n    <mat-label>Number</mat-label>\r\n<!-- #docregion input -->\r\n    <input type=\"text\"\r\n           placeholder=\"Pick one\"\r\n           aria-label=\"Number\"\r\n           matInput\r\n           [formControl]=\"myControl\"\r\n           [matAutocomplete]=\"auto\">\r\n<!-- #enddocregion input -->\r\n<!-- #docregion mat-autocomplete -->\r\n    <mat-autocomplete #auto=\"matAutocomplete\">\r\n      @for (option of options; track option) {\r\n        <mat-option [value]=\"option\">{{option}}</mat-option>\r\n      }\r\n    </mat-autocomplete>\r\n<!-- #enddocregion mat-autocomplete -->\r\n  </mat-form-field>\r\n</form>\r\n", styles: [".example-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n\r\n.example-full-width {\r\n  width: 100%;\r\n}\r\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLXNpbXBsZS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZS1zaW1wbGUvYXV0b2NvbXBsZXRlLXNpbXBsZS1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZS1zaW1wbGUvYXV0b2NvbXBsZXRlLXNpbXBsZS1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsV0FBVyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzdFLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLGdDQUFnQyxDQUFDO0FBQ3JFLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQzs7Ozs7OztBQUVoRTs7R0FFRztBQWNILE1BQU0sT0FBTyx5QkFBeUI7SUFidEM7UUFjRSxjQUFTLEdBQUcsSUFBSSxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDaEMsWUFBTyxHQUFhLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztLQUM3Qzs4R0FIWSx5QkFBeUI7a0dBQXpCLHlCQUF5Qix1RkN0QnRDLDZzQkFvQkEscU1ETEksV0FBVywrMEJBQ1gsa0JBQWtCLDBTQUNsQixjQUFjLDBXQUNkLHFCQUFxQix3MUJBQ3JCLG1CQUFtQjs7MkZBR1YseUJBQXlCO2tCQWJyQyxTQUFTOytCQUNFLDZCQUE2QixjQUczQixJQUFJLFdBQ1A7d0JBQ1AsV0FBVzt3QkFDWCxrQkFBa0I7d0JBQ2xCLGNBQWM7d0JBQ2QscUJBQXFCO3dCQUNyQixtQkFBbUI7cUJBQ3BCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0Zvcm1Db250cm9sLCBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQge01hdEF1dG9jb21wbGV0ZU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYXV0b2NvbXBsZXRlJztcclxuaW1wb3J0IHtNYXRJbnB1dE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xyXG5pbXBvcnQge01hdEZvcm1GaWVsZE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XHJcblxyXG4vKipcclxuICogQHRpdGxlIFNpbXBsZSBhdXRvY29tcGxldGVcclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXV0b2NvbXBsZXRlLXNpbXBsZS1leGFtcGxlJyxcclxuICB0ZW1wbGF0ZVVybDogJ2F1dG9jb21wbGV0ZS1zaW1wbGUtZXhhbXBsZS5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnYXV0b2NvbXBsZXRlLXNpbXBsZS1leGFtcGxlLmNzcyddLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgaW1wb3J0czogW1xyXG4gICAgRm9ybXNNb2R1bGUsXHJcbiAgICBNYXRGb3JtRmllbGRNb2R1bGUsXHJcbiAgICBNYXRJbnB1dE1vZHVsZSxcclxuICAgIE1hdEF1dG9jb21wbGV0ZU1vZHVsZSxcclxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEF1dG9jb21wbGV0ZVNpbXBsZUV4YW1wbGUge1xyXG4gIG15Q29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgnJyk7XHJcbiAgb3B0aW9uczogc3RyaW5nW10gPSBbJ09uZScsICdUd28nLCAnVGhyZWUnXTtcclxufVxyXG4iLCI8Zm9ybSBjbGFzcz1cImV4YW1wbGUtZm9ybVwiPlxyXG4gIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImV4YW1wbGUtZnVsbC13aWR0aFwiPlxyXG4gICAgPG1hdC1sYWJlbD5OdW1iZXI8L21hdC1sYWJlbD5cclxuPCEtLSAjZG9jcmVnaW9uIGlucHV0IC0tPlxyXG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBpY2sgb25lXCJcclxuICAgICAgICAgICBhcmlhLWxhYmVsPVwiTnVtYmVyXCJcclxuICAgICAgICAgICBtYXRJbnB1dFxyXG4gICAgICAgICAgIFtmb3JtQ29udHJvbF09XCJteUNvbnRyb2xcIlxyXG4gICAgICAgICAgIFttYXRBdXRvY29tcGxldGVdPVwiYXV0b1wiPlxyXG48IS0tICNlbmRkb2NyZWdpb24gaW5wdXQgLS0+XHJcbjwhLS0gI2RvY3JlZ2lvbiBtYXQtYXV0b2NvbXBsZXRlIC0tPlxyXG4gICAgPG1hdC1hdXRvY29tcGxldGUgI2F1dG89XCJtYXRBdXRvY29tcGxldGVcIj5cclxuICAgICAgQGZvciAob3B0aW9uIG9mIG9wdGlvbnM7IHRyYWNrIG9wdGlvbikge1xyXG4gICAgICAgIDxtYXQtb3B0aW9uIFt2YWx1ZV09XCJvcHRpb25cIj57e29wdGlvbn19PC9tYXQtb3B0aW9uPlxyXG4gICAgICB9XHJcbiAgICA8L21hdC1hdXRvY29tcGxldGU+XHJcbjwhLS0gI2VuZGRvY3JlZ2lvbiBtYXQtYXV0b2NvbXBsZXRlIC0tPlxyXG4gIDwvbWF0LWZvcm0tZmllbGQ+XHJcbjwvZm9ybT5cclxuIl19