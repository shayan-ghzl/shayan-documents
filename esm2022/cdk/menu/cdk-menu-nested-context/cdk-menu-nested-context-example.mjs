import { Component } from '@angular/core';
import { CdkMenu, CdkMenuItem, CdkContextMenuTrigger } from '@angular/cdk/menu';
import * as i0 from "@angular/core";
/** @title Nested context menus. */
export class CdkMenuNestedContextExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: CdkMenuNestedContextExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: CdkMenuNestedContextExample, isStandalone: true, selector: "cdk-menu-nested-context-example", exportAs: ["cdkMenuNestedContextExample"], ngImport: i0, template: "<!-- #docregion triggers -->\r\n<div class=\"example-context-area\" [cdkContextMenuTriggerFor]=\"outer\">\r\n  Outer context menu\r\n  <div class=\"example-context-area\" [cdkContextMenuTriggerFor]=\"inner\">Inner context menu</div>\r\n</div>\r\n<!-- #enddocregion triggers -->\r\n\r\n<ng-template #outer>\r\n  <div class=\"example-menu\" cdkMenu>\r\n    <button class=\"example-menu-item\" cdkMenuItem>Save</button>\r\n    <button class=\"example-menu-item\" cdkMenuItem>Exit</button>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #inner>\r\n  <div class=\"example-menu\" cdkMenu>\r\n    <button class=\"example-menu-item\" cdkMenuItem>Cut</button>\r\n    <button class=\"example-menu-item\" cdkMenuItem>Copy</button>\r\n    <button class=\"example-menu-item\" cdkMenuItem>Paste</button>\r\n  </div>\r\n</ng-template>\r\n", styles: [".example-context-area {\r\n  display: inline-grid;\r\n  border: 2px dashed black;\r\n}\r\n\r\n.example-context-area .example-context-area {\r\n  margin: 100px;\r\n  width: 200px;\r\n  height: 100px;\r\n}\r\n\r\n.example-menu {\r\n  display: inline-flex;\r\n  flex-direction: column;\r\n  min-width: 180px;\r\n  max-width: 280px;\r\n  background-color: rgb(255, 255, 255);\r\n  padding: 6px 0;\r\n}\r\n\r\n.example-menu-item {\r\n  background-color: transparent;\r\n  cursor: pointer;\r\n  border: none;\r\n\r\n  user-select: none;\r\n  min-width: 64px;\r\n  line-height: 36px;\r\n  padding: 0 16px;\r\n\r\n  display: flex;\r\n  align-items: center;\r\n  flex-direction: row;\r\n  flex: 1;\r\n}\r\n\r\n.example-menu-item:hover {\r\n  background-color: rgb(208, 208, 208);\r\n}\r\n\r\n.example-menu-item:active {\r\n  background-color: rgb(170, 170, 170);\r\n}\r\n"], dependencies: [{ kind: "directive", type: CdkContextMenuTrigger, selector: "[cdkContextMenuTriggerFor]", inputs: ["cdkContextMenuTriggerFor", "cdkContextMenuPosition", "cdkContextMenuTriggerData", "cdkContextMenuDisabled"], outputs: ["cdkContextMenuOpened", "cdkContextMenuClosed"], exportAs: ["cdkContextMenuTriggerFor"] }, { kind: "directive", type: CdkMenu, selector: "[cdkMenu]", outputs: ["closed"], exportAs: ["cdkMenu"] }, { kind: "directive", type: CdkMenuItem, selector: "[cdkMenuItem]", inputs: ["cdkMenuItemDisabled", "cdkMenuitemTypeaheadLabel"], outputs: ["cdkMenuItemTriggered"], exportAs: ["cdkMenuItem"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: CdkMenuNestedContextExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-menu-nested-context-example', exportAs: 'cdkMenuNestedContextExample', standalone: true, imports: [CdkContextMenuTrigger, CdkMenu, CdkMenuItem], template: "<!-- #docregion triggers -->\r\n<div class=\"example-context-area\" [cdkContextMenuTriggerFor]=\"outer\">\r\n  Outer context menu\r\n  <div class=\"example-context-area\" [cdkContextMenuTriggerFor]=\"inner\">Inner context menu</div>\r\n</div>\r\n<!-- #enddocregion triggers -->\r\n\r\n<ng-template #outer>\r\n  <div class=\"example-menu\" cdkMenu>\r\n    <button class=\"example-menu-item\" cdkMenuItem>Save</button>\r\n    <button class=\"example-menu-item\" cdkMenuItem>Exit</button>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #inner>\r\n  <div class=\"example-menu\" cdkMenu>\r\n    <button class=\"example-menu-item\" cdkMenuItem>Cut</button>\r\n    <button class=\"example-menu-item\" cdkMenuItem>Copy</button>\r\n    <button class=\"example-menu-item\" cdkMenuItem>Paste</button>\r\n  </div>\r\n</ng-template>\r\n", styles: [".example-context-area {\r\n  display: inline-grid;\r\n  border: 2px dashed black;\r\n}\r\n\r\n.example-context-area .example-context-area {\r\n  margin: 100px;\r\n  width: 200px;\r\n  height: 100px;\r\n}\r\n\r\n.example-menu {\r\n  display: inline-flex;\r\n  flex-direction: column;\r\n  min-width: 180px;\r\n  max-width: 280px;\r\n  background-color: rgb(255, 255, 255);\r\n  padding: 6px 0;\r\n}\r\n\r\n.example-menu-item {\r\n  background-color: transparent;\r\n  cursor: pointer;\r\n  border: none;\r\n\r\n  user-select: none;\r\n  min-width: 64px;\r\n  line-height: 36px;\r\n  padding: 0 16px;\r\n\r\n  display: flex;\r\n  align-items: center;\r\n  flex-direction: row;\r\n  flex: 1;\r\n}\r\n\r\n.example-menu-item:hover {\r\n  background-color: rgb(208, 208, 208);\r\n}\r\n\r\n.example-menu-item:active {\r\n  background-color: rgb(170, 170, 170);\r\n}\r\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLW1lbnUtbmVzdGVkLWNvbnRleHQtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9tZW51L2Nkay1tZW51LW5lc3RlZC1jb250ZXh0L2Nkay1tZW51LW5lc3RlZC1jb250ZXh0LWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvbWVudS9jZGstbWVudS1uZXN0ZWQtY29udGV4dC9jZGstbWVudS1uZXN0ZWQtY29udGV4dC1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxxQkFBcUIsRUFBQyxNQUFNLG1CQUFtQixDQUFDOztBQUU5RSxtQ0FBbUM7QUFTbkMsTUFBTSxPQUFPLDJCQUEyQjs4R0FBM0IsMkJBQTJCO2tHQUEzQiwyQkFBMkIsc0lDWnhDLDR6QkFxQkEsdzVCRFhZLHFCQUFxQixpU0FBRSxPQUFPLGtHQUFFLFdBQVc7OzJGQUUxQywyQkFBMkI7a0JBUnZDLFNBQVM7K0JBQ0UsaUNBQWlDLFlBQ2pDLDZCQUE2QixjQUczQixJQUFJLFdBQ1AsQ0FBQyxxQkFBcUIsRUFBRSxPQUFPLEVBQUUsV0FBVyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0Nka01lbnUsIENka01lbnVJdGVtLCBDZGtDb250ZXh0TWVudVRyaWdnZXJ9IGZyb20gJ0Bhbmd1bGFyL2Nkay9tZW51JztcclxuXHJcbi8qKiBAdGl0bGUgTmVzdGVkIGNvbnRleHQgbWVudXMuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY2RrLW1lbnUtbmVzdGVkLWNvbnRleHQtZXhhbXBsZScsXHJcbiAgZXhwb3J0QXM6ICdjZGtNZW51TmVzdGVkQ29udGV4dEV4YW1wbGUnLFxyXG4gIHN0eWxlVXJsczogWydjZGstbWVudS1uZXN0ZWQtY29udGV4dC1leGFtcGxlLmNzcyddLFxyXG4gIHRlbXBsYXRlVXJsOiAnY2RrLW1lbnUtbmVzdGVkLWNvbnRleHQtZXhhbXBsZS5odG1sJyxcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gIGltcG9ydHM6IFtDZGtDb250ZXh0TWVudVRyaWdnZXIsIENka01lbnUsIENka01lbnVJdGVtXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIENka01lbnVOZXN0ZWRDb250ZXh0RXhhbXBsZSB7fVxyXG4iLCI8IS0tICNkb2NyZWdpb24gdHJpZ2dlcnMgLS0+XHJcbjxkaXYgY2xhc3M9XCJleGFtcGxlLWNvbnRleHQtYXJlYVwiIFtjZGtDb250ZXh0TWVudVRyaWdnZXJGb3JdPVwib3V0ZXJcIj5cclxuICBPdXRlciBjb250ZXh0IG1lbnVcclxuICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1jb250ZXh0LWFyZWFcIiBbY2RrQ29udGV4dE1lbnVUcmlnZ2VyRm9yXT1cImlubmVyXCI+SW5uZXIgY29udGV4dCBtZW51PC9kaXY+XHJcbjwvZGl2PlxyXG48IS0tICNlbmRkb2NyZWdpb24gdHJpZ2dlcnMgLS0+XHJcblxyXG48bmctdGVtcGxhdGUgI291dGVyPlxyXG4gIDxkaXYgY2xhc3M9XCJleGFtcGxlLW1lbnVcIiBjZGtNZW51PlxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtbWVudS1pdGVtXCIgY2RrTWVudUl0ZW0+U2F2ZTwvYnV0dG9uPlxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtbWVudS1pdGVtXCIgY2RrTWVudUl0ZW0+RXhpdDwvYnV0dG9uPlxyXG4gIDwvZGl2PlxyXG48L25nLXRlbXBsYXRlPlxyXG5cclxuPG5nLXRlbXBsYXRlICNpbm5lcj5cclxuICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1tZW51XCIgY2RrTWVudT5cclxuICAgIDxidXR0b24gY2xhc3M9XCJleGFtcGxlLW1lbnUtaXRlbVwiIGNka01lbnVJdGVtPkN1dDwvYnV0dG9uPlxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtbWVudS1pdGVtXCIgY2RrTWVudUl0ZW0+Q29weTwvYnV0dG9uPlxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtbWVudS1pdGVtXCIgY2RrTWVudUl0ZW0+UGFzdGU8L2J1dHRvbj5cclxuICA8L2Rpdj5cclxuPC9uZy10ZW1wbGF0ZT5cclxuIl19