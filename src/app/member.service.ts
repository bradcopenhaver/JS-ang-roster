import { Injectable } from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Injectable()
export class MemberService {
  memberList: FirebaseListObservable<any[]>;
  clanMemberList: FirebaseListObservable<any[]>;

  constructor(private af: AngularFire) {
    this.memberList = af.database.list('members');
  }

  getAllMembers() {
    return this.memberList;
  }

  getMembersByClan(clanKey) {
    return this.af.database.list('members', {
      query: {
        orderByChild: 'clanId',
        equalTo: clanKey
      }
    });    
  }

  createMember(newMember) {
    this.memberList.push(newMember);
  }
}
