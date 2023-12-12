import * as i0 from '@angular/core';
import { Component } from '@angular/core';
import * as i5 from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import * as i4 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';
import * as i1 from '@angular/forms';
import { FormsModule, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import * as i3 from '@angular/material/input';
import { MatInputModule } from '@angular/material/input';
import * as i2 from '@angular/material/form-field';
import { MatFormFieldModule } from '@angular/material/form-field';

/**
 * @title Input with a clear button
 */
class InputClearableExample {
    constructor() {
        this.value = 'Clear me';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: InputClearableExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.4", type: InputClearableExample, isStandalone: true, selector: "input-clearable-example", ngImport: i0, template: "<mat-form-field class=\"example-form-field\">\r\n  <mat-label>Clearable input</mat-label>\r\n  <input matInput type=\"text\" [(ngModel)]=\"value\">\r\n  @if (value) {\r\n    <button matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"value=''\">\r\n      <mat-icon>close</mat-icon>\r\n    </button>\r\n  }\r\n</mat-form-field>\r\n", styles: [".example-form-field {\r\n  width: 200px;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i2.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i2.MatLabel, selector: "mat-label" }, { kind: "directive", type: i2.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i3.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i4.MatIconButton, selector: "button[mat-icon-button]", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i5.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: InputClearableExample, decorators: [{
            type: Component,
            args: [{ selector: 'input-clearable-example', standalone: true, imports: [MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatIconModule], template: "<mat-form-field class=\"example-form-field\">\r\n  <mat-label>Clearable input</mat-label>\r\n  <input matInput type=\"text\" [(ngModel)]=\"value\">\r\n  @if (value) {\r\n    <button matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"value=''\">\r\n      <mat-icon>close</mat-icon>\r\n    </button>\r\n  }\r\n</mat-form-field>\r\n", styles: [".example-form-field {\r\n  width: 200px;\r\n}\r\n"] }]
        }] });

/** Error when invalid control is dirty, touched, or submitted. */
class MyErrorStateMatcher {
    isErrorState(control, form) {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}
/** @title Input with a custom ErrorStateMatcher */
class InputErrorStateMatcherExample {
    constructor() {
        this.emailFormControl = new FormControl('', [Validators.required, Validators.email]);
        this.matcher = new MyErrorStateMatcher();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: InputErrorStateMatcherExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.4", type: InputErrorStateMatcherExample, isStandalone: true, selector: "input-error-state-matcher-example", ngImport: i0, template: "<form class=\"example-form\">\r\n  <mat-form-field class=\"example-full-width\">\r\n    <mat-label>Email</mat-label>\r\n    <input type=\"email\" matInput [formControl]=\"emailFormControl\" [errorStateMatcher]=\"matcher\"\r\n           placeholder=\"Ex. pat@example.com\">\r\n    <mat-hint>Errors appear instantly!</mat-hint>\r\n    @if (emailFormControl.hasError('email') && !emailFormControl.hasError('required')) {\r\n      <mat-error>Please enter a valid email address</mat-error>\r\n    }\r\n    @if (emailFormControl.hasError('required')) {\r\n      <mat-error>Email is <strong>required</strong></mat-error>\r\n    }\r\n  </mat-form-field>\r\n</form>\r\n", styles: [".example-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n\r\n.example-full-width {\r\n  width: 100%;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1.NgForm, selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]", inputs: ["ngFormOptions"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i2.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i2.MatLabel, selector: "mat-label" }, { kind: "directive", type: i2.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i2.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i3.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: InputErrorStateMatcherExample, decorators: [{
            type: Component,
            args: [{ selector: 'input-error-state-matcher-example', standalone: true, imports: [FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule], template: "<form class=\"example-form\">\r\n  <mat-form-field class=\"example-full-width\">\r\n    <mat-label>Email</mat-label>\r\n    <input type=\"email\" matInput [formControl]=\"emailFormControl\" [errorStateMatcher]=\"matcher\"\r\n           placeholder=\"Ex. pat@example.com\">\r\n    <mat-hint>Errors appear instantly!</mat-hint>\r\n    @if (emailFormControl.hasError('email') && !emailFormControl.hasError('required')) {\r\n      <mat-error>Please enter a valid email address</mat-error>\r\n    }\r\n    @if (emailFormControl.hasError('required')) {\r\n      <mat-error>Email is <strong>required</strong></mat-error>\r\n    }\r\n  </mat-form-field>\r\n</form>\r\n", styles: [".example-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n\r\n.example-full-width {\r\n  width: 100%;\r\n}\r\n"] }]
        }] });

/**
 * @title Input with error messages
 */
class InputErrorsExample {
    constructor() {
        this.emailFormControl = new FormControl('', [Validators.required, Validators.email]);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: InputErrorsExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.4", type: InputErrorsExample, isStandalone: true, selector: "input-errors-example", ngImport: i0, template: "<form class=\"example-form\">\r\n  <mat-form-field class=\"example-full-width\">\r\n    <mat-label>Email</mat-label>\r\n    <input type=\"email\" matInput [formControl]=\"emailFormControl\" placeholder=\"Ex. pat@example.com\">\r\n    @if (emailFormControl.hasError('email') && !emailFormControl.hasError('required')) {\r\n      <mat-error>Please enter a valid email address</mat-error>\r\n    }\r\n    @if (emailFormControl.hasError('required')) {\r\n      <mat-error>Email is <strong>required</strong></mat-error>\r\n    }\r\n  </mat-form-field>\r\n</form>\r\n", styles: [".example-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n\r\n.example-full-width {\r\n  width: 100%;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1.NgForm, selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]", inputs: ["ngFormOptions"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i2.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i2.MatLabel, selector: "mat-label" }, { kind: "directive", type: i2.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i3.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: InputErrorsExample, decorators: [{
            type: Component,
            args: [{ selector: 'input-errors-example', standalone: true, imports: [FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule], template: "<form class=\"example-form\">\r\n  <mat-form-field class=\"example-full-width\">\r\n    <mat-label>Email</mat-label>\r\n    <input type=\"email\" matInput [formControl]=\"emailFormControl\" placeholder=\"Ex. pat@example.com\">\r\n    @if (emailFormControl.hasError('email') && !emailFormControl.hasError('required')) {\r\n      <mat-error>Please enter a valid email address</mat-error>\r\n    }\r\n    @if (emailFormControl.hasError('required')) {\r\n      <mat-error>Email is <strong>required</strong></mat-error>\r\n    }\r\n  </mat-form-field>\r\n</form>\r\n", styles: [".example-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n\r\n.example-full-width {\r\n  width: 100%;\r\n}\r\n"] }]
        }] });

/**
 * @title Inputs in a form
 */
class InputFormExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: InputFormExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: InputFormExample, isStandalone: true, selector: "input-form-example", ngImport: i0, template: "<form class=\"example-form\">\r\n  <mat-form-field class=\"example-full-width\">\r\n    <mat-label>Company (disabled)</mat-label>\r\n    <input matInput disabled value=\"Google\">\r\n  </mat-form-field>\r\n\r\n  <table class=\"example-full-width\" cellspacing=\"0\"><tr>\r\n    <td><mat-form-field class=\"example-full-width\">\r\n      <mat-label>First name</mat-label>\r\n      <input matInput>\r\n    </mat-form-field></td>\r\n    <td><mat-form-field class=\"example-full-width\">\r\n      <mat-label>Long Last Name That Will Be Truncated</mat-label>\r\n      <input matInput>\r\n    </mat-form-field></td>\r\n  </tr></table>\r\n\r\n  <p>\r\n    <mat-form-field class=\"example-full-width\">\r\n      <mat-label>Address</mat-label>\r\n      <textarea matInput placeholder=\"Ex. 100 Main St\">1600 Amphitheatre Pkwy</textarea>\r\n    </mat-form-field>\r\n    <mat-form-field class=\"example-full-width\">\r\n      <mat-label>Address 2</mat-label>\r\n      <textarea matInput></textarea>\r\n    </mat-form-field>\r\n  </p>\r\n\r\n  <table class=\"example-full-width\" cellspacing=\"0\"><tr>\r\n    <td><mat-form-field class=\"example-full-width\">\r\n      <mat-label>City</mat-label>\r\n      <input matInput placeholder=\"Ex. San Francisco\">\r\n    </mat-form-field></td>\r\n    <td><mat-form-field class=\"example-full-width\">\r\n      <mat-label>State</mat-label>\r\n      <input matInput placeholder=\"Ex. California\">\r\n    </mat-form-field></td>\r\n    <td><mat-form-field class=\"example-full-width\">\r\n      <mat-label>Postal Code</mat-label>\r\n      <input matInput #postalCode maxlength=\"5\" placeholder=\"Ex. 94105\" value=\"94043\">\r\n      <mat-hint align=\"end\">{{postalCode.value.length}} / 5</mat-hint>\r\n    </mat-form-field></td>\r\n  </tr></table>\r\n</form>\r\n", styles: [".example-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n\r\n.example-full-width {\r\n  width: 100%;\r\n}\r\n\r\ntd {\r\n  padding-right: 8px;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1.NgForm, selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]", inputs: ["ngFormOptions"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i2.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i2.MatLabel, selector: "mat-label" }, { kind: "directive", type: i2.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i3.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: InputFormExample, decorators: [{
            type: Component,
            args: [{ selector: 'input-form-example', standalone: true, imports: [FormsModule, MatFormFieldModule, MatInputModule], template: "<form class=\"example-form\">\r\n  <mat-form-field class=\"example-full-width\">\r\n    <mat-label>Company (disabled)</mat-label>\r\n    <input matInput disabled value=\"Google\">\r\n  </mat-form-field>\r\n\r\n  <table class=\"example-full-width\" cellspacing=\"0\"><tr>\r\n    <td><mat-form-field class=\"example-full-width\">\r\n      <mat-label>First name</mat-label>\r\n      <input matInput>\r\n    </mat-form-field></td>\r\n    <td><mat-form-field class=\"example-full-width\">\r\n      <mat-label>Long Last Name That Will Be Truncated</mat-label>\r\n      <input matInput>\r\n    </mat-form-field></td>\r\n  </tr></table>\r\n\r\n  <p>\r\n    <mat-form-field class=\"example-full-width\">\r\n      <mat-label>Address</mat-label>\r\n      <textarea matInput placeholder=\"Ex. 100 Main St\">1600 Amphitheatre Pkwy</textarea>\r\n    </mat-form-field>\r\n    <mat-form-field class=\"example-full-width\">\r\n      <mat-label>Address 2</mat-label>\r\n      <textarea matInput></textarea>\r\n    </mat-form-field>\r\n  </p>\r\n\r\n  <table class=\"example-full-width\" cellspacing=\"0\"><tr>\r\n    <td><mat-form-field class=\"example-full-width\">\r\n      <mat-label>City</mat-label>\r\n      <input matInput placeholder=\"Ex. San Francisco\">\r\n    </mat-form-field></td>\r\n    <td><mat-form-field class=\"example-full-width\">\r\n      <mat-label>State</mat-label>\r\n      <input matInput placeholder=\"Ex. California\">\r\n    </mat-form-field></td>\r\n    <td><mat-form-field class=\"example-full-width\">\r\n      <mat-label>Postal Code</mat-label>\r\n      <input matInput #postalCode maxlength=\"5\" placeholder=\"Ex. 94105\" value=\"94043\">\r\n      <mat-hint align=\"end\">{{postalCode.value.length}} / 5</mat-hint>\r\n    </mat-form-field></td>\r\n  </tr></table>\r\n</form>\r\n", styles: [".example-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n\r\n.example-full-width {\r\n  width: 100%;\r\n}\r\n\r\ntd {\r\n  padding-right: 8px;\r\n}\r\n"] }]
        }] });

/**
 * @title Input with hints
 */
class InputHintExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: InputHintExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: InputHintExample, isStandalone: true, selector: "input-hint-example", ngImport: i0, template: "<form class=\"example-form\">\r\n  <mat-form-field class=\"example-full-width\">\r\n    <mat-label>Message</mat-label>\r\n    <input matInput #message maxlength=\"256\" placeholder=\"Ex. I need help with...\">\r\n    <mat-hint align=\"start\"><strong>Don't disclose personal info</strong> </mat-hint>\r\n    <mat-hint align=\"end\">{{message.value.length}} / 256</mat-hint>\r\n  </mat-form-field>\r\n</form>\r\n", styles: [".example-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n\r\n.example-full-width {\r\n  width: 100%;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1.NgForm, selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]", inputs: ["ngFormOptions"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i2.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i2.MatLabel, selector: "mat-label" }, { kind: "directive", type: i2.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i3.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: InputHintExample, decorators: [{
            type: Component,
            args: [{ selector: 'input-hint-example', standalone: true, imports: [FormsModule, MatFormFieldModule, MatInputModule], template: "<form class=\"example-form\">\r\n  <mat-form-field class=\"example-full-width\">\r\n    <mat-label>Message</mat-label>\r\n    <input matInput #message maxlength=\"256\" placeholder=\"Ex. I need help with...\">\r\n    <mat-hint align=\"start\"><strong>Don't disclose personal info</strong> </mat-hint>\r\n    <mat-hint align=\"end\">{{message.value.length}} / 256</mat-hint>\r\n  </mat-form-field>\r\n</form>\r\n", styles: [".example-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n\r\n.example-full-width {\r\n  width: 100%;\r\n}\r\n"] }]
        }] });

/**
 * @title Basic Inputs
 */
class InputOverviewExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: InputOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: InputOverviewExample, isStandalone: true, selector: "input-overview-example", ngImport: i0, template: "<form class=\"example-form\">\r\n  <mat-form-field class=\"example-full-width\">\r\n    <mat-label>Favorite food</mat-label>\r\n    <input matInput placeholder=\"Ex. Pizza\" value=\"Sushi\">\r\n  </mat-form-field>\r\n\r\n  <mat-form-field class=\"example-full-width\">\r\n    <mat-label>Leave a comment</mat-label>\r\n    <textarea matInput placeholder=\"Ex. It makes me feel...\"></textarea>\r\n  </mat-form-field>\r\n</form>\r\n", styles: [".example-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n\r\n.example-full-width {\r\n  width: 100%;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1.NgForm, selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]", inputs: ["ngFormOptions"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i2.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i2.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i3.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: InputOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'input-overview-example', standalone: true, imports: [FormsModule, MatFormFieldModule, MatInputModule], template: "<form class=\"example-form\">\r\n  <mat-form-field class=\"example-full-width\">\r\n    <mat-label>Favorite food</mat-label>\r\n    <input matInput placeholder=\"Ex. Pizza\" value=\"Sushi\">\r\n  </mat-form-field>\r\n\r\n  <mat-form-field class=\"example-full-width\">\r\n    <mat-label>Leave a comment</mat-label>\r\n    <textarea matInput placeholder=\"Ex. It makes me feel...\"></textarea>\r\n  </mat-form-field>\r\n</form>\r\n", styles: [".example-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n\r\n.example-full-width {\r\n  width: 100%;\r\n}\r\n"] }]
        }] });

/**
 * @title Inputs with prefixes and suffixes
 */
class InputPrefixSuffixExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: InputPrefixSuffixExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: InputPrefixSuffixExample, isStandalone: true, selector: "input-prefix-suffix-example", ngImport: i0, template: "<form class=\"example-form\">\r\n  <mat-form-field class=\"example-full-width\">\r\n    <mat-label>Telephone</mat-label>\r\n    <span matPrefix>+1 &nbsp;</span>\r\n    <input type=\"tel\" matInput placeholder=\"555-555-1234\">\r\n    <mat-icon matSuffix>mode_edit</mat-icon>\r\n  </mat-form-field>\r\n</form>\r\n", styles: [".example-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n\r\n.example-full-width {\r\n  width: 100%;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1.NgForm, selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]", inputs: ["ngFormOptions"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i2.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i2.MatLabel, selector: "mat-label" }, { kind: "directive", type: i2.MatPrefix, selector: "[matPrefix], [matIconPrefix], [matTextPrefix]", inputs: ["matTextPrefix"] }, { kind: "directive", type: i2.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i3.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i5.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: InputPrefixSuffixExample, decorators: [{
            type: Component,
            args: [{ selector: 'input-prefix-suffix-example', standalone: true, imports: [FormsModule, MatFormFieldModule, MatInputModule, MatIconModule], template: "<form class=\"example-form\">\r\n  <mat-form-field class=\"example-full-width\">\r\n    <mat-label>Telephone</mat-label>\r\n    <span matPrefix>+1 &nbsp;</span>\r\n    <input type=\"tel\" matInput placeholder=\"555-555-1234\">\r\n    <mat-icon matSuffix>mode_edit</mat-icon>\r\n  </mat-form-field>\r\n</form>\r\n", styles: [".example-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n\r\n.example-full-width {\r\n  width: 100%;\r\n}\r\n"] }]
        }] });

/**
 * @title Testing with MatInputHarness
 */
class InputHarnessExample {
    constructor() {
        this.inputType = 'number';
        this.disabled = false;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: InputHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: InputHarnessExample, isStandalone: true, selector: "input-harness-example", ngImport: i0, template: "<mat-form-field>\r\n  <mat-label>Favorite food</mat-label>\r\n  <input matInput value=\"Sushi\" name=\"favorite-food\">\r\n</mat-form-field>\r\n\r\n<mat-form-field>\r\n  <input matInput [type]=\"inputType\"\r\n         [disabled]=\"disabled\">\r\n</mat-form-field>\r\n\r\n<mat-form-field>\r\n  <mat-label>Leave a comment</mat-label>\r\n  <textarea matInput></textarea>\r\n</mat-form-field>\r\n", dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i2.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i2.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i3.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: InputHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'input-harness-example', standalone: true, imports: [MatFormFieldModule, MatInputModule], template: "<mat-form-field>\r\n  <mat-label>Favorite food</mat-label>\r\n  <input matInput value=\"Sushi\" name=\"favorite-food\">\r\n</mat-form-field>\r\n\r\n<mat-form-field>\r\n  <input matInput [type]=\"inputType\"\r\n         [disabled]=\"disabled\">\r\n</mat-form-field>\r\n\r\n<mat-form-field>\r\n  <mat-label>Leave a comment</mat-label>\r\n  <textarea matInput></textarea>\r\n</mat-form-field>\r\n" }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { InputClearableExample, InputErrorStateMatcherExample, InputErrorsExample, InputFormExample, InputHarnessExample, InputHintExample, InputOverviewExample, InputPrefixSuffixExample };
//# sourceMappingURL=input.mjs.map
