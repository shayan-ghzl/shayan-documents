import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/list";
import * as i2 from "@angular/material/divider";
/**
 * @title Basic divider
 */
export class DividerOverviewExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: DividerOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: DividerOverviewExample, isStandalone: true, selector: "divider-overview-example", ngImport: i0, template: "<mat-list>\r\n  <mat-list-item>Item 1</mat-list-item>\r\n  <mat-divider></mat-divider>\r\n  <mat-list-item>Item 2</mat-list-item>\r\n  <mat-divider></mat-divider>\r\n  <mat-list-item>Item 3</mat-list-item>\r\n</mat-list>\r\n", dependencies: [{ kind: "ngmodule", type: MatListModule }, { kind: "component", type: i1.MatList, selector: "mat-list", exportAs: ["matList"] }, { kind: "component", type: i1.MatListItem, selector: "mat-list-item, a[mat-list-item], button[mat-list-item]", inputs: ["activated"], exportAs: ["matListItem"] }, { kind: "component", type: i2.MatDivider, selector: "mat-divider", inputs: ["vertical", "inset"] }, { kind: "ngmodule", type: MatDividerModule }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: DividerOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'divider-overview-example', standalone: true, imports: [MatListModule, MatDividerModule], template: "<mat-list>\r\n  <mat-list-item>Item 1</mat-list-item>\r\n  <mat-divider></mat-divider>\r\n  <mat-list-item>Item 2</mat-list-item>\r\n  <mat-divider></mat-divider>\r\n  <mat-list-item>Item 3</mat-list-item>\r\n</mat-list>\r\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGl2aWRlci1vdmVydmlldy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZGl2aWRlci9kaXZpZGVyLW92ZXJ2aWV3L2RpdmlkZXItb3ZlcnZpZXctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RpdmlkZXIvZGl2aWRlci1vdmVydmlldy9kaXZpZGVyLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQzNELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQzs7OztBQUVyRDs7R0FFRztBQU9ILE1BQU0sT0FBTyxzQkFBc0I7OEdBQXRCLHNCQUFzQjtrR0FBdEIsc0JBQXNCLG9GQ2JuQyxrT0FPQSwyQ0RJWSxhQUFhLDJYQUFFLGdCQUFnQjs7MkZBRTlCLHNCQUFzQjtrQkFObEMsU0FBUzsrQkFDRSwwQkFBMEIsY0FFeEIsSUFBSSxXQUNQLENBQUMsYUFBYSxFQUFFLGdCQUFnQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge01hdERpdmlkZXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpdmlkZXInO1xyXG5pbXBvcnQge01hdExpc3RNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2xpc3QnO1xyXG5cclxuLyoqXHJcbiAqIEB0aXRsZSBCYXNpYyBkaXZpZGVyXHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2RpdmlkZXItb3ZlcnZpZXctZXhhbXBsZScsXHJcbiAgdGVtcGxhdGVVcmw6ICdkaXZpZGVyLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCcsXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBpbXBvcnRzOiBbTWF0TGlzdE1vZHVsZSwgTWF0RGl2aWRlck1vZHVsZV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEaXZpZGVyT3ZlcnZpZXdFeGFtcGxlIHt9XHJcbiIsIjxtYXQtbGlzdD5cclxuICA8bWF0LWxpc3QtaXRlbT5JdGVtIDE8L21hdC1saXN0LWl0ZW0+XHJcbiAgPG1hdC1kaXZpZGVyPjwvbWF0LWRpdmlkZXI+XHJcbiAgPG1hdC1saXN0LWl0ZW0+SXRlbSAyPC9tYXQtbGlzdC1pdGVtPlxyXG4gIDxtYXQtZGl2aWRlcj48L21hdC1kaXZpZGVyPlxyXG4gIDxtYXQtbGlzdC1pdGVtPkl0ZW0gMzwvbWF0LWxpc3QtaXRlbT5cclxuPC9tYXQtbGlzdD5cclxuIl19