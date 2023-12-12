import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/card";
import * as i2 from "@angular/material/button";
/**
 * @title Card with actions alignment option
 */
export class CardActionsExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: CardActionsExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: CardActionsExample, isStandalone: true, selector: "card-actions-example", ngImport: i0, template: "<mat-card>\r\n  <mat-card-header>\r\n    <mat-card-title>Actions Buttons</mat-card-title>\r\n    <mat-card-subtitle>Start</mat-card-subtitle>\r\n  </mat-card-header>\r\n  <mat-card-actions>\r\n    <button mat-button>LIKE</button>\r\n    <button mat-button>SHARE</button>\r\n  </mat-card-actions>\r\n</mat-card>\r\n<br>\r\n<mat-card>\r\n  <mat-card-header>\r\n    <mat-card-title>Actions Buttons</mat-card-title>\r\n    <mat-card-subtitle>End</mat-card-subtitle>\r\n  </mat-card-header>\r\n  <mat-card-actions align=\"end\">\r\n    <button mat-button>LIKE</button>\r\n    <button mat-button>SHARE</button>\r\n  </mat-card-actions>\r\n</mat-card>\r\n", dependencies: [{ kind: "ngmodule", type: MatCardModule }, { kind: "component", type: i1.MatCard, selector: "mat-card", inputs: ["appearance"], exportAs: ["matCard"] }, { kind: "directive", type: i1.MatCardActions, selector: "mat-card-actions", inputs: ["align"], exportAs: ["matCardActions"] }, { kind: "component", type: i1.MatCardHeader, selector: "mat-card-header" }, { kind: "directive", type: i1.MatCardSubtitle, selector: "mat-card-subtitle, [mat-card-subtitle], [matCardSubtitle]" }, { kind: "directive", type: i1.MatCardTitle, selector: "mat-card-title, [mat-card-title], [matCardTitle]" }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i2.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: CardActionsExample, decorators: [{
            type: Component,
            args: [{ selector: 'card-actions-example', standalone: true, imports: [MatCardModule, MatButtonModule], template: "<mat-card>\r\n  <mat-card-header>\r\n    <mat-card-title>Actions Buttons</mat-card-title>\r\n    <mat-card-subtitle>Start</mat-card-subtitle>\r\n  </mat-card-header>\r\n  <mat-card-actions>\r\n    <button mat-button>LIKE</button>\r\n    <button mat-button>SHARE</button>\r\n  </mat-card-actions>\r\n</mat-card>\r\n<br>\r\n<mat-card>\r\n  <mat-card-header>\r\n    <mat-card-title>Actions Buttons</mat-card-title>\r\n    <mat-card-subtitle>End</mat-card-subtitle>\r\n  </mat-card-header>\r\n  <mat-card-actions align=\"end\">\r\n    <button mat-button>LIKE</button>\r\n    <button mat-button>SHARE</button>\r\n  </mat-card-actions>\r\n</mat-card>\r\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC1hY3Rpb25zLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jYXJkL2NhcmQtYWN0aW9ucy9jYXJkLWFjdGlvbnMtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2NhcmQvY2FyZC1hY3Rpb25zL2NhcmQtYWN0aW9ucy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDOzs7O0FBRXJEOztHQUVHO0FBT0gsTUFBTSxPQUFPLGtCQUFrQjs4R0FBbEIsa0JBQWtCO2tHQUFsQixrQkFBa0IsZ0ZDYi9CLDBvQkFxQkEsMkNEVlksYUFBYSwyakJBQUUsZUFBZTs7MkZBRTdCLGtCQUFrQjtrQkFOOUIsU0FBUzsrQkFDRSxzQkFBc0IsY0FFcEIsSUFBSSxXQUNQLENBQUMsYUFBYSxFQUFFLGVBQWUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtNYXRCdXR0b25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XHJcbmltcG9ydCB7TWF0Q2FyZE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2FyZCc7XHJcblxyXG4vKipcclxuICogQHRpdGxlIENhcmQgd2l0aCBhY3Rpb25zIGFsaWdubWVudCBvcHRpb25cclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY2FyZC1hY3Rpb25zLWV4YW1wbGUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnY2FyZC1hY3Rpb25zLWV4YW1wbGUuaHRtbCcsXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBpbXBvcnRzOiBbTWF0Q2FyZE1vZHVsZSwgTWF0QnV0dG9uTW9kdWxlXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIENhcmRBY3Rpb25zRXhhbXBsZSB7fVxyXG4iLCI8bWF0LWNhcmQ+XHJcbiAgPG1hdC1jYXJkLWhlYWRlcj5cclxuICAgIDxtYXQtY2FyZC10aXRsZT5BY3Rpb25zIEJ1dHRvbnM8L21hdC1jYXJkLXRpdGxlPlxyXG4gICAgPG1hdC1jYXJkLXN1YnRpdGxlPlN0YXJ0PC9tYXQtY2FyZC1zdWJ0aXRsZT5cclxuICA8L21hdC1jYXJkLWhlYWRlcj5cclxuICA8bWF0LWNhcmQtYWN0aW9ucz5cclxuICAgIDxidXR0b24gbWF0LWJ1dHRvbj5MSUtFPC9idXR0b24+XHJcbiAgICA8YnV0dG9uIG1hdC1idXR0b24+U0hBUkU8L2J1dHRvbj5cclxuICA8L21hdC1jYXJkLWFjdGlvbnM+XHJcbjwvbWF0LWNhcmQ+XHJcbjxicj5cclxuPG1hdC1jYXJkPlxyXG4gIDxtYXQtY2FyZC1oZWFkZXI+XHJcbiAgICA8bWF0LWNhcmQtdGl0bGU+QWN0aW9ucyBCdXR0b25zPC9tYXQtY2FyZC10aXRsZT5cclxuICAgIDxtYXQtY2FyZC1zdWJ0aXRsZT5FbmQ8L21hdC1jYXJkLXN1YnRpdGxlPlxyXG4gIDwvbWF0LWNhcmQtaGVhZGVyPlxyXG4gIDxtYXQtY2FyZC1hY3Rpb25zIGFsaWduPVwiZW5kXCI+XHJcbiAgICA8YnV0dG9uIG1hdC1idXR0b24+TElLRTwvYnV0dG9uPlxyXG4gICAgPGJ1dHRvbiBtYXQtYnV0dG9uPlNIQVJFPC9idXR0b24+XHJcbiAgPC9tYXQtY2FyZC1hY3Rpb25zPlxyXG48L21hdC1jYXJkPlxyXG4iXX0=