import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';
import {Clan} from '../clan.model';
import {ClanService} from '../clan.service';

@Component({
  selector: 'app-clan-detail',
  templateUrl: './clan-detail.component.html',
  styleUrls: ['./clan-detail.component.css'],
  providers: [ClanService]
})
export class ClanDetailComponent implements OnInit {
  clanId: string;
  clanToDisplay;
  constructor(
    private route: ActivatedRoute,
    private clanService: ClanService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.clanId = urlParameters['id'];
    });
    this.clanService.getClanById(this.clanId).subscribe(clan => {this.clanToDisplay = clan});
  }

}
