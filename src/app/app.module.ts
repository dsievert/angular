import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BreweryListComponent } from './brewery-list/brewery-list.component';
import BreweryService from './shared/api/brewery.service';
import { FilterByNamePipe } from './shared/pipes/filter-by-name.pipe';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: '', redirectTo: '/brewery-list', pathMatch: 'full' },
  {
    path: 'brewery-list',
    component: BreweryListComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    BreweryListComponent,
    FilterByNamePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    RouterModule.forRoot(appRoutes)    
  ],
  providers: [BreweryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
