import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/tabs";
/**
 * @title Tab group with dynamic height based on tab contents
 */
export class TabGroupDynamicHeightExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TabGroupDynamicHeightExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: TabGroupDynamicHeightExample, isStandalone: true, selector: "tab-group-dynamic-height-example", ngImport: i0, template: "<!-- #docregion dynamic-height -->\r\n<mat-tab-group dynamicHeight>\r\n<!-- #enddocregion dynamic-height -->\r\n  <mat-tab label=\"Short tab\">\r\n    <div class=\"example-small-box mat-elevation-z4\">\r\n      Small content\r\n    </div>\r\n  </mat-tab>\r\n  <mat-tab label=\"Long tab\">\r\n    <div class=\"example-large-box mat-elevation-z4\">\r\n      Large content\r\n    </div>\r\n  </mat-tab>\r\n</mat-tab-group>\r\n", styles: [".example-small-box, .example-large-box {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  margin: 16px;\r\n  padding: 16px;\r\n  border-radius: 8px;\r\n}\r\n\r\n.example-small-box {\r\n  height: 100px;\r\n  width: 100px;\r\n}\r\n\r\n.example-large-box {\r\n  height: 300px;\r\n  width: 300px;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: MatTabsModule }, { kind: "component", type: i1.MatTab, selector: "mat-tab", inputs: ["disabled", "label", "aria-label", "aria-labelledby", "labelClass", "bodyClass"], exportAs: ["matTab"] }, { kind: "component", type: i1.MatTabGroup, selector: "mat-tab-group", inputs: ["color", "fitInkBarToContent", "mat-stretch-tabs", "dynamicHeight", "selectedIndex", "headerPosition", "animationDuration", "contentTabIndex", "disablePagination", "disableRipple", "preserveContent", "backgroundColor"], outputs: ["selectedIndexChange", "focusChange", "animationDone", "selectedTabChange"], exportAs: ["matTabGroup"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TabGroupDynamicHeightExample, decorators: [{
            type: Component,
            args: [{ selector: 'tab-group-dynamic-height-example', standalone: true, imports: [MatTabsModule], template: "<!-- #docregion dynamic-height -->\r\n<mat-tab-group dynamicHeight>\r\n<!-- #enddocregion dynamic-height -->\r\n  <mat-tab label=\"Short tab\">\r\n    <div class=\"example-small-box mat-elevation-z4\">\r\n      Small content\r\n    </div>\r\n  </mat-tab>\r\n  <mat-tab label=\"Long tab\">\r\n    <div class=\"example-large-box mat-elevation-z4\">\r\n      Large content\r\n    </div>\r\n  </mat-tab>\r\n</mat-tab-group>\r\n", styles: [".example-small-box, .example-large-box {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  margin: 16px;\r\n  padding: 16px;\r\n  border-radius: 8px;\r\n}\r\n\r\n.example-small-box {\r\n  height: 100px;\r\n  width: 100px;\r\n}\r\n\r\n.example-large-box {\r\n  height: 300px;\r\n  width: 300px;\r\n}\r\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWdyb3VwLWR5bmFtaWMtaGVpZ2h0LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90YWJzL3RhYi1ncm91cC1keW5hbWljLWhlaWdodC90YWItZ3JvdXAtZHluYW1pYy1oZWlnaHQtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RhYnMvdGFiLWdyb3VwLWR5bmFtaWMtaGVpZ2h0L3RhYi1ncm91cC1keW5hbWljLWhlaWdodC1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7OztBQUVyRDs7R0FFRztBQVFILE1BQU0sT0FBTyw0QkFBNEI7OEdBQTVCLDRCQUE0QjtrR0FBNUIsNEJBQTRCLDRGQ2J6Qyx5YUFjQSxzWURIWSxhQUFhOzsyRkFFWiw0QkFBNEI7a0JBUHhDLFNBQVM7K0JBQ0Usa0NBQWtDLGNBR2hDLElBQUksV0FDUCxDQUFDLGFBQWEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtNYXRUYWJzTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90YWJzJztcclxuXHJcbi8qKlxyXG4gKiBAdGl0bGUgVGFiIGdyb3VwIHdpdGggZHluYW1pYyBoZWlnaHQgYmFzZWQgb24gdGFiIGNvbnRlbnRzXHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3RhYi1ncm91cC1keW5hbWljLWhlaWdodC1leGFtcGxlJyxcclxuICB0ZW1wbGF0ZVVybDogJ3RhYi1ncm91cC1keW5hbWljLWhlaWdodC1leGFtcGxlLmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWyd0YWItZ3JvdXAtZHluYW1pYy1oZWlnaHQtZXhhbXBsZS5jc3MnXSxcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gIGltcG9ydHM6IFtNYXRUYWJzTW9kdWxlXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFRhYkdyb3VwRHluYW1pY0hlaWdodEV4YW1wbGUge31cclxuIiwiPCEtLSAjZG9jcmVnaW9uIGR5bmFtaWMtaGVpZ2h0IC0tPlxyXG48bWF0LXRhYi1ncm91cCBkeW5hbWljSGVpZ2h0PlxyXG48IS0tICNlbmRkb2NyZWdpb24gZHluYW1pYy1oZWlnaHQgLS0+XHJcbiAgPG1hdC10YWIgbGFiZWw9XCJTaG9ydCB0YWJcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlLXNtYWxsLWJveCBtYXQtZWxldmF0aW9uLXo0XCI+XHJcbiAgICAgIFNtYWxsIGNvbnRlbnRcclxuICAgIDwvZGl2PlxyXG4gIDwvbWF0LXRhYj5cclxuICA8bWF0LXRhYiBsYWJlbD1cIkxvbmcgdGFiXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1sYXJnZS1ib3ggbWF0LWVsZXZhdGlvbi16NFwiPlxyXG4gICAgICBMYXJnZSBjb250ZW50XHJcbiAgICA8L2Rpdj5cclxuICA8L21hdC10YWI+XHJcbjwvbWF0LXRhYi1ncm91cD5cclxuIl19