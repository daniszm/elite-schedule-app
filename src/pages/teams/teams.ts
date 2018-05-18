import { EliteApi } from './../../providers/elite-api/elite-api';
import { TeamHomePage } from './../team-home/team-home';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-teams',
  templateUrl: 'teams.html',
})
export class TeamsPage {

  public teams = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private EliteApi: EliteApi) {
  }

  ionViewDidLoad() {
    console.log("** this.navParams.data - ", this.navParams.data);
    let selectedTourney = this.navParams.data;
    this.EliteApi.getTournamentData(selectedTourney.id).subscribe(
      data => {
        this.teams = data.teams;
      }
    )
  }

  itemTapped($event, team) {
    this.navCtrl.push(TeamHomePage, team);
  }

}
