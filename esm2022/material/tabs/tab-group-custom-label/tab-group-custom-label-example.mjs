import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/tabs";
import * as i2 from "@angular/material/icon";
/**
 * @title Using tabs with a custom label template
 */
export class TabGroupCustomLabelExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TabGroupCustomLabelExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: TabGroupCustomLabelExample, isStandalone: true, selector: "tab-group-custom-label-example", ngImport: i0, template: "<mat-tab-group>\r\n  <mat-tab>\r\n<!-- #docregion label-directive -->\r\n    <ng-template mat-tab-label>\r\n      <mat-icon class=\"example-tab-icon\">thumb_up</mat-icon>\r\n      First\r\n    </ng-template>\r\n<!-- #enddocregion label-directive -->\r\n    Content 1\r\n  </mat-tab>\r\n\r\n  <mat-tab>\r\n    <ng-template mat-tab-label>\r\n      <mat-icon class=\"example-tab-icon\">thumb_up</mat-icon>\r\n      Second\r\n    </ng-template>\r\n    Content 2\r\n  </mat-tab>\r\n\r\n  <mat-tab>\r\n    <ng-template mat-tab-label>\r\n      <mat-icon class=\"example-tab-icon\">thumb_up</mat-icon>\r\n      Third\r\n    </ng-template>\r\n\r\n    Content 3\r\n  </mat-tab>\r\n</mat-tab-group>\r\n", styles: [".example-tab-icon {\r\n  margin-right: 8px;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: MatTabsModule }, { kind: "directive", type: i1.MatTabLabel, selector: "[mat-tab-label], [matTabLabel]" }, { kind: "component", type: i1.MatTab, selector: "mat-tab", inputs: ["disabled", "label", "aria-label", "aria-labelledby", "labelClass", "bodyClass"], exportAs: ["matTab"] }, { kind: "component", type: i1.MatTabGroup, selector: "mat-tab-group", inputs: ["color", "fitInkBarToContent", "mat-stretch-tabs", "dynamicHeight", "selectedIndex", "headerPosition", "animationDuration", "contentTabIndex", "disablePagination", "disableRipple", "preserveContent", "backgroundColor"], outputs: ["selectedIndexChange", "focusChange", "animationDone", "selectedTabChange"], exportAs: ["matTabGroup"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i2.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TabGroupCustomLabelExample, decorators: [{
            type: Component,
            args: [{ selector: 'tab-group-custom-label-example', standalone: true, imports: [MatTabsModule, MatIconModule], template: "<mat-tab-group>\r\n  <mat-tab>\r\n<!-- #docregion label-directive -->\r\n    <ng-template mat-tab-label>\r\n      <mat-icon class=\"example-tab-icon\">thumb_up</mat-icon>\r\n      First\r\n    </ng-template>\r\n<!-- #enddocregion label-directive -->\r\n    Content 1\r\n  </mat-tab>\r\n\r\n  <mat-tab>\r\n    <ng-template mat-tab-label>\r\n      <mat-icon class=\"example-tab-icon\">thumb_up</mat-icon>\r\n      Second\r\n    </ng-template>\r\n    Content 2\r\n  </mat-tab>\r\n\r\n  <mat-tab>\r\n    <ng-template mat-tab-label>\r\n      <mat-icon class=\"example-tab-icon\">thumb_up</mat-icon>\r\n      Third\r\n    </ng-template>\r\n\r\n    Content 3\r\n  </mat-tab>\r\n</mat-tab-group>\r\n", styles: [".example-tab-icon {\r\n  margin-right: 8px;\r\n}\r\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWdyb3VwLWN1c3RvbS1sYWJlbC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvdGFicy90YWItZ3JvdXAtY3VzdG9tLWxhYmVsL3RhYi1ncm91cC1jdXN0b20tbGFiZWwtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RhYnMvdGFiLWdyb3VwLWN1c3RvbS1sYWJlbC90YWItZ3JvdXAtY3VzdG9tLWxhYmVsLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7Ozs7QUFFckQ7O0dBRUc7QUFRSCxNQUFNLE9BQU8sMEJBQTBCOzhHQUExQiwwQkFBMEI7a0dBQTFCLDBCQUEwQiwwRkNkdkMscXJCQTRCQSw2R0RoQlksYUFBYSxvc0JBQUUsYUFBYTs7MkZBRTNCLDBCQUEwQjtrQkFQdEMsU0FBUzsrQkFDRSxnQ0FBZ0MsY0FHOUIsSUFBSSxXQUNQLENBQUMsYUFBYSxFQUFFLGFBQWEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtNYXRJY29uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcclxuaW1wb3J0IHtNYXRUYWJzTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90YWJzJztcclxuXHJcbi8qKlxyXG4gKiBAdGl0bGUgVXNpbmcgdGFicyB3aXRoIGEgY3VzdG9tIGxhYmVsIHRlbXBsYXRlXHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3RhYi1ncm91cC1jdXN0b20tbGFiZWwtZXhhbXBsZScsXHJcbiAgdGVtcGxhdGVVcmw6ICd0YWItZ3JvdXAtY3VzdG9tLWxhYmVsLWV4YW1wbGUuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJ3RhYi1ncm91cC1jdXN0b20tbGFiZWwtZXhhbXBsZS5jc3MnXSxcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gIGltcG9ydHM6IFtNYXRUYWJzTW9kdWxlLCBNYXRJY29uTW9kdWxlXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFRhYkdyb3VwQ3VzdG9tTGFiZWxFeGFtcGxlIHt9XHJcbiIsIjxtYXQtdGFiLWdyb3VwPlxyXG4gIDxtYXQtdGFiPlxyXG48IS0tICNkb2NyZWdpb24gbGFiZWwtZGlyZWN0aXZlIC0tPlxyXG4gICAgPG5nLXRlbXBsYXRlIG1hdC10YWItbGFiZWw+XHJcbiAgICAgIDxtYXQtaWNvbiBjbGFzcz1cImV4YW1wbGUtdGFiLWljb25cIj50aHVtYl91cDwvbWF0LWljb24+XHJcbiAgICAgIEZpcnN0XHJcbiAgICA8L25nLXRlbXBsYXRlPlxyXG48IS0tICNlbmRkb2NyZWdpb24gbGFiZWwtZGlyZWN0aXZlIC0tPlxyXG4gICAgQ29udGVudCAxXHJcbiAgPC9tYXQtdGFiPlxyXG5cclxuICA8bWF0LXRhYj5cclxuICAgIDxuZy10ZW1wbGF0ZSBtYXQtdGFiLWxhYmVsPlxyXG4gICAgICA8bWF0LWljb24gY2xhc3M9XCJleGFtcGxlLXRhYi1pY29uXCI+dGh1bWJfdXA8L21hdC1pY29uPlxyXG4gICAgICBTZWNvbmRcclxuICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICBDb250ZW50IDJcclxuICA8L21hdC10YWI+XHJcblxyXG4gIDxtYXQtdGFiPlxyXG4gICAgPG5nLXRlbXBsYXRlIG1hdC10YWItbGFiZWw+XHJcbiAgICAgIDxtYXQtaWNvbiBjbGFzcz1cImV4YW1wbGUtdGFiLWljb25cIj50aHVtYl91cDwvbWF0LWljb24+XHJcbiAgICAgIFRoaXJkXHJcbiAgICA8L25nLXRlbXBsYXRlPlxyXG5cclxuICAgIENvbnRlbnQgM1xyXG4gIDwvbWF0LXRhYj5cclxuPC9tYXQtdGFiLWdyb3VwPlxyXG4iXX0=