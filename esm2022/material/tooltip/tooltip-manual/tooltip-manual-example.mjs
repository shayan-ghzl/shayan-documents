import { Component } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
import * as i2 from "@angular/material/tooltip";
/**
 * @title Tooltip that can be manually shown/hidden.
 */
export class TooltipManualExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TooltipManualExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: TooltipManualExample, isStandalone: true, selector: "tooltip-manual-example", ngImport: i0, template: "<div>\r\n  <span> Click the following buttons to... </span>\r\n  <button mat-button\r\n          (click)=\"tooltip.show()\"\r\n          aria-label=\"Show tooltip on the button at the end of this section\"\r\n          class=\"example-action-button\">\r\n    show\r\n  </button>\r\n  <button mat-button\r\n          (click)=\"tooltip.hide()\"\r\n          aria-label=\"Hide tooltip on the button at the end of this section\"\r\n          class=\"example-action-button\">\r\n    hide\r\n  </button>\r\n  <button mat-button\r\n          (click)=\"tooltip.toggle()\"\r\n          aria-label=\"Show/Hide tooltip on the button at the end of this section\"\r\n          class=\"example-action-button\">\r\n    toggle show/hide\r\n  </button>\r\n</div>\r\n\r\n<button mat-raised-button #tooltip=\"matTooltip\"\r\n        matTooltip=\"Info about the action\"\r\n        matTooltipPosition=\"right\"\r\n        aria-tooltip=\"Button that displays and hides a tooltip triggered by other buttons\">\r\n  Action\r\n</button>", styles: [".example-action-button {\r\n  margin-top: 16px;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i1.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatTooltipModule }, { kind: "directive", type: i2.MatTooltip, selector: "[matTooltip]", inputs: ["matTooltipPosition", "matTooltipPositionAtOrigin", "matTooltipDisabled", "matTooltipShowDelay", "matTooltipHideDelay", "matTooltipTouchGestures", "matTooltip", "matTooltipClass"], exportAs: ["matTooltip"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TooltipManualExample, decorators: [{
            type: Component,
            args: [{ selector: 'tooltip-manual-example', standalone: true, imports: [MatButtonModule, MatTooltipModule], template: "<div>\r\n  <span> Click the following buttons to... </span>\r\n  <button mat-button\r\n          (click)=\"tooltip.show()\"\r\n          aria-label=\"Show tooltip on the button at the end of this section\"\r\n          class=\"example-action-button\">\r\n    show\r\n  </button>\r\n  <button mat-button\r\n          (click)=\"tooltip.hide()\"\r\n          aria-label=\"Hide tooltip on the button at the end of this section\"\r\n          class=\"example-action-button\">\r\n    hide\r\n  </button>\r\n  <button mat-button\r\n          (click)=\"tooltip.toggle()\"\r\n          aria-label=\"Show/Hide tooltip on the button at the end of this section\"\r\n          class=\"example-action-button\">\r\n    toggle show/hide\r\n  </button>\r\n</div>\r\n\r\n<button mat-raised-button #tooltip=\"matTooltip\"\r\n        matTooltip=\"Info about the action\"\r\n        matTooltipPosition=\"right\"\r\n        aria-tooltip=\"Button that displays and hides a tooltip triggered by other buttons\">\r\n  Action\r\n</button>", styles: [".example-action-button {\r\n  margin-top: 16px;\r\n}\r\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC1tYW51YWwtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3Rvb2x0aXAvdG9vbHRpcC1tYW51YWwvdG9vbHRpcC1tYW51YWwtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3Rvb2x0aXAvdG9vbHRpcC1tYW51YWwvdG9vbHRpcC1tYW51YWwtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDM0QsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDOzs7O0FBRXpEOztHQUVHO0FBUUgsTUFBTSxPQUFPLG9CQUFvQjs4R0FBcEIsb0JBQW9CO2tHQUFwQixvQkFBb0Isa0ZDZGpDLHMvQkEyQlMsaUhEZkcsZUFBZSwyTkFBRSxnQkFBZ0I7OzJGQUVoQyxvQkFBb0I7a0JBUGhDLFNBQVM7K0JBQ0Usd0JBQXdCLGNBR3RCLElBQUksV0FDUCxDQUFDLGVBQWUsRUFBRSxnQkFBZ0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtNYXRUb29sdGlwTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90b29sdGlwJztcclxuaW1wb3J0IHtNYXRCdXR0b25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XHJcblxyXG4vKipcclxuICogQHRpdGxlIFRvb2x0aXAgdGhhdCBjYW4gYmUgbWFudWFsbHkgc2hvd24vaGlkZGVuLlxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICd0b29sdGlwLW1hbnVhbC1leGFtcGxlJyxcclxuICB0ZW1wbGF0ZVVybDogJ3Rvb2x0aXAtbWFudWFsLWV4YW1wbGUuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJ3Rvb2x0aXAtbWFudWFsLWV4YW1wbGUuY3NzJ10sXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBpbXBvcnRzOiBbTWF0QnV0dG9uTW9kdWxlLCBNYXRUb29sdGlwTW9kdWxlXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFRvb2x0aXBNYW51YWxFeGFtcGxlIHt9XHJcbiIsIjxkaXY+XHJcbiAgPHNwYW4+IENsaWNrIHRoZSBmb2xsb3dpbmcgYnV0dG9ucyB0by4uLiA8L3NwYW4+XHJcbiAgPGJ1dHRvbiBtYXQtYnV0dG9uXHJcbiAgICAgICAgICAoY2xpY2spPVwidG9vbHRpcC5zaG93KClcIlxyXG4gICAgICAgICAgYXJpYS1sYWJlbD1cIlNob3cgdG9vbHRpcCBvbiB0aGUgYnV0dG9uIGF0IHRoZSBlbmQgb2YgdGhpcyBzZWN0aW9uXCJcclxuICAgICAgICAgIGNsYXNzPVwiZXhhbXBsZS1hY3Rpb24tYnV0dG9uXCI+XHJcbiAgICBzaG93XHJcbiAgPC9idXR0b24+XHJcbiAgPGJ1dHRvbiBtYXQtYnV0dG9uXHJcbiAgICAgICAgICAoY2xpY2spPVwidG9vbHRpcC5oaWRlKClcIlxyXG4gICAgICAgICAgYXJpYS1sYWJlbD1cIkhpZGUgdG9vbHRpcCBvbiB0aGUgYnV0dG9uIGF0IHRoZSBlbmQgb2YgdGhpcyBzZWN0aW9uXCJcclxuICAgICAgICAgIGNsYXNzPVwiZXhhbXBsZS1hY3Rpb24tYnV0dG9uXCI+XHJcbiAgICBoaWRlXHJcbiAgPC9idXR0b24+XHJcbiAgPGJ1dHRvbiBtYXQtYnV0dG9uXHJcbiAgICAgICAgICAoY2xpY2spPVwidG9vbHRpcC50b2dnbGUoKVwiXHJcbiAgICAgICAgICBhcmlhLWxhYmVsPVwiU2hvdy9IaWRlIHRvb2x0aXAgb24gdGhlIGJ1dHRvbiBhdCB0aGUgZW5kIG9mIHRoaXMgc2VjdGlvblwiXHJcbiAgICAgICAgICBjbGFzcz1cImV4YW1wbGUtYWN0aW9uLWJ1dHRvblwiPlxyXG4gICAgdG9nZ2xlIHNob3cvaGlkZVxyXG4gIDwvYnV0dG9uPlxyXG48L2Rpdj5cclxuXHJcbjxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gI3Rvb2x0aXA9XCJtYXRUb29sdGlwXCJcclxuICAgICAgICBtYXRUb29sdGlwPVwiSW5mbyBhYm91dCB0aGUgYWN0aW9uXCJcclxuICAgICAgICBtYXRUb29sdGlwUG9zaXRpb249XCJyaWdodFwiXHJcbiAgICAgICAgYXJpYS10b29sdGlwPVwiQnV0dG9uIHRoYXQgZGlzcGxheXMgYW5kIGhpZGVzIGEgdG9vbHRpcCB0cmlnZ2VyZWQgYnkgb3RoZXIgYnV0dG9uc1wiPlxyXG4gIEFjdGlvblxyXG48L2J1dHRvbj4iXX0=