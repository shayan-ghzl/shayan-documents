import * as i0 from '@angular/core';
import { Component } from '@angular/core';
import * as i1$1 from '@angular/material/progress-spinner';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import * as i4 from '@angular/material/slider';
import { MatSliderModule } from '@angular/material/slider';
import * as i3 from '@angular/forms';
import { FormsModule } from '@angular/forms';
import * as i2 from '@angular/material/radio';
import { MatRadioModule } from '@angular/material/radio';
import * as i1 from '@angular/material/card';
import { MatCardModule } from '@angular/material/card';

/**
 * @title Configurable progress spinner
 */
class ProgressSpinnerConfigurableExample {
    constructor() {
        this.color = 'primary';
        this.mode = 'determinate';
        this.value = 50;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: ProgressSpinnerConfigurableExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.4", type: ProgressSpinnerConfigurableExample, isStandalone: true, selector: "progress-spinner-configurable-example", ngImport: i0, template: "<mat-card class=\"example-card\">\r\n  <mat-card-content>\r\n    <h2 class=\"example-h2\">Progress spinner configuration</h2>\r\n\r\n    <section class=\"example-section\">\r\n      <label class=\"example-margin\">Color:</label>\r\n      <mat-radio-group [(ngModel)]=\"color\">\r\n        <mat-radio-button class=\"example-margin\" value=\"primary\">\r\n          Primary\r\n        </mat-radio-button>\r\n        <mat-radio-button class=\"example-margin\" value=\"accent\">\r\n          Accent\r\n        </mat-radio-button>\r\n        <mat-radio-button class=\"example-margin\" value=\"warn\">\r\n          Warn\r\n        </mat-radio-button>\r\n      </mat-radio-group>\r\n    </section>\r\n\r\n    <section class=\"example-section\">\r\n      <label class=\"example-margin\">Mode:</label>\r\n      <mat-radio-group [(ngModel)]=\"mode\">\r\n        <mat-radio-button class=\"example-margin\" value=\"determinate\">\r\n          Determinate\r\n        </mat-radio-button>\r\n        <mat-radio-button class=\"example-margin\" value=\"indeterminate\">\r\n          Indeterminate\r\n        </mat-radio-button>\r\n      </mat-radio-group>\r\n    </section>\r\n\r\n    @if (mode === 'determinate') {\r\n      <section class=\"example-section\">\r\n        <label class=\"example-margin\">Progress:</label>\r\n        <mat-slider class=\"example-margin\">\r\n          <input type=\"range\" [(ngModel)]=\"value\" matSliderThumb>\r\n        </mat-slider>\r\n      </section>\r\n    }\r\n  </mat-card-content>\r\n</mat-card>\r\n\r\n<mat-card class=\"example-card\">\r\n  <mat-card-content>\r\n    <h2 class=\"example-h2\">Result</h2>\r\n\r\n    <mat-progress-spinner\r\n        class=\"example-margin\"\r\n        [color]=\"color\"\r\n        [mode]=\"mode\"\r\n        [value]=\"value\">\r\n    </mat-progress-spinner>\r\n  </mat-card-content>\r\n</mat-card>\r\n", styles: [".example-h2 {\r\n  margin: 10px;\r\n}\r\n\r\n.example-section {\r\n  display: flex;\r\n  align-content: center;\r\n  align-items: center;\r\n  height: 60px;\r\n}\r\n\r\n.example-margin {\r\n  margin: 0 10px;\r\n}\r\n\r\n.example-card {\r\n  margin-bottom: 10px;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: MatCardModule }, { kind: "component", type: i1.MatCard, selector: "mat-card", inputs: ["appearance"], exportAs: ["matCard"] }, { kind: "directive", type: i1.MatCardContent, selector: "mat-card-content" }, { kind: "ngmodule", type: MatRadioModule }, { kind: "directive", type: i2.MatRadioGroup, selector: "mat-radio-group", inputs: ["color", "name", "labelPosition", "value", "selected", "disabled", "required"], outputs: ["change"], exportAs: ["matRadioGroup"] }, { kind: "component", type: i2.MatRadioButton, selector: "mat-radio-button", inputs: ["id", "name", "aria-label", "aria-labelledby", "aria-describedby", "disableRipple", "tabIndex", "checked", "value", "labelPosition", "disabled", "required", "color"], outputs: ["change"], exportAs: ["matRadioButton"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i3.RangeValueAccessor, selector: "input[type=range][formControlName],input[type=range][formControl],input[type=range][ngModel]" }, { kind: "directive", type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "ngmodule", type: MatSliderModule }, { kind: "component", type: i4.MatSlider, selector: "mat-slider", inputs: ["disabled", "discrete", "showTickMarks", "min", "color", "disableRipple", "max", "step", "displayWith"], exportAs: ["matSlider"] }, { kind: "directive", type: i4.MatSliderThumb, selector: "input[matSliderThumb]", inputs: ["value"], outputs: ["valueChange", "dragStart", "dragEnd"], exportAs: ["matSliderThumb"] }, { kind: "ngmodule", type: MatProgressSpinnerModule }, { kind: "component", type: i1$1.MatProgressSpinner, selector: "mat-progress-spinner, mat-spinner", inputs: ["color", "mode", "value", "diameter", "strokeWidth"], exportAs: ["matProgressSpinner"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: ProgressSpinnerConfigurableExample, decorators: [{
            type: Component,
            args: [{ selector: 'progress-spinner-configurable-example', standalone: true, imports: [MatCardModule, MatRadioModule, FormsModule, MatSliderModule, MatProgressSpinnerModule], template: "<mat-card class=\"example-card\">\r\n  <mat-card-content>\r\n    <h2 class=\"example-h2\">Progress spinner configuration</h2>\r\n\r\n    <section class=\"example-section\">\r\n      <label class=\"example-margin\">Color:</label>\r\n      <mat-radio-group [(ngModel)]=\"color\">\r\n        <mat-radio-button class=\"example-margin\" value=\"primary\">\r\n          Primary\r\n        </mat-radio-button>\r\n        <mat-radio-button class=\"example-margin\" value=\"accent\">\r\n          Accent\r\n        </mat-radio-button>\r\n        <mat-radio-button class=\"example-margin\" value=\"warn\">\r\n          Warn\r\n        </mat-radio-button>\r\n      </mat-radio-group>\r\n    </section>\r\n\r\n    <section class=\"example-section\">\r\n      <label class=\"example-margin\">Mode:</label>\r\n      <mat-radio-group [(ngModel)]=\"mode\">\r\n        <mat-radio-button class=\"example-margin\" value=\"determinate\">\r\n          Determinate\r\n        </mat-radio-button>\r\n        <mat-radio-button class=\"example-margin\" value=\"indeterminate\">\r\n          Indeterminate\r\n        </mat-radio-button>\r\n      </mat-radio-group>\r\n    </section>\r\n\r\n    @if (mode === 'determinate') {\r\n      <section class=\"example-section\">\r\n        <label class=\"example-margin\">Progress:</label>\r\n        <mat-slider class=\"example-margin\">\r\n          <input type=\"range\" [(ngModel)]=\"value\" matSliderThumb>\r\n        </mat-slider>\r\n      </section>\r\n    }\r\n  </mat-card-content>\r\n</mat-card>\r\n\r\n<mat-card class=\"example-card\">\r\n  <mat-card-content>\r\n    <h2 class=\"example-h2\">Result</h2>\r\n\r\n    <mat-progress-spinner\r\n        class=\"example-margin\"\r\n        [color]=\"color\"\r\n        [mode]=\"mode\"\r\n        [value]=\"value\">\r\n    </mat-progress-spinner>\r\n  </mat-card-content>\r\n</mat-card>\r\n", styles: [".example-h2 {\r\n  margin: 10px;\r\n}\r\n\r\n.example-section {\r\n  display: flex;\r\n  align-content: center;\r\n  align-items: center;\r\n  height: 60px;\r\n}\r\n\r\n.example-margin {\r\n  margin: 0 10px;\r\n}\r\n\r\n.example-card {\r\n  margin-bottom: 10px;\r\n}\r\n"] }]
        }] });

/**
 * @title Basic progress-spinner
 */
class ProgressSpinnerOverviewExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: ProgressSpinnerOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: ProgressSpinnerOverviewExample, isStandalone: true, selector: "progress-spinner-overview-example", ngImport: i0, template: "<mat-spinner></mat-spinner>\r\n", dependencies: [{ kind: "ngmodule", type: MatProgressSpinnerModule }, { kind: "component", type: i1$1.MatProgressSpinner, selector: "mat-progress-spinner, mat-spinner", inputs: ["color", "mode", "value", "diameter", "strokeWidth"], exportAs: ["matProgressSpinner"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: ProgressSpinnerOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'progress-spinner-overview-example', standalone: true, imports: [MatProgressSpinnerModule], template: "<mat-spinner></mat-spinner>\r\n" }]
        }] });

/**
 * @title Testing with MatProgressSpinnerHarness
 */
class ProgressSpinnerHarnessExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: ProgressSpinnerHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: ProgressSpinnerHarnessExample, isStandalone: true, selector: "progress-spinner-harness-example", ngImport: i0, template: "<mat-progress-spinner mode=\"determinate\" [value]=\"value\"></mat-progress-spinner>\r\n<mat-spinner></mat-spinner>\r\n", dependencies: [{ kind: "ngmodule", type: MatProgressSpinnerModule }, { kind: "component", type: i1$1.MatProgressSpinner, selector: "mat-progress-spinner, mat-spinner", inputs: ["color", "mode", "value", "diameter", "strokeWidth"], exportAs: ["matProgressSpinner"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: ProgressSpinnerHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'progress-spinner-harness-example', standalone: true, imports: [MatProgressSpinnerModule], template: "<mat-progress-spinner mode=\"determinate\" [value]=\"value\"></mat-progress-spinner>\r\n<mat-spinner></mat-spinner>\r\n" }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { ProgressSpinnerConfigurableExample, ProgressSpinnerHarnessExample, ProgressSpinnerOverviewExample };
//# sourceMappingURL=progress-spinner.mjs.map
