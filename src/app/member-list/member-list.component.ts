import { Component, Input, OnInit } from '@angular/core';
import {Member} from '../member.model';
import {MemberService} from '../member.service';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css'],
  providers: [MemberService]
})
export class MemberListComponent implements OnInit {
  members: FirebaseListObservable<any[]>;
  clanId: string;

  constructor(private memberService: MemberService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.clanId = urlParameters['id'];
    });
    this.members = this.memberService.getMembersByClan(this.clanId);
  }

  ngAfterViewChecked() {

  }
}
