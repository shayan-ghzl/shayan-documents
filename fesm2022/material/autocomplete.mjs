import * as i0 from '@angular/core';
import { Component, ViewChild } from '@angular/core';
import * as i1 from '@angular/forms';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';
import * as i4 from '@angular/material/autocomplete';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import * as i3 from '@angular/material/input';
import { MatInputModule } from '@angular/material/input';
import * as i2 from '@angular/material/form-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as i5 from '@angular/material/core';
import * as i6 from '@angular/material/slide-toggle';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

/**
 * @title Highlight the first autocomplete option
 */
class AutocompleteAutoActiveFirstOptionExample {
    constructor() {
        this.myControl = new FormControl('');
        this.options = ['One', 'Two', 'Three'];
    }
    ngOnInit() {
        this.filteredOptions = this.myControl.valueChanges.pipe(startWith(''), map(value => this._filter(value || '')));
    }
    _filter(value) {
        const filterValue = value.toLowerCase();
        return this.options.filter(option => option.toLowerCase().includes(filterValue));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: AutocompleteAutoActiveFirstOptionExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.4", type: AutocompleteAutoActiveFirstOptionExample, isStandalone: true, selector: "autocomplete-auto-active-first-option-example", ngImport: i0, template: "<form class=\"example-form\">\r\n  <mat-form-field class=\"example-full-width\">\r\n    <mat-label>Number</mat-label>\r\n    <input type=\"text\"\r\n           placeholder=\"Pick one\"\r\n           aria-label=\"Number\"\r\n           matInput\r\n           [formControl]=\"myControl\"\r\n           [matAutocomplete]=\"auto\">\r\n    <mat-autocomplete autoActiveFirstOption #auto=\"matAutocomplete\">\r\n      @for (option of filteredOptions | async; track option) {\r\n        <mat-option [value]=\"option\">{{option}}</mat-option>\r\n      }\r\n    </mat-autocomplete>\r\n  </mat-form-field>\r\n</form>\r\n", styles: [".example-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n\r\n.example-full-width {\r\n  width: 100%;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1.NgForm, selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]", inputs: ["ngFormOptions"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i2.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i2.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i3.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: MatAutocompleteModule }, { kind: "component", type: i4.MatAutocomplete, selector: "mat-autocomplete", inputs: ["aria-label", "aria-labelledby", "displayWith", "autoActiveFirstOption", "autoSelectActiveOption", "requireSelection", "panelWidth", "disableRipple", "class", "hideSingleSelectionIndicator"], outputs: ["optionSelected", "opened", "closed", "optionActivated"], exportAs: ["matAutocomplete"] }, { kind: "component", type: i5.MatOption, selector: "mat-option", inputs: ["value", "id", "disabled"], outputs: ["onSelectionChange"], exportAs: ["matOption"] }, { kind: "directive", type: i4.MatAutocompleteTrigger, selector: "input[matAutocomplete], textarea[matAutocomplete]", inputs: ["matAutocomplete", "matAutocompletePosition", "matAutocompleteConnectedTo", "autocomplete", "matAutocompleteDisabled"], exportAs: ["matAutocompleteTrigger"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "pipe", type: AsyncPipe, name: "async" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: AutocompleteAutoActiveFirstOptionExample, decorators: [{
            type: Component,
            args: [{ selector: 'autocomplete-auto-active-first-option-example', standalone: true, imports: [
                        FormsModule,
                        MatFormFieldModule,
                        MatInputModule,
                        MatAutocompleteModule,
                        ReactiveFormsModule,
                        AsyncPipe,
                    ], template: "<form class=\"example-form\">\r\n  <mat-form-field class=\"example-full-width\">\r\n    <mat-label>Number</mat-label>\r\n    <input type=\"text\"\r\n           placeholder=\"Pick one\"\r\n           aria-label=\"Number\"\r\n           matInput\r\n           [formControl]=\"myControl\"\r\n           [matAutocomplete]=\"auto\">\r\n    <mat-autocomplete autoActiveFirstOption #auto=\"matAutocomplete\">\r\n      @for (option of filteredOptions | async; track option) {\r\n        <mat-option [value]=\"option\">{{option}}</mat-option>\r\n      }\r\n    </mat-autocomplete>\r\n  </mat-form-field>\r\n</form>\r\n", styles: [".example-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n\r\n.example-full-width {\r\n  width: 100%;\r\n}\r\n"] }]
        }] });

/**
 * @title Display value autocomplete
 */
class AutocompleteDisplayExample {
    constructor() {
        this.myControl = new FormControl('');
        this.options = [{ name: 'Mary' }, { name: 'Shelley' }, { name: 'Igor' }];
    }
    ngOnInit() {
        this.filteredOptions = this.myControl.valueChanges.pipe(startWith(''), map(value => {
            const name = typeof value === 'string' ? value : value?.name;
            return name ? this._filter(name) : this.options.slice();
        }));
    }
    displayFn(user) {
        return user && user.name ? user.name : '';
    }
    _filter(name) {
        const filterValue = name.toLowerCase();
        return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: AutocompleteDisplayExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.4", type: AutocompleteDisplayExample, isStandalone: true, selector: "autocomplete-display-example", ngImport: i0, template: "<form class=\"example-form\">\r\n  <mat-form-field class=\"example-full-width\">\r\n    <mat-label>Assignee</mat-label>\r\n    <input type=\"text\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\">\r\n    <mat-autocomplete #auto=\"matAutocomplete\" [displayWith]=\"displayFn\">\r\n      @for (option of filteredOptions | async; track option) {\r\n        <mat-option [value]=\"option\">{{option.name}}</mat-option>\r\n      }\r\n    </mat-autocomplete>\r\n  </mat-form-field>\r\n</form>\r\n", styles: [".example-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n\r\n.example-full-width {\r\n  width: 100%;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1.NgForm, selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]", inputs: ["ngFormOptions"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i2.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i2.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i3.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: MatAutocompleteModule }, { kind: "component", type: i4.MatAutocomplete, selector: "mat-autocomplete", inputs: ["aria-label", "aria-labelledby", "displayWith", "autoActiveFirstOption", "autoSelectActiveOption", "requireSelection", "panelWidth", "disableRipple", "class", "hideSingleSelectionIndicator"], outputs: ["optionSelected", "opened", "closed", "optionActivated"], exportAs: ["matAutocomplete"] }, { kind: "component", type: i5.MatOption, selector: "mat-option", inputs: ["value", "id", "disabled"], outputs: ["onSelectionChange"], exportAs: ["matOption"] }, { kind: "directive", type: i4.MatAutocompleteTrigger, selector: "input[matAutocomplete], textarea[matAutocomplete]", inputs: ["matAutocomplete", "matAutocompletePosition", "matAutocompleteConnectedTo", "autocomplete", "matAutocompleteDisabled"], exportAs: ["matAutocompleteTrigger"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "pipe", type: AsyncPipe, name: "async" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: AutocompleteDisplayExample, decorators: [{
            type: Component,
            args: [{ selector: 'autocomplete-display-example', standalone: true, imports: [
                        FormsModule,
                        MatFormFieldModule,
                        MatInputModule,
                        MatAutocompleteModule,
                        ReactiveFormsModule,
                        AsyncPipe,
                    ], template: "<form class=\"example-form\">\r\n  <mat-form-field class=\"example-full-width\">\r\n    <mat-label>Assignee</mat-label>\r\n    <input type=\"text\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\">\r\n    <mat-autocomplete #auto=\"matAutocomplete\" [displayWith]=\"displayFn\">\r\n      @for (option of filteredOptions | async; track option) {\r\n        <mat-option [value]=\"option\">{{option.name}}</mat-option>\r\n      }\r\n    </mat-autocomplete>\r\n  </mat-form-field>\r\n</form>\r\n", styles: [".example-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n\r\n.example-full-width {\r\n  width: 100%;\r\n}\r\n"] }]
        }] });

/**
 * @title Filter autocomplete
 */
class AutocompleteFilterExample {
    constructor() {
        this.myControl = new FormControl('');
        this.options = ['One', 'Two', 'Three'];
    }
    ngOnInit() {
        this.filteredOptions = this.myControl.valueChanges.pipe(startWith(''), map(value => this._filter(value || '')));
    }
    _filter(value) {
        const filterValue = value.toLowerCase();
        return this.options.filter(option => option.toLowerCase().includes(filterValue));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: AutocompleteFilterExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.4", type: AutocompleteFilterExample, isStandalone: true, selector: "autocomplete-filter-example", ngImport: i0, template: "<form class=\"example-form\">\r\n  <mat-form-field class=\"example-full-width\">\r\n    <mat-label>Number</mat-label>\r\n    <input type=\"text\"\r\n           placeholder=\"Pick one\"\r\n           aria-label=\"Number\"\r\n           matInput\r\n           [formControl]=\"myControl\"\r\n           [matAutocomplete]=\"auto\">\r\n    <mat-autocomplete #auto=\"matAutocomplete\">\r\n      @for (option of filteredOptions | async; track option) {\r\n        <mat-option [value]=\"option\">{{option}}</mat-option>\r\n      }\r\n    </mat-autocomplete>\r\n  </mat-form-field>\r\n</form>\r\n", styles: [".example-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n\r\n.example-full-width {\r\n  width: 100%;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1.NgForm, selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]", inputs: ["ngFormOptions"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i2.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i2.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i3.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: MatAutocompleteModule }, { kind: "component", type: i4.MatAutocomplete, selector: "mat-autocomplete", inputs: ["aria-label", "aria-labelledby", "displayWith", "autoActiveFirstOption", "autoSelectActiveOption", "requireSelection", "panelWidth", "disableRipple", "class", "hideSingleSelectionIndicator"], outputs: ["optionSelected", "opened", "closed", "optionActivated"], exportAs: ["matAutocomplete"] }, { kind: "component", type: i5.MatOption, selector: "mat-option", inputs: ["value", "id", "disabled"], outputs: ["onSelectionChange"], exportAs: ["matOption"] }, { kind: "directive", type: i4.MatAutocompleteTrigger, selector: "input[matAutocomplete], textarea[matAutocomplete]", inputs: ["matAutocomplete", "matAutocompletePosition", "matAutocompleteConnectedTo", "autocomplete", "matAutocompleteDisabled"], exportAs: ["matAutocompleteTrigger"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "pipe", type: AsyncPipe, name: "async" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: AutocompleteFilterExample, decorators: [{
            type: Component,
            args: [{ selector: 'autocomplete-filter-example', standalone: true, imports: [
                        FormsModule,
                        MatFormFieldModule,
                        MatInputModule,
                        MatAutocompleteModule,
                        ReactiveFormsModule,
                        AsyncPipe,
                    ], template: "<form class=\"example-form\">\r\n  <mat-form-field class=\"example-full-width\">\r\n    <mat-label>Number</mat-label>\r\n    <input type=\"text\"\r\n           placeholder=\"Pick one\"\r\n           aria-label=\"Number\"\r\n           matInput\r\n           [formControl]=\"myControl\"\r\n           [matAutocomplete]=\"auto\">\r\n    <mat-autocomplete #auto=\"matAutocomplete\">\r\n      @for (option of filteredOptions | async; track option) {\r\n        <mat-option [value]=\"option\">{{option}}</mat-option>\r\n      }\r\n    </mat-autocomplete>\r\n  </mat-form-field>\r\n</form>\r\n", styles: [".example-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n\r\n.example-full-width {\r\n  width: 100%;\r\n}\r\n"] }]
        }] });

const _filter = (opt, value) => {
    const filterValue = value.toLowerCase();
    return opt.filter(item => item.toLowerCase().includes(filterValue));
};
/**
 * @title Option groups autocomplete
 */
class AutocompleteOptgroupExample {
    constructor(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.stateForm = this._formBuilder.group({
            stateGroup: '',
        });
        this.stateGroups = [
            {
                letter: 'A',
                names: ['Alabama', 'Alaska', 'Arizona', 'Arkansas'],
            },
            {
                letter: 'C',
                names: ['California', 'Colorado', 'Connecticut'],
            },
            {
                letter: 'D',
                names: ['Delaware'],
            },
            {
                letter: 'F',
                names: ['Florida'],
            },
            {
                letter: 'G',
                names: ['Georgia'],
            },
            {
                letter: 'H',
                names: ['Hawaii'],
            },
            {
                letter: 'I',
                names: ['Idaho', 'Illinois', 'Indiana', 'Iowa'],
            },
            {
                letter: 'K',
                names: ['Kansas', 'Kentucky'],
            },
            {
                letter: 'L',
                names: ['Louisiana'],
            },
            {
                letter: 'M',
                names: [
                    'Maine',
                    'Maryland',
                    'Massachusetts',
                    'Michigan',
                    'Minnesota',
                    'Mississippi',
                    'Missouri',
                    'Montana',
                ],
            },
            {
                letter: 'N',
                names: [
                    'Nebraska',
                    'Nevada',
                    'New Hampshire',
                    'New Jersey',
                    'New Mexico',
                    'New York',
                    'North Carolina',
                    'North Dakota',
                ],
            },
            {
                letter: 'O',
                names: ['Ohio', 'Oklahoma', 'Oregon'],
            },
            {
                letter: 'P',
                names: ['Pennsylvania'],
            },
            {
                letter: 'R',
                names: ['Rhode Island'],
            },
            {
                letter: 'S',
                names: ['South Carolina', 'South Dakota'],
            },
            {
                letter: 'T',
                names: ['Tennessee', 'Texas'],
            },
            {
                letter: 'U',
                names: ['Utah'],
            },
            {
                letter: 'V',
                names: ['Vermont', 'Virginia'],
            },
            {
                letter: 'W',
                names: ['Washington', 'West Virginia', 'Wisconsin', 'Wyoming'],
            },
        ];
    }
    ngOnInit() {
        this.stateGroupOptions = this.stateForm.get('stateGroup').valueChanges.pipe(startWith(''), map(value => this._filterGroup(value || '')));
    }
    _filterGroup(value) {
        if (value) {
            return this.stateGroups
                .map(group => ({ letter: group.letter, names: _filter(group.names, value) }))
                .filter(group => group.names.length > 0);
        }
        return this.stateGroups;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: AutocompleteOptgroupExample, deps: [{ token: i1.FormBuilder }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.4", type: AutocompleteOptgroupExample, isStandalone: true, selector: "autocomplete-optgroup-example", ngImport: i0, template: "<form [formGroup]=\"stateForm\">\r\n  <mat-form-field>\r\n    <mat-label>States Group</mat-label>\r\n    <input type=\"text\"\r\n           matInput\r\n           formControlName=\"stateGroup\"\r\n           required\r\n           [matAutocomplete]=\"autoGroup\">\r\n<!-- #docregion mat-autocomplete -->\r\n      <mat-autocomplete #autoGroup=\"matAutocomplete\">\r\n        @for (group of stateGroupOptions | async; track group) {\r\n          <mat-optgroup [label]=\"group.letter\">\r\n            @for (name of group.names; track name) {\r\n              <mat-option [value]=\"name\">{{name}}</mat-option>\r\n            }\r\n          </mat-optgroup>\r\n        }\r\n    </mat-autocomplete>\r\n<!-- #enddocregion mat-autocomplete -->\r\n  </mat-form-field>\r\n</form>\r\n", dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i2.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i2.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i3.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: MatAutocompleteModule }, { kind: "component", type: i4.MatAutocomplete, selector: "mat-autocomplete", inputs: ["aria-label", "aria-labelledby", "displayWith", "autoActiveFirstOption", "autoSelectActiveOption", "requireSelection", "panelWidth", "disableRipple", "class", "hideSingleSelectionIndicator"], outputs: ["optionSelected", "opened", "closed", "optionActivated"], exportAs: ["matAutocomplete"] }, { kind: "component", type: i5.MatOption, selector: "mat-option", inputs: ["value", "id", "disabled"], outputs: ["onSelectionChange"], exportAs: ["matOption"] }, { kind: "component", type: i5.MatOptgroup, selector: "mat-optgroup", inputs: ["label", "disabled"], exportAs: ["matOptgroup"] }, { kind: "directive", type: i4.MatAutocompleteTrigger, selector: "input[matAutocomplete], textarea[matAutocomplete]", inputs: ["matAutocomplete", "matAutocompletePosition", "matAutocompleteConnectedTo", "autocomplete", "matAutocompleteDisabled"], exportAs: ["matAutocompleteTrigger"] }, { kind: "pipe", type: AsyncPipe, name: "async" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: AutocompleteOptgroupExample, decorators: [{
            type: Component,
            args: [{ selector: 'autocomplete-optgroup-example', standalone: true, imports: [
                        FormsModule,
                        ReactiveFormsModule,
                        MatFormFieldModule,
                        MatInputModule,
                        MatAutocompleteModule,
                        AsyncPipe,
                    ], template: "<form [formGroup]=\"stateForm\">\r\n  <mat-form-field>\r\n    <mat-label>States Group</mat-label>\r\n    <input type=\"text\"\r\n           matInput\r\n           formControlName=\"stateGroup\"\r\n           required\r\n           [matAutocomplete]=\"autoGroup\">\r\n<!-- #docregion mat-autocomplete -->\r\n      <mat-autocomplete #autoGroup=\"matAutocomplete\">\r\n        @for (group of stateGroupOptions | async; track group) {\r\n          <mat-optgroup [label]=\"group.letter\">\r\n            @for (name of group.names; track name) {\r\n              <mat-option [value]=\"name\">{{name}}</mat-option>\r\n            }\r\n          </mat-optgroup>\r\n        }\r\n    </mat-autocomplete>\r\n<!-- #enddocregion mat-autocomplete -->\r\n  </mat-form-field>\r\n</form>\r\n" }]
        }], ctorParameters: () => [{ type: i1.FormBuilder }] });

/**
 * @title Autocomplete overview
 */
class AutocompleteOverviewExample {
    constructor() {
        this.stateCtrl = new FormControl('');
        this.states = [
            {
                name: 'Arkansas',
                population: '2.978M',
                // https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg
                flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg',
            },
            {
                name: 'California',
                population: '39.14M',
                // https://commons.wikimedia.org/wiki/File:Flag_of_California.svg
                flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg',
            },
            {
                name: 'Florida',
                population: '20.27M',
                // https://commons.wikimedia.org/wiki/File:Flag_of_Florida.svg
                flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg',
            },
            {
                name: 'Texas',
                population: '27.47M',
                // https://commons.wikimedia.org/wiki/File:Flag_of_Texas.svg
                flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg',
            },
        ];
        this.filteredStates = this.stateCtrl.valueChanges.pipe(startWith(''), map(state => (state ? this._filterStates(state) : this.states.slice())));
    }
    _filterStates(value) {
        const filterValue = value.toLowerCase();
        return this.states.filter(state => state.name.toLowerCase().includes(filterValue));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: AutocompleteOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.4", type: AutocompleteOverviewExample, isStandalone: true, selector: "autocomplete-overview-example", ngImport: i0, template: "<form class=\"example-form\">\r\n  <mat-form-field class=\"example-full-width\">\r\n    <mat-label>State</mat-label>\r\n    <input matInput\r\n           aria-label=\"State\"\r\n           [matAutocomplete]=\"auto\"\r\n           [formControl]=\"stateCtrl\">\r\n    <mat-autocomplete #auto=\"matAutocomplete\">\r\n      @for (state of filteredStates | async; track state) {\r\n        <mat-option [value]=\"state.name\">\r\n          <img alt=\"\" class=\"example-option-img\" [src]=\"state.flag\" height=\"25\">\r\n          <span>{{state.name}}</span> |\r\n          <small>Population: {{state.population}}</small>\r\n        </mat-option>\r\n      }\r\n    </mat-autocomplete>\r\n  </mat-form-field>\r\n\r\n  <br>\r\n\r\n  <mat-slide-toggle\r\n    [checked]=\"stateCtrl.disabled\"\r\n    (change)=\"stateCtrl.disabled ? stateCtrl.enable() : stateCtrl.disable()\">\r\n    Disable Input?\r\n  </mat-slide-toggle>\r\n</form>\r\n", styles: [".example-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n\r\n.example-full-width {\r\n  width: 100%;\r\n}\r\n\r\n.example-option-img {\r\n  vertical-align: middle;\r\n  margin-right: 8px;\r\n}\r\n\r\n[dir='rtl'] .example-option-img {\r\n  margin-right: 0;\r\n  margin-left: 8px;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1.NgForm, selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]", inputs: ["ngFormOptions"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i2.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i2.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i3.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: MatAutocompleteModule }, { kind: "component", type: i4.MatAutocomplete, selector: "mat-autocomplete", inputs: ["aria-label", "aria-labelledby", "displayWith", "autoActiveFirstOption", "autoSelectActiveOption", "requireSelection", "panelWidth", "disableRipple", "class", "hideSingleSelectionIndicator"], outputs: ["optionSelected", "opened", "closed", "optionActivated"], exportAs: ["matAutocomplete"] }, { kind: "component", type: i5.MatOption, selector: "mat-option", inputs: ["value", "id", "disabled"], outputs: ["onSelectionChange"], exportAs: ["matOption"] }, { kind: "directive", type: i4.MatAutocompleteTrigger, selector: "input[matAutocomplete], textarea[matAutocomplete]", inputs: ["matAutocomplete", "matAutocompletePosition", "matAutocompleteConnectedTo", "autocomplete", "matAutocompleteDisabled"], exportAs: ["matAutocompleteTrigger"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: MatSlideToggleModule }, { kind: "component", type: i6.MatSlideToggle, selector: "mat-slide-toggle", inputs: ["disabled", "disableRipple", "color", "tabIndex", "name", "id", "labelPosition", "aria-label", "aria-labelledby", "aria-describedby", "required", "checked", "hideIcon"], outputs: ["change", "toggleChange"], exportAs: ["matSlideToggle"] }, { kind: "pipe", type: AsyncPipe, name: "async" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: AutocompleteOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'autocomplete-overview-example', standalone: true, imports: [
                        FormsModule,
                        MatFormFieldModule,
                        MatInputModule,
                        MatAutocompleteModule,
                        ReactiveFormsModule,
                        MatSlideToggleModule,
                        AsyncPipe,
                    ], template: "<form class=\"example-form\">\r\n  <mat-form-field class=\"example-full-width\">\r\n    <mat-label>State</mat-label>\r\n    <input matInput\r\n           aria-label=\"State\"\r\n           [matAutocomplete]=\"auto\"\r\n           [formControl]=\"stateCtrl\">\r\n    <mat-autocomplete #auto=\"matAutocomplete\">\r\n      @for (state of filteredStates | async; track state) {\r\n        <mat-option [value]=\"state.name\">\r\n          <img alt=\"\" class=\"example-option-img\" [src]=\"state.flag\" height=\"25\">\r\n          <span>{{state.name}}</span> |\r\n          <small>Population: {{state.population}}</small>\r\n        </mat-option>\r\n      }\r\n    </mat-autocomplete>\r\n  </mat-form-field>\r\n\r\n  <br>\r\n\r\n  <mat-slide-toggle\r\n    [checked]=\"stateCtrl.disabled\"\r\n    (change)=\"stateCtrl.disabled ? stateCtrl.enable() : stateCtrl.disable()\">\r\n    Disable Input?\r\n  </mat-slide-toggle>\r\n</form>\r\n", styles: [".example-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n\r\n.example-full-width {\r\n  width: 100%;\r\n}\r\n\r\n.example-option-img {\r\n  vertical-align: middle;\r\n  margin-right: 8px;\r\n}\r\n\r\n[dir='rtl'] .example-option-img {\r\n  margin-right: 0;\r\n  margin-left: 8px;\r\n}\r\n"] }]
        }], ctorParameters: () => [] });

/**
 * @title Plain input autocomplete
 */
class AutocompletePlainInputExample {
    constructor() {
        this.control = new FormControl('');
        this.streets = ['Champs-Élysées', 'Lombard Street', 'Abbey Road', 'Fifth Avenue'];
    }
    ngOnInit() {
        this.filteredStreets = this.control.valueChanges.pipe(startWith(''), map(value => this._filter(value || '')));
    }
    _filter(value) {
        const filterValue = this._normalizeValue(value);
        return this.streets.filter(street => this._normalizeValue(street).includes(filterValue));
    }
    _normalizeValue(value) {
        return value.toLowerCase().replace(/\s/g, '');
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: AutocompletePlainInputExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.4", type: AutocompletePlainInputExample, isStandalone: true, selector: "autocomplete-plain-input-example", ngImport: i0, template: "<form class=\"example-form\">\r\n  <input type=\"text\"\r\n         placeholder=\"Search for a street\"\r\n         [formControl]=\"control\"\r\n         [matAutocomplete]=\"auto\"\r\n         class=\"example-input\">\r\n  <mat-autocomplete #auto=\"matAutocomplete\">\r\n    @for (street of filteredStreets | async; track street) {\r\n      <mat-option [value]=\"street\">{{street}}</mat-option>\r\n    }\r\n  </mat-autocomplete>\r\n</form>\r\n", styles: [".example-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n\r\n.example-full-width {\r\n  width: 100%;\r\n}\r\n\r\n.example-input {\r\n  max-width: 100%;\r\n  width: 300px;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1.NgForm, selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]", inputs: ["ngFormOptions"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: MatAutocompleteModule }, { kind: "component", type: i4.MatAutocomplete, selector: "mat-autocomplete", inputs: ["aria-label", "aria-labelledby", "displayWith", "autoActiveFirstOption", "autoSelectActiveOption", "requireSelection", "panelWidth", "disableRipple", "class", "hideSingleSelectionIndicator"], outputs: ["optionSelected", "opened", "closed", "optionActivated"], exportAs: ["matAutocomplete"] }, { kind: "component", type: i5.MatOption, selector: "mat-option", inputs: ["value", "id", "disabled"], outputs: ["onSelectionChange"], exportAs: ["matOption"] }, { kind: "directive", type: i4.MatAutocompleteTrigger, selector: "input[matAutocomplete], textarea[matAutocomplete]", inputs: ["matAutocomplete", "matAutocompletePosition", "matAutocompleteConnectedTo", "autocomplete", "matAutocompleteDisabled"], exportAs: ["matAutocompleteTrigger"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "pipe", type: AsyncPipe, name: "async" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: AutocompletePlainInputExample, decorators: [{
            type: Component,
            args: [{ selector: 'autocomplete-plain-input-example', standalone: true, imports: [FormsModule, MatAutocompleteModule, ReactiveFormsModule, AsyncPipe], template: "<form class=\"example-form\">\r\n  <input type=\"text\"\r\n         placeholder=\"Search for a street\"\r\n         [formControl]=\"control\"\r\n         [matAutocomplete]=\"auto\"\r\n         class=\"example-input\">\r\n  <mat-autocomplete #auto=\"matAutocomplete\">\r\n    @for (street of filteredStreets | async; track street) {\r\n      <mat-option [value]=\"street\">{{street}}</mat-option>\r\n    }\r\n  </mat-autocomplete>\r\n</form>\r\n", styles: [".example-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n\r\n.example-full-width {\r\n  width: 100%;\r\n}\r\n\r\n.example-input {\r\n  max-width: 100%;\r\n  width: 300px;\r\n}\r\n"] }]
        }] });

/**
 * @title Simple autocomplete
 */
class AutocompleteSimpleExample {
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

/**
 * @title Require an autocomplete option to be selected
 */
class AutocompleteRequireSelectionExample {
    constructor() {
        this.myControl = new FormControl('');
        this.options = ['One', 'Two', 'Three', 'Four', 'Five'];
        this.filteredOptions = this.options.slice();
    }
    filter() {
        const filterValue = this.input.nativeElement.value.toLowerCase();
        this.filteredOptions = this.options.filter(o => o.toLowerCase().includes(filterValue));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: AutocompleteRequireSelectionExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.4", type: AutocompleteRequireSelectionExample, isStandalone: true, selector: "autocomplete-require-selection-example", viewQueries: [{ propertyName: "input", first: true, predicate: ["input"], descendants: true }], ngImport: i0, template: "Control value: {{myControl.value || 'empty'}}\r\n\r\n<form class=\"example-form\">\r\n  <mat-form-field class=\"example-full-width\">\r\n    <mat-label>Number</mat-label>\r\n    <input #input\r\n           type=\"text\"\r\n           placeholder=\"Pick one\"\r\n           matInput\r\n           [formControl]=\"myControl\"\r\n           [matAutocomplete]=\"auto\"\r\n           (input)=\"filter()\"\r\n           (focus)=\"filter()\">\r\n    <mat-autocomplete requireSelection #auto=\"matAutocomplete\">\r\n      @for (option of filteredOptions; track option) {\r\n        <mat-option [value]=\"option\">{{option}}</mat-option>\r\n      }\r\n    </mat-autocomplete>\r\n  </mat-form-field>\r\n</form>\r\n", styles: [".example-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n  margin-top: 16px;\r\n}\r\n\r\n.example-full-width {\r\n  width: 100%;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1.NgForm, selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]", inputs: ["ngFormOptions"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i2.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i2.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i3.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: MatAutocompleteModule }, { kind: "component", type: i4.MatAutocomplete, selector: "mat-autocomplete", inputs: ["aria-label", "aria-labelledby", "displayWith", "autoActiveFirstOption", "autoSelectActiveOption", "requireSelection", "panelWidth", "disableRipple", "class", "hideSingleSelectionIndicator"], outputs: ["optionSelected", "opened", "closed", "optionActivated"], exportAs: ["matAutocomplete"] }, { kind: "component", type: i5.MatOption, selector: "mat-option", inputs: ["value", "id", "disabled"], outputs: ["onSelectionChange"], exportAs: ["matOption"] }, { kind: "directive", type: i4.MatAutocompleteTrigger, selector: "input[matAutocomplete], textarea[matAutocomplete]", inputs: ["matAutocomplete", "matAutocompletePosition", "matAutocompleteConnectedTo", "autocomplete", "matAutocompleteDisabled"], exportAs: ["matAutocompleteTrigger"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: AutocompleteRequireSelectionExample, decorators: [{
            type: Component,
            args: [{ selector: 'autocomplete-require-selection-example', standalone: true, imports: [
                        FormsModule,
                        MatFormFieldModule,
                        MatInputModule,
                        MatAutocompleteModule,
                        ReactiveFormsModule,
                        AsyncPipe,
                    ], template: "Control value: {{myControl.value || 'empty'}}\r\n\r\n<form class=\"example-form\">\r\n  <mat-form-field class=\"example-full-width\">\r\n    <mat-label>Number</mat-label>\r\n    <input #input\r\n           type=\"text\"\r\n           placeholder=\"Pick one\"\r\n           matInput\r\n           [formControl]=\"myControl\"\r\n           [matAutocomplete]=\"auto\"\r\n           (input)=\"filter()\"\r\n           (focus)=\"filter()\">\r\n    <mat-autocomplete requireSelection #auto=\"matAutocomplete\">\r\n      @for (option of filteredOptions; track option) {\r\n        <mat-option [value]=\"option\">{{option}}</mat-option>\r\n      }\r\n    </mat-autocomplete>\r\n  </mat-form-field>\r\n</form>\r\n", styles: [".example-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n  margin-top: 16px;\r\n}\r\n\r\n.example-full-width {\r\n  width: 100%;\r\n}\r\n"] }]
        }], ctorParameters: () => [], propDecorators: { input: [{
                type: ViewChild,
                args: ['input']
            }] } });

/**
 * @title Testing with MatAutocompleteHarness
 */
class AutocompleteHarnessExample {
    constructor() {
        this.states = [
            { code: 'AL', name: 'Alabama' },
            { code: 'CA', name: 'California' },
            { code: 'FL', name: 'Florida' },
            { code: 'KS', name: 'Kansas' },
            { code: 'MA', name: 'Massachusetts' },
            { code: 'NY', name: 'New York' },
            { code: 'OR', name: 'Oregon' },
            { code: 'PA', name: 'Pennsylvania' },
            { code: 'TN', name: 'Tennessee' },
            { code: 'VA', name: 'Virginia' },
            { code: 'WY', name: 'Wyoming' },
        ];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: AutocompleteHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.4", type: AutocompleteHarnessExample, isStandalone: true, selector: "autocomplete-harness-example", ngImport: i0, template: "<mat-autocomplete #autocomplete=\"matAutocomplete\">\r\n  @for (state of states; track state) {\r\n    <mat-option [value]=\"state.code\">{{ state.name }}</mat-option>\r\n  }\r\n</mat-autocomplete>\r\n\r\n<input id=\"plain\" [matAutocomplete]=\"autocomplete\">\r\n<input id=\"disabled\" disabled [matAutocomplete]=\"autocomplete\">\r\n", dependencies: [{ kind: "ngmodule", type: MatAutocompleteModule }, { kind: "component", type: i4.MatAutocomplete, selector: "mat-autocomplete", inputs: ["aria-label", "aria-labelledby", "displayWith", "autoActiveFirstOption", "autoSelectActiveOption", "requireSelection", "panelWidth", "disableRipple", "class", "hideSingleSelectionIndicator"], outputs: ["optionSelected", "opened", "closed", "optionActivated"], exportAs: ["matAutocomplete"] }, { kind: "component", type: i5.MatOption, selector: "mat-option", inputs: ["value", "id", "disabled"], outputs: ["onSelectionChange"], exportAs: ["matOption"] }, { kind: "directive", type: i4.MatAutocompleteTrigger, selector: "input[matAutocomplete], textarea[matAutocomplete]", inputs: ["matAutocomplete", "matAutocompletePosition", "matAutocompleteConnectedTo", "autocomplete", "matAutocompleteDisabled"], exportAs: ["matAutocompleteTrigger"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: AutocompleteHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'autocomplete-harness-example', standalone: true, imports: [MatAutocompleteModule], template: "<mat-autocomplete #autocomplete=\"matAutocomplete\">\r\n  @for (state of states; track state) {\r\n    <mat-option [value]=\"state.code\">{{ state.name }}</mat-option>\r\n  }\r\n</mat-autocomplete>\r\n\r\n<input id=\"plain\" [matAutocomplete]=\"autocomplete\">\r\n<input id=\"disabled\" disabled [matAutocomplete]=\"autocomplete\">\r\n" }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { AutocompleteAutoActiveFirstOptionExample, AutocompleteDisplayExample, AutocompleteFilterExample, AutocompleteHarnessExample, AutocompleteOptgroupExample, AutocompleteOverviewExample, AutocompletePlainInputExample, AutocompleteRequireSelectionExample, AutocompleteSimpleExample };
//# sourceMappingURL=autocomplete.mjs.map
