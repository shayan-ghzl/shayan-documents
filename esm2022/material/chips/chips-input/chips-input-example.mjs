import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, inject } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/chips";
import * as i3 from "@angular/material/icon";
/**
 * @title Chips with input
 */
export class ChipsInputExample {
    constructor() {
        this.addOnBlur = true;
        this.separatorKeysCodes = [ENTER, COMMA];
        this.fruits = [{ name: 'Lemon' }, { name: 'Lime' }, { name: 'Apple' }];
        this.announcer = inject(LiveAnnouncer);
    }
    add(event) {
        const value = (event.value || '').trim();
        // Add our fruit
        if (value) {
            this.fruits.push({ name: value });
        }
        // Clear the input value
        event.chipInput.clear();
    }
    remove(fruit) {
        const index = this.fruits.indexOf(fruit);
        if (index >= 0) {
            this.fruits.splice(index, 1);
            this.announcer.announce(`Removed ${fruit}`);
        }
    }
    edit(fruit, event) {
        const value = event.value.trim();
        // Remove fruit if it no longer has a name
        if (!value) {
            this.remove(fruit);
            return;
        }
        // Edit existing fruit
        const index = this.fruits.indexOf(fruit);
        if (index >= 0) {
            this.fruits[index].name = value;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: ChipsInputExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.4", type: ChipsInputExample, isStandalone: true, selector: "chips-input-example", ngImport: i0, template: "<mat-form-field class=\"example-chip-list\">\r\n  <mat-label>Favorite Fruits</mat-label>\r\n  <mat-chip-grid #chipGrid aria-label=\"Enter fruits\">\r\n    @for (fruit of fruits; track fruit) {\r\n      <mat-chip-row\r\n        (removed)=\"remove(fruit)\"\r\n        [editable]=\"true\"\r\n        (edited)=\"edit(fruit, $event)\"\r\n        [aria-description]=\"'press enter to edit ' + fruit.name\">\r\n        {{fruit.name}}\r\n        <button matChipRemove [attr.aria-label]=\"'remove ' + fruit.name\">\r\n          <mat-icon>cancel</mat-icon>\r\n        </button>\r\n      </mat-chip-row>\r\n    }\r\n    <input placeholder=\"New fruit...\"\r\n           [matChipInputFor]=\"chipGrid\"\r\n           [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\r\n           [matChipInputAddOnBlur]=\"addOnBlur\"\r\n           (matChipInputTokenEnd)=\"add($event)\"/>\r\n  </mat-chip-grid>\r\n</mat-form-field>\r\n", styles: [".example-chip-list {\r\n  width: 100%;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatChipsModule }, { kind: "component", type: i2.MatChipGrid, selector: "mat-chip-grid", inputs: ["disabled", "placeholder", "required", "value", "errorStateMatcher"], outputs: ["change", "valueChange"] }, { kind: "directive", type: i2.MatChipInput, selector: "input[matChipInputFor]", inputs: ["matChipInputFor", "matChipInputAddOnBlur", "matChipInputSeparatorKeyCodes", "placeholder", "id", "disabled"], outputs: ["matChipInputTokenEnd"], exportAs: ["matChipInput", "matChipInputFor"] }, { kind: "directive", type: i2.MatChipRemove, selector: "[matChipRemove]" }, { kind: "component", type: i2.MatChipRow, selector: "mat-chip-row, [mat-chip-row], mat-basic-chip-row, [mat-basic-chip-row]", inputs: ["editable"], outputs: ["edited"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: ChipsInputExample, decorators: [{
            type: Component,
            args: [{ selector: 'chips-input-example', standalone: true, imports: [MatFormFieldModule, MatChipsModule, MatIconModule], template: "<mat-form-field class=\"example-chip-list\">\r\n  <mat-label>Favorite Fruits</mat-label>\r\n  <mat-chip-grid #chipGrid aria-label=\"Enter fruits\">\r\n    @for (fruit of fruits; track fruit) {\r\n      <mat-chip-row\r\n        (removed)=\"remove(fruit)\"\r\n        [editable]=\"true\"\r\n        (edited)=\"edit(fruit, $event)\"\r\n        [aria-description]=\"'press enter to edit ' + fruit.name\">\r\n        {{fruit.name}}\r\n        <button matChipRemove [attr.aria-label]=\"'remove ' + fruit.name\">\r\n          <mat-icon>cancel</mat-icon>\r\n        </button>\r\n      </mat-chip-row>\r\n    }\r\n    <input placeholder=\"New fruit...\"\r\n           [matChipInputFor]=\"chipGrid\"\r\n           [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\r\n           [matChipInputAddOnBlur]=\"addOnBlur\"\r\n           (matChipInputTokenEnd)=\"add($event)\"/>\r\n  </mat-chip-grid>\r\n</mat-form-field>\r\n", styles: [".example-chip-list {\r\n  width: 100%;\r\n}\r\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcHMtaW5wdXQtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2NoaXBzL2NoaXBzLWlucHV0L2NoaXBzLWlucHV0LWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jaGlwcy9jaGlwcy1pbnB1dC9jaGlwcy1pbnB1dC1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLEtBQUssRUFBRSxLQUFLLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUNuRCxPQUFPLEVBQUMsU0FBUyxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNoRCxPQUFPLEVBQXdDLGNBQWMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQzlGLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQztBQUNoRSxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7Ozs7O0FBTWhEOztHQUVHO0FBUUgsTUFBTSxPQUFPLGlCQUFpQjtJQVA5QjtRQVFFLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFDUix1QkFBa0IsR0FBRyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQVUsQ0FBQztRQUN0RCxXQUFNLEdBQVksQ0FBQyxFQUFDLElBQUksRUFBRSxPQUFPLEVBQUMsRUFBRSxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUMsRUFBRSxFQUFDLElBQUksRUFBRSxPQUFPLEVBQUMsQ0FBQyxDQUFDO1FBRXJFLGNBQVMsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7S0F1Q25DO0lBckNDLEdBQUcsQ0FBQyxLQUF3QjtRQUMxQixNQUFNLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFekMsZ0JBQWdCO1FBQ2hCLElBQUksS0FBSyxFQUFFO1lBQ1QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxJQUFJLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQztTQUNqQztRQUVELHdCQUF3QjtRQUN4QixLQUFLLENBQUMsU0FBVSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCxNQUFNLENBQUMsS0FBWTtRQUNqQixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUV6QyxJQUFJLEtBQUssSUFBSSxDQUFDLEVBQUU7WUFDZCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFFN0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsV0FBVyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1NBQzdDO0lBQ0gsQ0FBQztJQUVELElBQUksQ0FBQyxLQUFZLEVBQUUsS0FBeUI7UUFDMUMsTUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUVqQywwQ0FBMEM7UUFDMUMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNWLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbkIsT0FBTztTQUNSO1FBRUQsc0JBQXNCO1FBQ3RCLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pDLElBQUksS0FBSyxJQUFJLENBQUMsRUFBRTtZQUNkLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztTQUNqQztJQUNILENBQUM7OEdBM0NVLGlCQUFpQjtrR0FBakIsaUJBQWlCLCtFQ3JCOUIsazVCQXNCQSx3R0RIWSxrQkFBa0IsMFNBQUUsY0FBYyw0dUJBQUUsYUFBYTs7MkZBRWhELGlCQUFpQjtrQkFQN0IsU0FBUzsrQkFDRSxxQkFBcUIsY0FHbkIsSUFBSSxXQUNQLENBQUMsa0JBQWtCLEVBQUUsY0FBYyxFQUFFLGFBQWEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q09NTUEsIEVOVEVSfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xyXG5pbXBvcnQge0NvbXBvbmVudCwgaW5qZWN0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtNYXRDaGlwRWRpdGVkRXZlbnQsIE1hdENoaXBJbnB1dEV2ZW50LCBNYXRDaGlwc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2hpcHMnO1xyXG5pbXBvcnQge01hdEljb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xyXG5pbXBvcnQge01hdEZvcm1GaWVsZE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XHJcbmltcG9ydCB7TGl2ZUFubm91bmNlcn0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGcnVpdCB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogQHRpdGxlIENoaXBzIHdpdGggaW5wdXRcclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY2hpcHMtaW5wdXQtZXhhbXBsZScsXHJcbiAgdGVtcGxhdGVVcmw6ICdjaGlwcy1pbnB1dC1leGFtcGxlLmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWydjaGlwcy1pbnB1dC1leGFtcGxlLmNzcyddLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgaW1wb3J0czogW01hdEZvcm1GaWVsZE1vZHVsZSwgTWF0Q2hpcHNNb2R1bGUsIE1hdEljb25Nb2R1bGVdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2hpcHNJbnB1dEV4YW1wbGUge1xyXG4gIGFkZE9uQmx1ciA9IHRydWU7XHJcbiAgcmVhZG9ubHkgc2VwYXJhdG9yS2V5c0NvZGVzID0gW0VOVEVSLCBDT01NQV0gYXMgY29uc3Q7XHJcbiAgZnJ1aXRzOiBGcnVpdFtdID0gW3tuYW1lOiAnTGVtb24nfSwge25hbWU6ICdMaW1lJ30sIHtuYW1lOiAnQXBwbGUnfV07XHJcblxyXG4gIGFubm91bmNlciA9IGluamVjdChMaXZlQW5ub3VuY2VyKTtcclxuXHJcbiAgYWRkKGV2ZW50OiBNYXRDaGlwSW5wdXRFdmVudCk6IHZvaWQge1xyXG4gICAgY29uc3QgdmFsdWUgPSAoZXZlbnQudmFsdWUgfHwgJycpLnRyaW0oKTtcclxuXHJcbiAgICAvLyBBZGQgb3VyIGZydWl0XHJcbiAgICBpZiAodmFsdWUpIHtcclxuICAgICAgdGhpcy5mcnVpdHMucHVzaCh7bmFtZTogdmFsdWV9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDbGVhciB0aGUgaW5wdXQgdmFsdWVcclxuICAgIGV2ZW50LmNoaXBJbnB1dCEuY2xlYXIoKTtcclxuICB9XHJcblxyXG4gIHJlbW92ZShmcnVpdDogRnJ1aXQpOiB2b2lkIHtcclxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5mcnVpdHMuaW5kZXhPZihmcnVpdCk7XHJcblxyXG4gICAgaWYgKGluZGV4ID49IDApIHtcclxuICAgICAgdGhpcy5mcnVpdHMuc3BsaWNlKGluZGV4LCAxKTtcclxuXHJcbiAgICAgIHRoaXMuYW5ub3VuY2VyLmFubm91bmNlKGBSZW1vdmVkICR7ZnJ1aXR9YCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBlZGl0KGZydWl0OiBGcnVpdCwgZXZlbnQ6IE1hdENoaXBFZGl0ZWRFdmVudCkge1xyXG4gICAgY29uc3QgdmFsdWUgPSBldmVudC52YWx1ZS50cmltKCk7XHJcblxyXG4gICAgLy8gUmVtb3ZlIGZydWl0IGlmIGl0IG5vIGxvbmdlciBoYXMgYSBuYW1lXHJcbiAgICBpZiAoIXZhbHVlKSB7XHJcbiAgICAgIHRoaXMucmVtb3ZlKGZydWl0KTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEVkaXQgZXhpc3RpbmcgZnJ1aXRcclxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5mcnVpdHMuaW5kZXhPZihmcnVpdCk7XHJcbiAgICBpZiAoaW5kZXggPj0gMCkge1xyXG4gICAgICB0aGlzLmZydWl0c1tpbmRleF0ubmFtZSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJleGFtcGxlLWNoaXAtbGlzdFwiPlxyXG4gIDxtYXQtbGFiZWw+RmF2b3JpdGUgRnJ1aXRzPC9tYXQtbGFiZWw+XHJcbiAgPG1hdC1jaGlwLWdyaWQgI2NoaXBHcmlkIGFyaWEtbGFiZWw9XCJFbnRlciBmcnVpdHNcIj5cclxuICAgIEBmb3IgKGZydWl0IG9mIGZydWl0czsgdHJhY2sgZnJ1aXQpIHtcclxuICAgICAgPG1hdC1jaGlwLXJvd1xyXG4gICAgICAgIChyZW1vdmVkKT1cInJlbW92ZShmcnVpdClcIlxyXG4gICAgICAgIFtlZGl0YWJsZV09XCJ0cnVlXCJcclxuICAgICAgICAoZWRpdGVkKT1cImVkaXQoZnJ1aXQsICRldmVudClcIlxyXG4gICAgICAgIFthcmlhLWRlc2NyaXB0aW9uXT1cIidwcmVzcyBlbnRlciB0byBlZGl0ICcgKyBmcnVpdC5uYW1lXCI+XHJcbiAgICAgICAge3tmcnVpdC5uYW1lfX1cclxuICAgICAgICA8YnV0dG9uIG1hdENoaXBSZW1vdmUgW2F0dHIuYXJpYS1sYWJlbF09XCIncmVtb3ZlICcgKyBmcnVpdC5uYW1lXCI+XHJcbiAgICAgICAgICA8bWF0LWljb24+Y2FuY2VsPC9tYXQtaWNvbj5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9tYXQtY2hpcC1yb3c+XHJcbiAgICB9XHJcbiAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCJOZXcgZnJ1aXQuLi5cIlxyXG4gICAgICAgICAgIFttYXRDaGlwSW5wdXRGb3JdPVwiY2hpcEdyaWRcIlxyXG4gICAgICAgICAgIFttYXRDaGlwSW5wdXRTZXBhcmF0b3JLZXlDb2Rlc109XCJzZXBhcmF0b3JLZXlzQ29kZXNcIlxyXG4gICAgICAgICAgIFttYXRDaGlwSW5wdXRBZGRPbkJsdXJdPVwiYWRkT25CbHVyXCJcclxuICAgICAgICAgICAobWF0Q2hpcElucHV0VG9rZW5FbmQpPVwiYWRkKCRldmVudClcIi8+XHJcbiAgPC9tYXQtY2hpcC1ncmlkPlxyXG48L21hdC1mb3JtLWZpZWxkPlxyXG4iXX0=