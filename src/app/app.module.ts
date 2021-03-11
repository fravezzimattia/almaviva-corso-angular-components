import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroPageComponent } from './hero-page/hero-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { HeroListComponent } from './hero-page/hero-list/hero-list.component';
import { HeroItemComponent } from './hero-page/hero-list/hero-item/hero-item.component';

@NgModule({
	declarations: [
		AppComponent,
		HeroPageComponent,
		HeroListComponent,
		HeroItemComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		FormsModule,
		MatInputModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
