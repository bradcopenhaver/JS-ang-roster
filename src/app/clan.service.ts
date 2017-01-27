import { Injectable } from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Injectable()
export class ClanService {
  clans: FirebaseListObservable<any[]>;

  constructor(private af: AngularFire) {
    this.clans = af.database.list('clans');
  }

  getClans() {
    return this.clans;
  }
}
