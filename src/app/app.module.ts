import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from './shared/shared.module';
import { NavbarComponent } from './components/header/components/navbar/navbar.component';
import { SidebarComponent } from './components/header/components/sidebar/sidebar.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, NavbarComponent, SidebarComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
