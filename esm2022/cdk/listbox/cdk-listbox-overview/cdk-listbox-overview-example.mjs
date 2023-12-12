import { Component } from '@angular/core';
import { CdkListbox, CdkOption } from '@angular/cdk/listbox';
import * as i0 from "@angular/core";
/** @title Basic listbox. */
export class CdkListboxOverviewExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: CdkListboxOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: CdkListboxOverviewExample, isStandalone: true, selector: "cdk-listbox-overview-example", exportAs: ["cdkListboxOverviewExample"], ngImport: i0, template: "<div class=\"example-listbox-container\">\r\n  <!-- #docregion listbox -->\r\n  <label class=\"example-listbox-label\" id=\"example-fav-color-label\">\r\n    Favorite color\r\n  </label>\r\n  <ul cdkListbox\r\n      aria-labelledby=\"example-fav-color-label\"\r\n      class=\"example-listbox\">\r\n    <!-- #docregion option -->\r\n    <li cdkOption=\"red\" class=\"example-option\">Red</li>\r\n    <!-- #enddocregion option -->\r\n    <li cdkOption=\"green\" class=\"example-option\">Green</li>\r\n    <li cdkOption=\"blue\" class=\"example-option\">Blue</li>\r\n  </ul>\r\n  <!-- #enddocregion listbox -->\r\n</div>\r\n", styles: [".example-listbox-container {\r\n  display: block;\r\n  width: 250px;\r\n  border: 1px solid black;\r\n}\r\n\r\n.example-listbox-label {\r\n  display: block;\r\n  padding: 5px;\r\n}\r\n\r\n.example-listbox {\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.example-option {\r\n  position: relative;\r\n  padding: 5px 5px 5px 25px;\r\n}\r\n\r\n.example-option[aria-selected='true']::before {\r\n  content: '';\r\n  display: block;\r\n  width: 20px;\r\n  height: 20px;\r\n  background-image: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" width=\"24\"><path d=\"m9.55 18-5.7-5.7 1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4Z\"/></svg>'); /* stylelint-disable-line */\r\n  background-size: cover;\r\n  position: absolute;\r\n  left: 2px;\r\n}\r\n\r\n.example-option:focus {\r\n  background: rgba(0, 0, 0, 0.2);\r\n}\r\n"], dependencies: [{ kind: "directive", type: CdkListbox, selector: "[cdkListbox]", inputs: ["id", "tabindex", "cdkListboxValue", "cdkListboxMultiple", "cdkListboxDisabled", "cdkListboxUseActiveDescendant", "cdkListboxOrientation", "cdkListboxCompareWith", "cdkListboxNavigationWrapDisabled", "cdkListboxNavigatesDisabledOptions"], outputs: ["cdkListboxValueChange"], exportAs: ["cdkListbox"] }, { kind: "directive", type: CdkOption, selector: "[cdkOption]", inputs: ["id", "cdkOption", "cdkOptionTypeaheadLabel", "cdkOptionDisabled", "tabindex"], exportAs: ["cdkOption"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: CdkListboxOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-listbox-overview-example', exportAs: 'cdkListboxOverviewExample', standalone: true, imports: [CdkListbox, CdkOption], template: "<div class=\"example-listbox-container\">\r\n  <!-- #docregion listbox -->\r\n  <label class=\"example-listbox-label\" id=\"example-fav-color-label\">\r\n    Favorite color\r\n  </label>\r\n  <ul cdkListbox\r\n      aria-labelledby=\"example-fav-color-label\"\r\n      class=\"example-listbox\">\r\n    <!-- #docregion option -->\r\n    <li cdkOption=\"red\" class=\"example-option\">Red</li>\r\n    <!-- #enddocregion option -->\r\n    <li cdkOption=\"green\" class=\"example-option\">Green</li>\r\n    <li cdkOption=\"blue\" class=\"example-option\">Blue</li>\r\n  </ul>\r\n  <!-- #enddocregion listbox -->\r\n</div>\r\n", styles: [".example-listbox-container {\r\n  display: block;\r\n  width: 250px;\r\n  border: 1px solid black;\r\n}\r\n\r\n.example-listbox-label {\r\n  display: block;\r\n  padding: 5px;\r\n}\r\n\r\n.example-listbox {\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.example-option {\r\n  position: relative;\r\n  padding: 5px 5px 5px 25px;\r\n}\r\n\r\n.example-option[aria-selected='true']::before {\r\n  content: '';\r\n  display: block;\r\n  width: 20px;\r\n  height: 20px;\r\n  background-image: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" width=\"24\"><path d=\"m9.55 18-5.7-5.7 1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4Z\"/></svg>'); /* stylelint-disable-line */\r\n  background-size: cover;\r\n  position: absolute;\r\n  left: 2px;\r\n}\r\n\r\n.example-option:focus {\r\n  background: rgba(0, 0, 0, 0.2);\r\n}\r\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWxpc3Rib3gtb3ZlcnZpZXctZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9saXN0Ym94L2Nkay1saXN0Ym94LW92ZXJ2aWV3L2Nkay1saXN0Ym94LW92ZXJ2aWV3LWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvbGlzdGJveC9jZGstbGlzdGJveC1vdmVydmlldy9jZGstbGlzdGJveC1vdmVydmlldy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsVUFBVSxFQUFFLFNBQVMsRUFBQyxNQUFNLHNCQUFzQixDQUFDOztBQUUzRCw0QkFBNEI7QUFTNUIsTUFBTSxPQUFPLHlCQUF5Qjs4R0FBekIseUJBQXlCO2tHQUF6Qix5QkFBeUIsaUlDWnRDLGduQkFnQkEsbTZCRE5ZLFVBQVUsK1dBQUUsU0FBUzs7MkZBRXBCLHlCQUF5QjtrQkFSckMsU0FBUzsrQkFDRSw4QkFBOEIsWUFDOUIsMkJBQTJCLGNBR3pCLElBQUksV0FDUCxDQUFDLFVBQVUsRUFBRSxTQUFTLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Q2RrTGlzdGJveCwgQ2RrT3B0aW9ufSBmcm9tICdAYW5ndWxhci9jZGsvbGlzdGJveCc7XHJcblxyXG4vKiogQHRpdGxlIEJhc2ljIGxpc3Rib3guICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY2RrLWxpc3Rib3gtb3ZlcnZpZXctZXhhbXBsZScsXHJcbiAgZXhwb3J0QXM6ICdjZGtMaXN0Ym94T3ZlcnZpZXdFeGFtcGxlJyxcclxuICB0ZW1wbGF0ZVVybDogJ2Nkay1saXN0Ym94LW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJ2Nkay1saXN0Ym94LW92ZXJ2aWV3LWV4YW1wbGUuY3NzJ10sXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBpbXBvcnRzOiBbQ2RrTGlzdGJveCwgQ2RrT3B0aW9uXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIENka0xpc3Rib3hPdmVydmlld0V4YW1wbGUge31cclxuIiwiPGRpdiBjbGFzcz1cImV4YW1wbGUtbGlzdGJveC1jb250YWluZXJcIj5cclxuICA8IS0tICNkb2NyZWdpb24gbGlzdGJveCAtLT5cclxuICA8bGFiZWwgY2xhc3M9XCJleGFtcGxlLWxpc3Rib3gtbGFiZWxcIiBpZD1cImV4YW1wbGUtZmF2LWNvbG9yLWxhYmVsXCI+XHJcbiAgICBGYXZvcml0ZSBjb2xvclxyXG4gIDwvbGFiZWw+XHJcbiAgPHVsIGNka0xpc3Rib3hcclxuICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwiZXhhbXBsZS1mYXYtY29sb3ItbGFiZWxcIlxyXG4gICAgICBjbGFzcz1cImV4YW1wbGUtbGlzdGJveFwiPlxyXG4gICAgPCEtLSAjZG9jcmVnaW9uIG9wdGlvbiAtLT5cclxuICAgIDxsaSBjZGtPcHRpb249XCJyZWRcIiBjbGFzcz1cImV4YW1wbGUtb3B0aW9uXCI+UmVkPC9saT5cclxuICAgIDwhLS0gI2VuZGRvY3JlZ2lvbiBvcHRpb24gLS0+XHJcbiAgICA8bGkgY2RrT3B0aW9uPVwiZ3JlZW5cIiBjbGFzcz1cImV4YW1wbGUtb3B0aW9uXCI+R3JlZW48L2xpPlxyXG4gICAgPGxpIGNka09wdGlvbj1cImJsdWVcIiBjbGFzcz1cImV4YW1wbGUtb3B0aW9uXCI+Qmx1ZTwvbGk+XHJcbiAgPC91bD5cclxuICA8IS0tICNlbmRkb2NyZWdpb24gbGlzdGJveCAtLT5cclxuPC9kaXY+XHJcbiJdfQ==