import { EliteApi } from './../../providers/elite-api/elite-api';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import * as _ from 'lodash';

@Component({
  selector: 'page-team-detail',
  templateUrl: 'team-detail.html',
})
export class TeamDetailPage {

  public team: any = {};
  public games: any[];
  private tourneyData: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private eliteApi: EliteApi
    ) {
  }

  ionViewDidLoad() {
    this.team = this.navParams.data;

    this.tourneyData = this.eliteApi.getCurrentTourney();
    this.games = _.chain(this.tourneyData.games)
    .filter(g => g.team1Id === this.team.id || g.team2Id === this.team.id)
    .value();
  }

}
