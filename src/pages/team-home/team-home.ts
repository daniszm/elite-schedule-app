import { MyTeamsPage } from './../my-teams/my-teams';
import { StandingsPage } from './../standings/standings';
import { TeamDetailPage } from './../team-detail/team-detail';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-team-home',
  templateUrl: 'team-home.html',
})
export class TeamHomePage {
  public team: any = {};
  public teamDetailTab = TeamDetailPage;
  public standingsTab = StandingsPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.team = this.navParams.data;
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad');
  // }

  // ionViewWillEnter() {
  //   console.log('ionViewWillEnter');
  // }

  // ionViewWillLeave() {
  //   console.log('ionViewWillLeave');
  // }

  // ionViewDidLeave() {
  //   console.log('ionViewDidLeave');
  // }

  // ionViewWillUnload() {
  //   console.log('ionViewWillUnload');
  // }

  // ionViewCanEnter() {
  //   console.log('ionViewCanEnter');
  // }

  // ionViewCanLeave() {
  //   console.log('ionViewCanLeave');
  // }

  goHome() {
    this.navCtrl.popToRoot();
  }

}
