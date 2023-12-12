import { Component } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button-toggle";
/**
 * @title Testing with MatButtonToggleHarness
 */
export class ButtonToggleHarnessExample {
    constructor() {
        this.disabled = false;
        this.appearance = 'standard';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: ButtonToggleHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: ButtonToggleHarnessExample, isStandalone: true, selector: "button-toggle-harness-example", ngImport: i0, template: "<mat-button-toggle-group [disabled]=\"disabled\" [appearance]=\"appearance\">\r\n  <mat-button-toggle value=\"1\">One</mat-button-toggle>\r\n  <mat-button-toggle value=\"2\">Two</mat-button-toggle>\r\n</mat-button-toggle-group>\r\n", dependencies: [{ kind: "ngmodule", type: MatButtonToggleModule }, { kind: "directive", type: i1.MatButtonToggleGroup, selector: "mat-button-toggle-group", inputs: ["appearance", "name", "vertical", "value", "multiple", "disabled"], outputs: ["valueChange", "change"], exportAs: ["matButtonToggleGroup"] }, { kind: "component", type: i1.MatButtonToggle, selector: "mat-button-toggle", inputs: ["aria-label", "aria-labelledby", "id", "name", "value", "tabIndex", "disableRipple", "appearance", "checked", "disabled"], outputs: ["change"], exportAs: ["matButtonToggle"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: ButtonToggleHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'button-toggle-harness-example', standalone: true, imports: [MatButtonToggleModule], template: "<mat-button-toggle-group [disabled]=\"disabled\" [appearance]=\"appearance\">\r\n  <mat-button-toggle value=\"1\">One</mat-button-toggle>\r\n  <mat-button-toggle value=\"2\">Two</mat-button-toggle>\r\n</mat-button-toggle-group>\r\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLXRvZ2dsZS1oYXJuZXNzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9idXR0b24tdG9nZ2xlL2J1dHRvbi10b2dnbGUtaGFybmVzcy9idXR0b24tdG9nZ2xlLWhhcm5lc3MtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2J1dHRvbi10b2dnbGUvYnV0dG9uLXRvZ2dsZS1oYXJuZXNzL2J1dHRvbi10b2dnbGUtaGFybmVzcy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQTRCLHFCQUFxQixFQUFDLE1BQU0saUNBQWlDLENBQUM7OztBQUVqRzs7R0FFRztBQU9ILE1BQU0sT0FBTywwQkFBMEI7SUFOdkM7UUFPRSxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLGVBQVUsR0FBOEIsVUFBVSxDQUFDO0tBQ3BEOzhHQUhZLDBCQUEwQjtrR0FBMUIsMEJBQTBCLHlGQ1p2Qyx5T0FJQSwyQ0RNWSxxQkFBcUI7OzJGQUVwQiwwQkFBMEI7a0JBTnRDLFNBQVM7K0JBQ0UsK0JBQStCLGNBRTdCLElBQUksV0FDUCxDQUFDLHFCQUFxQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge01hdEJ1dHRvblRvZ2dsZUFwcGVhcmFuY2UsIE1hdEJ1dHRvblRvZ2dsZU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uLXRvZ2dsZSc7XHJcblxyXG4vKipcclxuICogQHRpdGxlIFRlc3Rpbmcgd2l0aCBNYXRCdXR0b25Ub2dnbGVIYXJuZXNzXHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2J1dHRvbi10b2dnbGUtaGFybmVzcy1leGFtcGxlJyxcclxuICB0ZW1wbGF0ZVVybDogJ2J1dHRvbi10b2dnbGUtaGFybmVzcy1leGFtcGxlLmh0bWwnLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgaW1wb3J0czogW01hdEJ1dHRvblRvZ2dsZU1vZHVsZV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCdXR0b25Ub2dnbGVIYXJuZXNzRXhhbXBsZSB7XHJcbiAgZGlzYWJsZWQgPSBmYWxzZTtcclxuICBhcHBlYXJhbmNlOiBNYXRCdXR0b25Ub2dnbGVBcHBlYXJhbmNlID0gJ3N0YW5kYXJkJztcclxufVxyXG4iLCI8bWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCIgW2FwcGVhcmFuY2VdPVwiYXBwZWFyYW5jZVwiPlxyXG4gIDxtYXQtYnV0dG9uLXRvZ2dsZSB2YWx1ZT1cIjFcIj5PbmU8L21hdC1idXR0b24tdG9nZ2xlPlxyXG4gIDxtYXQtYnV0dG9uLXRvZ2dsZSB2YWx1ZT1cIjJcIj5Ud288L21hdC1idXR0b24tdG9nZ2xlPlxyXG48L21hdC1idXR0b24tdG9nZ2xlLWdyb3VwPlxyXG4iXX0=