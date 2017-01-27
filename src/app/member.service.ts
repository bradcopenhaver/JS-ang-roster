import { Injectable } from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Injectable()
export class MemberService {
  memberList: FirebaseListObservable<any[]>;

  constructor(private af: AngularFire) {
    this.memberList = af.database.list('member');
  }

  getAllMembers() {
    return this.memberList;
  }

  getMembersByClan(clanName) {
    console.log(clanName);
    // while (clanName = ""){
    //   console.log(clanName);
    // }
    // if (clanName != null){
      return this.af.database.list('members', {
        query: {
          orderByChild: 'clan',
          equalTo: clanName
        }
      });
    // }
  }
}
