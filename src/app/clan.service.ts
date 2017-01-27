import { Injectable } from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Injectable()
export class ClanService {
  clanList: FirebaseListObservable<any[]>;

  constructor(private af: AngularFire) {
    this.clanList = af.database.list('clans');
  }

  getClans() {
    return this.clanList;
  }
  getClanById(clanId) {
    return this.af.database.object('/clans/' + clanId);
  }
  createClan(newClan) {
    this.clanList.push(newClan);
  }
  deleteClan(clanToDelete) {
    if(confirm("Delete this clan? Member profiles will remain.")){
      var clanInFirebase = this.getClanById(clanToDelete.$key);
      clanInFirebase.remove();
    }
  }
  updateClan(localUpdatedClan) {
    var clanInFirebase = this.getClanById(localUpdatedClan.$key);
    clanInFirebase.update({ name: localUpdatedClan.name,
                            motto: localUpdatedClan.motto});

  }
}
