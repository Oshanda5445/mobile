import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { EditprofPage } from '../pages/editprof/editprof';
import { RatePage } from '../pages/rate/rate';
import { MyticketsPage } from '../pages/mytickets/mytickets';
import { HelpPage } from '../pages/help/help';

@Component({
  templateUrl: 'app.html',
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = EditprofPage;

  pages: Array<{ icon: string, title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { icon: 'cart', title: 'My Tickets', component: MyticketsPage },
      { icon: 'person', title: 'Edit Profile', component: EditprofPage },
      { icon: 'star-half', title: 'Rate Us', component: RatePage },
      { icon: 'help-circle', title: 'Help', component: HelpPage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
