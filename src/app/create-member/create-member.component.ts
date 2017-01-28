import { Component, OnInit } from '@angular/core';
import {Member} from '../member.model';
import {Router} from '@angular/router';
import {ClanService} from '../clan.service';
import {MemberService} from '../member.service';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Component({
  selector: 'app-create-member',
  templateUrl: './create-member.component.html',
  styleUrls: ['./create-member.component.css'],
  providers: [ClanService, MemberService]
})
export class CreateMemberComponent implements OnInit {
  clans: FirebaseListObservable<any[]>;
  currentSquad: string = " ";

  constructor(private clanService: ClanService, private memberService: MemberService) { }

  ngOnInit() {
    this.clans = this.clanService.getClans();
  }

  updatePositionOptions(selectedSquad){
    this.currentSquad = selectedSquad;
  }

  createMember(name: string, clan: string, squad: string, position: string) {
    var newMember = new Member(name, clan, squad, position);
    this.memberService.createMember(newMember);
  }
}
