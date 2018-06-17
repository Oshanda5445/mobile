import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { EditprofPage } from '../pages/editprof/editprof';
import { RatePage } from '../pages/rate/rate';
import { EditpswPage} from '../pages/editpsw/editpsw';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MyticketsPage } from '../pages/mytickets/mytickets';
import { HelpPage } from '../pages/help/help';

@NgModule({
  declarations: [
    MyApp,
    EditprofPage,
    HelpPage,
    EditpswPage,
    MyticketsPage,
    RatePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    EditprofPage,
    MyticketsPage,
    HelpPage,
    EditpswPage,
    RatePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
