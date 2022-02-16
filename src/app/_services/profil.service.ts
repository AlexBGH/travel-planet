import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const PROFIL_API = 'https://api.qal.travelplanet.click/profils_v2/v1/profil/booking-rules/travellers-list';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {
    PROFIL_API!: string;
  
  constructor(
      private http: HttpClient,
      ) { }
      
      getProfil() {
        return this.http.get<any>(this.PROFIL_API);
      }

    /**getProfil(){
        this.http.get<any>(PROFIL_API).subscribe
        (      
                response => { 
                    console.log(response)
                    this.result = response
                }
        );
    }**/
}