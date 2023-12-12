import { Component } from '@angular/core';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/card";
import * as i2 from "@angular/material/checkbox";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/material/radio";
/**
 * @title Configurable checkbox
 */
export class CheckboxConfigurableExample {
    constructor() {
        this.checked = false;
        this.indeterminate = false;
        this.labelPosition = 'after';
        this.disabled = false;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: CheckboxConfigurableExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: CheckboxConfigurableExample, isStandalone: true, selector: "checkbox-configurable-example", ngImport: i0, template: "<mat-card>\r\n  <mat-card-content>\r\n    <h2 class=\"example-h2\">Checkbox configuration</h2>\r\n\r\n    <section class=\"example-section\">\r\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"checked\">Checked</mat-checkbox>\r\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"indeterminate\">Indeterminate</mat-checkbox>\r\n    </section>\r\n\r\n    <section class=\"example-section\">\r\n      <label class=\"example-margin\">Align:</label>\r\n      <mat-radio-group [(ngModel)]=\"labelPosition\">\r\n        <mat-radio-button class=\"example-margin\" value=\"after\">After</mat-radio-button>\r\n        <mat-radio-button class=\"example-margin\" value=\"before\">Before</mat-radio-button>\r\n      </mat-radio-group>\r\n    </section>\r\n\r\n    <section class=\"example-section\">\r\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"disabled\">Disabled</mat-checkbox>\r\n    </section>\r\n  </mat-card-content>\r\n</mat-card>\r\n\r\n<mat-card class=\"result\">\r\n  <mat-card-content>\r\n    <h2 class=\"example-h2\">Result</h2>\r\n\r\n    <section class=\"example-section\">\r\n      <mat-checkbox\r\n          class=\"example-margin\"\r\n          [(ngModel)]=\"checked\"\r\n          [(indeterminate)]=\"indeterminate\"\r\n          [labelPosition]=\"labelPosition\"\r\n          [disabled]=\"disabled\">\r\n        I'm a checkbox\r\n      </mat-checkbox>\r\n    </section>\r\n  </mat-card-content>\r\n</mat-card>\r\n", styles: [".example-h2 {\r\n  margin: 10px;\r\n}\r\n\r\n.example-section {\r\n  display: flex;\r\n  align-content: center;\r\n  align-items: center;\r\n  height: 60px;\r\n}\r\n\r\n.example-margin {\r\n  margin: 0 10px;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: MatCardModule }, { kind: "component", type: i1.MatCard, selector: "mat-card", inputs: ["appearance"], exportAs: ["matCard"] }, { kind: "directive", type: i1.MatCardContent, selector: "mat-card-content" }, { kind: "ngmodule", type: MatCheckboxModule }, { kind: "component", type: i2.MatCheckbox, selector: "mat-checkbox", inputs: ["aria-label", "aria-labelledby", "aria-describedby", "id", "required", "labelPosition", "name", "value", "disableRipple", "tabIndex", "color", "checked", "disabled", "indeterminate"], outputs: ["change", "indeterminateChange"], exportAs: ["matCheckbox"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "ngmodule", type: MatRadioModule }, { kind: "directive", type: i4.MatRadioGroup, selector: "mat-radio-group", inputs: ["color", "name", "labelPosition", "value", "selected", "disabled", "required"], outputs: ["change"], exportAs: ["matRadioGroup"] }, { kind: "component", type: i4.MatRadioButton, selector: "mat-radio-button", inputs: ["id", "name", "aria-label", "aria-labelledby", "aria-describedby", "disableRipple", "tabIndex", "checked", "value", "labelPosition", "disabled", "required", "color"], outputs: ["change"], exportAs: ["matRadioButton"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: CheckboxConfigurableExample, decorators: [{
            type: Component,
            args: [{ selector: 'checkbox-configurable-example', standalone: true, imports: [MatCardModule, MatCheckboxModule, FormsModule, MatRadioModule], template: "<mat-card>\r\n  <mat-card-content>\r\n    <h2 class=\"example-h2\">Checkbox configuration</h2>\r\n\r\n    <section class=\"example-section\">\r\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"checked\">Checked</mat-checkbox>\r\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"indeterminate\">Indeterminate</mat-checkbox>\r\n    </section>\r\n\r\n    <section class=\"example-section\">\r\n      <label class=\"example-margin\">Align:</label>\r\n      <mat-radio-group [(ngModel)]=\"labelPosition\">\r\n        <mat-radio-button class=\"example-margin\" value=\"after\">After</mat-radio-button>\r\n        <mat-radio-button class=\"example-margin\" value=\"before\">Before</mat-radio-button>\r\n      </mat-radio-group>\r\n    </section>\r\n\r\n    <section class=\"example-section\">\r\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"disabled\">Disabled</mat-checkbox>\r\n    </section>\r\n  </mat-card-content>\r\n</mat-card>\r\n\r\n<mat-card class=\"result\">\r\n  <mat-card-content>\r\n    <h2 class=\"example-h2\">Result</h2>\r\n\r\n    <section class=\"example-section\">\r\n      <mat-checkbox\r\n          class=\"example-margin\"\r\n          [(ngModel)]=\"checked\"\r\n          [(indeterminate)]=\"indeterminate\"\r\n          [labelPosition]=\"labelPosition\"\r\n          [disabled]=\"disabled\">\r\n        I'm a checkbox\r\n      </mat-checkbox>\r\n    </section>\r\n  </mat-card-content>\r\n</mat-card>\r\n", styles: [".example-h2 {\r\n  margin: 10px;\r\n}\r\n\r\n.example-section {\r\n  display: flex;\r\n  align-content: center;\r\n  align-items: center;\r\n  height: 60px;\r\n}\r\n\r\n.example-margin {\r\n  margin: 0 10px;\r\n}\r\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3gtY29uZmlndXJhYmxlLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jaGVja2JveC9jaGVja2JveC1jb25maWd1cmFibGUvY2hlY2tib3gtY29uZmlndXJhYmxlLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jaGVja2JveC9jaGVja2JveC1jb25maWd1cmFibGUvY2hlY2tib3gtY29uZmlndXJhYmxlLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDN0QsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDOzs7Ozs7QUFFckQ7O0dBRUc7QUFRSCxNQUFNLE9BQU8sMkJBQTJCO0lBUHhDO1FBUUUsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUN0QixrQkFBYSxHQUF1QixPQUFPLENBQUM7UUFDNUMsYUFBUSxHQUFHLEtBQUssQ0FBQztLQUNsQjs4R0FMWSwyQkFBMkI7a0dBQTNCLDJCQUEyQix5RkNoQnhDLGs3Q0F1Q0EsaVJEekJZLGFBQWEsME5BQUUsaUJBQWlCLDZXQUFFLFdBQVcsOFZBQUUsY0FBYzs7MkZBRTVELDJCQUEyQjtrQkFQdkMsU0FBUzsrQkFDRSwrQkFBK0IsY0FHN0IsSUFBSSxXQUNQLENBQUMsYUFBYSxFQUFFLGlCQUFpQixFQUFFLFdBQVcsRUFBRSxjQUFjLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7TWF0UmFkaW9Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3JhZGlvJztcclxuaW1wb3J0IHtGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQge01hdENoZWNrYm94TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jaGVja2JveCc7XHJcbmltcG9ydCB7TWF0Q2FyZE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2FyZCc7XHJcblxyXG4vKipcclxuICogQHRpdGxlIENvbmZpZ3VyYWJsZSBjaGVja2JveFxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjaGVja2JveC1jb25maWd1cmFibGUtZXhhbXBsZScsXHJcbiAgdGVtcGxhdGVVcmw6ICdjaGVja2JveC1jb25maWd1cmFibGUtZXhhbXBsZS5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnY2hlY2tib3gtY29uZmlndXJhYmxlLWV4YW1wbGUuY3NzJ10sXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBpbXBvcnRzOiBbTWF0Q2FyZE1vZHVsZSwgTWF0Q2hlY2tib3hNb2R1bGUsIEZvcm1zTW9kdWxlLCBNYXRSYWRpb01vZHVsZV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDaGVja2JveENvbmZpZ3VyYWJsZUV4YW1wbGUge1xyXG4gIGNoZWNrZWQgPSBmYWxzZTtcclxuICBpbmRldGVybWluYXRlID0gZmFsc2U7XHJcbiAgbGFiZWxQb3NpdGlvbjogJ2JlZm9yZScgfCAnYWZ0ZXInID0gJ2FmdGVyJztcclxuICBkaXNhYmxlZCA9IGZhbHNlO1xyXG59XHJcbiIsIjxtYXQtY2FyZD5cclxuICA8bWF0LWNhcmQtY29udGVudD5cclxuICAgIDxoMiBjbGFzcz1cImV4YW1wbGUtaDJcIj5DaGVja2JveCBjb25maWd1cmF0aW9uPC9oMj5cclxuXHJcbiAgICA8c2VjdGlvbiBjbGFzcz1cImV4YW1wbGUtc2VjdGlvblwiPlxyXG4gICAgICA8bWF0LWNoZWNrYm94IGNsYXNzPVwiZXhhbXBsZS1tYXJnaW5cIiBbKG5nTW9kZWwpXT1cImNoZWNrZWRcIj5DaGVja2VkPC9tYXQtY2hlY2tib3g+XHJcbiAgICAgIDxtYXQtY2hlY2tib3ggY2xhc3M9XCJleGFtcGxlLW1hcmdpblwiIFsobmdNb2RlbCldPVwiaW5kZXRlcm1pbmF0ZVwiPkluZGV0ZXJtaW5hdGU8L21hdC1jaGVja2JveD5cclxuICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICA8c2VjdGlvbiBjbGFzcz1cImV4YW1wbGUtc2VjdGlvblwiPlxyXG4gICAgICA8bGFiZWwgY2xhc3M9XCJleGFtcGxlLW1hcmdpblwiPkFsaWduOjwvbGFiZWw+XHJcbiAgICAgIDxtYXQtcmFkaW8tZ3JvdXAgWyhuZ01vZGVsKV09XCJsYWJlbFBvc2l0aW9uXCI+XHJcbiAgICAgICAgPG1hdC1yYWRpby1idXR0b24gY2xhc3M9XCJleGFtcGxlLW1hcmdpblwiIHZhbHVlPVwiYWZ0ZXJcIj5BZnRlcjwvbWF0LXJhZGlvLWJ1dHRvbj5cclxuICAgICAgICA8bWF0LXJhZGlvLWJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtbWFyZ2luXCIgdmFsdWU9XCJiZWZvcmVcIj5CZWZvcmU8L21hdC1yYWRpby1idXR0b24+XHJcbiAgICAgIDwvbWF0LXJhZGlvLWdyb3VwPlxyXG4gICAgPC9zZWN0aW9uPlxyXG5cclxuICAgIDxzZWN0aW9uIGNsYXNzPVwiZXhhbXBsZS1zZWN0aW9uXCI+XHJcbiAgICAgIDxtYXQtY2hlY2tib3ggY2xhc3M9XCJleGFtcGxlLW1hcmdpblwiIFsobmdNb2RlbCldPVwiZGlzYWJsZWRcIj5EaXNhYmxlZDwvbWF0LWNoZWNrYm94PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gIDwvbWF0LWNhcmQtY29udGVudD5cclxuPC9tYXQtY2FyZD5cclxuXHJcbjxtYXQtY2FyZCBjbGFzcz1cInJlc3VsdFwiPlxyXG4gIDxtYXQtY2FyZC1jb250ZW50PlxyXG4gICAgPGgyIGNsYXNzPVwiZXhhbXBsZS1oMlwiPlJlc3VsdDwvaDI+XHJcblxyXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJleGFtcGxlLXNlY3Rpb25cIj5cclxuICAgICAgPG1hdC1jaGVja2JveFxyXG4gICAgICAgICAgY2xhc3M9XCJleGFtcGxlLW1hcmdpblwiXHJcbiAgICAgICAgICBbKG5nTW9kZWwpXT1cImNoZWNrZWRcIlxyXG4gICAgICAgICAgWyhpbmRldGVybWluYXRlKV09XCJpbmRldGVybWluYXRlXCJcclxuICAgICAgICAgIFtsYWJlbFBvc2l0aW9uXT1cImxhYmVsUG9zaXRpb25cIlxyXG4gICAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCI+XHJcbiAgICAgICAgSSdtIGEgY2hlY2tib3hcclxuICAgICAgPC9tYXQtY2hlY2tib3g+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgPC9tYXQtY2FyZC1jb250ZW50PlxyXG48L21hdC1jYXJkPlxyXG4iXX0=