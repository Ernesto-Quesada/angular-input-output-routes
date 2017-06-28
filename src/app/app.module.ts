import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { ContactlistComponent } from './contactlist/contactlist.component';
import { MyhomeComponent } from './myhome/myhome.component';
import { QuotelistComponent } from './quotelist/quotelist.component';
import { MyaboutComponent } from './myabout/myabout.component';
import { ContactComponent } from './contact/contact.component';
import { CountersComponent } from './counters/counters.component';
import { ChucknorrisComponent } from './chucknorris/chucknorris.component';
import { QuoteItemComponent } from './quote-item/quote-item.component';

import {  CounterService} from './counter.service'
import {CharactersService} from './characters.service';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { MySecondCounterComponent } from './my-second-counter/my-second-counter.component';

const routes: Routes = [

{ path: 'quotes', component: QuotelistComponent},

// http://localhost:4200/home
{path: 'home', component: MyhomeComponent},

// http://localhost:4200/about
{path: 'about' , component: MyaboutComponent},

// http://localhost:4200 same as
// http://localhost:4200/home
{path: '' , redirectTo:   'home', pathMatch:  'full'},

{path:  'contacts' , component: ContactlistComponent },

// http://localhost:4200/contact/3
{path:  'contact/:id' , component: ContactComponent },

{path:  'counters' , component: CountersComponent },
{path:  'chuck' , component: ChucknorrisComponent },
];




@NgModule({
  declarations: [
    AppComponent,
    ContactlistComponent,
    MyhomeComponent,
    QuotelistComponent,
    MyaboutComponent,
    ContactComponent,
    CountersComponent,
    ChucknorrisComponent,
    QuoteItemComponent,
    MyCounterComponent,
    MySecondCounterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
     HttpModule,
     RouterModule.forRoot(routes)

  ],
  providers: [CharactersService, CounterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
