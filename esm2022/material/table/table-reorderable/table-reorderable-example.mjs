import { Component } from '@angular/core';
import { CdkDrag, CdkDropList, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatTableModule } from '@angular/material/table';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/table";
/**
 * @title Table with re-orderable columns
 */
export class TableReorderableExample {
    constructor() {
        this.columns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = ELEMENT_DATA;
    }
    drop(event) {
        moveItemInArray(this.columns, event.previousIndex, event.currentIndex);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TableReorderableExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: TableReorderableExample, isStandalone: true, selector: "table-reorderable-example", ngImport: i0, template: "<table mat-table\r\n       [dataSource]=\"dataSource\" \r\n       cdkDropList\r\n       cdkDropListOrientation=\"horizontal\"\r\n       (cdkDropListDropped)=\"drop($event)\">\r\n\r\n  <ng-container matColumnDef=\"position\">\r\n    <th mat-header-cell cdkDrag *matHeaderCellDef> No. </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"name\">\r\n    <th mat-header-cell cdkDrag *matHeaderCellDef> Name </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"weight\">\r\n    <th mat-header-cell cdkDrag *matHeaderCellDef> Weight </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"symbol\">\r\n    <th mat-header-cell cdkDrag *matHeaderCellDef> Symbol </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\r\n  </ng-container>\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"columns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: columns;\"></tr>\r\n</table>\r\n", styles: ["table {\r\n  width: 100%;\r\n}\r\n"], dependencies: [{ kind: "ngmodule", type: MatTableModule }, { kind: "component", type: i1.MatTable, selector: "mat-table, table[mat-table]", exportAs: ["matTable"] }, { kind: "directive", type: i1.MatHeaderCellDef, selector: "[matHeaderCellDef]" }, { kind: "directive", type: i1.MatHeaderRowDef, selector: "[matHeaderRowDef]", inputs: ["matHeaderRowDef", "matHeaderRowDefSticky"] }, { kind: "directive", type: i1.MatColumnDef, selector: "[matColumnDef]", inputs: ["sticky", "matColumnDef"] }, { kind: "directive", type: i1.MatCellDef, selector: "[matCellDef]" }, { kind: "directive", type: i1.MatRowDef, selector: "[matRowDef]", inputs: ["matRowDefColumns", "matRowDefWhen"] }, { kind: "directive", type: i1.MatHeaderCell, selector: "mat-header-cell, th[mat-header-cell]" }, { kind: "directive", type: i1.MatCell, selector: "mat-cell, td[mat-cell]" }, { kind: "component", type: i1.MatHeaderRow, selector: "mat-header-row, tr[mat-header-row]", exportAs: ["matHeaderRow"] }, { kind: "component", type: i1.MatRow, selector: "mat-row, tr[mat-row]", exportAs: ["matRow"] }, { kind: "directive", type: CdkDropList, selector: "[cdkDropList], cdk-drop-list", inputs: ["cdkDropListConnectedTo", "cdkDropListData", "cdkDropListOrientation", "id", "cdkDropListLockAxis", "cdkDropListDisabled", "cdkDropListSortingDisabled", "cdkDropListEnterPredicate", "cdkDropListSortPredicate", "cdkDropListAutoScrollDisabled", "cdkDropListAutoScrollStep"], outputs: ["cdkDropListDropped", "cdkDropListEntered", "cdkDropListExited", "cdkDropListSorted"], exportAs: ["cdkDropList"] }, { kind: "directive", type: CdkDrag, selector: "[cdkDrag]", inputs: ["cdkDragData", "cdkDragLockAxis", "cdkDragRootElement", "cdkDragBoundary", "cdkDragStartDelay", "cdkDragFreeDragPosition", "cdkDragDisabled", "cdkDragConstrainPosition", "cdkDragPreviewClass", "cdkDragPreviewContainer"], outputs: ["cdkDragStarted", "cdkDragReleased", "cdkDragEnded", "cdkDragEntered", "cdkDragExited", "cdkDragDropped", "cdkDragMoved"], exportAs: ["cdkDrag"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TableReorderableExample, decorators: [{
            type: Component,
            args: [{ selector: 'table-reorderable-example', standalone: true, imports: [MatTableModule, CdkDropList, CdkDrag], template: "<table mat-table\r\n       [dataSource]=\"dataSource\" \r\n       cdkDropList\r\n       cdkDropListOrientation=\"horizontal\"\r\n       (cdkDropListDropped)=\"drop($event)\">\r\n\r\n  <ng-container matColumnDef=\"position\">\r\n    <th mat-header-cell cdkDrag *matHeaderCellDef> No. </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"name\">\r\n    <th mat-header-cell cdkDrag *matHeaderCellDef> Name </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"weight\">\r\n    <th mat-header-cell cdkDrag *matHeaderCellDef> Weight </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"symbol\">\r\n    <th mat-header-cell cdkDrag *matHeaderCellDef> Symbol </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\r\n  </ng-container>\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"columns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: columns;\"></tr>\r\n</table>\r\n", styles: ["table {\r\n  width: 100%;\r\n}\r\n"] }]
        }] });
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
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtcmVvcmRlcmFibGUtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RhYmxlL3RhYmxlLXJlb3JkZXJhYmxlL3RhYmxlLXJlb3JkZXJhYmxlLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90YWJsZS90YWJsZS1yZW9yZGVyYWJsZS90YWJsZS1yZW9yZGVyYWJsZS1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQWMsT0FBTyxFQUFFLFdBQVcsRUFBRSxlQUFlLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUMxRixPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7OztBQUV2RDs7R0FFRztBQVFILE1BQU0sT0FBTyx1QkFBdUI7SUFQcEM7UUFRRSxZQUFPLEdBQWEsQ0FBQyxVQUFVLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUM3RCxlQUFVLEdBQUcsWUFBWSxDQUFDO0tBSzNCO0lBSEMsSUFBSSxDQUFDLEtBQTRCO1FBQy9CLGVBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3pFLENBQUM7OEdBTlUsdUJBQXVCO2tHQUF2Qix1QkFBdUIscUZDZHBDLG1vQ0E2QkEsMkZEakJZLGNBQWMsaWhDQUFFLFdBQVcsK2RBQUUsT0FBTzs7MkZBRW5DLHVCQUF1QjtrQkFQbkMsU0FBUzsrQkFDRSwyQkFBMkIsY0FHekIsSUFBSSxXQUNQLENBQUMsY0FBYyxFQUFFLFdBQVcsRUFBRSxPQUFPLENBQUM7O0FBa0JqRCxNQUFNLFlBQVksR0FBc0I7SUFDdEMsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDO0lBQzVELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQztJQUMzRCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUM7SUFDM0QsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDO0lBQzlELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQztJQUN6RCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUM7SUFDM0QsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDO0lBQzdELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQztJQUMzRCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUM7SUFDN0QsRUFBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDO0NBQzVELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Q2RrRHJhZ0Ryb3AsIENka0RyYWcsIENka0Ryb3BMaXN0LCBtb3ZlSXRlbUluQXJyYXl9IGZyb20gJ0Bhbmd1bGFyL2Nkay9kcmFnLWRyb3AnO1xyXG5pbXBvcnQge01hdFRhYmxlTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90YWJsZSc7XHJcblxyXG4vKipcclxuICogQHRpdGxlIFRhYmxlIHdpdGggcmUtb3JkZXJhYmxlIGNvbHVtbnNcclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAndGFibGUtcmVvcmRlcmFibGUtZXhhbXBsZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3RhYmxlLXJlb3JkZXJhYmxlLWV4YW1wbGUuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vdGFibGUtcmVvcmRlcmFibGUtZXhhbXBsZS5jc3MnXSxcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gIGltcG9ydHM6IFtNYXRUYWJsZU1vZHVsZSwgQ2RrRHJvcExpc3QsIENka0RyYWddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGFibGVSZW9yZGVyYWJsZUV4YW1wbGUge1xyXG4gIGNvbHVtbnM6IHN0cmluZ1tdID0gWydwb3NpdGlvbicsICduYW1lJywgJ3dlaWdodCcsICdzeW1ib2wnXTtcclxuICBkYXRhU291cmNlID0gRUxFTUVOVF9EQVRBO1xyXG5cclxuICBkcm9wKGV2ZW50OiBDZGtEcmFnRHJvcDxzdHJpbmdbXT4pIHtcclxuICAgIG1vdmVJdGVtSW5BcnJheSh0aGlzLmNvbHVtbnMsIGV2ZW50LnByZXZpb3VzSW5kZXgsIGV2ZW50LmN1cnJlbnRJbmRleCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBlcmlvZGljRWxlbWVudCB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIHBvc2l0aW9uOiBudW1iZXI7XHJcbiAgd2VpZ2h0OiBudW1iZXI7XHJcbiAgc3ltYm9sOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IEVMRU1FTlRfREFUQTogUGVyaW9kaWNFbGVtZW50W10gPSBbXHJcbiAge3Bvc2l0aW9uOiAxLCBuYW1lOiAnSHlkcm9nZW4nLCB3ZWlnaHQ6IDEuMDA3OSwgc3ltYm9sOiAnSCd9LFxyXG4gIHtwb3NpdGlvbjogMiwgbmFtZTogJ0hlbGl1bScsIHdlaWdodDogNC4wMDI2LCBzeW1ib2w6ICdIZSd9LFxyXG4gIHtwb3NpdGlvbjogMywgbmFtZTogJ0xpdGhpdW0nLCB3ZWlnaHQ6IDYuOTQxLCBzeW1ib2w6ICdMaSd9LFxyXG4gIHtwb3NpdGlvbjogNCwgbmFtZTogJ0JlcnlsbGl1bScsIHdlaWdodDogOS4wMTIyLCBzeW1ib2w6ICdCZSd9LFxyXG4gIHtwb3NpdGlvbjogNSwgbmFtZTogJ0Jvcm9uJywgd2VpZ2h0OiAxMC44MTEsIHN5bWJvbDogJ0InfSxcclxuICB7cG9zaXRpb246IDYsIG5hbWU6ICdDYXJib24nLCB3ZWlnaHQ6IDEyLjAxMDcsIHN5bWJvbDogJ0MnfSxcclxuICB7cG9zaXRpb246IDcsIG5hbWU6ICdOaXRyb2dlbicsIHdlaWdodDogMTQuMDA2Nywgc3ltYm9sOiAnTid9LFxyXG4gIHtwb3NpdGlvbjogOCwgbmFtZTogJ094eWdlbicsIHdlaWdodDogMTUuOTk5NCwgc3ltYm9sOiAnTyd9LFxyXG4gIHtwb3NpdGlvbjogOSwgbmFtZTogJ0ZsdW9yaW5lJywgd2VpZ2h0OiAxOC45OTg0LCBzeW1ib2w6ICdGJ30sXHJcbiAge3Bvc2l0aW9uOiAxMCwgbmFtZTogJ05lb24nLCB3ZWlnaHQ6IDIwLjE3OTcsIHN5bWJvbDogJ05lJ30sXHJcbl07XHJcbiIsIjx0YWJsZSBtYXQtdGFibGVcclxuICAgICAgIFtkYXRhU291cmNlXT1cImRhdGFTb3VyY2VcIiBcclxuICAgICAgIGNka0Ryb3BMaXN0XHJcbiAgICAgICBjZGtEcm9wTGlzdE9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiXHJcbiAgICAgICAoY2RrRHJvcExpc3REcm9wcGVkKT1cImRyb3AoJGV2ZW50KVwiPlxyXG5cclxuICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cInBvc2l0aW9uXCI+XHJcbiAgICA8dGggbWF0LWhlYWRlci1jZWxsIGNka0RyYWcgKm1hdEhlYWRlckNlbGxEZWY+IE5vLiA8L3RoPlxyXG4gICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnRcIj4ge3tlbGVtZW50LnBvc2l0aW9ufX0gPC90ZD5cclxuICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJuYW1lXCI+XHJcbiAgICA8dGggbWF0LWhlYWRlci1jZWxsIGNka0RyYWcgKm1hdEhlYWRlckNlbGxEZWY+IE5hbWUgPC90aD5cclxuICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50XCI+IHt7ZWxlbWVudC5uYW1lfX0gPC90ZD5cclxuICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJ3ZWlnaHRcIj5cclxuICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgY2RrRHJhZyAqbWF0SGVhZGVyQ2VsbERlZj4gV2VpZ2h0IDwvdGg+XHJcbiAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgZWxlbWVudFwiPiB7e2VsZW1lbnQud2VpZ2h0fX0gPC90ZD5cclxuICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJzeW1ib2xcIj5cclxuICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgY2RrRHJhZyAqbWF0SGVhZGVyQ2VsbERlZj4gU3ltYm9sIDwvdGg+XHJcbiAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgZWxlbWVudFwiPiB7e2VsZW1lbnQuc3ltYm9sfX0gPC90ZD5cclxuICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgPHRyIG1hdC1oZWFkZXItcm93ICptYXRIZWFkZXJSb3dEZWY9XCJjb2x1bW5zXCI+PC90cj5cclxuICA8dHIgbWF0LXJvdyAqbWF0Um93RGVmPVwibGV0IHJvdzsgY29sdW1uczogY29sdW1ucztcIj48L3RyPlxyXG48L3RhYmxlPlxyXG4iXX0=