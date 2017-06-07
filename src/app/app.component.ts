import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import {CustomersPage} from "../pages/customers/customers";
import {TemplatesPage} from "../pages/templates/templates";
import {UsersTabPage} from "../pages/users-tab/users-tab";


@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;

    rootPage:any = LoginPage;
    pages: Array<{ title: string, component: any }>;


    constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
        this.inizializeApp();

        this.pages = [
            { title: 'Dashboard', component: HomePage },
            { title: 'Users', component: UsersTabPage },
            { title: 'Customers', component: CustomersPage },
            { title: 'Template', component: TemplatesPage }
        ];
    }

    inizializeApp() {
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
