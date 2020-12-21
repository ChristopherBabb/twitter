import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TwitterMentionsComponent } from './twitter-mentions/twitter-mentions.component';
import { TweetComponent } from './tweet/tweet.component';
import { TwitterTimelineComponent } from './twitter-timeline/twitter-timeline.component';


const routes: Routes = [
  {
    path: 'twitter_timeline',
    component: TwitterTimelineComponent
  },
  {
    path: 'twitter_mentions',
    component: TwitterMentionsComponent
  },

  {
    path: 'tweets',
    component: TweetComponent
  },

  { path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
