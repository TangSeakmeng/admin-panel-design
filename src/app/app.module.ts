import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftsideNavbarComponent } from './shared/components/leftside-navbar/leftside-navbar.component';
import { RightsideSummarizedStatComponent } from './shared/components/rightside-summarized-stat/rightside-summarized-stat.component';
import { MainLayoutComponent } from './shared/layouts/main-layout/main-layout.component';
import { SummarizedStatLayoutComponent } from './shared/layouts/summarized-stat-layout/summarized-stat-layout.component';
import { RootLayoutComponent } from './shared/layouts/root-layout/root-layout.component';
import { HeaderNavbarComponent } from './shared/components/header-navbar/header-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftsideNavbarComponent,
    RightsideSummarizedStatComponent,
    MainLayoutComponent,
    SummarizedStatLayoutComponent,
    RootLayoutComponent,
    HeaderNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
