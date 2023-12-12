import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/input";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/material/button";
import * as i5 from "@angular/material/tooltip";
/**
 * @title Tooltip with a show and hide delay
 */
export class TooltipDelayExample {
    constructor() {
        this.showDelay = new FormControl(1000);
        this.hideDelay = new FormControl(2000);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TooltipDelayExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: TooltipDelayExample, isStandalone: true, selector: "tooltip-delay-example", ngImport: i0, template: "<mat-form-field class=\"example-user-input\">\r\n  <mat-label>Show delay</mat-label>\r\n  <input matInput type=\"number\" [formControl]=\"showDelay\"\r\n         aria-label=\"Adds a delay between hovering over the button and displaying the tooltip\">\r\n  <mat-hint>milliseconds</mat-hint>\r\n</mat-form-field>\r\n\r\n<mat-form-field class=\"example-user-input\">\r\n  <mat-label>Hide delay</mat-label>\r\n  <input matInput type=\"number\" [formControl]=\"hideDelay\"\r\n         aria-label=\"Adds a delay between hovering away from the button and hiding the tooltip\">\r\n  <mat-hint>milliseconds</mat-hint>\r\n</mat-form-field>\r\n\r\n<button mat-raised-button matTooltip=\"Info about the action\"\r\n        [matTooltipShowDelay]=\"showDelay.value\"\r\n        [matTooltipHideDelay]=\"hideDelay.value\"\r\n        aria-label=\"Button that displays a tooltip with a customized delay in showing and hiding\">\r\n  Action\r\n</button>\r\n", styles: [".mat-form-field + .mat-form-field,\r\n.mat-raised-button {\r\n  margin-left: 8px;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "directive", type: i1.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i2.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i3.NumberValueAccessor, selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]" }, { kind: "directive", type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i3.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i4.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatTooltipModule }, { kind: "directive", type: i5.MatTooltip, selector: "[matTooltip]", inputs: ["matTooltipPosition", "matTooltipPositionAtOrigin", "matTooltipDisabled", "matTooltipShowDelay", "matTooltipHideDelay", "matTooltipTouchGestures", "matTooltip", "matTooltipClass"], exportAs: ["matTooltip"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TooltipDelayExample, decorators: [{
            type: Component,
            args: [{ selector: 'tooltip-delay-example', standalone: true, imports: [
                        MatFormFieldModule,
                        MatInputModule,
                        FormsModule,
                        ReactiveFormsModule,
                        MatButtonModule,
                        MatTooltipModule,
                    ], template: "<mat-form-field class=\"example-user-input\">\r\n  <mat-label>Show delay</mat-label>\r\n  <input matInput type=\"number\" [formControl]=\"showDelay\"\r\n         aria-label=\"Adds a delay between hovering over the button and displaying the tooltip\">\r\n  <mat-hint>milliseconds</mat-hint>\r\n</mat-form-field>\r\n\r\n<mat-form-field class=\"example-user-input\">\r\n  <mat-label>Hide delay</mat-label>\r\n  <input matInput type=\"number\" [formControl]=\"hideDelay\"\r\n         aria-label=\"Adds a delay between hovering away from the button and hiding the tooltip\">\r\n  <mat-hint>milliseconds</mat-hint>\r\n</mat-form-field>\r\n\r\n<button mat-raised-button matTooltip=\"Info about the action\"\r\n        [matTooltipShowDelay]=\"showDelay.value\"\r\n        [matTooltipHideDelay]=\"hideDelay.value\"\r\n        aria-label=\"Button that displays a tooltip with a customized delay in showing and hiding\">\r\n  Action\r\n</button>\r\n", styles: [".mat-form-field + .mat-form-field,\r\n.mat-raised-button {\r\n  margin-left: 8px;\r\n}\r\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC1kZWxheS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvdG9vbHRpcC90b29sdGlwLWRlbGF5L3Rvb2x0aXAtZGVsYXktZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3Rvb2x0aXAvdG9vbHRpcC1kZWxheS90b29sdGlwLWRlbGF5LWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxXQUFXLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0UsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDM0QsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQzs7Ozs7OztBQUVoRTs7R0FFRztBQWVILE1BQU0sT0FBTyxtQkFBbUI7SUFkaEM7UUFlRSxjQUFTLEdBQUcsSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEMsY0FBUyxHQUFHLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ25DOzhHQUhZLG1CQUFtQjtrR0FBbkIsbUJBQW1CLGlGQ3hCaEMsNDZCQW9CQSxtSkRKSSxrQkFBa0Isa1lBQ2xCLGNBQWMsMFdBQ2QsV0FBVyx3akJBQ1gsbUJBQW1CLGlOQUNuQixlQUFlLDJOQUNmLGdCQUFnQjs7MkZBR1AsbUJBQW1CO2tCQWQvQixTQUFTOytCQUNFLHVCQUF1QixjQUdyQixJQUFJLFdBQ1A7d0JBQ1Asa0JBQWtCO3dCQUNsQixjQUFjO3dCQUNkLFdBQVc7d0JBQ1gsbUJBQW1CO3dCQUNuQixlQUFlO3dCQUNmLGdCQUFnQjtxQkFDakIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Rm9ybUNvbnRyb2wsIEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7TWF0VG9vbHRpcE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdG9vbHRpcCc7XHJcbmltcG9ydCB7TWF0QnV0dG9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xyXG5pbXBvcnQge01hdElucHV0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XHJcbmltcG9ydCB7TWF0Rm9ybUZpZWxkTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcclxuXHJcbi8qKlxyXG4gKiBAdGl0bGUgVG9vbHRpcCB3aXRoIGEgc2hvdyBhbmQgaGlkZSBkZWxheVxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICd0b29sdGlwLWRlbGF5LWV4YW1wbGUnLFxyXG4gIHRlbXBsYXRlVXJsOiAndG9vbHRpcC1kZWxheS1leGFtcGxlLmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWyd0b29sdGlwLWRlbGF5LWV4YW1wbGUuY3NzJ10sXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBNYXRGb3JtRmllbGRNb2R1bGUsXHJcbiAgICBNYXRJbnB1dE1vZHVsZSxcclxuICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcclxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcclxuICAgIE1hdFRvb2x0aXBNb2R1bGUsXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFRvb2x0aXBEZWxheUV4YW1wbGUge1xyXG4gIHNob3dEZWxheSA9IG5ldyBGb3JtQ29udHJvbCgxMDAwKTtcclxuICBoaWRlRGVsYXkgPSBuZXcgRm9ybUNvbnRyb2woMjAwMCk7XHJcbn1cclxuIiwiPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZXhhbXBsZS11c2VyLWlucHV0XCI+XHJcbiAgPG1hdC1sYWJlbD5TaG93IGRlbGF5PC9tYXQtbGFiZWw+XHJcbiAgPGlucHV0IG1hdElucHV0IHR5cGU9XCJudW1iZXJcIiBbZm9ybUNvbnRyb2xdPVwic2hvd0RlbGF5XCJcclxuICAgICAgICAgYXJpYS1sYWJlbD1cIkFkZHMgYSBkZWxheSBiZXR3ZWVuIGhvdmVyaW5nIG92ZXIgdGhlIGJ1dHRvbiBhbmQgZGlzcGxheWluZyB0aGUgdG9vbHRpcFwiPlxyXG4gIDxtYXQtaGludD5taWxsaXNlY29uZHM8L21hdC1oaW50PlxyXG48L21hdC1mb3JtLWZpZWxkPlxyXG5cclxuPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZXhhbXBsZS11c2VyLWlucHV0XCI+XHJcbiAgPG1hdC1sYWJlbD5IaWRlIGRlbGF5PC9tYXQtbGFiZWw+XHJcbiAgPGlucHV0IG1hdElucHV0IHR5cGU9XCJudW1iZXJcIiBbZm9ybUNvbnRyb2xdPVwiaGlkZURlbGF5XCJcclxuICAgICAgICAgYXJpYS1sYWJlbD1cIkFkZHMgYSBkZWxheSBiZXR3ZWVuIGhvdmVyaW5nIGF3YXkgZnJvbSB0aGUgYnV0dG9uIGFuZCBoaWRpbmcgdGhlIHRvb2x0aXBcIj5cclxuICA8bWF0LWhpbnQ+bWlsbGlzZWNvbmRzPC9tYXQtaGludD5cclxuPC9tYXQtZm9ybS1maWVsZD5cclxuXHJcbjxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gbWF0VG9vbHRpcD1cIkluZm8gYWJvdXQgdGhlIGFjdGlvblwiXHJcbiAgICAgICAgW21hdFRvb2x0aXBTaG93RGVsYXldPVwic2hvd0RlbGF5LnZhbHVlXCJcclxuICAgICAgICBbbWF0VG9vbHRpcEhpZGVEZWxheV09XCJoaWRlRGVsYXkudmFsdWVcIlxyXG4gICAgICAgIGFyaWEtbGFiZWw9XCJCdXR0b24gdGhhdCBkaXNwbGF5cyBhIHRvb2x0aXAgd2l0aCBhIGN1c3RvbWl6ZWQgZGVsYXkgaW4gc2hvd2luZyBhbmQgaGlkaW5nXCI+XHJcbiAgQWN0aW9uXHJcbjwvYnV0dG9uPlxyXG4iXX0=