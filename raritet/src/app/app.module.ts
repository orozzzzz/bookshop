import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BasketComponent } from './basket/basket.component';
import { HttpClientModule } from '@angular/common/http';
import { MainpageComponent } from './mainpage/mainpage.component';
import { HttpService } from './shared/http.service';
import { AboutComponent } from './about/about.component';
import { CatalogComponent } from './catalog/catalog.component';
const routes = [
	{ path: '', component: MainpageComponent },
	{ path: 'basket', component: BasketComponent },
	{ path: 'catalog', component: CatalogComponent },
	{ path: 'about', component: AboutComponent }]
@NgModule({
	declarations: [
		AppComponent,
		BasketComponent,
		CatalogComponent,
		MainpageComponent,
		AboutComponent
		// HimalayaComponent,
		// DivageComponent,
		// LorealComponent,
		// OldspiceComponent,
		// AxeComponent,
		// ManComponent,
		// WomanComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		RouterModule.forRoot(routes),
		FormsModule
	],
	providers: [HttpService],
	bootstrap: [AppComponent]
})
export class AppModule { }
