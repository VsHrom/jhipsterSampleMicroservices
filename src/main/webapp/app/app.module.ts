import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ng2-webstorage';

import { JhipsterSampleMicroservicesSharedModule, UserRouteAccessService } from './shared';
import { JhipsterSampleMicroservicesAppRoutingModule} from './app-routing.module';
import { JhipsterSampleMicroservicesHomeModule } from './home/home.module';
import { JhipsterSampleMicroservicesAdminModule } from './admin/admin.module';
import { JhipsterSampleMicroservicesAccountModule } from './account/account.module';
import { JhipsterSampleMicroservicesEntityModule } from './entities/entity.module';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ActiveMenuDirective,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        JhipsterSampleMicroservicesAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        JhipsterSampleMicroservicesSharedModule,
        JhipsterSampleMicroservicesHomeModule,
        JhipsterSampleMicroservicesAdminModule,
        JhipsterSampleMicroservicesAccountModule,
        JhipsterSampleMicroservicesEntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        ActiveMenuDirective,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class JhipsterSampleMicroservicesAppModule {}
