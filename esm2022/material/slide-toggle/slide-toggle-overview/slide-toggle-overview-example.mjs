import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/slide-toggle";
/**
 * @title Basic slide-toggles
 */
export class SlideToggleOverviewExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: SlideToggleOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: SlideToggleOverviewExample, isStandalone: true, selector: "slide-toggle-overview-example", ngImport: i0, template: "<mat-slide-toggle>Slide me!</mat-slide-toggle>\r\n", dependencies: [{ kind: "ngmodule", type: MatSlideToggleModule }, { kind: "component", type: i1.MatSlideToggle, selector: "mat-slide-toggle", inputs: ["disabled", "disableRipple", "color", "tabIndex", "name", "id", "labelPosition", "aria-label", "aria-labelledby", "aria-describedby", "required", "checked", "hideIcon"], outputs: ["change", "toggleChange"], exportAs: ["matSlideToggle"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: SlideToggleOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'slide-toggle-overview-example', standalone: true, imports: [MatSlideToggleModule], template: "<mat-slide-toggle>Slide me!</mat-slide-toggle>\r\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGUtdG9nZ2xlLW92ZXJ2aWV3LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zbGlkZS10b2dnbGUvc2xpZGUtdG9nZ2xlLW92ZXJ2aWV3L3NsaWRlLXRvZ2dsZS1vdmVydmlldy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2xpZGUtdG9nZ2xlL3NsaWRlLXRvZ2dsZS1vdmVydmlldy9zbGlkZS10b2dnbGUtb3ZlcnZpZXctZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sZ0NBQWdDLENBQUM7OztBQUVwRTs7R0FFRztBQU9ILE1BQU0sT0FBTywwQkFBMEI7OEdBQTFCLDBCQUEwQjtrR0FBMUIsMEJBQTBCLHlGQ1p2QyxvREFDQSwyQ0RTWSxvQkFBb0I7OzJGQUVuQiwwQkFBMEI7a0JBTnRDLFNBQVM7K0JBQ0UsK0JBQStCLGNBRTdCLElBQUksV0FDUCxDQUFDLG9CQUFvQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge01hdFNsaWRlVG9nZ2xlTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zbGlkZS10b2dnbGUnO1xyXG5cclxuLyoqXHJcbiAqIEB0aXRsZSBCYXNpYyBzbGlkZS10b2dnbGVzXHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3NsaWRlLXRvZ2dsZS1vdmVydmlldy1leGFtcGxlJyxcclxuICB0ZW1wbGF0ZVVybDogJ3NsaWRlLXRvZ2dsZS1vdmVydmlldy1leGFtcGxlLmh0bWwnLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgaW1wb3J0czogW01hdFNsaWRlVG9nZ2xlTW9kdWxlXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFNsaWRlVG9nZ2xlT3ZlcnZpZXdFeGFtcGxlIHt9XHJcbiIsIjxtYXQtc2xpZGUtdG9nZ2xlPlNsaWRlIG1lITwvbWF0LXNsaWRlLXRvZ2dsZT5cclxuIl19