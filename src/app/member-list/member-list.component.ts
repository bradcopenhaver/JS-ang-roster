import { Component, Input, OnInit } from '@angular/core';
import {Member} from '../member.model';
import {MemberService} from '../member.service';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {Router} from '@angular/router';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css'],
  providers: [MemberService]
})
export class MemberListComponent implements OnInit {
  @Input() clanFilter;
  test1 = this.clanFilter;
  test2;
  test3;
  members: FirebaseListObservable<any[]>;
  constructor(private memberService: MemberService) { }

  ngOnInit() {
    this.test2 = this.clanFilter;
  }

  ngAfterViewChecked() {
    this.test3 = this.clanFilter;
    if (this.clanFilter && this.test3){
      this.members = this.memberService.getMembersByClan(this.clanFilter);
      this.test3
    }
    console.log(this.test1 + " " + this.test2 + " " + this.test3 + " " + this.members);
  }
}
