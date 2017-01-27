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
  @Input() clanFilter: string = "";
  members: FirebaseListObservable<any[]>;
  constructor(private memberService: MemberService) { }

  ngOnInit() {
  }

}