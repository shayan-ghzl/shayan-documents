import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/tabs";
/**
 * @title Tab group that keeps its content inside the DOM when it's off-screen.
 */
export class TabGroupPreserveContentExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TabGroupPreserveContentExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: TabGroupPreserveContentExample, isStandalone: true, selector: "tab-group-preserve-content-example", ngImport: i0, template: "<p>Start the video in the first tab and navigate to the second one to see how it keeps playing.</p>\r\n\r\n<mat-tab-group preserveContent>\r\n  <mat-tab label=\"First\">\r\n    <iframe\r\n      width=\"560\"\r\n      height=\"315\"\r\n      src=\"https://www.youtube.com/embed/B-lipaiZII8\"\r\n      style=\"border: 0\"\r\n      allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\r\n      allowfullscreen></iframe>\r\n  </mat-tab>\r\n  <mat-tab label=\"Second\">Note how the video from the previous tab is still playing.</mat-tab>\r\n</mat-tab-group>\r\n", dependencies: [{ kind: "ngmodule", type: MatTabsModule }, { kind: "component", type: i1.MatTab, selector: "mat-tab", inputs: ["disabled", "label", "aria-label", "aria-labelledby", "labelClass", "bodyClass"], exportAs: ["matTab"] }, { kind: "component", type: i1.MatTabGroup, selector: "mat-tab-group", inputs: ["color", "fitInkBarToContent", "mat-stretch-tabs", "dynamicHeight", "selectedIndex", "headerPosition", "animationDuration", "contentTabIndex", "disablePagination", "disableRipple", "preserveContent", "backgroundColor"], outputs: ["selectedIndexChange", "focusChange", "animationDone", "selectedTabChange"], exportAs: ["matTabGroup"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TabGroupPreserveContentExample, decorators: [{
            type: Component,
            args: [{ selector: 'tab-group-preserve-content-example', standalone: true, imports: [MatTabsModule], template: "<p>Start the video in the first tab and navigate to the second one to see how it keeps playing.</p>\r\n\r\n<mat-tab-group preserveContent>\r\n  <mat-tab label=\"First\">\r\n    <iframe\r\n      width=\"560\"\r\n      height=\"315\"\r\n      src=\"https://www.youtube.com/embed/B-lipaiZII8\"\r\n      style=\"border: 0\"\r\n      allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\r\n      allowfullscreen></iframe>\r\n  </mat-tab>\r\n  <mat-tab label=\"Second\">Note how the video from the previous tab is still playing.</mat-tab>\r\n</mat-tab-group>\r\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWdyb3VwLXByZXNlcnZlLWNvbnRlbnQtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RhYnMvdGFiLWdyb3VwLXByZXNlcnZlLWNvbnRlbnQvdGFiLWdyb3VwLXByZXNlcnZlLWNvbnRlbnQtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RhYnMvdGFiLWdyb3VwLXByZXNlcnZlLWNvbnRlbnQvdGFiLWdyb3VwLXByZXNlcnZlLWNvbnRlbnQtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDOzs7QUFFckQ7O0dBRUc7QUFPSCxNQUFNLE9BQU8sOEJBQThCOzhHQUE5Qiw4QkFBOEI7a0dBQTlCLDhCQUE4Qiw4RkNaM0MsMmtCQWNBLDJDREpZLGFBQWE7OzJGQUVaLDhCQUE4QjtrQkFOMUMsU0FBUzsrQkFDRSxvQ0FBb0MsY0FFbEMsSUFBSSxXQUNQLENBQUMsYUFBYSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge01hdFRhYnNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RhYnMnO1xyXG5cclxuLyoqXHJcbiAqIEB0aXRsZSBUYWIgZ3JvdXAgdGhhdCBrZWVwcyBpdHMgY29udGVudCBpbnNpZGUgdGhlIERPTSB3aGVuIGl0J3Mgb2ZmLXNjcmVlbi5cclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAndGFiLWdyb3VwLXByZXNlcnZlLWNvbnRlbnQtZXhhbXBsZScsXHJcbiAgdGVtcGxhdGVVcmw6ICd0YWItZ3JvdXAtcHJlc2VydmUtY29udGVudC1leGFtcGxlLmh0bWwnLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgaW1wb3J0czogW01hdFRhYnNNb2R1bGVdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGFiR3JvdXBQcmVzZXJ2ZUNvbnRlbnRFeGFtcGxlIHt9XHJcbiIsIjxwPlN0YXJ0IHRoZSB2aWRlbyBpbiB0aGUgZmlyc3QgdGFiIGFuZCBuYXZpZ2F0ZSB0byB0aGUgc2Vjb25kIG9uZSB0byBzZWUgaG93IGl0IGtlZXBzIHBsYXlpbmcuPC9wPlxyXG5cclxuPG1hdC10YWItZ3JvdXAgcHJlc2VydmVDb250ZW50PlxyXG4gIDxtYXQtdGFiIGxhYmVsPVwiRmlyc3RcIj5cclxuICAgIDxpZnJhbWVcclxuICAgICAgd2lkdGg9XCI1NjBcIlxyXG4gICAgICBoZWlnaHQ9XCIzMTVcIlxyXG4gICAgICBzcmM9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9CLWxpcGFpWklJOFwiXHJcbiAgICAgIHN0eWxlPVwiYm9yZGVyOiAwXCJcclxuICAgICAgYWxsb3c9XCJhY2NlbGVyb21ldGVyOyBhdXRvcGxheTsgZW5jcnlwdGVkLW1lZGlhOyBneXJvc2NvcGU7IHBpY3R1cmUtaW4tcGljdHVyZVwiXHJcbiAgICAgIGFsbG93ZnVsbHNjcmVlbj48L2lmcmFtZT5cclxuICA8L21hdC10YWI+XHJcbiAgPG1hdC10YWIgbGFiZWw9XCJTZWNvbmRcIj5Ob3RlIGhvdyB0aGUgdmlkZW8gZnJvbSB0aGUgcHJldmlvdXMgdGFiIGlzIHN0aWxsIHBsYXlpbmcuPC9tYXQtdGFiPlxyXG48L21hdC10YWItZ3JvdXA+XHJcbiJdfQ==