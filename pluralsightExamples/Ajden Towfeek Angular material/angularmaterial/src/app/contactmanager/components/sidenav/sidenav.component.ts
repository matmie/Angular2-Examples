import { Component, OnInit, NgZone } from '@angular/core';
import { UserService } from '../../services/user.service';

import { User } from '../../models/user';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material';

const SMALL_WIDTH_BREAKPOINT = 720;
@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

    private mediaMatcher: MediaQueryList = matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`);

    users: Observable<User[]>;
    isDarkTheme: boolean = false;
    isRtl: string = 'ltr';

    constructor(zone: NgZone, private userService: UserService, private router: Router) {
        this.mediaMatcher.addListener(mql =>
            zone.run(() => this.mediaMatcher = mql));
    }

    @ViewChild(MatDrawer) drawer: MatDrawer;

    ngOnInit() {
        this.users = this.userService.users;
        this.userService.loadAll();
        this.router.events.subscribe(() => {
            if (this.isScreenSmall()) {
                this.drawer.close();
            }
        });
    }

    toggleTheme() {
        this.isDarkTheme = !this.isDarkTheme;
    }
    toggleDir() {
        this.isRtl = this.isRtl === 'ltr' ? 'rtl' : 'ltr';
    }

    isScreenSmall(): boolean {
        return this.mediaMatcher.matches;
    };

}
