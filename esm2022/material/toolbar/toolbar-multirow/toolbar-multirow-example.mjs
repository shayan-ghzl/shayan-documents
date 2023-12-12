import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/toolbar";
import * as i2 from "@angular/material/icon";
/**
 * @title Multi-row toolbar
 */
export class ToolbarMultirowExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: ToolbarMultirowExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: ToolbarMultirowExample, isStandalone: true, selector: "toolbar-multirow-example", ngImport: i0, template: "<mat-toolbar color=\"primary\">\r\n<!-- #docregion toolbar-row -->\r\n  <mat-toolbar-row>\r\n    <span>Custom Toolbar</span>\r\n  </mat-toolbar-row>\r\n<!-- #enddocregion toolbar-row -->\r\n\r\n<!-- #docregion toolbar-position-content -->\r\n  <mat-toolbar-row>\r\n    <span>Second Line</span>\r\n    <span class=\"example-spacer\"></span>\r\n    <mat-icon class=\"example-icon\" aria-hidden=\"false\" aria-label=\"Example user verified icon\">verified_user</mat-icon>\r\n  </mat-toolbar-row>\r\n<!-- #enddocregion toolbar-position-content -->\r\n\r\n  <mat-toolbar-row>\r\n    <span>Third Line</span>\r\n    <span class=\"example-spacer\"></span>\r\n    <mat-icon class=\"example-icon\" aria-hidden=\"false\" aria-label=\"Example heart icon\">favorite</mat-icon>\r\n    <mat-icon class=\"example-icon\" aria-hidden=\"false\" aria-label=\"Example delete icon\">delete</mat-icon>\r\n  </mat-toolbar-row>\r\n</mat-toolbar>\r\n", styles: [".example-icon {\r\n  padding: 0 14px;\r\n}\r\n/* #docregion toolbar-position-content-style */\r\n.example-spacer {\r\n  flex: 1 1 auto;\r\n}\r\n/* #enddocregion toolbar-position-content-style */\r\n"], dependencies: [{ kind: "ngmodule", type: MatToolbarModule }, { kind: "component", type: i1.MatToolbar, selector: "mat-toolbar", inputs: ["color"], exportAs: ["matToolbar"] }, { kind: "directive", type: i1.MatToolbarRow, selector: "mat-toolbar-row", exportAs: ["matToolbarRow"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i2.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: ToolbarMultirowExample, decorators: [{
            type: Component,
            args: [{ selector: 'toolbar-multirow-example', standalone: true, imports: [MatToolbarModule, MatIconModule], template: "<mat-toolbar color=\"primary\">\r\n<!-- #docregion toolbar-row -->\r\n  <mat-toolbar-row>\r\n    <span>Custom Toolbar</span>\r\n  </mat-toolbar-row>\r\n<!-- #enddocregion toolbar-row -->\r\n\r\n<!-- #docregion toolbar-position-content -->\r\n  <mat-toolbar-row>\r\n    <span>Second Line</span>\r\n    <span class=\"example-spacer\"></span>\r\n    <mat-icon class=\"example-icon\" aria-hidden=\"false\" aria-label=\"Example user verified icon\">verified_user</mat-icon>\r\n  </mat-toolbar-row>\r\n<!-- #enddocregion toolbar-position-content -->\r\n\r\n  <mat-toolbar-row>\r\n    <span>Third Line</span>\r\n    <span class=\"example-spacer\"></span>\r\n    <mat-icon class=\"example-icon\" aria-hidden=\"false\" aria-label=\"Example heart icon\">favorite</mat-icon>\r\n    <mat-icon class=\"example-icon\" aria-hidden=\"false\" aria-label=\"Example delete icon\">delete</mat-icon>\r\n  </mat-toolbar-row>\r\n</mat-toolbar>\r\n", styles: [".example-icon {\r\n  padding: 0 14px;\r\n}\r\n/* #docregion toolbar-position-content-style */\r\n.example-spacer {\r\n  flex: 1 1 auto;\r\n}\r\n/* #enddocregion toolbar-position-content-style */\r\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbGJhci1tdWx0aXJvdy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvdG9vbGJhci90b29sYmFyLW11bHRpcm93L3Rvb2xiYXItbXVsdGlyb3ctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3Rvb2xiYXIvdG9vbGJhci1tdWx0aXJvdy90b29sYmFyLW11bHRpcm93LWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQzs7OztBQUUzRDs7R0FFRztBQVFILE1BQU0sT0FBTyxzQkFBc0I7OEdBQXRCLHNCQUFzQjtrR0FBdEIsc0JBQXNCLG9GQ2RuQyw4NUJBc0JBLCtQRFZZLGdCQUFnQix5UEFBRSxhQUFhOzsyRkFFOUIsc0JBQXNCO2tCQVBsQyxTQUFTOytCQUNFLDBCQUEwQixjQUd4QixJQUFJLFdBQ1AsQ0FBQyxnQkFBZ0IsRUFBRSxhQUFhLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7TWF0SWNvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XHJcbmltcG9ydCB7TWF0VG9vbGJhck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdG9vbGJhcic7XHJcblxyXG4vKipcclxuICogQHRpdGxlIE11bHRpLXJvdyB0b29sYmFyXHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3Rvb2xiYXItbXVsdGlyb3ctZXhhbXBsZScsXHJcbiAgdGVtcGxhdGVVcmw6ICd0b29sYmFyLW11bHRpcm93LWV4YW1wbGUuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJ3Rvb2xiYXItbXVsdGlyb3ctZXhhbXBsZS5jc3MnXSxcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gIGltcG9ydHM6IFtNYXRUb29sYmFyTW9kdWxlLCBNYXRJY29uTW9kdWxlXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFRvb2xiYXJNdWx0aXJvd0V4YW1wbGUge31cclxuIiwiPG1hdC10b29sYmFyIGNvbG9yPVwicHJpbWFyeVwiPlxyXG48IS0tICNkb2NyZWdpb24gdG9vbGJhci1yb3cgLS0+XHJcbiAgPG1hdC10b29sYmFyLXJvdz5cclxuICAgIDxzcGFuPkN1c3RvbSBUb29sYmFyPC9zcGFuPlxyXG4gIDwvbWF0LXRvb2xiYXItcm93PlxyXG48IS0tICNlbmRkb2NyZWdpb24gdG9vbGJhci1yb3cgLS0+XHJcblxyXG48IS0tICNkb2NyZWdpb24gdG9vbGJhci1wb3NpdGlvbi1jb250ZW50IC0tPlxyXG4gIDxtYXQtdG9vbGJhci1yb3c+XHJcbiAgICA8c3Bhbj5TZWNvbmQgTGluZTwvc3Bhbj5cclxuICAgIDxzcGFuIGNsYXNzPVwiZXhhbXBsZS1zcGFjZXJcIj48L3NwYW4+XHJcbiAgICA8bWF0LWljb24gY2xhc3M9XCJleGFtcGxlLWljb25cIiBhcmlhLWhpZGRlbj1cImZhbHNlXCIgYXJpYS1sYWJlbD1cIkV4YW1wbGUgdXNlciB2ZXJpZmllZCBpY29uXCI+dmVyaWZpZWRfdXNlcjwvbWF0LWljb24+XHJcbiAgPC9tYXQtdG9vbGJhci1yb3c+XHJcbjwhLS0gI2VuZGRvY3JlZ2lvbiB0b29sYmFyLXBvc2l0aW9uLWNvbnRlbnQgLS0+XHJcblxyXG4gIDxtYXQtdG9vbGJhci1yb3c+XHJcbiAgICA8c3Bhbj5UaGlyZCBMaW5lPC9zcGFuPlxyXG4gICAgPHNwYW4gY2xhc3M9XCJleGFtcGxlLXNwYWNlclwiPjwvc3Bhbj5cclxuICAgIDxtYXQtaWNvbiBjbGFzcz1cImV4YW1wbGUtaWNvblwiIGFyaWEtaGlkZGVuPVwiZmFsc2VcIiBhcmlhLWxhYmVsPVwiRXhhbXBsZSBoZWFydCBpY29uXCI+ZmF2b3JpdGU8L21hdC1pY29uPlxyXG4gICAgPG1hdC1pY29uIGNsYXNzPVwiZXhhbXBsZS1pY29uXCIgYXJpYS1oaWRkZW49XCJmYWxzZVwiIGFyaWEtbGFiZWw9XCJFeGFtcGxlIGRlbGV0ZSBpY29uXCI+ZGVsZXRlPC9tYXQtaWNvbj5cclxuICA8L21hdC10b29sYmFyLXJvdz5cclxuPC9tYXQtdG9vbGJhcj5cclxuIl19