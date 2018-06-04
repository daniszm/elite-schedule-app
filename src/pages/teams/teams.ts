import { EliteApi } from './../../providers/elite-api/elite-api';
import { TeamHomePage } from './../team-home/team-home';
import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import * as _ from 'lodash';

@Component({
  selector: 'page-teams',
  templateUrl: 'teams.html',
})
export class TeamsPage {

  public teams = [];
  private allTeams: any;
  private allTeamDivisions: any;

  constructor(
    private loadingController: LoadingController,
    public navCtrl: NavController,
    public navParams: NavParams,
    private EliteApi: EliteApi) {
  }

  ionViewDidLoad() {
    let selectedTourney = this.navParams.data;

    let loader = this.loadingController.create({
      content: "Getting data."
    })

    loader.present().then(() => {
      this.EliteApi.getTournamentData(selectedTourney.id).subscribe(
        data => {
          this.allTeams = data.teams;
          
          this.allTeamDivisions = _.chain(data.teams).groupBy('division')
          .toPairs()
          .map(item => _.zipObject(['divisionName', 'divisionTeams'], item))
          .value();
  
          this.teams = this.allTeamDivisions;
          console.log(this.teams);

          loader.dismiss();
        }
      )
    })


  }

  itemTapped($event, team) {
    this.navCtrl.push(TeamHomePage, team);
  }

}
