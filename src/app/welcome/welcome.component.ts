import { Component, OnInit } from '@angular/core';
import {ClanService} from '../clan.service';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {Clan} from '../clan.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers: [ClanService]
})

export class WelcomeComponent implements OnInit {
  clans: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private clanService: ClanService, private router: Router) { }

  ngOnInit() {
    this.clans = this.clanService.getClans();
  }

  goToDetail(clan) {
    this.router.navigate(['clan', clan.$key]);
  }
}
