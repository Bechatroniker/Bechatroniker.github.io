import { Component } from '@angular/core';
import { WebdavComponent } from './service/webdav/webdav.component';
import { WebdavhandlerService } from './service/webdavhandler.service';
import { Observable, of } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Bechatroniker';
  translations = {
    'main1' : {
      'en': 'We need your help!',
      'de': 'Deine Hilfe ist gefragt!'
    },
    'main2': {
      'en': 'Help us recreate the evening by clicking on the camera icon and taking a photo with us.',
      'de': 'Hilf uns den Abend zu rekonstruieren, indem du auf das Kamera-Icon clickst und ein Foto mit uns machst.'
    },
    'footer': {
      'en': 'more information ...',
      'de': 'mehr Informationen ...'
    }
  }

  constructor(private webdavservice: WebdavhandlerService) {

  }

  getTranslation(trans: any): any{
    let lang = this.getUsersLocale('en');
    if (lang == "de-DE")  return trans.de
    return trans.en
  }

  getUsersLocale(defaultValue: string): string {
    if (typeof window === 'undefined' || typeof window.navigator === 'undefined') {
      return defaultValue;
    }
    const wn = window.navigator as any;
    let lang = wn.languages ? wn.languages[0] : defaultValue;
    lang = lang || wn.language || wn.browserLanguage || wn.userLanguage;
    console.log(lang)
    return lang;
  }

  inputChange(event:any){
    console.log(event.target.files)
    this.getImageFromInput(event).subscribe(
      image => {
        console.log(image)
        if (image){
          this.webdavservice.uploadImage(image, event.target.files[0].name.split(".")[event.target.files[0].name.split(".").length - 1]).then(
            status => {
              if (status) {
                alert("Danke für das Foto!")
              } else {
                alert("Ups da ist ettwas schief gelaufen, versuche es später erneut.")
              }
            }
          );

        }

      }
    )
  }

  getImageFromInput(event: any): Observable<string | null>{
    if (event.target.files.length > 0 && event.target.files[0].type.includes('image')) {
      return new Observable(obs => {
        let reader = new FileReader();
        reader.readAsArrayBuffer(event.target.files[0]);
        reader.onload = (event) => {

          obs.next(event.target?.result as string);
          obs.complete();
        }
        reader.onerror = (event => {
          return null
        })
      })

    } else{
      return of(null)
    }
  }
}
