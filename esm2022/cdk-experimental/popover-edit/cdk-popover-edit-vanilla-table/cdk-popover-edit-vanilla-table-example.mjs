import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CdkPopoverEditModule } from '@angular/cdk-experimental/popover-edit';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk-experimental/popover-edit";
import * as i2 from "@angular/forms";
const ELEMENT_DATA = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
    { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
    { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
    { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
    { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
    { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
    { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
    { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
    { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
    { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
    { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
];
/**
 * @title CDK Popover Edit on an HTML data-table
 */
export class CdkPopoverEditVanillaTableExample {
    constructor() {
        this.preservedNameValues = new WeakMap();
        this.preservedWeightValues = new WeakMap();
        this.elements = ELEMENT_DATA;
    }
    onSubmitName(element, f) {
        if (!f.valid) {
            return;
        }
        element.name = f.value.name;
    }
    onSubmitWeight(element, f) {
        if (!f.valid) {
            return;
        }
        element.weight = f.value.weight;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: CdkPopoverEditVanillaTableExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.4", type: CdkPopoverEditVanillaTableExample, isStandalone: true, selector: "cdk-popover-edit-vanilla-table-example", ngImport: i0, template: "<table editable class=\"example-table\">\r\n  <!--\r\n    This edit lens is specified outside of the cell and must explicitly declare\r\n    its context. It could be reused in multiple cells.\r\n  -->\r\n  <ng-template #weightEdit let-element>\r\n    <div style=\"background-color: white; width: 100%\">\r\n      <form #f=\"ngForm\"\r\n          cdkEditControl\r\n          (ngSubmit)=\"onSubmitWeight(element, f)\"\r\n          [cdkEditControlPreservedFormValue]=\"preservedWeightValues.get(element)\"\r\n          (cdkEditControlPreservedFormValueChange)=\"preservedWeightValues.set(element, $event)\">\r\n        Edit b:\r\n        <input type=\"number\" [ngModel]=\"element.weight\" name=\"weight\" required>\r\n        <br>\r\n        <button type=\"submit\">Confirm</button>\r\n        <button cdkEditRevert>Revert</button>\r\n        <button cdkEditClose>Close</button>\r\n      </form>\r\n    </div>\r\n  </ng-template>\r\n\r\n  <tr>\r\n    <th> No. </th>\r\n    <th> Name </th>\r\n    <th> Weight </th>\r\n    <th> Symbol </th>\r\n  </tr>\r\n\r\n  @for (element of elements; track element) {\r\n    <tr>\r\n      <td> {{element.position}} </td>\r\n\r\n      <td [cdkPopoverEdit]=\"nameEdit\">\r\n        {{element.name}}\r\n\r\n        <!-- This edit is defined in the cell and can implicitly access element -->\r\n        <ng-template #nameEdit>\r\n          <div style=\"background-color: white; width: 100%\">\r\n            <form #f=\"ngForm\"\r\n                cdkEditControl\r\n                (ngSubmit)=\"onSubmitName(element, f)\"\r\n                [cdkEditControlPreservedFormValue]=\"preservedNameValues.get(element)\"\r\n                (cdkEditControlPreservedFormValueChange)=\"preservedNameValues.set(element, $event)\">\r\n              Edit a:\r\n              <input [ngModel]=\"element.name\" name=\"name\" required>\r\n              <br>\r\n              <button type=\"submit\">Confirm</button>\r\n              <button cdkEditRevert>Revert</button>\r\n              <button cdkEditClose>Close</button>\r\n            </form>\r\n          </div>\r\n        </ng-template>\r\n\r\n        <span *cdkRowHoverContent>\r\n          <button cdkEditOpen>Edit</button>\r\n        </span>\r\n      </td>\r\n\r\n      <td [cdkPopoverEdit]=\"weightEdit\" [cdkPopoverEditContext]=\"element\">\r\n        {{element.weight}}\r\n\r\n        <span *cdkRowHoverContent>\r\n          <button cdkEditOpen>Edit</button>\r\n        </span>\r\n      </td>\r\n\r\n      <td> {{element.symbol}} </td>\r\n    </tr>\r\n  }\r\n</table>\r\n", styles: [".example-table {\r\n  width: 100%;\r\n}\r\n\r\n.example-table th {\r\n  text-align: left;\r\n}\r\n\r\n.example-table td,\r\n.example-table th {\r\n  min-width: 300px;\r\n  width: 25%;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: CdkPopoverEditModule }, { kind: "directive", type: i1.CdkPopoverEdit, selector: "[cdkPopoverEdit]:not([cdkPopoverEditTabOut])", inputs: ["cdkPopoverEdit", "cdkPopoverEditContext", "cdkPopoverEditColspan", "cdkPopoverEditDisabled"] }, { kind: "directive", type: i1.CdkRowHoverContent, selector: "[cdkRowHoverContent]" }, { kind: "directive", type: i1.CdkEditControl, selector: "form[cdkEditControl]", inputs: ["cdkEditControlClickOutBehavior", "cdkEditControlPreservedFormValue", "cdkEditControlIgnoreSubmitUnlessValid"], outputs: ["cdkEditControlPreservedFormValueChange"] }, { kind: "directive", type: i1.CdkEditRevert, selector: "button[cdkEditRevert]", inputs: ["type"] }, { kind: "directive", type: i1.CdkEditClose, selector: "[cdkEditClose]" }, { kind: "directive", type: i1.CdkEditable, selector: "table[editable], cdk-table[editable], mat-table[editable]" }, { kind: "directive", type: i1.CdkEditOpen, selector: "[cdkEditOpen]" }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i2.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NumberValueAccessor, selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i2.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: i2.NgForm, selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]", inputs: ["ngFormOptions"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: CdkPopoverEditVanillaTableExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-popover-edit-vanilla-table-example', standalone: true, imports: [CdkPopoverEditModule, FormsModule], template: "<table editable class=\"example-table\">\r\n  <!--\r\n    This edit lens is specified outside of the cell and must explicitly declare\r\n    its context. It could be reused in multiple cells.\r\n  -->\r\n  <ng-template #weightEdit let-element>\r\n    <div style=\"background-color: white; width: 100%\">\r\n      <form #f=\"ngForm\"\r\n          cdkEditControl\r\n          (ngSubmit)=\"onSubmitWeight(element, f)\"\r\n          [cdkEditControlPreservedFormValue]=\"preservedWeightValues.get(element)\"\r\n          (cdkEditControlPreservedFormValueChange)=\"preservedWeightValues.set(element, $event)\">\r\n        Edit b:\r\n        <input type=\"number\" [ngModel]=\"element.weight\" name=\"weight\" required>\r\n        <br>\r\n        <button type=\"submit\">Confirm</button>\r\n        <button cdkEditRevert>Revert</button>\r\n        <button cdkEditClose>Close</button>\r\n      </form>\r\n    </div>\r\n  </ng-template>\r\n\r\n  <tr>\r\n    <th> No. </th>\r\n    <th> Name </th>\r\n    <th> Weight </th>\r\n    <th> Symbol </th>\r\n  </tr>\r\n\r\n  @for (element of elements; track element) {\r\n    <tr>\r\n      <td> {{element.position}} </td>\r\n\r\n      <td [cdkPopoverEdit]=\"nameEdit\">\r\n        {{element.name}}\r\n\r\n        <!-- This edit is defined in the cell and can implicitly access element -->\r\n        <ng-template #nameEdit>\r\n          <div style=\"background-color: white; width: 100%\">\r\n            <form #f=\"ngForm\"\r\n                cdkEditControl\r\n                (ngSubmit)=\"onSubmitName(element, f)\"\r\n                [cdkEditControlPreservedFormValue]=\"preservedNameValues.get(element)\"\r\n                (cdkEditControlPreservedFormValueChange)=\"preservedNameValues.set(element, $event)\">\r\n              Edit a:\r\n              <input [ngModel]=\"element.name\" name=\"name\" required>\r\n              <br>\r\n              <button type=\"submit\">Confirm</button>\r\n              <button cdkEditRevert>Revert</button>\r\n              <button cdkEditClose>Close</button>\r\n            </form>\r\n          </div>\r\n        </ng-template>\r\n\r\n        <span *cdkRowHoverContent>\r\n          <button cdkEditOpen>Edit</button>\r\n        </span>\r\n      </td>\r\n\r\n      <td [cdkPopoverEdit]=\"weightEdit\" [cdkPopoverEditContext]=\"element\">\r\n        {{element.weight}}\r\n\r\n        <span *cdkRowHoverContent>\r\n          <button cdkEditOpen>Edit</button>\r\n        </span>\r\n      </td>\r\n\r\n      <td> {{element.symbol}} </td>\r\n    </tr>\r\n  }\r\n</table>\r\n", styles: [".example-table {\r\n  width: 100%;\r\n}\r\n\r\n.example-table th {\r\n  text-align: left;\r\n}\r\n\r\n.example-table td,\r\n.example-table th {\r\n  min-width: 300px;\r\n  width: 25%;\r\n}\r\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXBvcG92ZXItZWRpdC12YW5pbGxhLXRhYmxlLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGstZXhwZXJpbWVudGFsL3BvcG92ZXItZWRpdC9jZGstcG9wb3Zlci1lZGl0LXZhbmlsbGEtdGFibGUvY2RrLXBvcG92ZXItZWRpdC12YW5pbGxhLXRhYmxlLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGstZXhwZXJpbWVudGFsL3BvcG92ZXItZWRpdC9jZGstcG9wb3Zlci1lZGl0LXZhbmlsbGEtdGFibGUvY2RrLXBvcG92ZXItZWRpdC12YW5pbGxhLXRhYmxlLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBUyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRCxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSx3Q0FBd0MsQ0FBQzs7OztBQVM1RSxNQUFNLFlBQVksR0FBc0I7SUFDdEMsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDO0lBQzVELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQztJQUMzRCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUM7SUFDM0QsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDO0lBQzlELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQztJQUN6RCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUM7SUFDM0QsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDO0lBQzdELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQztJQUMzRCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUM7SUFDN0QsRUFBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDO0lBQzNELEVBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQztJQUM3RCxFQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUM7SUFDL0QsRUFBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDO0lBQy9ELEVBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQztJQUM5RCxFQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUM7SUFDaEUsRUFBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDO0lBQzNELEVBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQztJQUM5RCxFQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUM7SUFDM0QsRUFBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDO0lBQy9ELEVBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQztDQUM5RCxDQUFDO0FBRUY7O0dBRUc7QUFRSCxNQUFNLE9BQU8saUNBQWlDO0lBUDlDO1FBUVcsd0JBQW1CLEdBQUcsSUFBSSxPQUFPLEVBQXdCLENBQUM7UUFDMUQsMEJBQXFCLEdBQUcsSUFBSSxPQUFPLEVBQXdCLENBQUM7UUFFNUQsYUFBUSxHQUFHLFlBQVksQ0FBQztLQWlCbEM7SUFmQyxZQUFZLENBQUMsT0FBd0IsRUFBRSxDQUFTO1FBQzlDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFO1lBQ1osT0FBTztTQUNSO1FBRUQsT0FBTyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztJQUM5QixDQUFDO0lBRUQsY0FBYyxDQUFDLE9BQXdCLEVBQUUsQ0FBUztRQUNoRCxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRTtZQUNaLE9BQU87U0FDUjtRQUVELE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7SUFDbEMsQ0FBQzs4R0FwQlUsaUNBQWlDO2tHQUFqQyxpQ0FBaUMsa0dDNUM5QyxrL0VBdUVBLHlQRDdCWSxvQkFBb0IsZzdCQUFFLFdBQVc7OzJGQUVoQyxpQ0FBaUM7a0JBUDdDLFNBQVM7K0JBQ0Usd0NBQXdDLGNBR3RDLElBQUksV0FDUCxDQUFDLG9CQUFvQixFQUFFLFdBQVcsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtOZ0Zvcm0sIEZvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7Q2RrUG9wb3ZlckVkaXRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Nkay1leHBlcmltZW50YWwvcG9wb3Zlci1lZGl0JztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUGVyaW9kaWNFbGVtZW50IHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgcG9zaXRpb246IG51bWJlcjtcclxuICB3ZWlnaHQ6IG51bWJlcjtcclxuICBzeW1ib2w6IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgRUxFTUVOVF9EQVRBOiBQZXJpb2RpY0VsZW1lbnRbXSA9IFtcclxuICB7cG9zaXRpb246IDEsIG5hbWU6ICdIeWRyb2dlbicsIHdlaWdodDogMS4wMDc5LCBzeW1ib2w6ICdIJ30sXHJcbiAge3Bvc2l0aW9uOiAyLCBuYW1lOiAnSGVsaXVtJywgd2VpZ2h0OiA0LjAwMjYsIHN5bWJvbDogJ0hlJ30sXHJcbiAge3Bvc2l0aW9uOiAzLCBuYW1lOiAnTGl0aGl1bScsIHdlaWdodDogNi45NDEsIHN5bWJvbDogJ0xpJ30sXHJcbiAge3Bvc2l0aW9uOiA0LCBuYW1lOiAnQmVyeWxsaXVtJywgd2VpZ2h0OiA5LjAxMjIsIHN5bWJvbDogJ0JlJ30sXHJcbiAge3Bvc2l0aW9uOiA1LCBuYW1lOiAnQm9yb24nLCB3ZWlnaHQ6IDEwLjgxMSwgc3ltYm9sOiAnQid9LFxyXG4gIHtwb3NpdGlvbjogNiwgbmFtZTogJ0NhcmJvbicsIHdlaWdodDogMTIuMDEwNywgc3ltYm9sOiAnQyd9LFxyXG4gIHtwb3NpdGlvbjogNywgbmFtZTogJ05pdHJvZ2VuJywgd2VpZ2h0OiAxNC4wMDY3LCBzeW1ib2w6ICdOJ30sXHJcbiAge3Bvc2l0aW9uOiA4LCBuYW1lOiAnT3h5Z2VuJywgd2VpZ2h0OiAxNS45OTk0LCBzeW1ib2w6ICdPJ30sXHJcbiAge3Bvc2l0aW9uOiA5LCBuYW1lOiAnRmx1b3JpbmUnLCB3ZWlnaHQ6IDE4Ljk5ODQsIHN5bWJvbDogJ0YnfSxcclxuICB7cG9zaXRpb246IDEwLCBuYW1lOiAnTmVvbicsIHdlaWdodDogMjAuMTc5Nywgc3ltYm9sOiAnTmUnfSxcclxuICB7cG9zaXRpb246IDExLCBuYW1lOiAnU29kaXVtJywgd2VpZ2h0OiAyMi45ODk3LCBzeW1ib2w6ICdOYSd9LFxyXG4gIHtwb3NpdGlvbjogMTIsIG5hbWU6ICdNYWduZXNpdW0nLCB3ZWlnaHQ6IDI0LjMwNSwgc3ltYm9sOiAnTWcnfSxcclxuICB7cG9zaXRpb246IDEzLCBuYW1lOiAnQWx1bWludW0nLCB3ZWlnaHQ6IDI2Ljk4MTUsIHN5bWJvbDogJ0FsJ30sXHJcbiAge3Bvc2l0aW9uOiAxNCwgbmFtZTogJ1NpbGljb24nLCB3ZWlnaHQ6IDI4LjA4NTUsIHN5bWJvbDogJ1NpJ30sXHJcbiAge3Bvc2l0aW9uOiAxNSwgbmFtZTogJ1Bob3NwaG9ydXMnLCB3ZWlnaHQ6IDMwLjk3MzgsIHN5bWJvbDogJ1AnfSxcclxuICB7cG9zaXRpb246IDE2LCBuYW1lOiAnU3VsZnVyJywgd2VpZ2h0OiAzMi4wNjUsIHN5bWJvbDogJ1MnfSxcclxuICB7cG9zaXRpb246IDE3LCBuYW1lOiAnQ2hsb3JpbmUnLCB3ZWlnaHQ6IDM1LjQ1Mywgc3ltYm9sOiAnQ2wnfSxcclxuICB7cG9zaXRpb246IDE4LCBuYW1lOiAnQXJnb24nLCB3ZWlnaHQ6IDM5Ljk0OCwgc3ltYm9sOiAnQXInfSxcclxuICB7cG9zaXRpb246IDE5LCBuYW1lOiAnUG90YXNzaXVtJywgd2VpZ2h0OiAzOS4wOTgzLCBzeW1ib2w6ICdLJ30sXHJcbiAge3Bvc2l0aW9uOiAyMCwgbmFtZTogJ0NhbGNpdW0nLCB3ZWlnaHQ6IDQwLjA3OCwgc3ltYm9sOiAnQ2EnfSxcclxuXTtcclxuXHJcbi8qKlxyXG4gKiBAdGl0bGUgQ0RLIFBvcG92ZXIgRWRpdCBvbiBhbiBIVE1MIGRhdGEtdGFibGVcclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY2RrLXBvcG92ZXItZWRpdC12YW5pbGxhLXRhYmxlLWV4YW1wbGUnLFxyXG4gIHN0eWxlVXJsczogWydjZGstcG9wb3Zlci1lZGl0LXZhbmlsbGEtdGFibGUtZXhhbXBsZS5jc3MnXSxcclxuICB0ZW1wbGF0ZVVybDogJ2Nkay1wb3BvdmVyLWVkaXQtdmFuaWxsYS10YWJsZS1leGFtcGxlLmh0bWwnLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgaW1wb3J0czogW0Nka1BvcG92ZXJFZGl0TW9kdWxlLCBGb3Jtc01vZHVsZV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDZGtQb3BvdmVyRWRpdFZhbmlsbGFUYWJsZUV4YW1wbGUge1xyXG4gIHJlYWRvbmx5IHByZXNlcnZlZE5hbWVWYWx1ZXMgPSBuZXcgV2Vha01hcDxQZXJpb2RpY0VsZW1lbnQsIGFueT4oKTtcclxuICByZWFkb25seSBwcmVzZXJ2ZWRXZWlnaHRWYWx1ZXMgPSBuZXcgV2Vha01hcDxQZXJpb2RpY0VsZW1lbnQsIGFueT4oKTtcclxuXHJcbiAgcmVhZG9ubHkgZWxlbWVudHMgPSBFTEVNRU5UX0RBVEE7XHJcblxyXG4gIG9uU3VibWl0TmFtZShlbGVtZW50OiBQZXJpb2RpY0VsZW1lbnQsIGY6IE5nRm9ybSkge1xyXG4gICAgaWYgKCFmLnZhbGlkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBlbGVtZW50Lm5hbWUgPSBmLnZhbHVlLm5hbWU7XHJcbiAgfVxyXG5cclxuICBvblN1Ym1pdFdlaWdodChlbGVtZW50OiBQZXJpb2RpY0VsZW1lbnQsIGY6IE5nRm9ybSkge1xyXG4gICAgaWYgKCFmLnZhbGlkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBlbGVtZW50LndlaWdodCA9IGYudmFsdWUud2VpZ2h0O1xyXG4gIH1cclxufVxyXG4iLCI8dGFibGUgZWRpdGFibGUgY2xhc3M9XCJleGFtcGxlLXRhYmxlXCI+XHJcbiAgPCEtLVxyXG4gICAgVGhpcyBlZGl0IGxlbnMgaXMgc3BlY2lmaWVkIG91dHNpZGUgb2YgdGhlIGNlbGwgYW5kIG11c3QgZXhwbGljaXRseSBkZWNsYXJlXHJcbiAgICBpdHMgY29udGV4dC4gSXQgY291bGQgYmUgcmV1c2VkIGluIG11bHRpcGxlIGNlbGxzLlxyXG4gIC0tPlxyXG4gIDxuZy10ZW1wbGF0ZSAjd2VpZ2h0RWRpdCBsZXQtZWxlbWVudD5cclxuICAgIDxkaXYgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgd2lkdGg6IDEwMCVcIj5cclxuICAgICAgPGZvcm0gI2Y9XCJuZ0Zvcm1cIlxyXG4gICAgICAgICAgY2RrRWRpdENvbnRyb2xcclxuICAgICAgICAgIChuZ1N1Ym1pdCk9XCJvblN1Ym1pdFdlaWdodChlbGVtZW50LCBmKVwiXHJcbiAgICAgICAgICBbY2RrRWRpdENvbnRyb2xQcmVzZXJ2ZWRGb3JtVmFsdWVdPVwicHJlc2VydmVkV2VpZ2h0VmFsdWVzLmdldChlbGVtZW50KVwiXHJcbiAgICAgICAgICAoY2RrRWRpdENvbnRyb2xQcmVzZXJ2ZWRGb3JtVmFsdWVDaGFuZ2UpPVwicHJlc2VydmVkV2VpZ2h0VmFsdWVzLnNldChlbGVtZW50LCAkZXZlbnQpXCI+XHJcbiAgICAgICAgRWRpdCBiOlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgW25nTW9kZWxdPVwiZWxlbWVudC53ZWlnaHRcIiBuYW1lPVwid2VpZ2h0XCIgcmVxdWlyZWQ+XHJcbiAgICAgICAgPGJyPlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkNvbmZpcm08L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIGNka0VkaXRSZXZlcnQ+UmV2ZXJ0PC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBjZGtFZGl0Q2xvc2U+Q2xvc2U8L2J1dHRvbj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9uZy10ZW1wbGF0ZT5cclxuXHJcbiAgPHRyPlxyXG4gICAgPHRoPiBOby4gPC90aD5cclxuICAgIDx0aD4gTmFtZSA8L3RoPlxyXG4gICAgPHRoPiBXZWlnaHQgPC90aD5cclxuICAgIDx0aD4gU3ltYm9sIDwvdGg+XHJcbiAgPC90cj5cclxuXHJcbiAgQGZvciAoZWxlbWVudCBvZiBlbGVtZW50czsgdHJhY2sgZWxlbWVudCkge1xyXG4gICAgPHRyPlxyXG4gICAgICA8dGQ+IHt7ZWxlbWVudC5wb3NpdGlvbn19IDwvdGQ+XHJcblxyXG4gICAgICA8dGQgW2Nka1BvcG92ZXJFZGl0XT1cIm5hbWVFZGl0XCI+XHJcbiAgICAgICAge3tlbGVtZW50Lm5hbWV9fVxyXG5cclxuICAgICAgICA8IS0tIFRoaXMgZWRpdCBpcyBkZWZpbmVkIGluIHRoZSBjZWxsIGFuZCBjYW4gaW1wbGljaXRseSBhY2Nlc3MgZWxlbWVudCAtLT5cclxuICAgICAgICA8bmctdGVtcGxhdGUgI25hbWVFZGl0PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IHdoaXRlOyB3aWR0aDogMTAwJVwiPlxyXG4gICAgICAgICAgICA8Zm9ybSAjZj1cIm5nRm9ybVwiXHJcbiAgICAgICAgICAgICAgICBjZGtFZGl0Q29udHJvbFxyXG4gICAgICAgICAgICAgICAgKG5nU3VibWl0KT1cIm9uU3VibWl0TmFtZShlbGVtZW50LCBmKVwiXHJcbiAgICAgICAgICAgICAgICBbY2RrRWRpdENvbnRyb2xQcmVzZXJ2ZWRGb3JtVmFsdWVdPVwicHJlc2VydmVkTmFtZVZhbHVlcy5nZXQoZWxlbWVudClcIlxyXG4gICAgICAgICAgICAgICAgKGNka0VkaXRDb250cm9sUHJlc2VydmVkRm9ybVZhbHVlQ2hhbmdlKT1cInByZXNlcnZlZE5hbWVWYWx1ZXMuc2V0KGVsZW1lbnQsICRldmVudClcIj5cclxuICAgICAgICAgICAgICBFZGl0IGE6XHJcbiAgICAgICAgICAgICAgPGlucHV0IFtuZ01vZGVsXT1cImVsZW1lbnQubmFtZVwiIG5hbWU9XCJuYW1lXCIgcmVxdWlyZWQ+XHJcbiAgICAgICAgICAgICAgPGJyPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkNvbmZpcm08L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNka0VkaXRSZXZlcnQ+UmV2ZXJ0PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjZGtFZGl0Q2xvc2U+Q2xvc2U8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuXHJcbiAgICAgICAgPHNwYW4gKmNka1Jvd0hvdmVyQ29udGVudD5cclxuICAgICAgICAgIDxidXR0b24gY2RrRWRpdE9wZW4+RWRpdDwvYnV0dG9uPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgPC90ZD5cclxuXHJcbiAgICAgIDx0ZCBbY2RrUG9wb3ZlckVkaXRdPVwid2VpZ2h0RWRpdFwiIFtjZGtQb3BvdmVyRWRpdENvbnRleHRdPVwiZWxlbWVudFwiPlxyXG4gICAgICAgIHt7ZWxlbWVudC53ZWlnaHR9fVxyXG5cclxuICAgICAgICA8c3BhbiAqY2RrUm93SG92ZXJDb250ZW50PlxyXG4gICAgICAgICAgPGJ1dHRvbiBjZGtFZGl0T3Blbj5FZGl0PC9idXR0b24+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICA8L3RkPlxyXG5cclxuICAgICAgPHRkPiB7e2VsZW1lbnQuc3ltYm9sfX0gPC90ZD5cclxuICAgIDwvdHI+XHJcbiAgfVxyXG48L3RhYmxlPlxyXG4iXX0=