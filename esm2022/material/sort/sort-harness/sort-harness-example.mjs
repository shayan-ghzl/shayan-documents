import { Component } from '@angular/core';
import { MatSortModule } from '@angular/material/sort';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/sort";
/**
 * @title Testing with MatSortHarness
 */
export class SortHarnessExample {
    constructor() {
        this.disableThirdHeader = false;
        this.desserts = [
            { name: 'Frozen yogurt', calories: 159, fat: 6, carbs: 24, protein: 4 },
            { name: 'Ice cream sandwich', calories: 237, fat: 9, carbs: 37, protein: 4 },
            { name: 'Eclair', calories: 262, fat: 16, carbs: 24, protein: 6 },
            { name: 'Cupcake', calories: 305, fat: 4, carbs: 67, protein: 4 },
            { name: 'Gingerbread', calories: 356, fat: 16, carbs: 49, protein: 4 },
        ];
        this.sortedData = this.desserts.slice();
    }
    sortData(sort) {
        const data = this.desserts.slice();
        if (!sort.active || sort.direction === '') {
            this.sortedData = data;
        }
        else {
            this.sortedData = data.sort((a, b) => {
                const aValue = a[sort.active];
                const bValue = b[sort.active];
                return (aValue < bValue ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
            });
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: SortHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.4", type: SortHarnessExample, isStandalone: true, selector: "sort-harness-example", ngImport: i0, template: "<table matSort (matSortChange)=\"sortData($event)\">\r\n  <tr>\r\n    <th mat-sort-header=\"name\">Dessert</th>\r\n    <th mat-sort-header=\"calories\">Calories</th>\r\n    <th mat-sort-header=\"fat\" [disabled]=\"disableThirdHeader\">Fat</th>\r\n    <th mat-sort-header=\"carbs\">Carbs</th>\r\n    <th mat-sort-header=\"protein\">Protein</th>\r\n  </tr>\r\n\r\n  @for (dessert of sortedData; track dessert) {\r\n    <tr>\r\n      <td>{{dessert.name}}</td>\r\n      <td>{{dessert.calories}}</td>\r\n      <td>{{dessert.fat}}</td>\r\n      <td>{{dessert.carbs}}</td>\r\n      <td>{{dessert.protein}}</td>\r\n    </tr>\r\n  }\r\n</table>\r\n", dependencies: [{ kind: "ngmodule", type: MatSortModule }, { kind: "directive", type: i1.MatSort, selector: "[matSort]", inputs: ["matSortActive", "matSortStart", "matSortDirection", "matSortDisableClear", "matSortDisabled"], outputs: ["matSortChange"], exportAs: ["matSort"] }, { kind: "component", type: i1.MatSortHeader, selector: "[mat-sort-header]", inputs: ["mat-sort-header", "arrowPosition", "start", "disabled", "sortActionDescription", "disableClear"], exportAs: ["matSortHeader"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: SortHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'sort-harness-example', standalone: true, imports: [MatSortModule], template: "<table matSort (matSortChange)=\"sortData($event)\">\r\n  <tr>\r\n    <th mat-sort-header=\"name\">Dessert</th>\r\n    <th mat-sort-header=\"calories\">Calories</th>\r\n    <th mat-sort-header=\"fat\" [disabled]=\"disableThirdHeader\">Fat</th>\r\n    <th mat-sort-header=\"carbs\">Carbs</th>\r\n    <th mat-sort-header=\"protein\">Protein</th>\r\n  </tr>\r\n\r\n  @for (dessert of sortedData; track dessert) {\r\n    <tr>\r\n      <td>{{dessert.name}}</td>\r\n      <td>{{dessert.calories}}</td>\r\n      <td>{{dessert.fat}}</td>\r\n      <td>{{dessert.carbs}}</td>\r\n      <td>{{dessert.protein}}</td>\r\n    </tr>\r\n  }\r\n</table>\r\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydC1oYXJuZXNzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zb3J0L3NvcnQtaGFybmVzcy9zb3J0LWhhcm5lc3MtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NvcnQvc29ydC1oYXJuZXNzL3NvcnQtaGFybmVzcy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQU8sYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7OztBQUUzRDs7R0FFRztBQU9ILE1BQU0sT0FBTyxrQkFBa0I7SUFOL0I7UUFPRSx1QkFBa0IsR0FBRyxLQUFLLENBQUM7UUFDM0IsYUFBUSxHQUFHO1lBQ1QsRUFBQyxJQUFJLEVBQUUsZUFBZSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUM7WUFDckUsRUFBQyxJQUFJLEVBQUUsb0JBQW9CLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBQztZQUMxRSxFQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBQztZQUMvRCxFQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBQztZQUMvRCxFQUFDLElBQUksRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBQztTQUNyRSxDQUFDO1FBRUYsZUFBVSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7S0FlcEM7SUFiQyxRQUFRLENBQUMsSUFBVTtRQUNqQixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRW5DLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssRUFBRSxFQUFFO1lBQ3pDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1NBQ3hCO2FBQU07WUFDTCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ25DLE1BQU0sTUFBTSxHQUFJLENBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3ZDLE1BQU0sTUFBTSxHQUFJLENBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3ZDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFFLENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOzhHQXhCVSxrQkFBa0I7a0dBQWxCLGtCQUFrQixnRkNaL0IsaW9CQW1CQSwyQ0RUWSxhQUFhOzsyRkFFWixrQkFBa0I7a0JBTjlCLFNBQVM7K0JBQ0Usc0JBQXNCLGNBRXBCLElBQUksV0FDUCxDQUFDLGFBQWEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtTb3J0LCBNYXRTb3J0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zb3J0JztcclxuXHJcbi8qKlxyXG4gKiBAdGl0bGUgVGVzdGluZyB3aXRoIE1hdFNvcnRIYXJuZXNzXHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3NvcnQtaGFybmVzcy1leGFtcGxlJyxcclxuICB0ZW1wbGF0ZVVybDogJ3NvcnQtaGFybmVzcy1leGFtcGxlLmh0bWwnLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgaW1wb3J0czogW01hdFNvcnRNb2R1bGVdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU29ydEhhcm5lc3NFeGFtcGxlIHtcclxuICBkaXNhYmxlVGhpcmRIZWFkZXIgPSBmYWxzZTtcclxuICBkZXNzZXJ0cyA9IFtcclxuICAgIHtuYW1lOiAnRnJvemVuIHlvZ3VydCcsIGNhbG9yaWVzOiAxNTksIGZhdDogNiwgY2FyYnM6IDI0LCBwcm90ZWluOiA0fSxcclxuICAgIHtuYW1lOiAnSWNlIGNyZWFtIHNhbmR3aWNoJywgY2Fsb3JpZXM6IDIzNywgZmF0OiA5LCBjYXJiczogMzcsIHByb3RlaW46IDR9LFxyXG4gICAge25hbWU6ICdFY2xhaXInLCBjYWxvcmllczogMjYyLCBmYXQ6IDE2LCBjYXJiczogMjQsIHByb3RlaW46IDZ9LFxyXG4gICAge25hbWU6ICdDdXBjYWtlJywgY2Fsb3JpZXM6IDMwNSwgZmF0OiA0LCBjYXJiczogNjcsIHByb3RlaW46IDR9LFxyXG4gICAge25hbWU6ICdHaW5nZXJicmVhZCcsIGNhbG9yaWVzOiAzNTYsIGZhdDogMTYsIGNhcmJzOiA0OSwgcHJvdGVpbjogNH0sXHJcbiAgXTtcclxuXHJcbiAgc29ydGVkRGF0YSA9IHRoaXMuZGVzc2VydHMuc2xpY2UoKTtcclxuXHJcbiAgc29ydERhdGEoc29ydDogU29ydCkge1xyXG4gICAgY29uc3QgZGF0YSA9IHRoaXMuZGVzc2VydHMuc2xpY2UoKTtcclxuXHJcbiAgICBpZiAoIXNvcnQuYWN0aXZlIHx8IHNvcnQuZGlyZWN0aW9uID09PSAnJykge1xyXG4gICAgICB0aGlzLnNvcnRlZERhdGEgPSBkYXRhO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zb3J0ZWREYXRhID0gZGF0YS5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYVZhbHVlID0gKGEgYXMgYW55KVtzb3J0LmFjdGl2ZV07XHJcbiAgICAgICAgY29uc3QgYlZhbHVlID0gKGIgYXMgYW55KVtzb3J0LmFjdGl2ZV07XHJcbiAgICAgICAgcmV0dXJuIChhVmFsdWUgPCBiVmFsdWUgPyAtMSA6IDEpICogKHNvcnQuZGlyZWN0aW9uID09PSAnYXNjJyA/IDEgOiAtMSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI8dGFibGUgbWF0U29ydCAobWF0U29ydENoYW5nZSk9XCJzb3J0RGF0YSgkZXZlbnQpXCI+XHJcbiAgPHRyPlxyXG4gICAgPHRoIG1hdC1zb3J0LWhlYWRlcj1cIm5hbWVcIj5EZXNzZXJ0PC90aD5cclxuICAgIDx0aCBtYXQtc29ydC1oZWFkZXI9XCJjYWxvcmllc1wiPkNhbG9yaWVzPC90aD5cclxuICAgIDx0aCBtYXQtc29ydC1oZWFkZXI9XCJmYXRcIiBbZGlzYWJsZWRdPVwiZGlzYWJsZVRoaXJkSGVhZGVyXCI+RmF0PC90aD5cclxuICAgIDx0aCBtYXQtc29ydC1oZWFkZXI9XCJjYXJic1wiPkNhcmJzPC90aD5cclxuICAgIDx0aCBtYXQtc29ydC1oZWFkZXI9XCJwcm90ZWluXCI+UHJvdGVpbjwvdGg+XHJcbiAgPC90cj5cclxuXHJcbiAgQGZvciAoZGVzc2VydCBvZiBzb3J0ZWREYXRhOyB0cmFjayBkZXNzZXJ0KSB7XHJcbiAgICA8dHI+XHJcbiAgICAgIDx0ZD57e2Rlc3NlcnQubmFtZX19PC90ZD5cclxuICAgICAgPHRkPnt7ZGVzc2VydC5jYWxvcmllc319PC90ZD5cclxuICAgICAgPHRkPnt7ZGVzc2VydC5mYXR9fTwvdGQ+XHJcbiAgICAgIDx0ZD57e2Rlc3NlcnQuY2FyYnN9fTwvdGQ+XHJcbiAgICAgIDx0ZD57e2Rlc3NlcnQucHJvdGVpbn19PC90ZD5cclxuICAgIDwvdHI+XHJcbiAgfVxyXG48L3RhYmxlPlxyXG4iXX0=