import { Component } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/card";
import * as i2 from "@angular/material/divider";
import * as i3 from "@angular/material/button";
import * as i4 from "@angular/material/progress-bar";
/**
 * @title Card with footer
 */
export class CardFooterExample {
    constructor() {
        this.longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: CardFooterExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: CardFooterExample, isStandalone: true, selector: "card-footer-example", ngImport: i0, template: "<mat-card class=\"example-card\">\r\n  <mat-card-header>\r\n    <mat-card-subtitle>Dog Breed</mat-card-subtitle>\r\n    <mat-card-title>Shiba Inu</mat-card-title>\r\n  </mat-card-header>\r\n  <mat-card-content>\r\n    <p>This card has divider and indeterminate progress as footer</p>\r\n    <p>{{ longText }}</p>\r\n    <mat-divider></mat-divider>\r\n  </mat-card-content>\r\n  <mat-card-actions>\r\n    <button mat-button>LIKE</button>\r\n    <button mat-button>SHARE</button>\r\n  </mat-card-actions>\r\n  <mat-card-footer>\r\n    <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\r\n  </mat-card-footer>\r\n</mat-card>\r\n", styles: [".example-card {\r\n  max-width: 400px;\r\n}\r\n\r\n"], dependencies: [{ kind: "ngmodule", type: MatCardModule }, { kind: "component", type: i1.MatCard, selector: "mat-card", inputs: ["appearance"], exportAs: ["matCard"] }, { kind: "directive", type: i1.MatCardActions, selector: "mat-card-actions", inputs: ["align"], exportAs: ["matCardActions"] }, { kind: "directive", type: i1.MatCardContent, selector: "mat-card-content" }, { kind: "directive", type: i1.MatCardFooter, selector: "mat-card-footer" }, { kind: "component", type: i1.MatCardHeader, selector: "mat-card-header" }, { kind: "directive", type: i1.MatCardSubtitle, selector: "mat-card-subtitle, [mat-card-subtitle], [matCardSubtitle]" }, { kind: "directive", type: i1.MatCardTitle, selector: "mat-card-title, [mat-card-title], [matCardTitle]" }, { kind: "ngmodule", type: MatDividerModule }, { kind: "component", type: i2.MatDivider, selector: "mat-divider", inputs: ["vertical", "inset"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i3.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatProgressBarModule }, { kind: "component", type: i4.MatProgressBar, selector: "mat-progress-bar", inputs: ["color", "value", "bufferValue", "mode"], outputs: ["animationEnd"], exportAs: ["matProgressBar"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: CardFooterExample, decorators: [{
            type: Component,
            args: [{ selector: 'card-footer-example', standalone: true, imports: [MatCardModule, MatDividerModule, MatButtonModule, MatProgressBarModule], template: "<mat-card class=\"example-card\">\r\n  <mat-card-header>\r\n    <mat-card-subtitle>Dog Breed</mat-card-subtitle>\r\n    <mat-card-title>Shiba Inu</mat-card-title>\r\n  </mat-card-header>\r\n  <mat-card-content>\r\n    <p>This card has divider and indeterminate progress as footer</p>\r\n    <p>{{ longText }}</p>\r\n    <mat-divider></mat-divider>\r\n  </mat-card-content>\r\n  <mat-card-actions>\r\n    <button mat-button>LIKE</button>\r\n    <button mat-button>SHARE</button>\r\n  </mat-card-actions>\r\n  <mat-card-footer>\r\n    <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\r\n  </mat-card-footer>\r\n</mat-card>\r\n", styles: [".example-card {\r\n  max-width: 400px;\r\n}\r\n\r\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC1mb290ZXItZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2NhcmQvY2FyZC1mb290ZXIvY2FyZC1mb290ZXItZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2NhcmQvY2FyZC1mb290ZXIvY2FyZC1mb290ZXItZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sZ0NBQWdDLENBQUM7QUFDcEUsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQzNELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7O0FBRXJEOztHQUVHO0FBUUgsTUFBTSxPQUFPLGlCQUFpQjtJQVA5QjtRQVFFLGFBQVEsR0FBRzs7K0JBRWtCLENBQUM7S0FDL0I7OEdBSlksaUJBQWlCO2tHQUFqQixpQkFBaUIsK0VDaEI5Qiw4bkJBa0JBLDRHREpZLGFBQWEscXRCQUFFLGdCQUFnQixrSUFBRSxlQUFlLDJOQUFFLG9CQUFvQjs7MkZBRXJFLGlCQUFpQjtrQkFQN0IsU0FBUzsrQkFDRSxxQkFBcUIsY0FHbkIsSUFBSSxXQUNQLENBQUMsYUFBYSxFQUFFLGdCQUFnQixFQUFFLGVBQWUsRUFBRSxvQkFBb0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtNYXRQcm9ncmVzc0Jhck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcHJvZ3Jlc3MtYmFyJztcclxuaW1wb3J0IHtNYXRCdXR0b25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XHJcbmltcG9ydCB7TWF0RGl2aWRlck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGl2aWRlcic7XHJcbmltcG9ydCB7TWF0Q2FyZE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2FyZCc7XHJcblxyXG4vKipcclxuICogQHRpdGxlIENhcmQgd2l0aCBmb290ZXJcclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY2FyZC1mb290ZXItZXhhbXBsZScsXHJcbiAgdGVtcGxhdGVVcmw6ICdjYXJkLWZvb3Rlci1leGFtcGxlLmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWydjYXJkLWZvb3Rlci1leGFtcGxlLmNzcyddLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgaW1wb3J0czogW01hdENhcmRNb2R1bGUsIE1hdERpdmlkZXJNb2R1bGUsIE1hdEJ1dHRvbk1vZHVsZSwgTWF0UHJvZ3Jlc3NCYXJNb2R1bGVdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2FyZEZvb3RlckV4YW1wbGUge1xyXG4gIGxvbmdUZXh0ID0gYFRoZSBTaGliYSBJbnUgaXMgdGhlIHNtYWxsZXN0IG9mIHRoZSBzaXggb3JpZ2luYWwgYW5kIGRpc3RpbmN0IHNwaXR6IGJyZWVkcyBvZiBkb2dcclxuICBmcm9tIEphcGFuLiBBIHNtYWxsLCBhZ2lsZSBkb2cgdGhhdCBjb3BlcyB2ZXJ5IHdlbGwgd2l0aCBtb3VudGFpbm91cyB0ZXJyYWluLCB0aGUgU2hpYmEgSW51IHdhc1xyXG4gIG9yaWdpbmFsbHkgYnJlZCBmb3IgaHVudGluZy5gO1xyXG59XHJcbiIsIjxtYXQtY2FyZCBjbGFzcz1cImV4YW1wbGUtY2FyZFwiPlxyXG4gIDxtYXQtY2FyZC1oZWFkZXI+XHJcbiAgICA8bWF0LWNhcmQtc3VidGl0bGU+RG9nIEJyZWVkPC9tYXQtY2FyZC1zdWJ0aXRsZT5cclxuICAgIDxtYXQtY2FyZC10aXRsZT5TaGliYSBJbnU8L21hdC1jYXJkLXRpdGxlPlxyXG4gIDwvbWF0LWNhcmQtaGVhZGVyPlxyXG4gIDxtYXQtY2FyZC1jb250ZW50PlxyXG4gICAgPHA+VGhpcyBjYXJkIGhhcyBkaXZpZGVyIGFuZCBpbmRldGVybWluYXRlIHByb2dyZXNzIGFzIGZvb3RlcjwvcD5cclxuICAgIDxwPnt7IGxvbmdUZXh0IH19PC9wPlxyXG4gICAgPG1hdC1kaXZpZGVyPjwvbWF0LWRpdmlkZXI+XHJcbiAgPC9tYXQtY2FyZC1jb250ZW50PlxyXG4gIDxtYXQtY2FyZC1hY3Rpb25zPlxyXG4gICAgPGJ1dHRvbiBtYXQtYnV0dG9uPkxJS0U8L2J1dHRvbj5cclxuICAgIDxidXR0b24gbWF0LWJ1dHRvbj5TSEFSRTwvYnV0dG9uPlxyXG4gIDwvbWF0LWNhcmQtYWN0aW9ucz5cclxuICA8bWF0LWNhcmQtZm9vdGVyPlxyXG4gICAgPG1hdC1wcm9ncmVzcy1iYXIgbW9kZT1cImluZGV0ZXJtaW5hdGVcIj48L21hdC1wcm9ncmVzcy1iYXI+XHJcbiAgPC9tYXQtY2FyZC1mb290ZXI+XHJcbjwvbWF0LWNhcmQ+XHJcbiJdfQ==