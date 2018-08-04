import { NgModule } from '@angular/core';

import { ArbreGtaApplicationSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [ArbreGtaApplicationSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [ArbreGtaApplicationSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class ArbreGtaApplicationSharedCommonModule {}
