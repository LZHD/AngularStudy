import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from "@angular/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
// 第三方
import {AgGridModule} from "ag-grid-angular";
import {SidebarModule} from 'ng-sidebar';
import {SuiModule} from "ng2-semantic-ui";
import {RouterModule} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";
import {GridBaseModule} from "./grid-base/grid-base.module";
import {ToastModule} from "./toast/toast.module";
import {HttpClientModule} from "@angular/common/http";

/**
 * 公共模块
 */
@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		RouterModule,
		HttpModule,
		HttpClientModule
	],
	declarations: [],
	providers: [],
	entryComponents: [],
	exports: [
		BrowserModule,
		BrowserAnimationsModule,
		CommonModule,
		FormsModule,
		RouterModule,
		ReactiveFormsModule,
		SuiModule,
		SidebarModule,
		AgGridModule,
		GridBaseModule,
		ToastModule
	]
})
export class SharedModule {
}
