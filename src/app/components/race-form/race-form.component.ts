import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ModalController } from '@ionic/angular';
import { RaceFormComponent } from '../../components/race-form/race-form.component';

@Component({
  selector: 'app-races',
  templateUrl: './races.page.html',
  styleUrls: ['./races.page.scss'],
})
export class RacesPage implements OnInit {
  races: any[] = [];

  constructor(
    private apiService: ApiService,
    private modalController: ModalController
  ) {}

  ngOnInit() {
    this.loadRaces();
  }

  loadRaces() {
    this.apiService.getRaces().subscribe((data) => {
      this.races = data;
    });
  }

  async openRaceForm(race: any = null) {
    const modal = await this.modalController.create({
      component: RaceFormComponent,
      componentProps: { race },
    });

    modal.onDidDismiss().then((result) => {
      if (result.data) {
        if (race) {
          this.updateRace(result.data);
        } else {
          this.addRace(result.data);
        }
      }
    });

    return await modal.present();
  }

  addRace(race: any) {
    this.apiService.addRace(race).subscribe(() => {
      this.loadRaces();
    });
  }

  updateRace(race: any) {
    this.apiService.updateRace(race).subscribe(() => {
      this.loadRaces();
    });
  }

  deleteRace(race: any) {
    this.apiService.deleteRace(race.id).subscribe(() => {
      this.loadRaces();
    });
  }
}
