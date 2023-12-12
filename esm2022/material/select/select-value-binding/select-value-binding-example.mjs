import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/select";
import * as i3 from "@angular/material/core";
/** @title Select with 2-way value binding */
export class SelectValueBindingExample {
    constructor() {
        this.selected = 'option2';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: SelectValueBindingExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: SelectValueBindingExample, isStandalone: true, selector: "select-value-binding-example", ngImport: i0, template: "<mat-form-field>\r\n  <mat-label>Select an option</mat-label>\r\n  <mat-select [(value)]=\"selected\">\r\n    <mat-option>None</mat-option>\r\n    <mat-option value=\"option1\">Option 1</mat-option>\r\n    <mat-option value=\"option2\">Option 2</mat-option>\r\n    <mat-option value=\"option3\">Option 3</mat-option>\r\n  </mat-select>\r\n</mat-form-field>\r\n\r\n<p>You selected: {{selected}}</p>\r\n", dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatSelectModule }, { kind: "component", type: i2.MatSelect, selector: "mat-select", inputs: ["aria-describedby", "panelClass", "disabled", "disableRipple", "tabIndex", "hideSingleSelectionIndicator", "placeholder", "required", "multiple", "disableOptionCentering", "compareWith", "value", "aria-label", "aria-labelledby", "errorStateMatcher", "typeaheadDebounceInterval", "sortComparator", "id", "panelWidth"], outputs: ["openedChange", "opened", "closed", "selectionChange", "valueChange"], exportAs: ["matSelect"] }, { kind: "component", type: i3.MatOption, selector: "mat-option", inputs: ["value", "id", "disabled"], outputs: ["onSelectionChange"], exportAs: ["matOption"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: SelectValueBindingExample, decorators: [{
            type: Component,
            args: [{ selector: 'select-value-binding-example', standalone: true, imports: [MatFormFieldModule, MatSelectModule], template: "<mat-form-field>\r\n  <mat-label>Select an option</mat-label>\r\n  <mat-select [(value)]=\"selected\">\r\n    <mat-option>None</mat-option>\r\n    <mat-option value=\"option1\">Option 1</mat-option>\r\n    <mat-option value=\"option2\">Option 2</mat-option>\r\n    <mat-option value=\"option3\">Option 3</mat-option>\r\n  </mat-select>\r\n</mat-form-field>\r\n\r\n<p>You selected: {{selected}}</p>\r\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LXZhbHVlLWJpbmRpbmctZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NlbGVjdC9zZWxlY3QtdmFsdWUtYmluZGluZy9zZWxlY3QtdmFsdWUtYmluZGluZy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2VsZWN0L3NlbGVjdC12YWx1ZS1iaW5kaW5nL3NlbGVjdC12YWx1ZS1iaW5kaW5nLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQzs7Ozs7QUFFaEUsNkNBQTZDO0FBTzdDLE1BQU0sT0FBTyx5QkFBeUI7SUFOdEM7UUFPRSxhQUFRLEdBQUcsU0FBUyxDQUFDO0tBQ3RCOzhHQUZZLHlCQUF5QjtrR0FBekIseUJBQXlCLHdGQ1h0QyxtWkFXQSwyQ0RGWSxrQkFBa0IsMFNBQUUsZUFBZTs7MkZBRWxDLHlCQUF5QjtrQkFOckMsU0FBUzsrQkFDRSw4QkFBOEIsY0FFNUIsSUFBSSxXQUNQLENBQUMsa0JBQWtCLEVBQUUsZUFBZSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge01hdFNlbGVjdE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2VsZWN0JztcclxuaW1wb3J0IHtNYXRGb3JtRmllbGRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xyXG5cclxuLyoqIEB0aXRsZSBTZWxlY3Qgd2l0aCAyLXdheSB2YWx1ZSBiaW5kaW5nICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc2VsZWN0LXZhbHVlLWJpbmRpbmctZXhhbXBsZScsXHJcbiAgdGVtcGxhdGVVcmw6ICdzZWxlY3QtdmFsdWUtYmluZGluZy1leGFtcGxlLmh0bWwnLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgaW1wb3J0czogW01hdEZvcm1GaWVsZE1vZHVsZSwgTWF0U2VsZWN0TW9kdWxlXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFNlbGVjdFZhbHVlQmluZGluZ0V4YW1wbGUge1xyXG4gIHNlbGVjdGVkID0gJ29wdGlvbjInO1xyXG59XHJcbiIsIjxtYXQtZm9ybS1maWVsZD5cclxuICA8bWF0LWxhYmVsPlNlbGVjdCBhbiBvcHRpb248L21hdC1sYWJlbD5cclxuICA8bWF0LXNlbGVjdCBbKHZhbHVlKV09XCJzZWxlY3RlZFwiPlxyXG4gICAgPG1hdC1vcHRpb24+Tm9uZTwvbWF0LW9wdGlvbj5cclxuICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwib3B0aW9uMVwiPk9wdGlvbiAxPC9tYXQtb3B0aW9uPlxyXG4gICAgPG1hdC1vcHRpb24gdmFsdWU9XCJvcHRpb24yXCI+T3B0aW9uIDI8L21hdC1vcHRpb24+XHJcbiAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cIm9wdGlvbjNcIj5PcHRpb24gMzwvbWF0LW9wdGlvbj5cclxuICA8L21hdC1zZWxlY3Q+XHJcbjwvbWF0LWZvcm0tZmllbGQ+XHJcblxyXG48cD5Zb3Ugc2VsZWN0ZWQ6IHt7c2VsZWN0ZWR9fTwvcD5cclxuIl19