import { Component } from '@angular/core';
import { CdkDrag, CdkDropList, CdkDropListGroup, moveItemInArray, transferArrayItem, } from '@angular/cdk/drag-drop';
import * as i0 from "@angular/core";
/**
 * @title Drag&Drop disabled sorting
 */
export class CdkDragDropDisabledSortingExample {
    constructor() {
        this.items = ['Carrots', 'Tomatoes', 'Onions', 'Apples', 'Avocados'];
        this.basket = ['Oranges', 'Bananas', 'Cucumbers'];
    }
    drop(event) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: CdkDragDropDisabledSortingExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.4", type: CdkDragDropDisabledSortingExample, isStandalone: true, selector: "cdk-drag-drop-disabled-sorting-example", ngImport: i0, template: "<div cdkDropListGroup>\r\n  <div class=\"example-container\">\r\n    <h2>Available items</h2>\r\n\r\n    <div\r\n      cdkDropList\r\n      [cdkDropListData]=\"items\"\r\n      class=\"example-list\"\r\n      cdkDropListSortingDisabled\r\n      (cdkDropListDropped)=\"drop($event)\">\r\n      @for (item of items; track item) {\r\n        <div class=\"example-box\" cdkDrag>{{item}}</div>\r\n      }\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"example-container\">\r\n    <h2>Shopping basket</h2>\r\n\r\n    <div\r\n      cdkDropList\r\n      [cdkDropListData]=\"basket\"\r\n      class=\"example-list\"\r\n      (cdkDropListDropped)=\"drop($event)\">\r\n      @for (item of basket; track item) {\r\n        <div class=\"example-box\" cdkDrag>{{item}}</div>\r\n      }\r\n    </div>\r\n  </div>\r\n</div>\r\n", styles: [".example-container {\r\n  width: 400px;\r\n  max-width: 100%;\r\n  margin: 0 25px 25px 0;\r\n  display: inline-block;\r\n  vertical-align: top;\r\n}\r\n\r\n.example-list {\r\n  border: solid 1px #ccc;\r\n  min-height: 60px;\r\n  background: white;\r\n  border-radius: 4px;\r\n  overflow: hidden;\r\n  display: block;\r\n}\r\n\r\n.example-box {\r\n  padding: 20px 10px;\r\n  border-bottom: solid 1px #ccc;\r\n  color: rgba(0, 0, 0, 0.87);\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  box-sizing: border-box;\r\n  cursor: move;\r\n  background: white;\r\n  font-size: 14px;\r\n}\r\n\r\n.cdk-drag-preview {\r\n  box-sizing: border-box;\r\n  border-radius: 4px;\r\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\r\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\r\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\r\n}\r\n\r\n.cdk-drag-placeholder {\r\n  opacity: 0;\r\n}\r\n\r\n.cdk-drag-animating {\r\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n}\r\n\r\n.example-box:last-child {\r\n  border: none;\r\n}\r\n\r\n.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\r\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n}\r\n"], dependencies: [{ kind: "directive", type: CdkDropListGroup, selector: "[cdkDropListGroup]", inputs: ["cdkDropListGroupDisabled"], exportAs: ["cdkDropListGroup"] }, { kind: "directive", type: CdkDropList, selector: "[cdkDropList], cdk-drop-list", inputs: ["cdkDropListConnectedTo", "cdkDropListData", "cdkDropListOrientation", "id", "cdkDropListLockAxis", "cdkDropListDisabled", "cdkDropListSortingDisabled", "cdkDropListEnterPredicate", "cdkDropListSortPredicate", "cdkDropListAutoScrollDisabled", "cdkDropListAutoScrollStep"], outputs: ["cdkDropListDropped", "cdkDropListEntered", "cdkDropListExited", "cdkDropListSorted"], exportAs: ["cdkDropList"] }, { kind: "directive", type: CdkDrag, selector: "[cdkDrag]", inputs: ["cdkDragData", "cdkDragLockAxis", "cdkDragRootElement", "cdkDragBoundary", "cdkDragStartDelay", "cdkDragFreeDragPosition", "cdkDragDisabled", "cdkDragConstrainPosition", "cdkDragPreviewClass", "cdkDragPreviewContainer"], outputs: ["cdkDragStarted", "cdkDragReleased", "cdkDragEnded", "cdkDragEntered", "cdkDragExited", "cdkDragDropped", "cdkDragMoved"], exportAs: ["cdkDrag"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: CdkDragDropDisabledSortingExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-drag-drop-disabled-sorting-example', standalone: true, imports: [CdkDropListGroup, CdkDropList, CdkDrag], template: "<div cdkDropListGroup>\r\n  <div class=\"example-container\">\r\n    <h2>Available items</h2>\r\n\r\n    <div\r\n      cdkDropList\r\n      [cdkDropListData]=\"items\"\r\n      class=\"example-list\"\r\n      cdkDropListSortingDisabled\r\n      (cdkDropListDropped)=\"drop($event)\">\r\n      @for (item of items; track item) {\r\n        <div class=\"example-box\" cdkDrag>{{item}}</div>\r\n      }\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"example-container\">\r\n    <h2>Shopping basket</h2>\r\n\r\n    <div\r\n      cdkDropList\r\n      [cdkDropListData]=\"basket\"\r\n      class=\"example-list\"\r\n      (cdkDropListDropped)=\"drop($event)\">\r\n      @for (item of basket; track item) {\r\n        <div class=\"example-box\" cdkDrag>{{item}}</div>\r\n      }\r\n    </div>\r\n  </div>\r\n</div>\r\n", styles: [".example-container {\r\n  width: 400px;\r\n  max-width: 100%;\r\n  margin: 0 25px 25px 0;\r\n  display: inline-block;\r\n  vertical-align: top;\r\n}\r\n\r\n.example-list {\r\n  border: solid 1px #ccc;\r\n  min-height: 60px;\r\n  background: white;\r\n  border-radius: 4px;\r\n  overflow: hidden;\r\n  display: block;\r\n}\r\n\r\n.example-box {\r\n  padding: 20px 10px;\r\n  border-bottom: solid 1px #ccc;\r\n  color: rgba(0, 0, 0, 0.87);\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  box-sizing: border-box;\r\n  cursor: move;\r\n  background: white;\r\n  font-size: 14px;\r\n}\r\n\r\n.cdk-drag-preview {\r\n  box-sizing: border-box;\r\n  border-radius: 4px;\r\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\r\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\r\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\r\n}\r\n\r\n.cdk-drag-placeholder {\r\n  opacity: 0;\r\n}\r\n\r\n.cdk-drag-animating {\r\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n}\r\n\r\n.example-box:last-child {\r\n  border: none;\r\n}\r\n\r\n.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\r\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n}\r\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRyYWctZHJvcC1kaXNhYmxlZC1zb3J0aW5nLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvZHJhZy1kcm9wL2Nkay1kcmFnLWRyb3AtZGlzYWJsZWQtc29ydGluZy9jZGstZHJhZy1kcm9wLWRpc2FibGVkLXNvcnRpbmctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9kcmFnLWRyb3AvY2RrLWRyYWctZHJvcC1kaXNhYmxlZC1zb3J0aW5nL2Nkay1kcmFnLWRyb3AtZGlzYWJsZWQtc29ydGluZy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQ0wsT0FBTyxFQUVQLFdBQVcsRUFDWCxnQkFBZ0IsRUFDaEIsZUFBZSxFQUNmLGlCQUFpQixHQUNsQixNQUFNLHdCQUF3QixDQUFDOztBQUVoQzs7R0FFRztBQVFILE1BQU0sT0FBTyxpQ0FBaUM7SUFQOUM7UUFRRSxVQUFLLEdBQUcsQ0FBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFFaEUsV0FBTSxHQUFHLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxXQUFXLENBQUMsQ0FBQztLQWM5QztJQVpDLElBQUksQ0FBQyxLQUE0QjtRQUMvQixJQUFJLEtBQUssQ0FBQyxpQkFBaUIsS0FBSyxLQUFLLENBQUMsU0FBUyxFQUFFO1lBQy9DLGVBQWUsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNoRjthQUFNO1lBQ0wsaUJBQWlCLENBQ2YsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFDNUIsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQ3BCLEtBQUssQ0FBQyxhQUFhLEVBQ25CLEtBQUssQ0FBQyxZQUFZLENBQ25CLENBQUM7U0FDSDtJQUNILENBQUM7OEdBaEJVLGlDQUFpQztrR0FBakMsaUNBQWlDLGtHQ3BCOUMsOHlCQThCQSw0eENEWlksZ0JBQWdCLHFJQUFFLFdBQVcsK2RBQUUsT0FBTzs7MkZBRXJDLGlDQUFpQztrQkFQN0MsU0FBUzsrQkFDRSx3Q0FBd0MsY0FHdEMsSUFBSSxXQUNQLENBQUMsZ0JBQWdCLEVBQUUsV0FBVyxFQUFFLE9BQU8sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtcclxuICBDZGtEcmFnLFxyXG4gIENka0RyYWdEcm9wLFxyXG4gIENka0Ryb3BMaXN0LFxyXG4gIENka0Ryb3BMaXN0R3JvdXAsXHJcbiAgbW92ZUl0ZW1JbkFycmF5LFxyXG4gIHRyYW5zZmVyQXJyYXlJdGVtLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2Nkay9kcmFnLWRyb3AnO1xyXG5cclxuLyoqXHJcbiAqIEB0aXRsZSBEcmFnJkRyb3AgZGlzYWJsZWQgc29ydGluZ1xyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjZGstZHJhZy1kcm9wLWRpc2FibGVkLXNvcnRpbmctZXhhbXBsZScsXHJcbiAgdGVtcGxhdGVVcmw6ICdjZGstZHJhZy1kcm9wLWRpc2FibGVkLXNvcnRpbmctZXhhbXBsZS5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnY2RrLWRyYWctZHJvcC1kaXNhYmxlZC1zb3J0aW5nLWV4YW1wbGUuY3NzJ10sXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBpbXBvcnRzOiBbQ2RrRHJvcExpc3RHcm91cCwgQ2RrRHJvcExpc3QsIENka0RyYWddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2RrRHJhZ0Ryb3BEaXNhYmxlZFNvcnRpbmdFeGFtcGxlIHtcclxuICBpdGVtcyA9IFsnQ2Fycm90cycsICdUb21hdG9lcycsICdPbmlvbnMnLCAnQXBwbGVzJywgJ0F2b2NhZG9zJ107XHJcblxyXG4gIGJhc2tldCA9IFsnT3JhbmdlcycsICdCYW5hbmFzJywgJ0N1Y3VtYmVycyddO1xyXG5cclxuICBkcm9wKGV2ZW50OiBDZGtEcmFnRHJvcDxzdHJpbmdbXT4pIHtcclxuICAgIGlmIChldmVudC5wcmV2aW91c0NvbnRhaW5lciA9PT0gZXZlbnQuY29udGFpbmVyKSB7XHJcbiAgICAgIG1vdmVJdGVtSW5BcnJheShldmVudC5jb250YWluZXIuZGF0YSwgZXZlbnQucHJldmlvdXNJbmRleCwgZXZlbnQuY3VycmVudEluZGV4KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRyYW5zZmVyQXJyYXlJdGVtKFxyXG4gICAgICAgIGV2ZW50LnByZXZpb3VzQ29udGFpbmVyLmRhdGEsXHJcbiAgICAgICAgZXZlbnQuY29udGFpbmVyLmRhdGEsXHJcbiAgICAgICAgZXZlbnQucHJldmlvdXNJbmRleCxcclxuICAgICAgICBldmVudC5jdXJyZW50SW5kZXgsXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgY2RrRHJvcExpc3RHcm91cD5cclxuICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1jb250YWluZXJcIj5cclxuICAgIDxoMj5BdmFpbGFibGUgaXRlbXM8L2gyPlxyXG5cclxuICAgIDxkaXZcclxuICAgICAgY2RrRHJvcExpc3RcclxuICAgICAgW2Nka0Ryb3BMaXN0RGF0YV09XCJpdGVtc1wiXHJcbiAgICAgIGNsYXNzPVwiZXhhbXBsZS1saXN0XCJcclxuICAgICAgY2RrRHJvcExpc3RTb3J0aW5nRGlzYWJsZWRcclxuICAgICAgKGNka0Ryb3BMaXN0RHJvcHBlZCk9XCJkcm9wKCRldmVudClcIj5cclxuICAgICAgQGZvciAoaXRlbSBvZiBpdGVtczsgdHJhY2sgaXRlbSkge1xyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlLWJveFwiIGNka0RyYWc+e3tpdGVtfX08L2Rpdj5cclxuICAgICAgfVxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcblxyXG4gIDxkaXYgY2xhc3M9XCJleGFtcGxlLWNvbnRhaW5lclwiPlxyXG4gICAgPGgyPlNob3BwaW5nIGJhc2tldDwvaDI+XHJcblxyXG4gICAgPGRpdlxyXG4gICAgICBjZGtEcm9wTGlzdFxyXG4gICAgICBbY2RrRHJvcExpc3REYXRhXT1cImJhc2tldFwiXHJcbiAgICAgIGNsYXNzPVwiZXhhbXBsZS1saXN0XCJcclxuICAgICAgKGNka0Ryb3BMaXN0RHJvcHBlZCk9XCJkcm9wKCRldmVudClcIj5cclxuICAgICAgQGZvciAoaXRlbSBvZiBiYXNrZXQ7IHRyYWNrIGl0ZW0pIHtcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1ib3hcIiBjZGtEcmFnPnt7aXRlbX19PC9kaXY+XHJcbiAgICAgIH1cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuIl19