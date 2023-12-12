import { Component } from '@angular/core';
import { CdkMenu, CdkMenuItem } from '@angular/cdk/menu';
import * as i0 from "@angular/core";
/** @title Gmail inline menu. */
export class CdkMenuInlineExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: CdkMenuInlineExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: CdkMenuInlineExample, isStandalone: true, selector: "cdk-menu-inline-example", exportAs: ["cdkMenuInlineExample"], ngImport: i0, template: "<div class=\"example-menu\" cdkMenu>\r\n  <button class=\"example-menu-item\" cdkMenuItem>Inbox</button>\r\n  <button class=\"example-menu-item\" cdkMenuItem>Snoozed</button>\r\n  <button class=\"example-menu-item\" cdkMenuItem>Important</button>\r\n  <button class=\"example-menu-item\" cdkMenuItem>Sent</button>\r\n  <button class=\"example-menu-item\" cdkMenuItem>Drafts</button>\r\n  <button class=\"example-menu-item\" cdkMenuItem>All Mail</button>\r\n</div>\r\n", styles: [".example-menu {\r\n  display: inline-flex;\r\n  flex-direction: column;\r\n  min-width: 180px;\r\n  max-width: 280px;\r\n  background-color: rgb(255, 255, 255);\r\n  padding: 6px 0;\r\n}\r\n\r\n.example-menu-item {\r\n  background-color: transparent;\r\n  cursor: pointer;\r\n  border: none;\r\n\r\n  user-select: none;\r\n  min-width: 64px;\r\n  line-height: 36px;\r\n  padding: 0 16px;\r\n\r\n  display: flex;\r\n  align-items: center;\r\n  flex-direction: row;\r\n  flex: 1;\r\n}\r\n\r\n.example-menu-item:hover {\r\n  background-color: rgb(208, 208, 208);\r\n}\r\n\r\n.example-menu-item:active {\r\n  background-color: rgb(170, 170, 170);\r\n}\r\n"], dependencies: [{ kind: "directive", type: CdkMenu, selector: "[cdkMenu]", outputs: ["closed"], exportAs: ["cdkMenu"] }, { kind: "directive", type: CdkMenuItem, selector: "[cdkMenuItem]", inputs: ["cdkMenuItemDisabled", "cdkMenuitemTypeaheadLabel"], outputs: ["cdkMenuItemTriggered"], exportAs: ["cdkMenuItem"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: CdkMenuInlineExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-menu-inline-example', exportAs: 'cdkMenuInlineExample', standalone: true, imports: [CdkMenu, CdkMenuItem], template: "<div class=\"example-menu\" cdkMenu>\r\n  <button class=\"example-menu-item\" cdkMenuItem>Inbox</button>\r\n  <button class=\"example-menu-item\" cdkMenuItem>Snoozed</button>\r\n  <button class=\"example-menu-item\" cdkMenuItem>Important</button>\r\n  <button class=\"example-menu-item\" cdkMenuItem>Sent</button>\r\n  <button class=\"example-menu-item\" cdkMenuItem>Drafts</button>\r\n  <button class=\"example-menu-item\" cdkMenuItem>All Mail</button>\r\n</div>\r\n", styles: [".example-menu {\r\n  display: inline-flex;\r\n  flex-direction: column;\r\n  min-width: 180px;\r\n  max-width: 280px;\r\n  background-color: rgb(255, 255, 255);\r\n  padding: 6px 0;\r\n}\r\n\r\n.example-menu-item {\r\n  background-color: transparent;\r\n  cursor: pointer;\r\n  border: none;\r\n\r\n  user-select: none;\r\n  min-width: 64px;\r\n  line-height: 36px;\r\n  padding: 0 16px;\r\n\r\n  display: flex;\r\n  align-items: center;\r\n  flex-direction: row;\r\n  flex: 1;\r\n}\r\n\r\n.example-menu-item:hover {\r\n  background-color: rgb(208, 208, 208);\r\n}\r\n\r\n.example-menu-item:active {\r\n  background-color: rgb(170, 170, 170);\r\n}\r\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLW1lbnUtaW5saW5lLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvbWVudS9jZGstbWVudS1pbmxpbmUvY2RrLW1lbnUtaW5saW5lLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvbWVudS9jZGstbWVudS1pbmxpbmUvY2RrLW1lbnUtaW5saW5lLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxPQUFPLEVBQUUsV0FBVyxFQUFDLE1BQU0sbUJBQW1CLENBQUM7O0FBRXZELGdDQUFnQztBQVNoQyxNQUFNLE9BQU8sb0JBQW9COzhHQUFwQixvQkFBb0I7a0dBQXBCLG9CQUFvQix1SENaakMscWRBUUEscXNCREVZLE9BQU8sa0dBQUUsV0FBVzs7MkZBRW5CLG9CQUFvQjtrQkFSaEMsU0FBUzsrQkFDRSx5QkFBeUIsWUFDekIsc0JBQXNCLGNBR3BCLElBQUksV0FDUCxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Q2RrTWVudSwgQ2RrTWVudUl0ZW19IGZyb20gJ0Bhbmd1bGFyL2Nkay9tZW51JztcclxuXHJcbi8qKiBAdGl0bGUgR21haWwgaW5saW5lIG1lbnUuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY2RrLW1lbnUtaW5saW5lLWV4YW1wbGUnLFxyXG4gIGV4cG9ydEFzOiAnY2RrTWVudUlubGluZUV4YW1wbGUnLFxyXG4gIHN0eWxlVXJsczogWydjZGstbWVudS1pbmxpbmUtZXhhbXBsZS5jc3MnXSxcclxuICB0ZW1wbGF0ZVVybDogJ2Nkay1tZW51LWlubGluZS1leGFtcGxlLmh0bWwnLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgaW1wb3J0czogW0Nka01lbnUsIENka01lbnVJdGVtXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIENka01lbnVJbmxpbmVFeGFtcGxlIHt9XHJcbiIsIjxkaXYgY2xhc3M9XCJleGFtcGxlLW1lbnVcIiBjZGtNZW51PlxyXG4gIDxidXR0b24gY2xhc3M9XCJleGFtcGxlLW1lbnUtaXRlbVwiIGNka01lbnVJdGVtPkluYm94PC9idXR0b24+XHJcbiAgPGJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtbWVudS1pdGVtXCIgY2RrTWVudUl0ZW0+U25vb3plZDwvYnV0dG9uPlxyXG4gIDxidXR0b24gY2xhc3M9XCJleGFtcGxlLW1lbnUtaXRlbVwiIGNka01lbnVJdGVtPkltcG9ydGFudDwvYnV0dG9uPlxyXG4gIDxidXR0b24gY2xhc3M9XCJleGFtcGxlLW1lbnUtaXRlbVwiIGNka01lbnVJdGVtPlNlbnQ8L2J1dHRvbj5cclxuICA8YnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1tZW51LWl0ZW1cIiBjZGtNZW51SXRlbT5EcmFmdHM8L2J1dHRvbj5cclxuICA8YnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1tZW51LWl0ZW1cIiBjZGtNZW51SXRlbT5BbGwgTWFpbDwvYnV0dG9uPlxyXG48L2Rpdj5cclxuIl19