import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './home.component';

import {BtsService} from './bts.service';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        RouterModule,
        NgbModule,
        HttpClientModule
    ],
    declarations: [ HomeComponent ],
    exports:[ HomeComponent ],
    providers: [BtsService, DatePipe],
})
export class HomeModule { }
