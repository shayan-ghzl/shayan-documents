/**
 ******************************************************************************
 * DO NOT MANUALLY EDIT THIS FILE. THIS FILE IS AUTOMATICALLY GENERATED.
 ******************************************************************************
 */
export const EXAMPLE_COMPONENTS = {
    "file-input-error-state-matcher": {
        "packagePath": "material/file-input/file-input-error-state-matcher",
        "title": "File Input with a custom ErrorStateMatcher",
        "componentName": "FileInputErrorStateMatcherExample",
        "files": [
            "file-input-error-state-matcher-example.ts",
            "./file-input-error-state-matcher-example.html",
            "./file-input-error-state-matcher-example.css"
        ],
        "selector": "file-input-error-state-matcher-example",
        "additionalComponents": [],
        "primaryFile": "file-input-error-state-matcher-example.ts",
        "importPath": "material/file-input"
    },
    "file-input-overview": {
        "packagePath": "material/file-input/file-input-overview",
        "title": "Basic File Input",
        "componentName": "FileInputOverviewExample",
        "files": [
            "file-input-overview-example.ts",
            "file-input-overview-example.html",
            "file-input-overview-example.css"
        ],
        "selector": "file-input-overview-example",
        "additionalComponents": [],
        "primaryFile": "file-input-overview-example.ts",
        "importPath": "material/file-input"
    }
};
export async function loadExample(id) {
    switch (id) {
        case 'file-input-error-state-matcher':
            return import('@angular/ng-gorilla-documents/material/file-input');
        case 'file-input-overview':
            return import('@angular/ng-gorilla-documents/material/file-input');
        default:
            return undefined;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZS1tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbmctZ29yaWxsYS1kb2N1bWVudHMvZXhhbXBsZS1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQXFCSCxNQUFNLENBQUMsTUFBTSxrQkFBa0IsR0FBZ0M7SUFDN0QsZ0NBQWdDLEVBQUU7UUFDaEMsYUFBYSxFQUFFLG9EQUFvRDtRQUNuRSxPQUFPLEVBQUUsNENBQTRDO1FBQ3JELGVBQWUsRUFBRSxtQ0FBbUM7UUFDcEQsT0FBTyxFQUFFO1lBQ1AsMkNBQTJDO1lBQzNDLCtDQUErQztZQUMvQyw4Q0FBOEM7U0FDL0M7UUFDRCxVQUFVLEVBQUUsd0NBQXdDO1FBQ3BELHNCQUFzQixFQUFFLEVBQUU7UUFDMUIsYUFBYSxFQUFFLDJDQUEyQztRQUMxRCxZQUFZLEVBQUUscUJBQXFCO0tBQ3BDO0lBQ0QscUJBQXFCLEVBQUU7UUFDckIsYUFBYSxFQUFFLHlDQUF5QztRQUN4RCxPQUFPLEVBQUUsa0JBQWtCO1FBQzNCLGVBQWUsRUFBRSwwQkFBMEI7UUFDM0MsT0FBTyxFQUFFO1lBQ1AsZ0NBQWdDO1lBQ2hDLGtDQUFrQztZQUNsQyxpQ0FBaUM7U0FDbEM7UUFDRCxVQUFVLEVBQUUsNkJBQTZCO1FBQ3pDLHNCQUFzQixFQUFFLEVBQUU7UUFDMUIsYUFBYSxFQUFFLGdDQUFnQztRQUMvQyxZQUFZLEVBQUUscUJBQXFCO0tBQ3BDO0NBQ0YsQ0FBQztBQUNGLE1BQU0sQ0FBQyxLQUFLLFVBQVUsV0FBVyxDQUFDLEVBQVU7SUFDMUMsUUFBUSxFQUFFLEVBQUU7UUFDWixLQUFLLGdDQUFnQztZQUN2QyxPQUFPLE1BQU0sQ0FBQyxtREFBbUQsQ0FBQyxDQUFDO1FBQ2pFLEtBQUsscUJBQXFCO1lBQzVCLE9BQU8sTUFBTSxDQUFDLG1EQUFtRCxDQUFDLENBQUM7UUFDL0Q7WUFDSixPQUFPLFNBQVMsQ0FBQztLQUNkO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqIERPIE5PVCBNQU5VQUxMWSBFRElUIFRISVMgRklMRS4gVEhJUyBGSUxFIElTIEFVVE9NQVRJQ0FMTFkgR0VORVJBVEVELlxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqL1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBMaXZlRXhhbXBsZSB7XHJcbiAgLyoqIFRpdGxlIG9mIHRoZSBleGFtcGxlLiAqL1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgLyoqIE5hbWUgb2YgdGhlIGV4YW1wbGUgY29tcG9uZW50LiAqL1xyXG4gIGNvbXBvbmVudE5hbWU6IHN0cmluZztcclxuICAvKiogU2VsZWN0b3IgdG8gbWF0Y2ggdGhlIGNvbXBvbmVudCBvZiB0aGlzIGV4YW1wbGUuICovXHJcbiAgc2VsZWN0b3I6IHN0cmluZztcclxuICAvKiogTmFtZSBvZiB0aGUgcHJpbWFyeSBmaWxlIG9mIHRoaXMgZXhhbXBsZS4gKi9cclxuICBwcmltYXJ5RmlsZTogc3RyaW5nO1xyXG4gIC8qKiBMaXN0IG9mIGZpbGVzIHdoaWNoIGFyZSBwYXJ0IG9mIHRoZSBleGFtcGxlLiAqL1xyXG4gIGZpbGVzOiBzdHJpbmdbXTtcclxuICAvKiogUGF0aCB0byB0aGUgZGlyZWN0b3J5IGNvbnRhaW5pbmcgdGhlIGV4YW1wbGUuICovXHJcbiAgcGFja2FnZVBhdGg6IHN0cmluZztcclxuICAvKiogTGlzdCBvZiBhZGRpdGlvbmFsIGNvbXBvbmVudHMgd2hpY2ggYXJlIHBhcnQgb2YgdGhlIGV4YW1wbGUuICovXHJcbiAgYWRkaXRpb25hbENvbXBvbmVudHM6IHN0cmluZ1tdO1xyXG4gIC8qKiBQYXRoIGZyb20gd2hpY2ggdG8gaW1wb3J0IHRoZSB4YW1wbGUuICovXHJcbiAgaW1wb3J0UGF0aDogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRVhBTVBMRV9DT01QT05FTlRTOiB7W2lkOiBzdHJpbmddOiBMaXZlRXhhbXBsZX0gPSB7XG4gIFwiZmlsZS1pbnB1dC1lcnJvci1zdGF0ZS1tYXRjaGVyXCI6IHtcbiAgICBcInBhY2thZ2VQYXRoXCI6IFwibWF0ZXJpYWwvZmlsZS1pbnB1dC9maWxlLWlucHV0LWVycm9yLXN0YXRlLW1hdGNoZXJcIixcbiAgICBcInRpdGxlXCI6IFwiRmlsZSBJbnB1dCB3aXRoIGEgY3VzdG9tIEVycm9yU3RhdGVNYXRjaGVyXCIsXG4gICAgXCJjb21wb25lbnROYW1lXCI6IFwiRmlsZUlucHV0RXJyb3JTdGF0ZU1hdGNoZXJFeGFtcGxlXCIsXG4gICAgXCJmaWxlc1wiOiBbXG4gICAgICBcImZpbGUtaW5wdXQtZXJyb3Itc3RhdGUtbWF0Y2hlci1leGFtcGxlLnRzXCIsXG4gICAgICBcIi4vZmlsZS1pbnB1dC1lcnJvci1zdGF0ZS1tYXRjaGVyLWV4YW1wbGUuaHRtbFwiLFxuICAgICAgXCIuL2ZpbGUtaW5wdXQtZXJyb3Itc3RhdGUtbWF0Y2hlci1leGFtcGxlLmNzc1wiXG4gICAgXSxcbiAgICBcInNlbGVjdG9yXCI6IFwiZmlsZS1pbnB1dC1lcnJvci1zdGF0ZS1tYXRjaGVyLWV4YW1wbGVcIixcbiAgICBcImFkZGl0aW9uYWxDb21wb25lbnRzXCI6IFtdLFxuICAgIFwicHJpbWFyeUZpbGVcIjogXCJmaWxlLWlucHV0LWVycm9yLXN0YXRlLW1hdGNoZXItZXhhbXBsZS50c1wiLFxuICAgIFwiaW1wb3J0UGF0aFwiOiBcIm1hdGVyaWFsL2ZpbGUtaW5wdXRcIlxuICB9LFxuICBcImZpbGUtaW5wdXQtb3ZlcnZpZXdcIjoge1xuICAgIFwicGFja2FnZVBhdGhcIjogXCJtYXRlcmlhbC9maWxlLWlucHV0L2ZpbGUtaW5wdXQtb3ZlcnZpZXdcIixcbiAgICBcInRpdGxlXCI6IFwiQmFzaWMgRmlsZSBJbnB1dFwiLFxuICAgIFwiY29tcG9uZW50TmFtZVwiOiBcIkZpbGVJbnB1dE92ZXJ2aWV3RXhhbXBsZVwiLFxuICAgIFwiZmlsZXNcIjogW1xuICAgICAgXCJmaWxlLWlucHV0LW92ZXJ2aWV3LWV4YW1wbGUudHNcIixcbiAgICAgIFwiZmlsZS1pbnB1dC1vdmVydmlldy1leGFtcGxlLmh0bWxcIixcbiAgICAgIFwiZmlsZS1pbnB1dC1vdmVydmlldy1leGFtcGxlLmNzc1wiXG4gICAgXSxcbiAgICBcInNlbGVjdG9yXCI6IFwiZmlsZS1pbnB1dC1vdmVydmlldy1leGFtcGxlXCIsXG4gICAgXCJhZGRpdGlvbmFsQ29tcG9uZW50c1wiOiBbXSxcbiAgICBcInByaW1hcnlGaWxlXCI6IFwiZmlsZS1pbnB1dC1vdmVydmlldy1leGFtcGxlLnRzXCIsXG4gICAgXCJpbXBvcnRQYXRoXCI6IFwibWF0ZXJpYWwvZmlsZS1pbnB1dFwiXG4gIH1cbn07XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkRXhhbXBsZShpZDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgc3dpdGNoIChpZCkge1xuICBjYXNlICdmaWxlLWlucHV0LWVycm9yLXN0YXRlLW1hdGNoZXInOlxucmV0dXJuIGltcG9ydCgnQGFuZ3VsYXIvbmctZ29yaWxsYS1kb2N1bWVudHMvbWF0ZXJpYWwvZmlsZS1pbnB1dCcpO1xuICBjYXNlICdmaWxlLWlucHV0LW92ZXJ2aWV3JzpcbnJldHVybiBpbXBvcnQoJ0Bhbmd1bGFyL25nLWdvcmlsbGEtZG9jdW1lbnRzL21hdGVyaWFsL2ZpbGUtaW5wdXQnKTtcbiAgICBkZWZhdWx0OlxucmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxufSJdfQ==