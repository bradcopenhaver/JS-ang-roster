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

  getMembersByClan(clanName) {
    // console.log(clanName);
    if (clanName != null){
      this.clanMemberList = this.af.database.list('members', {
        query: {
          orderByChild: 'clan',
          equalTo: clanName.name
        }
      });
      return this.clanMemberList;
    }
  }

  createMember(newMember) {
    this.memberList.push(newMember);
  }
}
