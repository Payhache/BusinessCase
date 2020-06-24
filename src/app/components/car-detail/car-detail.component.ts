import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VoituresService } from 'src/app/services/voitures.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  constructor(private route:ActivatedRoute, private voitureService:VoituresService) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
  }

}
