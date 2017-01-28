import { Component, OnInit } from '@angular/core';
import {Clan} from '../clan.model';
import {ClanService} from '../clan.service';

@Component({
  selector: 'app-create-clan',
  templateUrl: './create-clan.component.html',
  styleUrls: ['./create-clan.component.css'],
  providers: [ClanService]
})
export class CreateClanComponent implements OnInit {

  constructor(private clanService: ClanService) { }

  ngOnInit() {
  }

  createClan(newName: string, newMotto: string) {
    var newClan = new Clan(newName, newMotto);
    this.clanService.createClan(newClan);
  }
}
