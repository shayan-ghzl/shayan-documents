import { Component } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/slider";
/**
 * @title Range slider
 */
export class SliderRangeExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: SliderRangeExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: SliderRangeExample, isStandalone: true, selector: "slider-range-example", ngImport: i0, template: "<mat-slider min=\"200\" max=\"500\">\r\n  <input value=\"300\" matSliderStartThumb>\r\n  <input value=\"400\" matSliderEndThumb>\r\n</mat-slider>\r\n", styles: ["mat-slider {\r\n  width: 300px;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: MatSliderModule }, { kind: "component", type: i1.MatSlider, selector: "mat-slider", inputs: ["disabled", "discrete", "showTickMarks", "min", "color", "disableRipple", "max", "step", "displayWith"], exportAs: ["matSlider"] }, { kind: "directive", type: i1.MatSliderRangeThumb, selector: "input[matSliderStartThumb], input[matSliderEndThumb]", exportAs: ["matSliderRangeThumb"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: SliderRangeExample, decorators: [{
            type: Component,
            args: [{ selector: 'slider-range-example', standalone: true, imports: [MatSliderModule], template: "<mat-slider min=\"200\" max=\"500\">\r\n  <input value=\"300\" matSliderStartThumb>\r\n  <input value=\"400\" matSliderEndThumb>\r\n</mat-slider>\r\n", styles: ["mat-slider {\r\n  width: 300px;\r\n}\r\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLXJhbmdlLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zbGlkZXIvc2xpZGVyLXJhbmdlL3NsaWRlci1yYW5nZS1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2xpZGVyL3NsaWRlci1yYW5nZS9zbGlkZXItcmFuZ2UtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDOzs7QUFFekQ7O0dBRUc7QUFRSCxNQUFNLE9BQU8sa0JBQWtCOzhHQUFsQixrQkFBa0I7a0dBQWxCLGtCQUFrQixnRkNiL0IsdUpBSUEsaUdET1ksZUFBZTs7MkZBRWQsa0JBQWtCO2tCQVA5QixTQUFTOytCQUNFLHNCQUFzQixjQUdwQixJQUFJLFdBQ1AsQ0FBQyxlQUFlLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7TWF0U2xpZGVyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zbGlkZXInO1xyXG5cclxuLyoqXHJcbiAqIEB0aXRsZSBSYW5nZSBzbGlkZXJcclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc2xpZGVyLXJhbmdlLWV4YW1wbGUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnc2xpZGVyLXJhbmdlLWV4YW1wbGUuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJ3NsaWRlci1yYW5nZS1leGFtcGxlLmNzcyddLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgaW1wb3J0czogW01hdFNsaWRlck1vZHVsZV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTbGlkZXJSYW5nZUV4YW1wbGUge31cclxuIiwiPG1hdC1zbGlkZXIgbWluPVwiMjAwXCIgbWF4PVwiNTAwXCI+XHJcbiAgPGlucHV0IHZhbHVlPVwiMzAwXCIgbWF0U2xpZGVyU3RhcnRUaHVtYj5cclxuICA8aW5wdXQgdmFsdWU9XCI0MDBcIiBtYXRTbGlkZXJFbmRUaHVtYj5cclxuPC9tYXQtc2xpZGVyPlxyXG4iXX0=