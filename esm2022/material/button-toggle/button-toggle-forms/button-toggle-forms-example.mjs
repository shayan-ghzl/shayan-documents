import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button-toggle";
import * as i2 from "@angular/forms";
/**
 * @title Button-toggles with forms
 */
export class ButtonToggleFormsExample {
    constructor() {
        this.fontStyleControl = new FormControl('');
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: ButtonToggleFormsExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: ButtonToggleFormsExample, isStandalone: true, selector: "button-toggle-forms-example", ngImport: i0, template: "<section>\r\n  <h4>Button Toggle inside of a Template-driven form</h4>\r\n  <mat-button-toggle-group [(ngModel)]=\"fontStyle\" aria-label=\"Font Style\">\r\n    <mat-button-toggle value=\"bold\">Bold</mat-button-toggle>\r\n    <mat-button-toggle value=\"italic\">Italic</mat-button-toggle>\r\n    <mat-button-toggle value=\"underline\">Underline</mat-button-toggle>\r\n  </mat-button-toggle-group>\r\n  <p>Chosen value is {{fontStyle}}</p>\r\n</section>\r\n\r\n<section>\r\n  <h4>Button Toggle inside of a Reactive form</h4>\r\n  <mat-button-toggle-group [formControl]=\"fontStyleControl\" aria-label=\"Font Style\">\r\n    <mat-button-toggle value=\"bold\">Bold</mat-button-toggle>\r\n    <mat-button-toggle value=\"italic\">Italic</mat-button-toggle>\r\n    <mat-button-toggle value=\"underline\">Underline</mat-button-toggle>\r\n  </mat-button-toggle-group>\r\n  <p>Chosen value is {{fontStyleControl.value}}</p>\r\n</section>\r\n\r\n", dependencies: [{ kind: "ngmodule", type: MatButtonToggleModule }, { kind: "directive", type: i1.MatButtonToggleGroup, selector: "mat-button-toggle-group", inputs: ["appearance", "name", "vertical", "value", "multiple", "disabled"], outputs: ["valueChange", "change"], exportAs: ["matButtonToggleGroup"] }, { kind: "component", type: i1.MatButtonToggle, selector: "mat-button-toggle", inputs: ["aria-label", "aria-labelledby", "id", "name", "value", "tabIndex", "disableRipple", "appearance", "checked", "disabled"], outputs: ["change"], exportAs: ["matButtonToggle"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: ButtonToggleFormsExample, decorators: [{
            type: Component,
            args: [{ selector: 'button-toggle-forms-example', standalone: true, imports: [MatButtonToggleModule, FormsModule, ReactiveFormsModule], template: "<section>\r\n  <h4>Button Toggle inside of a Template-driven form</h4>\r\n  <mat-button-toggle-group [(ngModel)]=\"fontStyle\" aria-label=\"Font Style\">\r\n    <mat-button-toggle value=\"bold\">Bold</mat-button-toggle>\r\n    <mat-button-toggle value=\"italic\">Italic</mat-button-toggle>\r\n    <mat-button-toggle value=\"underline\">Underline</mat-button-toggle>\r\n  </mat-button-toggle-group>\r\n  <p>Chosen value is {{fontStyle}}</p>\r\n</section>\r\n\r\n<section>\r\n  <h4>Button Toggle inside of a Reactive form</h4>\r\n  <mat-button-toggle-group [formControl]=\"fontStyleControl\" aria-label=\"Font Style\">\r\n    <mat-button-toggle value=\"bold\">Bold</mat-button-toggle>\r\n    <mat-button-toggle value=\"italic\">Italic</mat-button-toggle>\r\n    <mat-button-toggle value=\"underline\">Underline</mat-button-toggle>\r\n  </mat-button-toggle-group>\r\n  <p>Chosen value is {{fontStyleControl.value}}</p>\r\n</section>\r\n\r\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLXRvZ2dsZS1mb3Jtcy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvYnV0dG9uLXRvZ2dsZS9idXR0b24tdG9nZ2xlLWZvcm1zL2J1dHRvbi10b2dnbGUtZm9ybXMtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2J1dHRvbi10b2dnbGUvYnV0dG9uLXRvZ2dsZS1mb3Jtcy9idXR0b24tdG9nZ2xlLWZvcm1zLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxXQUFXLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0UsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0saUNBQWlDLENBQUM7Ozs7QUFFdEU7O0dBRUc7QUFPSCxNQUFNLE9BQU8sd0JBQXdCO0lBTnJDO1FBT0UscUJBQWdCLEdBQUcsSUFBSSxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7S0FFeEM7OEdBSFksd0JBQXdCO2tHQUF4Qix3QkFBd0IsdUZDYnJDLDI2QkFvQkEsMkNEVFkscUJBQXFCLHNoQkFBRSxXQUFXLDhWQUFFLG1CQUFtQjs7MkZBRXRELHdCQUF3QjtrQkFOcEMsU0FBUzsrQkFDRSw2QkFBNkIsY0FFM0IsSUFBSSxXQUNQLENBQUMscUJBQXFCLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0Zvcm1Db250cm9sLCBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQge01hdEJ1dHRvblRvZ2dsZU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uLXRvZ2dsZSc7XHJcblxyXG4vKipcclxuICogQHRpdGxlIEJ1dHRvbi10b2dnbGVzIHdpdGggZm9ybXNcclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYnV0dG9uLXRvZ2dsZS1mb3Jtcy1leGFtcGxlJyxcclxuICB0ZW1wbGF0ZVVybDogJ2J1dHRvbi10b2dnbGUtZm9ybXMtZXhhbXBsZS5odG1sJyxcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gIGltcG9ydHM6IFtNYXRCdXR0b25Ub2dnbGVNb2R1bGUsIEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEJ1dHRvblRvZ2dsZUZvcm1zRXhhbXBsZSB7XHJcbiAgZm9udFN0eWxlQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgnJyk7XHJcbiAgZm9udFN0eWxlPzogc3RyaW5nO1xyXG59XHJcbiIsIjxzZWN0aW9uPlxyXG4gIDxoND5CdXR0b24gVG9nZ2xlIGluc2lkZSBvZiBhIFRlbXBsYXRlLWRyaXZlbiBmb3JtPC9oND5cclxuICA8bWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAgWyhuZ01vZGVsKV09XCJmb250U3R5bGVcIiBhcmlhLWxhYmVsPVwiRm9udCBTdHlsZVwiPlxyXG4gICAgPG1hdC1idXR0b24tdG9nZ2xlIHZhbHVlPVwiYm9sZFwiPkJvbGQ8L21hdC1idXR0b24tdG9nZ2xlPlxyXG4gICAgPG1hdC1idXR0b24tdG9nZ2xlIHZhbHVlPVwiaXRhbGljXCI+SXRhbGljPC9tYXQtYnV0dG9uLXRvZ2dsZT5cclxuICAgIDxtYXQtYnV0dG9uLXRvZ2dsZSB2YWx1ZT1cInVuZGVybGluZVwiPlVuZGVybGluZTwvbWF0LWJ1dHRvbi10b2dnbGU+XHJcbiAgPC9tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cD5cclxuICA8cD5DaG9zZW4gdmFsdWUgaXMge3tmb250U3R5bGV9fTwvcD5cclxuPC9zZWN0aW9uPlxyXG5cclxuPHNlY3Rpb24+XHJcbiAgPGg0PkJ1dHRvbiBUb2dnbGUgaW5zaWRlIG9mIGEgUmVhY3RpdmUgZm9ybTwvaDQ+XHJcbiAgPG1hdC1idXR0b24tdG9nZ2xlLWdyb3VwIFtmb3JtQ29udHJvbF09XCJmb250U3R5bGVDb250cm9sXCIgYXJpYS1sYWJlbD1cIkZvbnQgU3R5bGVcIj5cclxuICAgIDxtYXQtYnV0dG9uLXRvZ2dsZSB2YWx1ZT1cImJvbGRcIj5Cb2xkPC9tYXQtYnV0dG9uLXRvZ2dsZT5cclxuICAgIDxtYXQtYnV0dG9uLXRvZ2dsZSB2YWx1ZT1cIml0YWxpY1wiPkl0YWxpYzwvbWF0LWJ1dHRvbi10b2dnbGU+XHJcbiAgICA8bWF0LWJ1dHRvbi10b2dnbGUgdmFsdWU9XCJ1bmRlcmxpbmVcIj5VbmRlcmxpbmU8L21hdC1idXR0b24tdG9nZ2xlPlxyXG4gIDwvbWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXA+XHJcbiAgPHA+Q2hvc2VuIHZhbHVlIGlzIHt7Zm9udFN0eWxlQ29udHJvbC52YWx1ZX19PC9wPlxyXG48L3NlY3Rpb24+XHJcblxyXG4iXX0=