import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
import * as i2 from "@angular/material/divider";
import * as i3 from "@angular/material/icon";
/**
 * @title Basic buttons
 */
export class ButtonOverviewExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: ButtonOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: ButtonOverviewExample, isStandalone: true, selector: "button-overview-example", ngImport: i0, template: "<section>\r\n  <div class=\"example-label\">Basic</div>\r\n  <div class=\"example-button-row\">\r\n    <button mat-button>Basic</button>\r\n    <button mat-button color=\"primary\">Primary</button>\r\n    <button mat-button color=\"accent\">Accent</button>\r\n    <button mat-button color=\"warn\">Warn</button>\r\n    <button mat-button disabled>Disabled</button>\r\n    <a mat-button href=\"https://www.google.com/\" target=\"_blank\">Link</a>\r\n  </div>\r\n</section>\r\n<mat-divider></mat-divider>\r\n<section>\r\n  <div class=\"example-label\">Raised</div>\r\n  <div class=\"example-button-row\">\r\n    <button mat-raised-button>Basic</button>\r\n    <button mat-raised-button color=\"primary\">Primary</button>\r\n    <button mat-raised-button color=\"accent\">Accent</button>\r\n    <button mat-raised-button color=\"warn\">Warn</button>\r\n    <button mat-raised-button disabled>Disabled</button>\r\n    <a mat-raised-button href=\"https://www.google.com/\" target=\"_blank\">Link</a>\r\n  </div>\r\n</section>\r\n<mat-divider></mat-divider>\r\n<section>\r\n  <div class=\"example-label\">Stroked</div>\r\n  <div class=\"example-button-row\">\r\n    <button mat-stroked-button>Basic</button>\r\n    <button mat-stroked-button color=\"primary\">Primary</button>\r\n    <button mat-stroked-button color=\"accent\">Accent</button>\r\n    <button mat-stroked-button color=\"warn\">Warn</button>\r\n    <button mat-stroked-button disabled>Disabled</button>\r\n    <a mat-stroked-button href=\"https://www.google.com/\" target=\"_blank\">Link</a>\r\n  </div>\r\n</section>\r\n<mat-divider></mat-divider>\r\n<section>\r\n  <div class=\"example-label\">Flat</div>\r\n  <div class=\"example-button-row\">\r\n    <button mat-flat-button>Basic</button>\r\n    <button mat-flat-button color=\"primary\">Primary</button>\r\n    <button mat-flat-button color=\"accent\">Accent</button>\r\n    <button mat-flat-button color=\"warn\">Warn</button>\r\n    <button mat-flat-button disabled>Disabled</button>\r\n    <a mat-flat-button href=\"https://www.google.com/\" target=\"_blank\">Link</a>\r\n  </div>\r\n</section>\r\n<mat-divider></mat-divider>\r\n<section>\r\n  <div class=\"example-label\">Icon</div>\r\n  <div class=\"example-button-row\">\r\n    <div class=\"example-flex-container\">\r\n      <button mat-icon-button aria-label=\"Example icon button with a vertical three dot icon\">\r\n        <mat-icon>more_vert</mat-icon>\r\n      </button>\r\n      <button mat-icon-button color=\"primary\" aria-label=\"Example icon button with a home icon\">\r\n        <mat-icon>home</mat-icon>\r\n      </button>\r\n      <button mat-icon-button color=\"accent\" aria-label=\"Example icon button with a menu icon\">\r\n        <mat-icon>menu</mat-icon>\r\n      </button>\r\n      <button mat-icon-button color=\"warn\" aria-label=\"Example icon button with a heart icon\">\r\n        <mat-icon>favorite</mat-icon>\r\n      </button>\r\n      <button mat-icon-button disabled aria-label=\"Example icon button with a open in new tab icon\">\r\n        <mat-icon>open_in_new</mat-icon>\r\n      </button>\r\n    </div>\r\n  </div>\r\n</section>\r\n<mat-divider></mat-divider>\r\n<section>\r\n  <div class=\"example-label\">FAB</div>\r\n  <div class=\"example-button-row\">\r\n    <div class=\"example-flex-container\">\r\n      <div class=\"example-button-container\">\r\n        <button mat-fab color=\"primary\" aria-label=\"Example icon button with a delete icon\">\r\n          <mat-icon>delete</mat-icon>\r\n        </button>\r\n      </div>\r\n      <div class=\"example-button-container\">\r\n        <button mat-fab color=\"accent\" aria-label=\"Example icon button with a bookmark icon\">\r\n          <mat-icon>bookmark</mat-icon>\r\n        </button>\r\n      </div>\r\n      <div class=\"example-button-container\">\r\n        <button mat-fab color=\"warn\" aria-label=\"Example icon button with a home icon\">\r\n          <mat-icon>home</mat-icon>\r\n        </button>\r\n      </div>\r\n      <div class=\"example-button-container\">\r\n        <button mat-fab disabled aria-label=\"Example icon button with a heart icon\">\r\n          <mat-icon>favorite</mat-icon>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<mat-divider></mat-divider>\r\n<section>\r\n  <div class=\"example-label\">Mini FAB</div>\r\n  <div class=\"example-button-row\">\r\n    <div class=\"example-flex-container\">\r\n      <div class=\"example-button-container\">\r\n        <button mat-mini-fab color=\"primary\" aria-label=\"Example icon button with a menu icon\">\r\n          <mat-icon>menu</mat-icon>\r\n        </button>\r\n      </div>\r\n      <div class=\"example-button-container\">\r\n        <button mat-mini-fab color=\"accent\" aria-label=\"Example icon button with a plus one icon\">\r\n          <mat-icon>plus_one</mat-icon>\r\n        </button>\r\n      </div>\r\n      <div class=\"example-button-container\">\r\n        <button mat-mini-fab color=\"warn\" aria-label=\"Example icon button with a filter list icon\">\r\n          <mat-icon>filter_list</mat-icon>\r\n        </button>\r\n      </div>\r\n      <div class=\"example-button-container\">\r\n        <button mat-mini-fab disabled aria-label=\"Example icon button with a home icon\">\r\n          <mat-icon>home</mat-icon>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n", styles: ["section {\r\n  display: table;\r\n}\r\n\r\n.example-label {\r\n  display: table-cell;\r\n  font-size: 14px;\r\n  margin-left: 8px;\r\n  min-width: 120px;\r\n}\r\n\r\n.example-button-row {\r\n  display: table-cell;\r\n  max-width: 600px;\r\n}\r\n\r\n.example-button-row .mat-mdc-button-base {\r\n  margin: 8px 8px 8px 0;\r\n}\r\n\r\n.example-flex-container {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.example-button-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  width: 120px;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i1.MatAnchor, selector: "a[mat-button], a[mat-raised-button], a[mat-flat-button], a[mat-stroked-button]", exportAs: ["matButton", "matAnchor"] }, { kind: "component", type: i1.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }, { kind: "component", type: i1.MatIconButton, selector: "button[mat-icon-button]", exportAs: ["matButton"] }, { kind: "component", type: i1.MatMiniFabButton, selector: "button[mat-mini-fab]", exportAs: ["matButton"] }, { kind: "component", type: i1.MatFabButton, selector: "button[mat-fab]", inputs: ["extended"], exportAs: ["matButton"] }, { kind: "ngmodule", type: MatDividerModule }, { kind: "component", type: i2.MatDivider, selector: "mat-divider", inputs: ["vertical", "inset"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: ButtonOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'button-overview-example', standalone: true, imports: [MatButtonModule, MatDividerModule, MatIconModule], template: "<section>\r\n  <div class=\"example-label\">Basic</div>\r\n  <div class=\"example-button-row\">\r\n    <button mat-button>Basic</button>\r\n    <button mat-button color=\"primary\">Primary</button>\r\n    <button mat-button color=\"accent\">Accent</button>\r\n    <button mat-button color=\"warn\">Warn</button>\r\n    <button mat-button disabled>Disabled</button>\r\n    <a mat-button href=\"https://www.google.com/\" target=\"_blank\">Link</a>\r\n  </div>\r\n</section>\r\n<mat-divider></mat-divider>\r\n<section>\r\n  <div class=\"example-label\">Raised</div>\r\n  <div class=\"example-button-row\">\r\n    <button mat-raised-button>Basic</button>\r\n    <button mat-raised-button color=\"primary\">Primary</button>\r\n    <button mat-raised-button color=\"accent\">Accent</button>\r\n    <button mat-raised-button color=\"warn\">Warn</button>\r\n    <button mat-raised-button disabled>Disabled</button>\r\n    <a mat-raised-button href=\"https://www.google.com/\" target=\"_blank\">Link</a>\r\n  </div>\r\n</section>\r\n<mat-divider></mat-divider>\r\n<section>\r\n  <div class=\"example-label\">Stroked</div>\r\n  <div class=\"example-button-row\">\r\n    <button mat-stroked-button>Basic</button>\r\n    <button mat-stroked-button color=\"primary\">Primary</button>\r\n    <button mat-stroked-button color=\"accent\">Accent</button>\r\n    <button mat-stroked-button color=\"warn\">Warn</button>\r\n    <button mat-stroked-button disabled>Disabled</button>\r\n    <a mat-stroked-button href=\"https://www.google.com/\" target=\"_blank\">Link</a>\r\n  </div>\r\n</section>\r\n<mat-divider></mat-divider>\r\n<section>\r\n  <div class=\"example-label\">Flat</div>\r\n  <div class=\"example-button-row\">\r\n    <button mat-flat-button>Basic</button>\r\n    <button mat-flat-button color=\"primary\">Primary</button>\r\n    <button mat-flat-button color=\"accent\">Accent</button>\r\n    <button mat-flat-button color=\"warn\">Warn</button>\r\n    <button mat-flat-button disabled>Disabled</button>\r\n    <a mat-flat-button href=\"https://www.google.com/\" target=\"_blank\">Link</a>\r\n  </div>\r\n</section>\r\n<mat-divider></mat-divider>\r\n<section>\r\n  <div class=\"example-label\">Icon</div>\r\n  <div class=\"example-button-row\">\r\n    <div class=\"example-flex-container\">\r\n      <button mat-icon-button aria-label=\"Example icon button with a vertical three dot icon\">\r\n        <mat-icon>more_vert</mat-icon>\r\n      </button>\r\n      <button mat-icon-button color=\"primary\" aria-label=\"Example icon button with a home icon\">\r\n        <mat-icon>home</mat-icon>\r\n      </button>\r\n      <button mat-icon-button color=\"accent\" aria-label=\"Example icon button with a menu icon\">\r\n        <mat-icon>menu</mat-icon>\r\n      </button>\r\n      <button mat-icon-button color=\"warn\" aria-label=\"Example icon button with a heart icon\">\r\n        <mat-icon>favorite</mat-icon>\r\n      </button>\r\n      <button mat-icon-button disabled aria-label=\"Example icon button with a open in new tab icon\">\r\n        <mat-icon>open_in_new</mat-icon>\r\n      </button>\r\n    </div>\r\n  </div>\r\n</section>\r\n<mat-divider></mat-divider>\r\n<section>\r\n  <div class=\"example-label\">FAB</div>\r\n  <div class=\"example-button-row\">\r\n    <div class=\"example-flex-container\">\r\n      <div class=\"example-button-container\">\r\n        <button mat-fab color=\"primary\" aria-label=\"Example icon button with a delete icon\">\r\n          <mat-icon>delete</mat-icon>\r\n        </button>\r\n      </div>\r\n      <div class=\"example-button-container\">\r\n        <button mat-fab color=\"accent\" aria-label=\"Example icon button with a bookmark icon\">\r\n          <mat-icon>bookmark</mat-icon>\r\n        </button>\r\n      </div>\r\n      <div class=\"example-button-container\">\r\n        <button mat-fab color=\"warn\" aria-label=\"Example icon button with a home icon\">\r\n          <mat-icon>home</mat-icon>\r\n        </button>\r\n      </div>\r\n      <div class=\"example-button-container\">\r\n        <button mat-fab disabled aria-label=\"Example icon button with a heart icon\">\r\n          <mat-icon>favorite</mat-icon>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<mat-divider></mat-divider>\r\n<section>\r\n  <div class=\"example-label\">Mini FAB</div>\r\n  <div class=\"example-button-row\">\r\n    <div class=\"example-flex-container\">\r\n      <div class=\"example-button-container\">\r\n        <button mat-mini-fab color=\"primary\" aria-label=\"Example icon button with a menu icon\">\r\n          <mat-icon>menu</mat-icon>\r\n        </button>\r\n      </div>\r\n      <div class=\"example-button-container\">\r\n        <button mat-mini-fab color=\"accent\" aria-label=\"Example icon button with a plus one icon\">\r\n          <mat-icon>plus_one</mat-icon>\r\n        </button>\r\n      </div>\r\n      <div class=\"example-button-container\">\r\n        <button mat-mini-fab color=\"warn\" aria-label=\"Example icon button with a filter list icon\">\r\n          <mat-icon>filter_list</mat-icon>\r\n        </button>\r\n      </div>\r\n      <div class=\"example-button-container\">\r\n        <button mat-mini-fab disabled aria-label=\"Example icon button with a home icon\">\r\n          <mat-icon>home</mat-icon>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n", styles: ["section {\r\n  display: table;\r\n}\r\n\r\n.example-label {\r\n  display: table-cell;\r\n  font-size: 14px;\r\n  margin-left: 8px;\r\n  min-width: 120px;\r\n}\r\n\r\n.example-button-row {\r\n  display: table-cell;\r\n  max-width: 600px;\r\n}\r\n\r\n.example-button-row .mat-mdc-button-base {\r\n  margin: 8px 8px 8px 0;\r\n}\r\n\r\n.example-flex-container {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.example-button-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  width: 120px;\r\n}\r\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLW92ZXJ2aWV3LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9idXR0b24vYnV0dG9uLW92ZXJ2aWV3L2J1dHRvbi1vdmVydmlldy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvYnV0dG9uL2J1dHRvbi1vdmVydmlldy9idXR0b24tb3ZlcnZpZXctZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQzNELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7QUFFekQ7O0dBRUc7QUFRSCxNQUFNLE9BQU8scUJBQXFCOzhHQUFyQixxQkFBcUI7a0dBQXJCLHFCQUFxQixtRkNmbEMseXhLQThIQSxtbUJEakhZLGVBQWUsNHRCQUFFLGdCQUFnQixrSUFBRSxhQUFhOzsyRkFFL0MscUJBQXFCO2tCQVBqQyxTQUFTOytCQUNFLHlCQUF5QixjQUd2QixJQUFJLFdBQ1AsQ0FBQyxlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsYUFBYSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge01hdEljb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xyXG5pbXBvcnQge01hdERpdmlkZXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpdmlkZXInO1xyXG5pbXBvcnQge01hdEJ1dHRvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcclxuXHJcbi8qKlxyXG4gKiBAdGl0bGUgQmFzaWMgYnV0dG9uc1xyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdidXR0b24tb3ZlcnZpZXctZXhhbXBsZScsXHJcbiAgdGVtcGxhdGVVcmw6ICdidXR0b24tb3ZlcnZpZXctZXhhbXBsZS5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnYnV0dG9uLW92ZXJ2aWV3LWV4YW1wbGUuY3NzJ10sXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBpbXBvcnRzOiBbTWF0QnV0dG9uTW9kdWxlLCBNYXREaXZpZGVyTW9kdWxlLCBNYXRJY29uTW9kdWxlXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEJ1dHRvbk92ZXJ2aWV3RXhhbXBsZSB7fVxyXG4iLCI8c2VjdGlvbj5cclxuICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1sYWJlbFwiPkJhc2ljPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cImV4YW1wbGUtYnV0dG9uLXJvd1wiPlxyXG4gICAgPGJ1dHRvbiBtYXQtYnV0dG9uPkJhc2ljPC9idXR0b24+XHJcbiAgICA8YnV0dG9uIG1hdC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCI+UHJpbWFyeTwvYnV0dG9uPlxyXG4gICAgPGJ1dHRvbiBtYXQtYnV0dG9uIGNvbG9yPVwiYWNjZW50XCI+QWNjZW50PC9idXR0b24+XHJcbiAgICA8YnV0dG9uIG1hdC1idXR0b24gY29sb3I9XCJ3YXJuXCI+V2FybjwvYnV0dG9uPlxyXG4gICAgPGJ1dHRvbiBtYXQtYnV0dG9uIGRpc2FibGVkPkRpc2FibGVkPC9idXR0b24+XHJcbiAgICA8YSBtYXQtYnV0dG9uIGhyZWY9XCJodHRwczovL3d3dy5nb29nbGUuY29tL1wiIHRhcmdldD1cIl9ibGFua1wiPkxpbms8L2E+XHJcbiAgPC9kaXY+XHJcbjwvc2VjdGlvbj5cclxuPG1hdC1kaXZpZGVyPjwvbWF0LWRpdmlkZXI+XHJcbjxzZWN0aW9uPlxyXG4gIDxkaXYgY2xhc3M9XCJleGFtcGxlLWxhYmVsXCI+UmFpc2VkPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cImV4YW1wbGUtYnV0dG9uLXJvd1wiPlxyXG4gICAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbj5CYXNpYzwvYnV0dG9uPlxyXG4gICAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIj5QcmltYXJ5PC9idXR0b24+XHJcbiAgICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwiYWNjZW50XCI+QWNjZW50PC9idXR0b24+XHJcbiAgICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwid2FyblwiPldhcm48L2J1dHRvbj5cclxuICAgIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gZGlzYWJsZWQ+RGlzYWJsZWQ8L2J1dHRvbj5cclxuICAgIDxhIG1hdC1yYWlzZWQtYnV0dG9uIGhyZWY9XCJodHRwczovL3d3dy5nb29nbGUuY29tL1wiIHRhcmdldD1cIl9ibGFua1wiPkxpbms8L2E+XHJcbiAgPC9kaXY+XHJcbjwvc2VjdGlvbj5cclxuPG1hdC1kaXZpZGVyPjwvbWF0LWRpdmlkZXI+XHJcbjxzZWN0aW9uPlxyXG4gIDxkaXYgY2xhc3M9XCJleGFtcGxlLWxhYmVsXCI+U3Ryb2tlZDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJleGFtcGxlLWJ1dHRvbi1yb3dcIj5cclxuICAgIDxidXR0b24gbWF0LXN0cm9rZWQtYnV0dG9uPkJhc2ljPC9idXR0b24+XHJcbiAgICA8YnV0dG9uIG1hdC1zdHJva2VkLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIj5QcmltYXJ5PC9idXR0b24+XHJcbiAgICA8YnV0dG9uIG1hdC1zdHJva2VkLWJ1dHRvbiBjb2xvcj1cImFjY2VudFwiPkFjY2VudDwvYnV0dG9uPlxyXG4gICAgPGJ1dHRvbiBtYXQtc3Ryb2tlZC1idXR0b24gY29sb3I9XCJ3YXJuXCI+V2FybjwvYnV0dG9uPlxyXG4gICAgPGJ1dHRvbiBtYXQtc3Ryb2tlZC1idXR0b24gZGlzYWJsZWQ+RGlzYWJsZWQ8L2J1dHRvbj5cclxuICAgIDxhIG1hdC1zdHJva2VkLWJ1dHRvbiBocmVmPVwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5MaW5rPC9hPlxyXG4gIDwvZGl2PlxyXG48L3NlY3Rpb24+XHJcbjxtYXQtZGl2aWRlcj48L21hdC1kaXZpZGVyPlxyXG48c2VjdGlvbj5cclxuICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1sYWJlbFwiPkZsYXQ8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1idXR0b24tcm93XCI+XHJcbiAgICA8YnV0dG9uIG1hdC1mbGF0LWJ1dHRvbj5CYXNpYzwvYnV0dG9uPlxyXG4gICAgPGJ1dHRvbiBtYXQtZmxhdC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCI+UHJpbWFyeTwvYnV0dG9uPlxyXG4gICAgPGJ1dHRvbiBtYXQtZmxhdC1idXR0b24gY29sb3I9XCJhY2NlbnRcIj5BY2NlbnQ8L2J1dHRvbj5cclxuICAgIDxidXR0b24gbWF0LWZsYXQtYnV0dG9uIGNvbG9yPVwid2FyblwiPldhcm48L2J1dHRvbj5cclxuICAgIDxidXR0b24gbWF0LWZsYXQtYnV0dG9uIGRpc2FibGVkPkRpc2FibGVkPC9idXR0b24+XHJcbiAgICA8YSBtYXQtZmxhdC1idXR0b24gaHJlZj1cImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+TGluazwvYT5cclxuICA8L2Rpdj5cclxuPC9zZWN0aW9uPlxyXG48bWF0LWRpdmlkZXI+PC9tYXQtZGl2aWRlcj5cclxuPHNlY3Rpb24+XHJcbiAgPGRpdiBjbGFzcz1cImV4YW1wbGUtbGFiZWxcIj5JY29uPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cImV4YW1wbGUtYnV0dG9uLXJvd1wiPlxyXG4gICAgPGRpdiBjbGFzcz1cImV4YW1wbGUtZmxleC1jb250YWluZXJcIj5cclxuICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gYXJpYS1sYWJlbD1cIkV4YW1wbGUgaWNvbiBidXR0b24gd2l0aCBhIHZlcnRpY2FsIHRocmVlIGRvdCBpY29uXCI+XHJcbiAgICAgICAgPG1hdC1pY29uPm1vcmVfdmVydDwvbWF0LWljb24+XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiBhcmlhLWxhYmVsPVwiRXhhbXBsZSBpY29uIGJ1dHRvbiB3aXRoIGEgaG9tZSBpY29uXCI+XHJcbiAgICAgICAgPG1hdC1pY29uPmhvbWU8L21hdC1pY29uPlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gY29sb3I9XCJhY2NlbnRcIiBhcmlhLWxhYmVsPVwiRXhhbXBsZSBpY29uIGJ1dHRvbiB3aXRoIGEgbWVudSBpY29uXCI+XHJcbiAgICAgICAgPG1hdC1pY29uPm1lbnU8L21hdC1pY29uPlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gY29sb3I9XCJ3YXJuXCIgYXJpYS1sYWJlbD1cIkV4YW1wbGUgaWNvbiBidXR0b24gd2l0aCBhIGhlYXJ0IGljb25cIj5cclxuICAgICAgICA8bWF0LWljb24+ZmF2b3JpdGU8L21hdC1pY29uPlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gZGlzYWJsZWQgYXJpYS1sYWJlbD1cIkV4YW1wbGUgaWNvbiBidXR0b24gd2l0aCBhIG9wZW4gaW4gbmV3IHRhYiBpY29uXCI+XHJcbiAgICAgICAgPG1hdC1pY29uPm9wZW5faW5fbmV3PC9tYXQtaWNvbj5cclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9zZWN0aW9uPlxyXG48bWF0LWRpdmlkZXI+PC9tYXQtZGl2aWRlcj5cclxuPHNlY3Rpb24+XHJcbiAgPGRpdiBjbGFzcz1cImV4YW1wbGUtbGFiZWxcIj5GQUI8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1idXR0b24tcm93XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1mbGV4LWNvbnRhaW5lclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1idXR0b24tY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGJ1dHRvbiBtYXQtZmFiIGNvbG9yPVwicHJpbWFyeVwiIGFyaWEtbGFiZWw9XCJFeGFtcGxlIGljb24gYnV0dG9uIHdpdGggYSBkZWxldGUgaWNvblwiPlxyXG4gICAgICAgICAgPG1hdC1pY29uPmRlbGV0ZTwvbWF0LWljb24+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1idXR0b24tY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGJ1dHRvbiBtYXQtZmFiIGNvbG9yPVwiYWNjZW50XCIgYXJpYS1sYWJlbD1cIkV4YW1wbGUgaWNvbiBidXR0b24gd2l0aCBhIGJvb2ttYXJrIGljb25cIj5cclxuICAgICAgICAgIDxtYXQtaWNvbj5ib29rbWFyazwvbWF0LWljb24+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1idXR0b24tY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGJ1dHRvbiBtYXQtZmFiIGNvbG9yPVwid2FyblwiIGFyaWEtbGFiZWw9XCJFeGFtcGxlIGljb24gYnV0dG9uIHdpdGggYSBob21lIGljb25cIj5cclxuICAgICAgICAgIDxtYXQtaWNvbj5ob21lPC9tYXQtaWNvbj5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlLWJ1dHRvbi1jb250YWluZXJcIj5cclxuICAgICAgICA8YnV0dG9uIG1hdC1mYWIgZGlzYWJsZWQgYXJpYS1sYWJlbD1cIkV4YW1wbGUgaWNvbiBidXR0b24gd2l0aCBhIGhlYXJ0IGljb25cIj5cclxuICAgICAgICAgIDxtYXQtaWNvbj5mYXZvcml0ZTwvbWF0LWljb24+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvc2VjdGlvbj5cclxuPG1hdC1kaXZpZGVyPjwvbWF0LWRpdmlkZXI+XHJcbjxzZWN0aW9uPlxyXG4gIDxkaXYgY2xhc3M9XCJleGFtcGxlLWxhYmVsXCI+TWluaSBGQUI8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1idXR0b24tcm93XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1mbGV4LWNvbnRhaW5lclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1idXR0b24tY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGJ1dHRvbiBtYXQtbWluaS1mYWIgY29sb3I9XCJwcmltYXJ5XCIgYXJpYS1sYWJlbD1cIkV4YW1wbGUgaWNvbiBidXR0b24gd2l0aCBhIG1lbnUgaWNvblwiPlxyXG4gICAgICAgICAgPG1hdC1pY29uPm1lbnU8L21hdC1pY29uPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImV4YW1wbGUtYnV0dG9uLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxidXR0b24gbWF0LW1pbmktZmFiIGNvbG9yPVwiYWNjZW50XCIgYXJpYS1sYWJlbD1cIkV4YW1wbGUgaWNvbiBidXR0b24gd2l0aCBhIHBsdXMgb25lIGljb25cIj5cclxuICAgICAgICAgIDxtYXQtaWNvbj5wbHVzX29uZTwvbWF0LWljb24+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1idXR0b24tY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGJ1dHRvbiBtYXQtbWluaS1mYWIgY29sb3I9XCJ3YXJuXCIgYXJpYS1sYWJlbD1cIkV4YW1wbGUgaWNvbiBidXR0b24gd2l0aCBhIGZpbHRlciBsaXN0IGljb25cIj5cclxuICAgICAgICAgIDxtYXQtaWNvbj5maWx0ZXJfbGlzdDwvbWF0LWljb24+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1idXR0b24tY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGJ1dHRvbiBtYXQtbWluaS1mYWIgZGlzYWJsZWQgYXJpYS1sYWJlbD1cIkV4YW1wbGUgaWNvbiBidXR0b24gd2l0aCBhIGhvbWUgaWNvblwiPlxyXG4gICAgICAgICAgPG1hdC1pY29uPmhvbWU8L21hdC1pY29uPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3NlY3Rpb24+XHJcbiJdfQ==