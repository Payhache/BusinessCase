import { Component, OnInit } from '@angular/core';
import { VoituresService } from 'src/app/services/voitures.service';
import { Voiture } from 'src/app/models/voitures';

@Component({
  selector: 'app-list-cars',
  templateUrl: './list-cars.component.html',
  styleUrls: ['./list-cars.component.css'],
})
export class ListCarsComponent implements OnInit {
  voitures: Voiture[];
  constructor(public voitureService: VoituresService) {}

  ngOnInit(): void {
    this.voitureService.getAllVoitures().subscribe((data) => {
    this.voitures = data;
    });
  }
}
