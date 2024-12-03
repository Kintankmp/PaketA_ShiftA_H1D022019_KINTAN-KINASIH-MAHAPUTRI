import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular'; // Tambahkan IonicModule untuk pengujian komponen Ionic
import { FormsModule } from '@angular/forms'; // Tambahkan FormsModule jika digunakan di komponen

import { RacesPage } from './races.page';

describe('RacesPage', () => {
  let component: RacesPage;
  let fixture: ComponentFixture<RacesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RacesPage], // Deklarasi komponen yang diuji
      imports: [IonicModule.forRoot(), FormsModule], // Tambahkan modul yang diperlukan
    }).compileComponents(); // Pastikan komponen dan dependensi sudah dikompilasi

    fixture = TestBed.createComponent(RacesPage); // Buat instance dari komponen
    component = fixture.componentInstance; // Ambil instance komponen
    fixture.detectChanges(); // Jalankan deteksi perubahan
  });

  it('should create', () => {
    expect(component).toBeTruthy(); // Pastikan komponen berhasil dibuat
  });
});
