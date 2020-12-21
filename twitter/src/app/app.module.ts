import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TwitterTimelineComponent } from './twitter-timeline/twitter-timeline.component';
import { TwitterMentionsComponent } from './twitter-mentions/twitter-mentions.component';
import { TweetComponent } from './tweet/tweet.component';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent,
    TwitterTimelineComponent,
    TwitterMentionsComponent,
    TweetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
