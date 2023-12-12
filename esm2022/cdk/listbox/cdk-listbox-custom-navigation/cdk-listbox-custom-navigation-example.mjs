import { Component } from '@angular/core';
import { CdkListbox, CdkOption } from '@angular/cdk/listbox';
import * as i0 from "@angular/core";
/** @title Listbox with custom keyboard navigation options. */
export class CdkListboxCustomNavigationExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: CdkListboxCustomNavigationExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: CdkListboxCustomNavigationExample, isStandalone: true, selector: "cdk-listbox-custom-navigation-example", exportAs: ["cdkListboxCustomNavigationExample"], ngImport: i0, template: "<div class=\"example-listbox-container\">\r\n  <!-- #docregion listbox -->\r\n  <label class=\"example-listbox-label\" id=\"example-flavor-label\">\r\n    Flavor\r\n  </label>\r\n  <ul cdkListbox\r\n      cdkListboxNavigatesDisabledOptions\r\n      cdkListboxNavigationWrapDisabled\r\n      aria-labelledby=\"example-flavor-label\"\r\n      class=\"example-listbox\">\r\n    <li cdkOption=\"chocolate\"\r\n        class=\"example-option\">\r\n      Chocolate\r\n    </li>\r\n    <li cdkOption=\"pumpkin-spice\"\r\n        cdkOptionDisabled\r\n        class=\"example-option\">\r\n      Pumpkin Spice (seasonal)\r\n    </li>\r\n    <li cdkOption=\"strawberry\"\r\n        class=\"example-option\">\r\n      Strawberry\r\n    </li>\r\n    <li cdkOption=\"vanilla\"\r\n        class=\"example-option\">\r\n      Vanilla\r\n    </li>\r\n  </ul>\r\n  <!-- #enddocregion listbox -->\r\n</div>\r\n", styles: [".example-listbox-container {\r\n  display: block;\r\n  width: 250px;\r\n  border: 1px solid black;\r\n}\r\n\r\n.example-listbox-label {\r\n  display: block;\r\n  padding: 5px;\r\n}\r\n\r\n.example-listbox {\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.example-option {\r\n  position: relative;\r\n  padding: 5px 5px 5px 25px;\r\n}\r\n\r\n.example-option[aria-selected='true']::before {\r\n  content: '';\r\n  display: block;\r\n  width: 20px;\r\n  height: 20px;\r\n  background-image: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" width=\"24\"><path d=\"m9.55 18-5.7-5.7 1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4Z\"/></svg>'); /* stylelint-disable-line */\r\n  background-size: cover;\r\n  position: absolute;\r\n  left: 2px;\r\n}\r\n\r\n.example-option[aria-disabled='true'] {\r\n  opacity: 0.5;\r\n}\r\n\r\n.example-option[aria-disabled='false']:focus {\r\n  background: rgba(0, 0, 0, 0.2);\r\n}\r\n"], dependencies: [{ kind: "directive", type: CdkListbox, selector: "[cdkListbox]", inputs: ["id", "tabindex", "cdkListboxValue", "cdkListboxMultiple", "cdkListboxDisabled", "cdkListboxUseActiveDescendant", "cdkListboxOrientation", "cdkListboxCompareWith", "cdkListboxNavigationWrapDisabled", "cdkListboxNavigatesDisabledOptions"], outputs: ["cdkListboxValueChange"], exportAs: ["cdkListbox"] }, { kind: "directive", type: CdkOption, selector: "[cdkOption]", inputs: ["id", "cdkOption", "cdkOptionTypeaheadLabel", "cdkOptionDisabled", "tabindex"], exportAs: ["cdkOption"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: CdkListboxCustomNavigationExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-listbox-custom-navigation-example', exportAs: 'cdkListboxCustomNavigationExample', standalone: true, imports: [CdkListbox, CdkOption], template: "<div class=\"example-listbox-container\">\r\n  <!-- #docregion listbox -->\r\n  <label class=\"example-listbox-label\" id=\"example-flavor-label\">\r\n    Flavor\r\n  </label>\r\n  <ul cdkListbox\r\n      cdkListboxNavigatesDisabledOptions\r\n      cdkListboxNavigationWrapDisabled\r\n      aria-labelledby=\"example-flavor-label\"\r\n      class=\"example-listbox\">\r\n    <li cdkOption=\"chocolate\"\r\n        class=\"example-option\">\r\n      Chocolate\r\n    </li>\r\n    <li cdkOption=\"pumpkin-spice\"\r\n        cdkOptionDisabled\r\n        class=\"example-option\">\r\n      Pumpkin Spice (seasonal)\r\n    </li>\r\n    <li cdkOption=\"strawberry\"\r\n        class=\"example-option\">\r\n      Strawberry\r\n    </li>\r\n    <li cdkOption=\"vanilla\"\r\n        class=\"example-option\">\r\n      Vanilla\r\n    </li>\r\n  </ul>\r\n  <!-- #enddocregion listbox -->\r\n</div>\r\n", styles: [".example-listbox-container {\r\n  display: block;\r\n  width: 250px;\r\n  border: 1px solid black;\r\n}\r\n\r\n.example-listbox-label {\r\n  display: block;\r\n  padding: 5px;\r\n}\r\n\r\n.example-listbox {\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.example-option {\r\n  position: relative;\r\n  padding: 5px 5px 5px 25px;\r\n}\r\n\r\n.example-option[aria-selected='true']::before {\r\n  content: '';\r\n  display: block;\r\n  width: 20px;\r\n  height: 20px;\r\n  background-image: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" width=\"24\"><path d=\"m9.55 18-5.7-5.7 1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4Z\"/></svg>'); /* stylelint-disable-line */\r\n  background-size: cover;\r\n  position: absolute;\r\n  left: 2px;\r\n}\r\n\r\n.example-option[aria-disabled='true'] {\r\n  opacity: 0.5;\r\n}\r\n\r\n.example-option[aria-disabled='false']:focus {\r\n  background: rgba(0, 0, 0, 0.2);\r\n}\r\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWxpc3Rib3gtY3VzdG9tLW5hdmlnYXRpb24tZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9saXN0Ym94L2Nkay1saXN0Ym94LWN1c3RvbS1uYXZpZ2F0aW9uL2Nkay1saXN0Ym94LWN1c3RvbS1uYXZpZ2F0aW9uLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvbGlzdGJveC9jZGstbGlzdGJveC1jdXN0b20tbmF2aWdhdGlvbi9jZGstbGlzdGJveC1jdXN0b20tbmF2aWdhdGlvbi1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsVUFBVSxFQUFFLFNBQVMsRUFBQyxNQUFNLHNCQUFzQixDQUFDOztBQUUzRCw4REFBOEQ7QUFTOUQsTUFBTSxPQUFPLGlDQUFpQzs4R0FBakMsaUNBQWlDO2tHQUFqQyxpQ0FBaUMsa0pDWjlDLDQzQkE4QkEsaWdDRHBCWSxVQUFVLCtXQUFFLFNBQVM7OzJGQUVwQixpQ0FBaUM7a0JBUjdDLFNBQVM7K0JBQ0UsdUNBQXVDLFlBQ3ZDLG1DQUFtQyxjQUdqQyxJQUFJLFdBQ1AsQ0FBQyxVQUFVLEVBQUUsU0FBUyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0Nka0xpc3Rib3gsIENka09wdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL2xpc3Rib3gnO1xyXG5cclxuLyoqIEB0aXRsZSBMaXN0Ym94IHdpdGggY3VzdG9tIGtleWJvYXJkIG5hdmlnYXRpb24gb3B0aW9ucy4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjZGstbGlzdGJveC1jdXN0b20tbmF2aWdhdGlvbi1leGFtcGxlJyxcclxuICBleHBvcnRBczogJ2Nka0xpc3Rib3hDdXN0b21OYXZpZ2F0aW9uRXhhbXBsZScsXHJcbiAgdGVtcGxhdGVVcmw6ICdjZGstbGlzdGJveC1jdXN0b20tbmF2aWdhdGlvbi1leGFtcGxlLmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWydjZGstbGlzdGJveC1jdXN0b20tbmF2aWdhdGlvbi1leGFtcGxlLmNzcyddLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgaW1wb3J0czogW0Nka0xpc3Rib3gsIENka09wdGlvbl0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDZGtMaXN0Ym94Q3VzdG9tTmF2aWdhdGlvbkV4YW1wbGUge31cclxuIiwiPGRpdiBjbGFzcz1cImV4YW1wbGUtbGlzdGJveC1jb250YWluZXJcIj5cclxuICA8IS0tICNkb2NyZWdpb24gbGlzdGJveCAtLT5cclxuICA8bGFiZWwgY2xhc3M9XCJleGFtcGxlLWxpc3Rib3gtbGFiZWxcIiBpZD1cImV4YW1wbGUtZmxhdm9yLWxhYmVsXCI+XHJcbiAgICBGbGF2b3JcclxuICA8L2xhYmVsPlxyXG4gIDx1bCBjZGtMaXN0Ym94XHJcbiAgICAgIGNka0xpc3Rib3hOYXZpZ2F0ZXNEaXNhYmxlZE9wdGlvbnNcclxuICAgICAgY2RrTGlzdGJveE5hdmlnYXRpb25XcmFwRGlzYWJsZWRcclxuICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwiZXhhbXBsZS1mbGF2b3ItbGFiZWxcIlxyXG4gICAgICBjbGFzcz1cImV4YW1wbGUtbGlzdGJveFwiPlxyXG4gICAgPGxpIGNka09wdGlvbj1cImNob2NvbGF0ZVwiXHJcbiAgICAgICAgY2xhc3M9XCJleGFtcGxlLW9wdGlvblwiPlxyXG4gICAgICBDaG9jb2xhdGVcclxuICAgIDwvbGk+XHJcbiAgICA8bGkgY2RrT3B0aW9uPVwicHVtcGtpbi1zcGljZVwiXHJcbiAgICAgICAgY2RrT3B0aW9uRGlzYWJsZWRcclxuICAgICAgICBjbGFzcz1cImV4YW1wbGUtb3B0aW9uXCI+XHJcbiAgICAgIFB1bXBraW4gU3BpY2UgKHNlYXNvbmFsKVxyXG4gICAgPC9saT5cclxuICAgIDxsaSBjZGtPcHRpb249XCJzdHJhd2JlcnJ5XCJcclxuICAgICAgICBjbGFzcz1cImV4YW1wbGUtb3B0aW9uXCI+XHJcbiAgICAgIFN0cmF3YmVycnlcclxuICAgIDwvbGk+XHJcbiAgICA8bGkgY2RrT3B0aW9uPVwidmFuaWxsYVwiXHJcbiAgICAgICAgY2xhc3M9XCJleGFtcGxlLW9wdGlvblwiPlxyXG4gICAgICBWYW5pbGxhXHJcbiAgICA8L2xpPlxyXG4gIDwvdWw+XHJcbiAgPCEtLSAjZW5kZG9jcmVnaW9uIGxpc3Rib3ggLS0+XHJcbjwvZGl2PlxyXG4iXX0=