import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatePipePipe } from './date-pipe.pipe';
import { UserComponent } from './user/user.component';
import { SearchUserComponent } from './search-user/search-user.component';
import { RepoComponent } from './repo/repo.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserSeviceService } from './user-sevice.service';

@NgModule({
  declarations: [
    AppComponent,
    DatePipePipe,
    UserComponent,
    SearchUserComponent,
    RepoComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [ UserSeviceService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
