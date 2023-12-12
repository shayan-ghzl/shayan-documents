import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/sidenav";
/**
 * @title Testing with MatSidenavHarness
 */
export class SidenavHarnessExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: SidenavHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: SidenavHarnessExample, isStandalone: true, selector: "sidenav-harness-example", ngImport: i0, template: "<mat-drawer-container>\r\n  <mat-drawer mode=\"side\">Hello from the drawer</mat-drawer>\r\n  <mat-drawer-content>Hello from the content</mat-drawer-content>\r\n</mat-drawer-container>\r\n", dependencies: [{ kind: "ngmodule", type: MatSidenavModule }, { kind: "component", type: i1.MatDrawer, selector: "mat-drawer", inputs: ["position", "mode", "disableClose", "autoFocus", "opened"], outputs: ["openedChange", "opened", "openedStart", "closed", "closedStart", "positionChanged"], exportAs: ["matDrawer"] }, { kind: "component", type: i1.MatDrawerContainer, selector: "mat-drawer-container", inputs: ["autosize", "hasBackdrop"], outputs: ["backdropClick"], exportAs: ["matDrawerContainer"] }, { kind: "component", type: i1.MatDrawerContent, selector: "mat-drawer-content" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: SidenavHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'sidenav-harness-example', standalone: true, imports: [MatSidenavModule], template: "<mat-drawer-container>\r\n  <mat-drawer mode=\"side\">Hello from the drawer</mat-drawer>\r\n  <mat-drawer-content>Hello from the content</mat-drawer-content>\r\n</mat-drawer-container>\r\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZW5hdi1oYXJuZXNzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zaWRlbmF2L3NpZGVuYXYtaGFybmVzcy9zaWRlbmF2LWhhcm5lc3MtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NpZGVuYXYvc2lkZW5hdi1oYXJuZXNzL3NpZGVuYXYtaGFybmVzcy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQzs7O0FBRTNEOztHQUVHO0FBT0gsTUFBTSxPQUFPLHFCQUFxQjs4R0FBckIscUJBQXFCO2tHQUFyQixxQkFBcUIsbUZDWmxDLDhMQUlBLDJDRE1ZLGdCQUFnQjs7MkZBRWYscUJBQXFCO2tCQU5qQyxTQUFTOytCQUNFLHlCQUF5QixjQUV2QixJQUFJLFdBQ1AsQ0FBQyxnQkFBZ0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtNYXRTaWRlbmF2TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zaWRlbmF2JztcclxuXHJcbi8qKlxyXG4gKiBAdGl0bGUgVGVzdGluZyB3aXRoIE1hdFNpZGVuYXZIYXJuZXNzXHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3NpZGVuYXYtaGFybmVzcy1leGFtcGxlJyxcclxuICB0ZW1wbGF0ZVVybDogJ3NpZGVuYXYtaGFybmVzcy1leGFtcGxlLmh0bWwnLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgaW1wb3J0czogW01hdFNpZGVuYXZNb2R1bGVdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2lkZW5hdkhhcm5lc3NFeGFtcGxlIHt9XHJcbiIsIjxtYXQtZHJhd2VyLWNvbnRhaW5lcj5cclxuICA8bWF0LWRyYXdlciBtb2RlPVwic2lkZVwiPkhlbGxvIGZyb20gdGhlIGRyYXdlcjwvbWF0LWRyYXdlcj5cclxuICA8bWF0LWRyYXdlci1jb250ZW50PkhlbGxvIGZyb20gdGhlIGNvbnRlbnQ8L21hdC1kcmF3ZXItY29udGVudD5cclxuPC9tYXQtZHJhd2VyLWNvbnRhaW5lcj5cclxuIl19