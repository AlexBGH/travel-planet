import { Component, OnInit } from '@angular/core';
import { ProfilService } from '../_services/profil.service';

@Component({
  selector: 'app-travellers-list',
  templateUrl: './travellers-list.component.html',
  styleUrls: ['./travellers-list.component.css']
})
export class TravellersListComponent implements OnInit {

  test = 'travel profil'

  constructor(
    private profilService: ProfilService,
  ) { 
  }

  ngOnInit(): void {
    
  }

}
