import { Component, OnInit } from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {Clan} from '../clan.model';
import {Member} from '../member.model';
import {Router} from '@angular/router';
import {ClanService} from '../clan.service';
import {MemberService} from '../member.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ClanService, MemberService]
})
export class AdminComponent implements OnInit {
  clans: FirebaseListObservable<any[]>;
  currentSquad: string = " ";

  constructor(private clanService: ClanService, private memberService: MemberService) {
    this.clans = this.clanService.getClans();
  }

  ngOnInit() {
  }

  updatePositionOptions(selectedSquad){
    this.currentSquad = selectedSquad;
  }
  createClan(newName: string, newMotto: string) {
    var newClan = new Clan(newName, newMotto);
    this.clanService.createClan(newClan);
  }
  createMember(name: string, clan: string, squad: string, position: string) {
    var newMember = new Member(name, clan, squad, position);
    this.memberService.createMember(newMember);
  }
}
