import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/tabs";
/**
 * @title Tab group with stretched labels
 */
export class TabGroupStretchedExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TabGroupStretchedExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: TabGroupStretchedExample, isStandalone: true, selector: "tab-group-stretched-example", ngImport: i0, template: "<mat-tab-group mat-stretch-tabs class=\"example-stretched-tabs mat-elevation-z4\">\r\n  <mat-tab label=\"First\"> Content 1 </mat-tab>\r\n  <mat-tab label=\"Second\"> Content 2 </mat-tab>\r\n  <mat-tab label=\"Third\"> Content 3 </mat-tab>\r\n</mat-tab-group>\r\n", styles: [".example-stretched-tabs {\r\n  max-width: 800px;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: MatTabsModule }, { kind: "component", type: i1.MatTab, selector: "mat-tab", inputs: ["disabled", "label", "aria-label", "aria-labelledby", "labelClass", "bodyClass"], exportAs: ["matTab"] }, { kind: "component", type: i1.MatTabGroup, selector: "mat-tab-group", inputs: ["color", "fitInkBarToContent", "mat-stretch-tabs", "dynamicHeight", "selectedIndex", "headerPosition", "animationDuration", "contentTabIndex", "disablePagination", "disableRipple", "preserveContent", "backgroundColor"], outputs: ["selectedIndexChange", "focusChange", "animationDone", "selectedTabChange"], exportAs: ["matTabGroup"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TabGroupStretchedExample, decorators: [{
            type: Component,
            args: [{ selector: 'tab-group-stretched-example', standalone: true, imports: [MatTabsModule], template: "<mat-tab-group mat-stretch-tabs class=\"example-stretched-tabs mat-elevation-z4\">\r\n  <mat-tab label=\"First\"> Content 1 </mat-tab>\r\n  <mat-tab label=\"Second\"> Content 2 </mat-tab>\r\n  <mat-tab label=\"Third\"> Content 3 </mat-tab>\r\n</mat-tab-group>\r\n", styles: [".example-stretched-tabs {\r\n  max-width: 800px;\r\n}\r\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWdyb3VwLXN0cmV0Y2hlZC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvdGFicy90YWItZ3JvdXAtc3RyZXRjaGVkL3RhYi1ncm91cC1zdHJldGNoZWQtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RhYnMvdGFiLWdyb3VwLXN0cmV0Y2hlZC90YWItZ3JvdXAtc3RyZXRjaGVkLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQzs7O0FBRXJEOztHQUVHO0FBUUgsTUFBTSxPQUFPLHdCQUF3Qjs4R0FBeEIsd0JBQXdCO2tHQUF4Qix3QkFBd0IsdUZDYnJDLHlRQUtBLGtIRE1ZLGFBQWE7OzJGQUVaLHdCQUF3QjtrQkFQcEMsU0FBUzsrQkFDRSw2QkFBNkIsY0FHM0IsSUFBSSxXQUNQLENBQUMsYUFBYSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge01hdFRhYnNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RhYnMnO1xyXG5cclxuLyoqXHJcbiAqIEB0aXRsZSBUYWIgZ3JvdXAgd2l0aCBzdHJldGNoZWQgbGFiZWxzXHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3RhYi1ncm91cC1zdHJldGNoZWQtZXhhbXBsZScsXHJcbiAgdGVtcGxhdGVVcmw6ICd0YWItZ3JvdXAtc3RyZXRjaGVkLWV4YW1wbGUuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJ3RhYi1ncm91cC1zdHJldGNoZWQtZXhhbXBsZS5jc3MnXSxcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gIGltcG9ydHM6IFtNYXRUYWJzTW9kdWxlXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFRhYkdyb3VwU3RyZXRjaGVkRXhhbXBsZSB7fVxyXG4iLCI8bWF0LXRhYi1ncm91cCBtYXQtc3RyZXRjaC10YWJzIGNsYXNzPVwiZXhhbXBsZS1zdHJldGNoZWQtdGFicyBtYXQtZWxldmF0aW9uLXo0XCI+XHJcbiAgPG1hdC10YWIgbGFiZWw9XCJGaXJzdFwiPiBDb250ZW50IDEgPC9tYXQtdGFiPlxyXG4gIDxtYXQtdGFiIGxhYmVsPVwiU2Vjb25kXCI+IENvbnRlbnQgMiA8L21hdC10YWI+XHJcbiAgPG1hdC10YWIgbGFiZWw9XCJUaGlyZFwiPiBDb250ZW50IDMgPC9tYXQtdGFiPlxyXG48L21hdC10YWItZ3JvdXA+XHJcbiJdfQ==