import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-races',
  templateUrl: './races.page.html',
  styleUrls: ['./races.page.scss'],
})
export class RacesPage implements OnInit {
  races: any = [];
  formData = {
    id: null,
    namaBalapan: '',
    deskripsi: '',
    jadwal: '',
    detailLintasan: ''
  };

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.loadRaces();
  }

  loadRaces() {
    this.api.getRaces().subscribe((res: any) => {
      this.races = res;
    });
  }

  saveRace() {
    if (this.formData.id) {
      this.api.updateRace(this.formData).subscribe(() => this.loadRaces());
    } else {
      this.api.createRace(this.formData).subscribe(() => this.loadRaces());
    }
    this.resetForm();
  }

  editRace(race: any) {
    this.formData = { ...race };
  }

  deleteRace(id: number) {
    this.api.deleteRace(id).subscribe(() => this.loadRaces());
  }

  resetForm() {
    this.formData = {
      id: null,
      namaBalapan: '',
      deskripsi: '',
      jadwal: '',
      detailLintasan: ''
    };
  }
}
