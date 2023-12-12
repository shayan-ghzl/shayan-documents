import { Component, Injectable } from '@angular/core';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatStepperIntl, MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/stepper";
import * as i3 from "@angular/material/radio";
import * as i4 from "@angular/material/form-field";
import * as i5 from "@angular/material/input";
import * as i6 from "@angular/material/button";
export class StepperIntl extends MatStepperIntl {
    constructor() {
        super(...arguments);
        // the default optional label text, if unspecified is "Optional"
        this.optionalLabel = 'Optional Label';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: StepperIntl, deps: null, target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: StepperIntl }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: StepperIntl, decorators: [{
            type: Injectable
        }] });
/**
 * @title Stepper that uses the MatStepperIntl service
 */
export class StepperIntlExample {
    constructor(_formBuilder, _matStepperIntl) {
        this._formBuilder = _formBuilder;
        this._matStepperIntl = _matStepperIntl;
        this.optionalLabelTextChoices = ['Option 1', 'Option 2', 'Option 3'];
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', Validators.required],
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', Validators.required],
        });
    }
    updateOptionalLabel() {
        this._matStepperIntl.optionalLabel = this.optionalLabelText;
        // Required for the optional label text to be updated
        // Notifies the MatStepperIntl service that a change has been made
        this._matStepperIntl.changes.next();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: StepperIntlExample, deps: [{ token: i1.FormBuilder }, { token: i2.MatStepperIntl }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.4", type: StepperIntlExample, isStandalone: true, selector: "stepper-intl-example", providers: [{ provide: MatStepperIntl, useClass: StepperIntl }], ngImport: i0, template: "<label for=\"demo-optional-label-group\">Pick the text for the optional label</label>\r\n<mat-radio-group\r\n  id=\"demo-optional-label-group\"\r\n  class=\"demo-radio-group\"\r\n  [(ngModel)]=\"optionalLabelText\"\r\n  (ngModelChange)=\"updateOptionalLabel()\">\r\n  @for (optionalLabelTextChoice of optionalLabelTextChoices; track optionalLabelTextChoice) {\r\n    <mat-radio-button\r\n      class=\"demo-radio-button\"\r\n      [value]=\"optionalLabelTextChoice\">{{optionalLabelTextChoice}}</mat-radio-button>\r\n  }\r\n</mat-radio-group>\r\n<mat-stepper class=\"demo-stepper\" #stepper>\r\n  <mat-step [stepControl]=\"firstFormGroup\">\r\n    <form [formGroup]=\"firstFormGroup\">\r\n      <ng-template matStepLabel>Fill out your name</ng-template>\r\n      <mat-form-field class=\"demo-form-field\">\r\n        <mat-label>Name</mat-label>\r\n        <input\r\n          matInput\r\n          placeholder=\"Last name, First name\"\r\n          formControlName=\"firstCtrl\"\r\n          required\r\n        />\r\n      </mat-form-field>\r\n      <div>\r\n        <button mat-button matStepperNext>Next</button>\r\n      </div>\r\n    </form>\r\n  </mat-step>\r\n  <mat-step\r\n    [stepControl]=\"secondFormGroup\"\r\n    label=\"Fill out your address\"\r\n    optional>\r\n    <form [formGroup]=\"secondFormGroup\">\r\n      <mat-form-field>\r\n        <mat-label>Address</mat-label>\r\n        <input\r\n          matInput\r\n          formControlName=\"secondCtrl\"\r\n          placeholder=\"Ex. 1 Main St, New York, NY\"\r\n        />\r\n      </mat-form-field>\r\n      <div>\r\n        <button mat-button matStepperPrevious>Back</button>\r\n        <button mat-button matStepperNext>Next</button>\r\n      </div>\r\n    </form>\r\n  </mat-step>\r\n  <mat-step>\r\n    <ng-template matStepLabel>Done</ng-template>\r\n    <p>You are now done.</p>\r\n    <div>\r\n      <button mat-button matStepperPrevious>Back</button>\r\n      <button mat-button (click)=\"stepper.reset()\">Reset</button>\r\n    </div>\r\n  </mat-step>\r\n</mat-stepper>\r\n", styles: [".demo-stepper {\r\n  margin-top: 8px;\r\n}\r\n\r\n.demo-form-field {\r\n  margin-top: 16px;\r\n}\r\n\r\n.demo-radio-group {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin: 15px 0;\r\n}\r\n\r\n.demo-radio-button {\r\n  margin: 5px;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: MatRadioModule }, { kind: "directive", type: i3.MatRadioGroup, selector: "mat-radio-group", inputs: ["color", "name", "labelPosition", "value", "selected", "disabled", "required"], outputs: ["change"], exportAs: ["matRadioGroup"] }, { kind: "component", type: i3.MatRadioButton, selector: "mat-radio-button", inputs: ["id", "name", "aria-label", "aria-labelledby", "aria-describedby", "disableRipple", "tabIndex", "checked", "value", "labelPosition", "disabled", "required", "color"], outputs: ["change"], exportAs: ["matRadioButton"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "directive", type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "ngmodule", type: MatStepperModule }, { kind: "component", type: i2.MatStep, selector: "mat-step", inputs: ["color"], exportAs: ["matStep"] }, { kind: "directive", type: i2.MatStepLabel, selector: "[matStepLabel]" }, { kind: "component", type: i2.MatStepper, selector: "mat-stepper, mat-vertical-stepper, mat-horizontal-stepper, [matStepper]", inputs: ["selectedIndex", "disableRipple", "color", "labelPosition", "headerPosition", "animationDuration"], outputs: ["animationDone"], exportAs: ["matStepper", "matVerticalStepper", "matHorizontalStepper"] }, { kind: "directive", type: i2.MatStepperNext, selector: "button[matStepperNext]", inputs: ["type"] }, { kind: "directive", type: i2.MatStepperPrevious, selector: "button[matStepperPrevious]", inputs: ["type"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i4.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i4.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i5.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i6.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: StepperIntlExample, decorators: [{
            type: Component,
            args: [{ selector: 'stepper-intl-example', providers: [{ provide: MatStepperIntl, useClass: StepperIntl }], standalone: true, imports: [
                        MatRadioModule,
                        FormsModule,
                        MatStepperModule,
                        ReactiveFormsModule,
                        MatFormFieldModule,
                        MatInputModule,
                        MatButtonModule,
                    ], template: "<label for=\"demo-optional-label-group\">Pick the text for the optional label</label>\r\n<mat-radio-group\r\n  id=\"demo-optional-label-group\"\r\n  class=\"demo-radio-group\"\r\n  [(ngModel)]=\"optionalLabelText\"\r\n  (ngModelChange)=\"updateOptionalLabel()\">\r\n  @for (optionalLabelTextChoice of optionalLabelTextChoices; track optionalLabelTextChoice) {\r\n    <mat-radio-button\r\n      class=\"demo-radio-button\"\r\n      [value]=\"optionalLabelTextChoice\">{{optionalLabelTextChoice}}</mat-radio-button>\r\n  }\r\n</mat-radio-group>\r\n<mat-stepper class=\"demo-stepper\" #stepper>\r\n  <mat-step [stepControl]=\"firstFormGroup\">\r\n    <form [formGroup]=\"firstFormGroup\">\r\n      <ng-template matStepLabel>Fill out your name</ng-template>\r\n      <mat-form-field class=\"demo-form-field\">\r\n        <mat-label>Name</mat-label>\r\n        <input\r\n          matInput\r\n          placeholder=\"Last name, First name\"\r\n          formControlName=\"firstCtrl\"\r\n          required\r\n        />\r\n      </mat-form-field>\r\n      <div>\r\n        <button mat-button matStepperNext>Next</button>\r\n      </div>\r\n    </form>\r\n  </mat-step>\r\n  <mat-step\r\n    [stepControl]=\"secondFormGroup\"\r\n    label=\"Fill out your address\"\r\n    optional>\r\n    <form [formGroup]=\"secondFormGroup\">\r\n      <mat-form-field>\r\n        <mat-label>Address</mat-label>\r\n        <input\r\n          matInput\r\n          formControlName=\"secondCtrl\"\r\n          placeholder=\"Ex. 1 Main St, New York, NY\"\r\n        />\r\n      </mat-form-field>\r\n      <div>\r\n        <button mat-button matStepperPrevious>Back</button>\r\n        <button mat-button matStepperNext>Next</button>\r\n      </div>\r\n    </form>\r\n  </mat-step>\r\n  <mat-step>\r\n    <ng-template matStepLabel>Done</ng-template>\r\n    <p>You are now done.</p>\r\n    <div>\r\n      <button mat-button matStepperPrevious>Back</button>\r\n      <button mat-button (click)=\"stepper.reset()\">Reset</button>\r\n    </div>\r\n  </mat-step>\r\n</mat-stepper>\r\n", styles: [".demo-stepper {\r\n  margin-top: 8px;\r\n}\r\n\r\n.demo-form-field {\r\n  margin-top: 16px;\r\n}\r\n\r\n.demo-radio-group {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin: 15px 0;\r\n}\r\n\r\n.demo-radio-button {\r\n  margin: 5px;\r\n}\r\n"] }]
        }], ctorParameters: () => [{ type: i1.FormBuilder }, { type: i2.MatStepperIntl }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHBlci1pbnRsLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zdGVwcGVyL3N0ZXBwZXItaW50bC9zdGVwcGVyLWludGwtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3N0ZXBwZXIvc3RlcHBlci1pbnRsL3N0ZXBwZXItaW50bC1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFDLFdBQVcsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDekYsT0FBTyxFQUFDLGNBQWMsRUFBRSxnQkFBZ0IsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQzNFLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFDaEUsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHlCQUF5QixDQUFDOzs7Ozs7OztBQUd2RCxNQUFNLE9BQU8sV0FBWSxTQUFRLGNBQWM7SUFEL0M7O1FBRUUsZ0VBQWdFO1FBQ3ZELGtCQUFhLEdBQUcsZ0JBQWdCLENBQUM7S0FDM0M7OEdBSFksV0FBVztrSEFBWCxXQUFXOzsyRkFBWCxXQUFXO2tCQUR2QixVQUFVOztBQU1YOztHQUVHO0FBaUJILE1BQU0sT0FBTyxrQkFBa0I7SUFVN0IsWUFDVSxZQUF5QixFQUN6QixlQUErQjtRQUQvQixpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUN6QixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUFWekMsNkJBQXdCLEdBQWEsQ0FBQyxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQzFFLG1CQUFjLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7WUFDdkMsU0FBUyxFQUFFLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUM7U0FDckMsQ0FBQyxDQUFDO1FBQ0gsb0JBQWUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQztZQUN4QyxVQUFVLEVBQUUsQ0FBQyxFQUFFLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQztTQUN0QyxDQUFDLENBQUM7SUFLQSxDQUFDO0lBRUosbUJBQW1CO1FBQ2pCLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztRQUM1RCxxREFBcUQ7UUFDckQsa0VBQWtFO1FBQ2xFLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3RDLENBQUM7OEdBcEJVLGtCQUFrQjtrR0FBbEIsa0JBQWtCLG1FQVpsQixDQUFDLEVBQUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFDLENBQUMsMEJDckIvRCx3Z0VBMERBLHNURGxDSSxjQUFjLHNpQkFDZCxXQUFXLGdsQ0FDWCxnQkFBZ0IsdXZCQUNoQixtQkFBbUIsK1VBQ25CLGtCQUFrQiwwU0FDbEIsY0FBYywwV0FDZCxlQUFlOzsyRkFHTixrQkFBa0I7a0JBaEI5QixTQUFTOytCQUNFLHNCQUFzQixhQUdyQixDQUFDLEVBQUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFDLENBQUMsY0FDakQsSUFBSSxXQUNQO3dCQUNQLGNBQWM7d0JBQ2QsV0FBVzt3QkFDWCxnQkFBZ0I7d0JBQ2hCLG1CQUFtQjt3QkFDbkIsa0JBQWtCO3dCQUNsQixjQUFjO3dCQUNkLGVBQWU7cUJBQ2hCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEluamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0Zvcm1CdWlsZGVyLCBWYWxpZGF0b3JzLCBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQge01hdFN0ZXBwZXJJbnRsLCBNYXRTdGVwcGVyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zdGVwcGVyJztcclxuaW1wb3J0IHtNYXRCdXR0b25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XHJcbmltcG9ydCB7TWF0SW5wdXRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcclxuaW1wb3J0IHtNYXRGb3JtRmllbGRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xyXG5pbXBvcnQge01hdFJhZGlvTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9yYWRpbyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBTdGVwcGVySW50bCBleHRlbmRzIE1hdFN0ZXBwZXJJbnRsIHtcclxuICAvLyB0aGUgZGVmYXVsdCBvcHRpb25hbCBsYWJlbCB0ZXh0LCBpZiB1bnNwZWNpZmllZCBpcyBcIk9wdGlvbmFsXCJcclxuICBvdmVycmlkZSBvcHRpb25hbExhYmVsID0gJ09wdGlvbmFsIExhYmVsJztcclxufVxyXG5cclxuLyoqXHJcbiAqIEB0aXRsZSBTdGVwcGVyIHRoYXQgdXNlcyB0aGUgTWF0U3RlcHBlckludGwgc2VydmljZVxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzdGVwcGVyLWludGwtZXhhbXBsZScsXHJcbiAgdGVtcGxhdGVVcmw6ICdzdGVwcGVyLWludGwtZXhhbXBsZS5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnc3RlcHBlci1pbnRsLWV4YW1wbGUuY3NzJ10sXHJcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IE1hdFN0ZXBwZXJJbnRsLCB1c2VDbGFzczogU3RlcHBlckludGx9XSxcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIE1hdFJhZGlvTW9kdWxlLFxyXG4gICAgRm9ybXNNb2R1bGUsXHJcbiAgICBNYXRTdGVwcGVyTW9kdWxlLFxyXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcclxuICAgIE1hdEZvcm1GaWVsZE1vZHVsZSxcclxuICAgIE1hdElucHV0TW9kdWxlLFxyXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdGVwcGVySW50bEV4YW1wbGUge1xyXG4gIG9wdGlvbmFsTGFiZWxUZXh0OiBzdHJpbmc7XHJcbiAgb3B0aW9uYWxMYWJlbFRleHRDaG9pY2VzOiBzdHJpbmdbXSA9IFsnT3B0aW9uIDEnLCAnT3B0aW9uIDInLCAnT3B0aW9uIDMnXTtcclxuICBmaXJzdEZvcm1Hcm91cCA9IHRoaXMuX2Zvcm1CdWlsZGVyLmdyb3VwKHtcclxuICAgIGZpcnN0Q3RybDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICB9KTtcclxuICBzZWNvbmRGb3JtR3JvdXAgPSB0aGlzLl9mb3JtQnVpbGRlci5ncm91cCh7XHJcbiAgICBzZWNvbmRDdHJsOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgX2Zvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcixcclxuICAgIHByaXZhdGUgX21hdFN0ZXBwZXJJbnRsOiBNYXRTdGVwcGVySW50bCxcclxuICApIHt9XHJcblxyXG4gIHVwZGF0ZU9wdGlvbmFsTGFiZWwoKSB7XHJcbiAgICB0aGlzLl9tYXRTdGVwcGVySW50bC5vcHRpb25hbExhYmVsID0gdGhpcy5vcHRpb25hbExhYmVsVGV4dDtcclxuICAgIC8vIFJlcXVpcmVkIGZvciB0aGUgb3B0aW9uYWwgbGFiZWwgdGV4dCB0byBiZSB1cGRhdGVkXHJcbiAgICAvLyBOb3RpZmllcyB0aGUgTWF0U3RlcHBlckludGwgc2VydmljZSB0aGF0IGEgY2hhbmdlIGhhcyBiZWVuIG1hZGVcclxuICAgIHRoaXMuX21hdFN0ZXBwZXJJbnRsLmNoYW5nZXMubmV4dCgpO1xyXG4gIH1cclxufVxyXG4iLCI8bGFiZWwgZm9yPVwiZGVtby1vcHRpb25hbC1sYWJlbC1ncm91cFwiPlBpY2sgdGhlIHRleHQgZm9yIHRoZSBvcHRpb25hbCBsYWJlbDwvbGFiZWw+XHJcbjxtYXQtcmFkaW8tZ3JvdXBcclxuICBpZD1cImRlbW8tb3B0aW9uYWwtbGFiZWwtZ3JvdXBcIlxyXG4gIGNsYXNzPVwiZGVtby1yYWRpby1ncm91cFwiXHJcbiAgWyhuZ01vZGVsKV09XCJvcHRpb25hbExhYmVsVGV4dFwiXHJcbiAgKG5nTW9kZWxDaGFuZ2UpPVwidXBkYXRlT3B0aW9uYWxMYWJlbCgpXCI+XHJcbiAgQGZvciAob3B0aW9uYWxMYWJlbFRleHRDaG9pY2Ugb2Ygb3B0aW9uYWxMYWJlbFRleHRDaG9pY2VzOyB0cmFjayBvcHRpb25hbExhYmVsVGV4dENob2ljZSkge1xyXG4gICAgPG1hdC1yYWRpby1idXR0b25cclxuICAgICAgY2xhc3M9XCJkZW1vLXJhZGlvLWJ1dHRvblwiXHJcbiAgICAgIFt2YWx1ZV09XCJvcHRpb25hbExhYmVsVGV4dENob2ljZVwiPnt7b3B0aW9uYWxMYWJlbFRleHRDaG9pY2V9fTwvbWF0LXJhZGlvLWJ1dHRvbj5cclxuICB9XHJcbjwvbWF0LXJhZGlvLWdyb3VwPlxyXG48bWF0LXN0ZXBwZXIgY2xhc3M9XCJkZW1vLXN0ZXBwZXJcIiAjc3RlcHBlcj5cclxuICA8bWF0LXN0ZXAgW3N0ZXBDb250cm9sXT1cImZpcnN0Rm9ybUdyb3VwXCI+XHJcbiAgICA8Zm9ybSBbZm9ybUdyb3VwXT1cImZpcnN0Rm9ybUdyb3VwXCI+XHJcbiAgICAgIDxuZy10ZW1wbGF0ZSBtYXRTdGVwTGFiZWw+RmlsbCBvdXQgeW91ciBuYW1lPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZGVtby1mb3JtLWZpZWxkXCI+XHJcbiAgICAgICAgPG1hdC1sYWJlbD5OYW1lPC9tYXQtbGFiZWw+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBtYXRJbnB1dFxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJMYXN0IG5hbWUsIEZpcnN0IG5hbWVcIlxyXG4gICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwiZmlyc3RDdHJsXCJcclxuICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gbWF0U3RlcHBlck5leHQ+TmV4dDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZm9ybT5cclxuICA8L21hdC1zdGVwPlxyXG4gIDxtYXQtc3RlcFxyXG4gICAgW3N0ZXBDb250cm9sXT1cInNlY29uZEZvcm1Hcm91cFwiXHJcbiAgICBsYWJlbD1cIkZpbGwgb3V0IHlvdXIgYWRkcmVzc1wiXHJcbiAgICBvcHRpb25hbD5cclxuICAgIDxmb3JtIFtmb3JtR3JvdXBdPVwic2Vjb25kRm9ybUdyb3VwXCI+XHJcbiAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICA8bWF0LWxhYmVsPkFkZHJlc3M8L21hdC1sYWJlbD5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIG1hdElucHV0XHJcbiAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJzZWNvbmRDdHJsXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRXguIDEgTWFpbiBTdCwgTmV3IFlvcmssIE5ZXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBtYXRTdGVwcGVyUHJldmlvdXM+QmFjazwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBtYXRTdGVwcGVyTmV4dD5OZXh0PC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9mb3JtPlxyXG4gIDwvbWF0LXN0ZXA+XHJcbiAgPG1hdC1zdGVwPlxyXG4gICAgPG5nLXRlbXBsYXRlIG1hdFN0ZXBMYWJlbD5Eb25lPC9uZy10ZW1wbGF0ZT5cclxuICAgIDxwPllvdSBhcmUgbm93IGRvbmUuPC9wPlxyXG4gICAgPGRpdj5cclxuICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIG1hdFN0ZXBwZXJQcmV2aW91cz5CYWNrPC9idXR0b24+XHJcbiAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiAoY2xpY2spPVwic3RlcHBlci5yZXNldCgpXCI+UmVzZXQ8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gIDwvbWF0LXN0ZXA+XHJcbjwvbWF0LXN0ZXBwZXI+XHJcbiJdfQ==