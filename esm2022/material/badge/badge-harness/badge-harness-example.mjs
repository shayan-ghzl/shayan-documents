import { Component } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
import * as i2 from "@angular/material/badge";
/**
 * @title Testing with MatBadgeHarness
 */
export class BadgeHarnessExample {
    constructor() {
        this.simpleContent = 'S';
        this.overlap = true;
        this.disabled = true;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: BadgeHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: BadgeHarnessExample, isStandalone: true, selector: "badge-harness-example", ngImport: i0, template: "<button mat-button id=\"simple\" [matBadge]=\"simpleContent\">Simple</button>\r\n<button mat-button\r\n    id=\"overlapping\"\r\n    matBadge=\"O\"\r\n    [matBadgeOverlap]=\"overlap\">Overlapping</button>\r\n<button\r\n    mat-button\r\n    id=\"disabled\"\r\n    matBadge=\"D\"\r\n    [matBadgeDisabled]=\"disabled\">Disabled</button>\r\n", dependencies: [{ kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i1.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatBadgeModule }, { kind: "directive", type: i2.MatBadge, selector: "[matBadge]", inputs: ["matBadgeColor", "matBadgeOverlap", "matBadgeDisabled", "matBadgePosition", "matBadge", "matBadgeDescription", "matBadgeSize", "matBadgeHidden"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: BadgeHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'badge-harness-example', standalone: true, imports: [MatButtonModule, MatBadgeModule], template: "<button mat-button id=\"simple\" [matBadge]=\"simpleContent\">Simple</button>\r\n<button mat-button\r\n    id=\"overlapping\"\r\n    matBadge=\"O\"\r\n    [matBadgeOverlap]=\"overlap\">Overlapping</button>\r\n<button\r\n    mat-button\r\n    id=\"disabled\"\r\n    matBadge=\"D\"\r\n    [matBadgeDisabled]=\"disabled\">Disabled</button>\r\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFkZ2UtaGFybmVzcy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvYmFkZ2UvYmFkZ2UtaGFybmVzcy9iYWRnZS1oYXJuZXNzLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9iYWRnZS9iYWRnZS1oYXJuZXNzL2JhZGdlLWhhcm5lc3MtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQzs7OztBQUV6RDs7R0FFRztBQU9ILE1BQU0sT0FBTyxtQkFBbUI7SUFOaEM7UUFPRSxrQkFBYSxHQUFHLEdBQUcsQ0FBQztRQUNwQixZQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ2YsYUFBUSxHQUFHLElBQUksQ0FBQztLQUNqQjs4R0FKWSxtQkFBbUI7a0dBQW5CLG1CQUFtQixpRkNiaEMsc1ZBVUEsMkNEQ1ksZUFBZSwyTkFBRSxjQUFjOzsyRkFFOUIsbUJBQW1CO2tCQU4vQixTQUFTOytCQUNFLHVCQUF1QixjQUVyQixJQUFJLFdBQ1AsQ0FBQyxlQUFlLEVBQUUsY0FBYyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge01hdEJhZGdlTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9iYWRnZSc7XHJcbmltcG9ydCB7TWF0QnV0dG9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xyXG5cclxuLyoqXHJcbiAqIEB0aXRsZSBUZXN0aW5nIHdpdGggTWF0QmFkZ2VIYXJuZXNzXHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2JhZGdlLWhhcm5lc3MtZXhhbXBsZScsXHJcbiAgdGVtcGxhdGVVcmw6ICdiYWRnZS1oYXJuZXNzLWV4YW1wbGUuaHRtbCcsXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBpbXBvcnRzOiBbTWF0QnV0dG9uTW9kdWxlLCBNYXRCYWRnZU1vZHVsZV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCYWRnZUhhcm5lc3NFeGFtcGxlIHtcclxuICBzaW1wbGVDb250ZW50ID0gJ1MnO1xyXG4gIG92ZXJsYXAgPSB0cnVlO1xyXG4gIGRpc2FibGVkID0gdHJ1ZTtcclxufVxyXG4iLCI8YnV0dG9uIG1hdC1idXR0b24gaWQ9XCJzaW1wbGVcIiBbbWF0QmFkZ2VdPVwic2ltcGxlQ29udGVudFwiPlNpbXBsZTwvYnV0dG9uPlxyXG48YnV0dG9uIG1hdC1idXR0b25cclxuICAgIGlkPVwib3ZlcmxhcHBpbmdcIlxyXG4gICAgbWF0QmFkZ2U9XCJPXCJcclxuICAgIFttYXRCYWRnZU92ZXJsYXBdPVwib3ZlcmxhcFwiPk92ZXJsYXBwaW5nPC9idXR0b24+XHJcbjxidXR0b25cclxuICAgIG1hdC1idXR0b25cclxuICAgIGlkPVwiZGlzYWJsZWRcIlxyXG4gICAgbWF0QmFkZ2U9XCJEXCJcclxuICAgIFttYXRCYWRnZURpc2FibGVkXT1cImRpc2FibGVkXCI+RGlzYWJsZWQ8L2J1dHRvbj5cclxuIl19