import { A11yModule } from '@angular/cdk/a11y';
import { ChangeDetectorRef, Component, NgZone } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/a11y";
/** @title Monitoring focus with FocusMonitor */
export class FocusMonitorDirectivesExample {
    constructor(_ngZone, _cdr) {
        this._ngZone = _ngZone;
        this._cdr = _cdr;
        this.elementOrigin = this.formatOrigin(null);
        this.subtreeOrigin = this.formatOrigin(null);
    }
    formatOrigin(origin) {
        return origin ? origin + ' focused' : 'blurred';
    }
    // Workaround for the fact that (cdkFocusChange) emits outside NgZone.
    markForCheck() {
        this._ngZone.run(() => this._cdr.markForCheck());
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: FocusMonitorDirectivesExample, deps: [{ token: i0.NgZone }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: FocusMonitorDirectivesExample, isStandalone: true, selector: "focus-monitor-directives-example", ngImport: i0, template: "<div class=\"example-focus-monitor\">\r\n  <button cdkMonitorSubtreeFocus\r\n          (cdkFocusChange)=\"elementOrigin = formatOrigin($event); markForCheck()\">\r\n    Focus Monitored Element ({{elementOrigin}})\r\n  </button>\r\n</div>\r\n\r\n<div class=\"example-focus-monitor\">\r\n  <div cdkMonitorSubtreeFocus\r\n       (cdkFocusChange)=\"subtreeOrigin = formatOrigin($event); markForCheck()\">\r\n    <p>Focus Monitored Subtree ({{subtreeOrigin}})</p>\r\n    <button>Child Button 1</button>\r\n    <button>Child Button 2</button>\r\n  </div>\r\n</div>\r\n", styles: [".example-focus-monitor {\r\n  padding: 20px;\r\n}\r\n\r\n.example-focus-monitor .cdk-mouse-focused {\r\n  background: rgba(255, 0, 0, 0.5);\r\n}\r\n\r\n.example-focus-monitor .cdk-keyboard-focused {\r\n  background: rgba(0, 255, 0, 0.5);\r\n}\r\n\r\n.example-focus-monitor .cdk-touch-focused {\r\n  background: rgba(0, 0, 255, 0.5);\r\n}\r\n\r\n.example-focus-monitor .cdk-program-focused {\r\n  background: rgba(255, 0, 255, 0.5);\r\n}\r\n\r\nbutton {\r\n  margin-right: 12px;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: A11yModule }, { kind: "directive", type: i1.CdkMonitorFocus, selector: "[cdkMonitorElementFocus], [cdkMonitorSubtreeFocus]", outputs: ["cdkFocusChange"], exportAs: ["cdkMonitorFocus"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: FocusMonitorDirectivesExample, decorators: [{
            type: Component,
            args: [{ selector: 'focus-monitor-directives-example', standalone: true, imports: [A11yModule], template: "<div class=\"example-focus-monitor\">\r\n  <button cdkMonitorSubtreeFocus\r\n          (cdkFocusChange)=\"elementOrigin = formatOrigin($event); markForCheck()\">\r\n    Focus Monitored Element ({{elementOrigin}})\r\n  </button>\r\n</div>\r\n\r\n<div class=\"example-focus-monitor\">\r\n  <div cdkMonitorSubtreeFocus\r\n       (cdkFocusChange)=\"subtreeOrigin = formatOrigin($event); markForCheck()\">\r\n    <p>Focus Monitored Subtree ({{subtreeOrigin}})</p>\r\n    <button>Child Button 1</button>\r\n    <button>Child Button 2</button>\r\n  </div>\r\n</div>\r\n", styles: [".example-focus-monitor {\r\n  padding: 20px;\r\n}\r\n\r\n.example-focus-monitor .cdk-mouse-focused {\r\n  background: rgba(255, 0, 0, 0.5);\r\n}\r\n\r\n.example-focus-monitor .cdk-keyboard-focused {\r\n  background: rgba(0, 255, 0, 0.5);\r\n}\r\n\r\n.example-focus-monitor .cdk-touch-focused {\r\n  background: rgba(0, 0, 255, 0.5);\r\n}\r\n\r\n.example-focus-monitor .cdk-program-focused {\r\n  background: rgba(255, 0, 255, 0.5);\r\n}\r\n\r\nbutton {\r\n  margin-right: 12px;\r\n}\r\n"] }]
        }], ctorParameters: () => [{ type: i0.NgZone }, { type: i0.ChangeDetectorRef }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9jdXMtbW9uaXRvci1kaXJlY3RpdmVzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvYTExeS9mb2N1cy1tb25pdG9yLWRpcmVjdGl2ZXMvZm9jdXMtbW9uaXRvci1kaXJlY3RpdmVzLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvYTExeS9mb2N1cy1tb25pdG9yLWRpcmVjdGl2ZXMvZm9jdXMtbW9uaXRvci1kaXJlY3RpdmVzLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFjLE1BQU0sbUJBQW1CLENBQUM7QUFDMUQsT0FBTyxFQUFDLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7OztBQUVuRSxnREFBZ0Q7QUFRaEQsTUFBTSxPQUFPLDZCQUE2QjtJQUl4QyxZQUFvQixPQUFlLEVBQVUsSUFBdUI7UUFBaEQsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUFVLFNBQUksR0FBSixJQUFJLENBQW1CO1FBSHBFLGtCQUFhLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QyxrQkFBYSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFK0IsQ0FBQztJQUV4RSxZQUFZLENBQUMsTUFBbUI7UUFDOUIsT0FBTyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUNsRCxDQUFDO0lBRUQsc0VBQXNFO0lBQ3RFLFlBQVk7UUFDVixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7SUFDbkQsQ0FBQzs4R0FiVSw2QkFBNkI7a0dBQTdCLDZCQUE2Qiw0RkNYMUMsb2pCQWVBLCtoQkROWSxVQUFVOzsyRkFFVCw2QkFBNkI7a0JBUHpDLFNBQVM7K0JBQ0Usa0NBQWtDLGNBR2hDLElBQUksV0FDUCxDQUFDLFVBQVUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QTExeU1vZHVsZSwgRm9jdXNPcmlnaW59IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcclxuaW1wb3J0IHtDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBOZ1pvbmV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLyoqIEB0aXRsZSBNb25pdG9yaW5nIGZvY3VzIHdpdGggRm9jdXNNb25pdG9yICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZm9jdXMtbW9uaXRvci1kaXJlY3RpdmVzLWV4YW1wbGUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnZm9jdXMtbW9uaXRvci1kaXJlY3RpdmVzLWV4YW1wbGUuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJ2ZvY3VzLW1vbml0b3ItZGlyZWN0aXZlcy1leGFtcGxlLmNzcyddLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgaW1wb3J0czogW0ExMXlNb2R1bGVdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRm9jdXNNb25pdG9yRGlyZWN0aXZlc0V4YW1wbGUge1xyXG4gIGVsZW1lbnRPcmlnaW4gPSB0aGlzLmZvcm1hdE9yaWdpbihudWxsKTtcclxuICBzdWJ0cmVlT3JpZ2luID0gdGhpcy5mb3JtYXRPcmlnaW4obnVsbCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX25nWm9uZTogTmdab25lLCBwcml2YXRlIF9jZHI6IENoYW5nZURldGVjdG9yUmVmKSB7fVxyXG5cclxuICBmb3JtYXRPcmlnaW4ob3JpZ2luOiBGb2N1c09yaWdpbik6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gb3JpZ2luID8gb3JpZ2luICsgJyBmb2N1c2VkJyA6ICdibHVycmVkJztcclxuICB9XHJcblxyXG4gIC8vIFdvcmthcm91bmQgZm9yIHRoZSBmYWN0IHRoYXQgKGNka0ZvY3VzQ2hhbmdlKSBlbWl0cyBvdXRzaWRlIE5nWm9uZS5cclxuICBtYXJrRm9yQ2hlY2soKSB7XHJcbiAgICB0aGlzLl9uZ1pvbmUucnVuKCgpID0+IHRoaXMuX2Nkci5tYXJrRm9yQ2hlY2soKSk7XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJleGFtcGxlLWZvY3VzLW1vbml0b3JcIj5cclxuICA8YnV0dG9uIGNka01vbml0b3JTdWJ0cmVlRm9jdXNcclxuICAgICAgICAgIChjZGtGb2N1c0NoYW5nZSk9XCJlbGVtZW50T3JpZ2luID0gZm9ybWF0T3JpZ2luKCRldmVudCk7IG1hcmtGb3JDaGVjaygpXCI+XHJcbiAgICBGb2N1cyBNb25pdG9yZWQgRWxlbWVudCAoe3tlbGVtZW50T3JpZ2lufX0pXHJcbiAgPC9idXR0b24+XHJcbjwvZGl2PlxyXG5cclxuPGRpdiBjbGFzcz1cImV4YW1wbGUtZm9jdXMtbW9uaXRvclwiPlxyXG4gIDxkaXYgY2RrTW9uaXRvclN1YnRyZWVGb2N1c1xyXG4gICAgICAgKGNka0ZvY3VzQ2hhbmdlKT1cInN1YnRyZWVPcmlnaW4gPSBmb3JtYXRPcmlnaW4oJGV2ZW50KTsgbWFya0ZvckNoZWNrKClcIj5cclxuICAgIDxwPkZvY3VzIE1vbml0b3JlZCBTdWJ0cmVlICh7e3N1YnRyZWVPcmlnaW59fSk8L3A+XHJcbiAgICA8YnV0dG9uPkNoaWxkIEJ1dHRvbiAxPC9idXR0b24+XHJcbiAgICA8YnV0dG9uPkNoaWxkIEJ1dHRvbiAyPC9idXR0b24+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG4iXX0=