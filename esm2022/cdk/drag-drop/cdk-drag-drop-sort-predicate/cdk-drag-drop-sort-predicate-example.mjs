import { Component } from '@angular/core';
import { moveItemInArray, CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';
import * as i0 from "@angular/core";
/**
 * @title Drag&Drop sort predicate
 */
export class CdkDragDropSortPredicateExample {
    constructor() {
        this.numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    }
    drop(event) {
        moveItemInArray(this.numbers, event.previousIndex, event.currentIndex);
    }
    /**
     * Predicate function that only allows even numbers to be
     * sorted into even indices and odd numbers at odd indices.
     */
    sortPredicate(index, item) {
        return (index + 1) % 2 === item.data % 2;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: CdkDragDropSortPredicateExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.4", type: CdkDragDropSortPredicateExample, isStandalone: true, selector: "cdk-drag-drop-sort-predicate-example", ngImport: i0, template: "<div\r\n  cdkDropList\r\n  class=\"example-list\"\r\n  (cdkDropListDropped)=\"drop($event)\"\r\n  [cdkDropListSortPredicate]=\"sortPredicate\">\r\n  @for (number of numbers; track number) {\r\n    <div\r\n      class=\"example-box\"\r\n      [cdkDragData]=\"number\"\r\n      cdkDrag>{{number}}</div>\r\n  }\r\n</div>\r\n", styles: [".example-list {\r\n  border: solid 1px #ccc;\r\n  min-height: 60px;\r\n  background: white;\r\n  border-radius: 4px;\r\n  overflow: hidden;\r\n  display: block;\r\n  width: 400px;\r\n  max-width: 100%;\r\n}\r\n\r\n.example-box {\r\n  padding: 20px 10px;\r\n  border-bottom: solid 1px #ccc;\r\n  color: rgba(0, 0, 0, 0.87);\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  box-sizing: border-box;\r\n  cursor: move;\r\n  background: white;\r\n  font-size: 14px;\r\n}\r\n\r\n.cdk-drag-preview {\r\n  box-sizing: border-box;\r\n  border-radius: 4px;\r\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\r\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\r\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\r\n}\r\n\r\n.cdk-drag-placeholder {\r\n  opacity: 0;\r\n}\r\n\r\n.cdk-drag-animating {\r\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n}\r\n\r\n.example-box:last-child {\r\n  border: none;\r\n}\r\n\r\n.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\r\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n}\r\n"], dependencies: [{ kind: "directive", type: CdkDropList, selector: "[cdkDropList], cdk-drop-list", inputs: ["cdkDropListConnectedTo", "cdkDropListData", "cdkDropListOrientation", "id", "cdkDropListLockAxis", "cdkDropListDisabled", "cdkDropListSortingDisabled", "cdkDropListEnterPredicate", "cdkDropListSortPredicate", "cdkDropListAutoScrollDisabled", "cdkDropListAutoScrollStep"], outputs: ["cdkDropListDropped", "cdkDropListEntered", "cdkDropListExited", "cdkDropListSorted"], exportAs: ["cdkDropList"] }, { kind: "directive", type: CdkDrag, selector: "[cdkDrag]", inputs: ["cdkDragData", "cdkDragLockAxis", "cdkDragRootElement", "cdkDragBoundary", "cdkDragStartDelay", "cdkDragFreeDragPosition", "cdkDragDisabled", "cdkDragConstrainPosition", "cdkDragPreviewClass", "cdkDragPreviewContainer"], outputs: ["cdkDragStarted", "cdkDragReleased", "cdkDragEnded", "cdkDragEntered", "cdkDragExited", "cdkDragDropped", "cdkDragMoved"], exportAs: ["cdkDrag"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: CdkDragDropSortPredicateExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-drag-drop-sort-predicate-example', standalone: true, imports: [CdkDropList, CdkDrag], template: "<div\r\n  cdkDropList\r\n  class=\"example-list\"\r\n  (cdkDropListDropped)=\"drop($event)\"\r\n  [cdkDropListSortPredicate]=\"sortPredicate\">\r\n  @for (number of numbers; track number) {\r\n    <div\r\n      class=\"example-box\"\r\n      [cdkDragData]=\"number\"\r\n      cdkDrag>{{number}}</div>\r\n  }\r\n</div>\r\n", styles: [".example-list {\r\n  border: solid 1px #ccc;\r\n  min-height: 60px;\r\n  background: white;\r\n  border-radius: 4px;\r\n  overflow: hidden;\r\n  display: block;\r\n  width: 400px;\r\n  max-width: 100%;\r\n}\r\n\r\n.example-box {\r\n  padding: 20px 10px;\r\n  border-bottom: solid 1px #ccc;\r\n  color: rgba(0, 0, 0, 0.87);\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  box-sizing: border-box;\r\n  cursor: move;\r\n  background: white;\r\n  font-size: 14px;\r\n}\r\n\r\n.cdk-drag-preview {\r\n  box-sizing: border-box;\r\n  border-radius: 4px;\r\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\r\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\r\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\r\n}\r\n\r\n.cdk-drag-placeholder {\r\n  opacity: 0;\r\n}\r\n\r\n.cdk-drag-animating {\r\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n}\r\n\r\n.example-box:last-child {\r\n  border: none;\r\n}\r\n\r\n.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\r\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n}\r\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRyYWctZHJvcC1zb3J0LXByZWRpY2F0ZS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrL2RyYWctZHJvcC9jZGstZHJhZy1kcm9wLXNvcnQtcHJlZGljYXRlL2Nkay1kcmFnLWRyb3Atc29ydC1wcmVkaWNhdGUtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9kcmFnLWRyb3AvY2RrLWRyYWctZHJvcC1zb3J0LXByZWRpY2F0ZS9jZGstZHJhZy1kcm9wLXNvcnQtcHJlZGljYXRlLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBYyxlQUFlLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBQyxNQUFNLHdCQUF3QixDQUFDOztBQUUxRjs7R0FFRztBQVFILE1BQU0sT0FBTywrQkFBK0I7SUFQNUM7UUFRRSxZQUFPLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FhcEM7SUFYQyxJQUFJLENBQUMsS0FBMkI7UUFDOUIsZUFBZSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDekUsQ0FBQztJQUVEOzs7T0FHRztJQUNILGFBQWEsQ0FBQyxLQUFhLEVBQUUsSUFBcUI7UUFDaEQsT0FBTyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7SUFDM0MsQ0FBQzs4R0FiVSwrQkFBK0I7a0dBQS9CLCtCQUErQixnR0NiNUMsbVVBWUEseXFDRERZLFdBQVcsK2RBQUUsT0FBTzs7MkZBRW5CLCtCQUErQjtrQkFQM0MsU0FBUzsrQkFDRSxzQ0FBc0MsY0FHcEMsSUFBSSxXQUNQLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtDZGtEcmFnRHJvcCwgbW92ZUl0ZW1JbkFycmF5LCBDZGtEcmFnLCBDZGtEcm9wTGlzdH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2RyYWctZHJvcCc7XHJcblxyXG4vKipcclxuICogQHRpdGxlIERyYWcmRHJvcCBzb3J0IHByZWRpY2F0ZVxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjZGstZHJhZy1kcm9wLXNvcnQtcHJlZGljYXRlLWV4YW1wbGUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnY2RrLWRyYWctZHJvcC1zb3J0LXByZWRpY2F0ZS1leGFtcGxlLmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWydjZGstZHJhZy1kcm9wLXNvcnQtcHJlZGljYXRlLWV4YW1wbGUuY3NzJ10sXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBpbXBvcnRzOiBbQ2RrRHJvcExpc3QsIENka0RyYWddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2RrRHJhZ0Ryb3BTb3J0UHJlZGljYXRlRXhhbXBsZSB7XHJcbiAgbnVtYmVycyA9IFsxLCAyLCAzLCA0LCA1LCA2LCA3LCA4XTtcclxuXHJcbiAgZHJvcChldmVudDogQ2RrRHJhZ0Ryb3A8dW5rbm93bj4pIHtcclxuICAgIG1vdmVJdGVtSW5BcnJheSh0aGlzLm51bWJlcnMsIGV2ZW50LnByZXZpb3VzSW5kZXgsIGV2ZW50LmN1cnJlbnRJbmRleCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBQcmVkaWNhdGUgZnVuY3Rpb24gdGhhdCBvbmx5IGFsbG93cyBldmVuIG51bWJlcnMgdG8gYmVcclxuICAgKiBzb3J0ZWQgaW50byBldmVuIGluZGljZXMgYW5kIG9kZCBudW1iZXJzIGF0IG9kZCBpbmRpY2VzLlxyXG4gICAqL1xyXG4gIHNvcnRQcmVkaWNhdGUoaW5kZXg6IG51bWJlciwgaXRlbTogQ2RrRHJhZzxudW1iZXI+KSB7XHJcbiAgICByZXR1cm4gKGluZGV4ICsgMSkgJSAyID09PSBpdGVtLmRhdGEgJSAyO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2XHJcbiAgY2RrRHJvcExpc3RcclxuICBjbGFzcz1cImV4YW1wbGUtbGlzdFwiXHJcbiAgKGNka0Ryb3BMaXN0RHJvcHBlZCk9XCJkcm9wKCRldmVudClcIlxyXG4gIFtjZGtEcm9wTGlzdFNvcnRQcmVkaWNhdGVdPVwic29ydFByZWRpY2F0ZVwiPlxyXG4gIEBmb3IgKG51bWJlciBvZiBudW1iZXJzOyB0cmFjayBudW1iZXIpIHtcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3M9XCJleGFtcGxlLWJveFwiXHJcbiAgICAgIFtjZGtEcmFnRGF0YV09XCJudW1iZXJcIlxyXG4gICAgICBjZGtEcmFnPnt7bnVtYmVyfX08L2Rpdj5cclxuICB9XHJcbjwvZGl2PlxyXG4iXX0=