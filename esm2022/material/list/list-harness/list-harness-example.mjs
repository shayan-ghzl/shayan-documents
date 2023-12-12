import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/list";
/**
 * @title Testing with MatListHarness
 */
export class ListHarnessExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: ListHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: ListHarnessExample, isStandalone: true, selector: "list-harness-example", ngImport: i0, template: "<mat-list>\r\n  <mat-list-item>\r\n    <div matListItemTitle>Item </div>\r\n    <div matListItemLine>1</div>\r\n    <div matListItemIcon>icon</div>\r\n    <div matListItemAvatar>Avatar</div>\r\n  </mat-list-item>\r\n  <div matSubheader>Section 1</div>\r\n  <a mat-list-item>\r\n    <span>Item 2</span>\r\n  </a>\r\n  <button mat-list-item>Item 3</button>\r\n  <div matSubheader>Section 2</div>\r\n</mat-list>\r\n", dependencies: [{ kind: "ngmodule", type: MatListModule }, { kind: "component", type: i1.MatList, selector: "mat-list", exportAs: ["matList"] }, { kind: "component", type: i1.MatListItem, selector: "mat-list-item, a[mat-list-item], button[mat-list-item]", inputs: ["activated"], exportAs: ["matListItem"] }, { kind: "directive", type: i1.MatListItemAvatar, selector: "[matListItemAvatar]" }, { kind: "directive", type: i1.MatListItemIcon, selector: "[matListItemIcon]" }, { kind: "directive", type: i1.MatListSubheaderCssMatStyler, selector: "[mat-subheader], [matSubheader]" }, { kind: "directive", type: i1.MatListItemLine, selector: "[matListItemLine]" }, { kind: "directive", type: i1.MatListItemTitle, selector: "[matListItemTitle]" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: ListHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'list-harness-example', standalone: true, imports: [MatListModule], template: "<mat-list>\r\n  <mat-list-item>\r\n    <div matListItemTitle>Item </div>\r\n    <div matListItemLine>1</div>\r\n    <div matListItemIcon>icon</div>\r\n    <div matListItemAvatar>Avatar</div>\r\n  </mat-list-item>\r\n  <div matSubheader>Section 1</div>\r\n  <a mat-list-item>\r\n    <span>Item 2</span>\r\n  </a>\r\n  <button mat-list-item>Item 3</button>\r\n  <div matSubheader>Section 2</div>\r\n</mat-list>\r\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1oYXJuZXNzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9saXN0L2xpc3QtaGFybmVzcy9saXN0LWhhcm5lc3MtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2xpc3QvbGlzdC1oYXJuZXNzL2xpc3QtaGFybmVzcy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7OztBQUVyRDs7R0FFRztBQU9ILE1BQU0sT0FBTyxrQkFBa0I7OEdBQWxCLGtCQUFrQjtrR0FBbEIsa0JBQWtCLGdGQ1ovQiw4WkFjQSwyQ0RKWSxhQUFhOzsyRkFFWixrQkFBa0I7a0JBTjlCLFNBQVM7K0JBQ0Usc0JBQXNCLGNBRXBCLElBQUksV0FDUCxDQUFDLGFBQWEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtNYXRMaXN0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9saXN0JztcclxuXHJcbi8qKlxyXG4gKiBAdGl0bGUgVGVzdGluZyB3aXRoIE1hdExpc3RIYXJuZXNzXHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xpc3QtaGFybmVzcy1leGFtcGxlJyxcclxuICB0ZW1wbGF0ZVVybDogJ2xpc3QtaGFybmVzcy1leGFtcGxlLmh0bWwnLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgaW1wb3J0czogW01hdExpc3RNb2R1bGVdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGlzdEhhcm5lc3NFeGFtcGxlIHt9XHJcbiIsIjxtYXQtbGlzdD5cclxuICA8bWF0LWxpc3QtaXRlbT5cclxuICAgIDxkaXYgbWF0TGlzdEl0ZW1UaXRsZT5JdGVtIDwvZGl2PlxyXG4gICAgPGRpdiBtYXRMaXN0SXRlbUxpbmU+MTwvZGl2PlxyXG4gICAgPGRpdiBtYXRMaXN0SXRlbUljb24+aWNvbjwvZGl2PlxyXG4gICAgPGRpdiBtYXRMaXN0SXRlbUF2YXRhcj5BdmF0YXI8L2Rpdj5cclxuICA8L21hdC1saXN0LWl0ZW0+XHJcbiAgPGRpdiBtYXRTdWJoZWFkZXI+U2VjdGlvbiAxPC9kaXY+XHJcbiAgPGEgbWF0LWxpc3QtaXRlbT5cclxuICAgIDxzcGFuPkl0ZW0gMjwvc3Bhbj5cclxuICA8L2E+XHJcbiAgPGJ1dHRvbiBtYXQtbGlzdC1pdGVtPkl0ZW0gMzwvYnV0dG9uPlxyXG4gIDxkaXYgbWF0U3ViaGVhZGVyPlNlY3Rpb24gMjwvZGl2PlxyXG48L21hdC1saXN0PlxyXG4iXX0=