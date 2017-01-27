import { Component, Input, OnInit } from '@angular/core';
import {ClanService} from '../clan.service';

@Component({
  selector: 'app-edit-clan',
  templateUrl: './edit-clan.component.html',
  styleUrls: ['./edit-clan.component.css'],
  providers: [ClanService]
})
export class EditClanComponent implements OnInit {
  @Input() currentClan;
  showEditForm = "hidden";

  constructor(private clanService: ClanService) { }

  ngOnInit() {
  }

  showForm(){
    this.showEditForm = "";
  }

  doneEditting(currentClan){
    this.clanService.updateClan(currentClan);
    this.showEditForm = "hidden";
  }
  deleteClan(currentClan){
    this.clanService.deleteClan(currentClan);
  }
}
