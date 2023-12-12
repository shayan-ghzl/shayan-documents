import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/select";
import * as i4 from "@angular/material/core";
import * as i5 from "@angular/material/input";
/**
 * @title Select in a reactive form
 */
export class SelectReactiveFormExample {
    constructor() {
        this.foods = [
            { value: 'steak-0', viewValue: 'Steak' },
            { value: 'pizza-1', viewValue: 'Pizza' },
            { value: 'tacos-2', viewValue: 'Tacos' },
        ];
        this.cars = [
            { value: 'volvo', viewValue: 'Volvo' },
            { value: 'saab', viewValue: 'Saab' },
            { value: 'mercedes', viewValue: 'Mercedes' },
        ];
        this.foodControl = new FormControl(this.foods[2].value);
        this.carControl = new FormControl(this.cars[1].value);
        this.form = new FormGroup({
            food: this.foodControl,
            car: this.carControl,
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: SelectReactiveFormExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.4", type: SelectReactiveFormExample, isStandalone: true, selector: "select-reactive-form-example", ngImport: i0, template: "<form [formGroup]=\"form\">\r\n  <h4>mat-select</h4>\r\n  <mat-form-field>\r\n    <mat-label>Favorite Food</mat-label>\r\n    <mat-select [formControl]=\"foodControl\" name=\"food\">\r\n      <mat-option>None</mat-option>\r\n      @for (food of foods; track food) {\r\n        <mat-option [value]=\"food.value\">{{food.viewValue}}</mat-option>\r\n      }\r\n    </mat-select>\r\n  </mat-form-field>\r\n  <p>Selected: {{foodControl.value}}</p>\r\n  <h4>Native select</h4>\r\n  <mat-form-field>\r\n    <mat-label>Favorite Car</mat-label>\r\n    <select matNativeControl [formControl]=\"carControl\" name=\"car\">\r\n      <option value=\"\">None</option>\r\n      @for (car of cars; track car) {\r\n        <option [value]=\"car.value\">{{car.viewValue}}</option>\r\n      }\r\n    </select>\r\n  </mat-form-field>\r\n  <p>Selected: {{carControl.value}}</p>\r\n</form>\r\n", dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1.NgSelectOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i1.ɵNgSelectMultipleOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i1.SelectControlValueAccessor, selector: "select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]", inputs: ["compareWith"] }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "directive", type: i1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i2.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i2.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatSelectModule }, { kind: "component", type: i3.MatSelect, selector: "mat-select", inputs: ["aria-describedby", "panelClass", "disabled", "disableRipple", "tabIndex", "hideSingleSelectionIndicator", "placeholder", "required", "multiple", "disableOptionCentering", "compareWith", "value", "aria-label", "aria-labelledby", "errorStateMatcher", "typeaheadDebounceInterval", "sortComparator", "id", "panelWidth"], outputs: ["openedChange", "opened", "closed", "selectionChange", "valueChange"], exportAs: ["matSelect"] }, { kind: "component", type: i4.MatOption, selector: "mat-option", inputs: ["value", "id", "disabled"], outputs: ["onSelectionChange"], exportAs: ["matOption"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i5.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: SelectReactiveFormExample, decorators: [{
            type: Component,
            args: [{ selector: 'select-reactive-form-example', standalone: true, imports: [FormsModule, ReactiveFormsModule, MatFormFieldModule, MatSelectModule, MatInputModule], template: "<form [formGroup]=\"form\">\r\n  <h4>mat-select</h4>\r\n  <mat-form-field>\r\n    <mat-label>Favorite Food</mat-label>\r\n    <mat-select [formControl]=\"foodControl\" name=\"food\">\r\n      <mat-option>None</mat-option>\r\n      @for (food of foods; track food) {\r\n        <mat-option [value]=\"food.value\">{{food.viewValue}}</mat-option>\r\n      }\r\n    </mat-select>\r\n  </mat-form-field>\r\n  <p>Selected: {{foodControl.value}}</p>\r\n  <h4>Native select</h4>\r\n  <mat-form-field>\r\n    <mat-label>Favorite Car</mat-label>\r\n    <select matNativeControl [formControl]=\"carControl\" name=\"car\">\r\n      <option value=\"\">None</option>\r\n      @for (car of cars; track car) {\r\n        <option [value]=\"car.value\">{{car.viewValue}}</option>\r\n      }\r\n    </select>\r\n  </mat-form-field>\r\n  <p>Selected: {{carControl.value}}</p>\r\n</form>\r\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LXJlYWN0aXZlLWZvcm0tZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NlbGVjdC9zZWxlY3QtcmVhY3RpdmUtZm9ybS9zZWxlY3QtcmVhY3RpdmUtZm9ybS1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2VsZWN0L3NlbGVjdC1yZWFjdGl2ZS1mb3JtL3NlbGVjdC1yZWFjdGl2ZS1mb3JtLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxXQUFXLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3hGLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sOEJBQThCLENBQUM7Ozs7Ozs7QUFZaEU7O0dBRUc7QUFPSCxNQUFNLE9BQU8seUJBQXlCO0lBTnRDO1FBT0UsVUFBSyxHQUFXO1lBQ2QsRUFBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUM7WUFDdEMsRUFBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUM7WUFDdEMsRUFBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUM7U0FDdkMsQ0FBQztRQUNGLFNBQUksR0FBVTtZQUNaLEVBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFDO1lBQ3BDLEVBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFDO1lBQ2xDLEVBQUMsS0FBSyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFDO1NBQzNDLENBQUM7UUFDRixnQkFBVyxHQUFHLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkQsZUFBVSxHQUFHLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakQsU0FBSSxHQUFHLElBQUksU0FBUyxDQUFDO1lBQ25CLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVztZQUN0QixHQUFHLEVBQUUsSUFBSSxDQUFDLFVBQVU7U0FDckIsQ0FBQyxDQUFDO0tBQ0o7OEdBakJZLHlCQUF5QjtrR0FBekIseUJBQXlCLHdGQ3pCdEMsdzJCQXdCQSwyQ0REWSxXQUFXLHN5QkFBRSxtQkFBbUIsa1dBQUUsa0JBQWtCLDBTQUFFLGVBQWUsbXJCQUFFLGNBQWM7OzJGQUVwRix5QkFBeUI7a0JBTnJDLFNBQVM7K0JBQ0UsOEJBQThCLGNBRTVCLElBQUksV0FDUCxDQUFDLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxrQkFBa0IsRUFBRSxlQUFlLEVBQUUsY0FBYyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0Zvcm1Db250cm9sLCBGb3JtR3JvdXAsIEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7TWF0SW5wdXRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcclxuaW1wb3J0IHtNYXRTZWxlY3RNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NlbGVjdCc7XHJcbmltcG9ydCB7TWF0Rm9ybUZpZWxkTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcclxuXHJcbmludGVyZmFjZSBGb29kIHtcclxuICB2YWx1ZTogc3RyaW5nO1xyXG4gIHZpZXdWYWx1ZTogc3RyaW5nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQ2FyIHtcclxuICB2YWx1ZTogc3RyaW5nO1xyXG4gIHZpZXdWYWx1ZTogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogQHRpdGxlIFNlbGVjdCBpbiBhIHJlYWN0aXZlIGZvcm1cclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc2VsZWN0LXJlYWN0aXZlLWZvcm0tZXhhbXBsZScsXHJcbiAgdGVtcGxhdGVVcmw6ICdzZWxlY3QtcmVhY3RpdmUtZm9ybS1leGFtcGxlLmh0bWwnLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgaW1wb3J0czogW0Zvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlLCBNYXRGb3JtRmllbGRNb2R1bGUsIE1hdFNlbGVjdE1vZHVsZSwgTWF0SW5wdXRNb2R1bGVdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VsZWN0UmVhY3RpdmVGb3JtRXhhbXBsZSB7XHJcbiAgZm9vZHM6IEZvb2RbXSA9IFtcclxuICAgIHt2YWx1ZTogJ3N0ZWFrLTAnLCB2aWV3VmFsdWU6ICdTdGVhayd9LFxyXG4gICAge3ZhbHVlOiAncGl6emEtMScsIHZpZXdWYWx1ZTogJ1BpenphJ30sXHJcbiAgICB7dmFsdWU6ICd0YWNvcy0yJywgdmlld1ZhbHVlOiAnVGFjb3MnfSxcclxuICBdO1xyXG4gIGNhcnM6IENhcltdID0gW1xyXG4gICAge3ZhbHVlOiAndm9sdm8nLCB2aWV3VmFsdWU6ICdWb2x2byd9LFxyXG4gICAge3ZhbHVlOiAnc2FhYicsIHZpZXdWYWx1ZTogJ1NhYWInfSxcclxuICAgIHt2YWx1ZTogJ21lcmNlZGVzJywgdmlld1ZhbHVlOiAnTWVyY2VkZXMnfSxcclxuICBdO1xyXG4gIGZvb2RDb250cm9sID0gbmV3IEZvcm1Db250cm9sKHRoaXMuZm9vZHNbMl0udmFsdWUpO1xyXG4gIGNhckNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2wodGhpcy5jYXJzWzFdLnZhbHVlKTtcclxuICBmb3JtID0gbmV3IEZvcm1Hcm91cCh7XHJcbiAgICBmb29kOiB0aGlzLmZvb2RDb250cm9sLFxyXG4gICAgY2FyOiB0aGlzLmNhckNvbnRyb2wsXHJcbiAgfSk7XHJcbn1cclxuIiwiPGZvcm0gW2Zvcm1Hcm91cF09XCJmb3JtXCI+XHJcbiAgPGg0Pm1hdC1zZWxlY3Q8L2g0PlxyXG4gIDxtYXQtZm9ybS1maWVsZD5cclxuICAgIDxtYXQtbGFiZWw+RmF2b3JpdGUgRm9vZDwvbWF0LWxhYmVsPlxyXG4gICAgPG1hdC1zZWxlY3QgW2Zvcm1Db250cm9sXT1cImZvb2RDb250cm9sXCIgbmFtZT1cImZvb2RcIj5cclxuICAgICAgPG1hdC1vcHRpb24+Tm9uZTwvbWF0LW9wdGlvbj5cclxuICAgICAgQGZvciAoZm9vZCBvZiBmb29kczsgdHJhY2sgZm9vZCkge1xyXG4gICAgICAgIDxtYXQtb3B0aW9uIFt2YWx1ZV09XCJmb29kLnZhbHVlXCI+e3tmb29kLnZpZXdWYWx1ZX19PC9tYXQtb3B0aW9uPlxyXG4gICAgICB9XHJcbiAgICA8L21hdC1zZWxlY3Q+XHJcbiAgPC9tYXQtZm9ybS1maWVsZD5cclxuICA8cD5TZWxlY3RlZDoge3tmb29kQ29udHJvbC52YWx1ZX19PC9wPlxyXG4gIDxoND5OYXRpdmUgc2VsZWN0PC9oND5cclxuICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICA8bWF0LWxhYmVsPkZhdm9yaXRlIENhcjwvbWF0LWxhYmVsPlxyXG4gICAgPHNlbGVjdCBtYXROYXRpdmVDb250cm9sIFtmb3JtQ29udHJvbF09XCJjYXJDb250cm9sXCIgbmFtZT1cImNhclwiPlxyXG4gICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+Tm9uZTwvb3B0aW9uPlxyXG4gICAgICBAZm9yIChjYXIgb2YgY2FyczsgdHJhY2sgY2FyKSB7XHJcbiAgICAgICAgPG9wdGlvbiBbdmFsdWVdPVwiY2FyLnZhbHVlXCI+e3tjYXIudmlld1ZhbHVlfX08L29wdGlvbj5cclxuICAgICAgfVxyXG4gICAgPC9zZWxlY3Q+XHJcbiAgPC9tYXQtZm9ybS1maWVsZD5cclxuICA8cD5TZWxlY3RlZDoge3tjYXJDb250cm9sLnZhbHVlfX08L3A+XHJcbjwvZm9ybT5cclxuIl19