import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/checkbox";
import * as i2 from "@angular/forms";
/**
 * @title Basic checkboxes
 */
export class CheckboxOverviewExample {
    constructor() {
        this.task = {
            name: 'Indeterminate',
            completed: false,
            color: 'primary',
            subtasks: [
                { name: 'Primary', completed: false, color: 'primary' },
                { name: 'Accent', completed: false, color: 'accent' },
                { name: 'Warn', completed: false, color: 'warn' },
            ],
        };
        this.allComplete = false;
    }
    updateAllComplete() {
        this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
    }
    someComplete() {
        if (this.task.subtasks == null) {
            return false;
        }
        return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
    }
    setAll(completed) {
        this.allComplete = completed;
        if (this.task.subtasks == null) {
            return;
        }
        this.task.subtasks.forEach(t => (t.completed = completed));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: CheckboxOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.4", type: CheckboxOverviewExample, isStandalone: true, selector: "checkbox-overview-example", ngImport: i0, template: "<section class=\"example-section\">\r\n  <mat-checkbox class=\"example-margin\">Check me!</mat-checkbox>\r\n  <mat-checkbox class=\"example-margin\" [disabled]=\"true\">Disabled</mat-checkbox>\r\n</section>\r\n\r\n<section class=\"example-section\">\r\n  <span class=\"example-list-section\">\r\n    <mat-checkbox class=\"example-margin\"\r\n                  [checked]=\"allComplete\"\r\n                  [color]=\"task.color\"\r\n                  [indeterminate]=\"someComplete()\"\r\n                  (change)=\"setAll($event.checked)\">\r\n      {{task.name}}\r\n    </mat-checkbox>\r\n  </span>\r\n  <span class=\"example-list-section\">\r\n    <ul>\r\n      @for (subtask of task.subtasks; track subtask) {\r\n        <li>\r\n          <mat-checkbox [(ngModel)]=\"subtask.completed\"\r\n                        [color]=\"subtask.color\"\r\n                        (ngModelChange)=\"updateAllComplete()\">\r\n            {{subtask.name}}\r\n          </mat-checkbox>\r\n        </li>\r\n      }\r\n    </ul>\r\n  </span>\r\n</section>\r\n", styles: [".example-section {\r\n  margin: 12px 0;\r\n}\r\n\r\n.example-margin {\r\n  margin: 0 12px;\r\n}\r\n\r\nul {\r\n  list-style-type: none;\r\n  margin-top: 4px;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: MatCheckboxModule }, { kind: "component", type: i1.MatCheckbox, selector: "mat-checkbox", inputs: ["aria-label", "aria-labelledby", "aria-describedby", "id", "required", "labelPosition", "name", "value", "disableRipple", "tabIndex", "color", "checked", "disabled", "indeterminate"], outputs: ["change", "indeterminateChange"], exportAs: ["matCheckbox"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: CheckboxOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'checkbox-overview-example', standalone: true, imports: [MatCheckboxModule, FormsModule], template: "<section class=\"example-section\">\r\n  <mat-checkbox class=\"example-margin\">Check me!</mat-checkbox>\r\n  <mat-checkbox class=\"example-margin\" [disabled]=\"true\">Disabled</mat-checkbox>\r\n</section>\r\n\r\n<section class=\"example-section\">\r\n  <span class=\"example-list-section\">\r\n    <mat-checkbox class=\"example-margin\"\r\n                  [checked]=\"allComplete\"\r\n                  [color]=\"task.color\"\r\n                  [indeterminate]=\"someComplete()\"\r\n                  (change)=\"setAll($event.checked)\">\r\n      {{task.name}}\r\n    </mat-checkbox>\r\n  </span>\r\n  <span class=\"example-list-section\">\r\n    <ul>\r\n      @for (subtask of task.subtasks; track subtask) {\r\n        <li>\r\n          <mat-checkbox [(ngModel)]=\"subtask.completed\"\r\n                        [color]=\"subtask.color\"\r\n                        (ngModelChange)=\"updateAllComplete()\">\r\n            {{subtask.name}}\r\n          </mat-checkbox>\r\n        </li>\r\n      }\r\n    </ul>\r\n  </span>\r\n</section>\r\n", styles: [".example-section {\r\n  margin: 12px 0;\r\n}\r\n\r\n.example-margin {\r\n  margin: 0 12px;\r\n}\r\n\r\nul {\r\n  list-style-type: none;\r\n  margin-top: 4px;\r\n}\r\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3gtb3ZlcnZpZXctZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2NoZWNrYm94L2NoZWNrYm94LW92ZXJ2aWV3L2NoZWNrYm94LW92ZXJ2aWV3LWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jaGVja2JveC9jaGVja2JveC1vdmVydmlldy9jaGVja2JveC1vdmVydmlldy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV4QyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7Ozs7QUFTN0Q7O0dBRUc7QUFRSCxNQUFNLE9BQU8sdUJBQXVCO0lBUHBDO1FBUUUsU0FBSSxHQUFTO1lBQ1gsSUFBSSxFQUFFLGVBQWU7WUFDckIsU0FBUyxFQUFFLEtBQUs7WUFDaEIsS0FBSyxFQUFFLFNBQVM7WUFDaEIsUUFBUSxFQUFFO2dCQUNSLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUM7Z0JBQ3JELEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUM7Z0JBQ25ELEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUM7YUFDaEQ7U0FDRixDQUFDO1FBRUYsZ0JBQVcsR0FBWSxLQUFLLENBQUM7S0FvQjlCO0lBbEJDLGlCQUFpQjtRQUNmLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM5RixDQUFDO0lBRUQsWUFBWTtRQUNWLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxFQUFFO1lBQzlCLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUNyRixDQUFDO0lBRUQsTUFBTSxDQUFDLFNBQWtCO1FBQ3ZCLElBQUksQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDO1FBQzdCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxFQUFFO1lBQzlCLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQzdELENBQUM7OEdBL0JVLHVCQUF1QjtrR0FBdkIsdUJBQXVCLHFGQ3RCcEMsd2hDQTZCQSwrTkRUWSxpQkFBaUIsNldBQUUsV0FBVzs7MkZBRTdCLHVCQUF1QjtrQkFQbkMsU0FBUzsrQkFDRSwyQkFBMkIsY0FHekIsSUFBSSxXQUNQLENBQUMsaUJBQWlCLEVBQUUsV0FBVyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1RoZW1lUGFsZXR0ZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XHJcbmltcG9ydCB7Rm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHtNYXRDaGVja2JveE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2hlY2tib3gnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUYXNrIHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgY29tcGxldGVkOiBib29sZWFuO1xyXG4gIGNvbG9yOiBUaGVtZVBhbGV0dGU7XHJcbiAgc3VidGFza3M/OiBUYXNrW107XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAdGl0bGUgQmFzaWMgY2hlY2tib3hlc1xyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjaGVja2JveC1vdmVydmlldy1leGFtcGxlJyxcclxuICB0ZW1wbGF0ZVVybDogJ2NoZWNrYm94LW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJ2NoZWNrYm94LW92ZXJ2aWV3LWV4YW1wbGUuY3NzJ10sXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBpbXBvcnRzOiBbTWF0Q2hlY2tib3hNb2R1bGUsIEZvcm1zTW9kdWxlXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIENoZWNrYm94T3ZlcnZpZXdFeGFtcGxlIHtcclxuICB0YXNrOiBUYXNrID0ge1xyXG4gICAgbmFtZTogJ0luZGV0ZXJtaW5hdGUnLFxyXG4gICAgY29tcGxldGVkOiBmYWxzZSxcclxuICAgIGNvbG9yOiAncHJpbWFyeScsXHJcbiAgICBzdWJ0YXNrczogW1xyXG4gICAgICB7bmFtZTogJ1ByaW1hcnknLCBjb21wbGV0ZWQ6IGZhbHNlLCBjb2xvcjogJ3ByaW1hcnknfSxcclxuICAgICAge25hbWU6ICdBY2NlbnQnLCBjb21wbGV0ZWQ6IGZhbHNlLCBjb2xvcjogJ2FjY2VudCd9LFxyXG4gICAgICB7bmFtZTogJ1dhcm4nLCBjb21wbGV0ZWQ6IGZhbHNlLCBjb2xvcjogJ3dhcm4nfSxcclxuICAgIF0sXHJcbiAgfTtcclxuXHJcbiAgYWxsQ29tcGxldGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgdXBkYXRlQWxsQ29tcGxldGUoKSB7XHJcbiAgICB0aGlzLmFsbENvbXBsZXRlID0gdGhpcy50YXNrLnN1YnRhc2tzICE9IG51bGwgJiYgdGhpcy50YXNrLnN1YnRhc2tzLmV2ZXJ5KHQgPT4gdC5jb21wbGV0ZWQpO1xyXG4gIH1cclxuXHJcbiAgc29tZUNvbXBsZXRlKCk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKHRoaXMudGFzay5zdWJ0YXNrcyA9PSBudWxsKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLnRhc2suc3VidGFza3MuZmlsdGVyKHQgPT4gdC5jb21wbGV0ZWQpLmxlbmd0aCA+IDAgJiYgIXRoaXMuYWxsQ29tcGxldGU7XHJcbiAgfVxyXG5cclxuICBzZXRBbGwoY29tcGxldGVkOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLmFsbENvbXBsZXRlID0gY29tcGxldGVkO1xyXG4gICAgaWYgKHRoaXMudGFzay5zdWJ0YXNrcyA9PSBudWxsKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMudGFzay5zdWJ0YXNrcy5mb3JFYWNoKHQgPT4gKHQuY29tcGxldGVkID0gY29tcGxldGVkKSk7XHJcbiAgfVxyXG59XHJcbiIsIjxzZWN0aW9uIGNsYXNzPVwiZXhhbXBsZS1zZWN0aW9uXCI+XHJcbiAgPG1hdC1jaGVja2JveCBjbGFzcz1cImV4YW1wbGUtbWFyZ2luXCI+Q2hlY2sgbWUhPC9tYXQtY2hlY2tib3g+XHJcbiAgPG1hdC1jaGVja2JveCBjbGFzcz1cImV4YW1wbGUtbWFyZ2luXCIgW2Rpc2FibGVkXT1cInRydWVcIj5EaXNhYmxlZDwvbWF0LWNoZWNrYm94PlxyXG48L3NlY3Rpb24+XHJcblxyXG48c2VjdGlvbiBjbGFzcz1cImV4YW1wbGUtc2VjdGlvblwiPlxyXG4gIDxzcGFuIGNsYXNzPVwiZXhhbXBsZS1saXN0LXNlY3Rpb25cIj5cclxuICAgIDxtYXQtY2hlY2tib3ggY2xhc3M9XCJleGFtcGxlLW1hcmdpblwiXHJcbiAgICAgICAgICAgICAgICAgIFtjaGVja2VkXT1cImFsbENvbXBsZXRlXCJcclxuICAgICAgICAgICAgICAgICAgW2NvbG9yXT1cInRhc2suY29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICBbaW5kZXRlcm1pbmF0ZV09XCJzb21lQ29tcGxldGUoKVwiXHJcbiAgICAgICAgICAgICAgICAgIChjaGFuZ2UpPVwic2V0QWxsKCRldmVudC5jaGVja2VkKVwiPlxyXG4gICAgICB7e3Rhc2submFtZX19XHJcbiAgICA8L21hdC1jaGVja2JveD5cclxuICA8L3NwYW4+XHJcbiAgPHNwYW4gY2xhc3M9XCJleGFtcGxlLWxpc3Qtc2VjdGlvblwiPlxyXG4gICAgPHVsPlxyXG4gICAgICBAZm9yIChzdWJ0YXNrIG9mIHRhc2suc3VidGFza3M7IHRyYWNrIHN1YnRhc2spIHtcclxuICAgICAgICA8bGk+XHJcbiAgICAgICAgICA8bWF0LWNoZWNrYm94IFsobmdNb2RlbCldPVwic3VidGFzay5jb21wbGV0ZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbY29sb3JdPVwic3VidGFzay5jb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cInVwZGF0ZUFsbENvbXBsZXRlKClcIj5cclxuICAgICAgICAgICAge3tzdWJ0YXNrLm5hbWV9fVxyXG4gICAgICAgICAgPC9tYXQtY2hlY2tib3g+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgfVxyXG4gICAgPC91bD5cclxuICA8L3NwYW4+XHJcbjwvc2VjdGlvbj5cclxuIl19