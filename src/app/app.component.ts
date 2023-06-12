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

  // constructor(private webdav: WebDAV) {
  //   const header =  new Headers();
  //       const url = 'https://your.url'
  //       header.append('Authorization', 'Basic '  + btoa('username:password'));
  //       //header.append('Destination', '${url}/newfile_directory');
  //       //header.append('Depth', '300');
  //       header.append('Content-Type', 'text/xml');

  //       const body=`
  //       <?xml version="1.0"?>
  //       <d:propertyupdate xmlns:d="DAV:" xmlns:oc="http://owncloud.org/ns">
  //         <d:set>
  //           <d:prop>
  //                       <d:lastmodified>Fri, 13 Feb 2015 00:00:00 GMT</d:lastmodified>
  //           </d:prop>
  //         </d:set>
  //       </d:propertyupdate>
  //       `
  //       // webdav.get(`${url}/Photos/Paris.jpg`, {headers: header})
  //       // webdav.mkcol(`${url}/newdir`, {headers: header})
  //       // webdav.move(`${url}/newdir`, {headers: header})
  //       // webdav.copy(`${url}/newdir`, {headers: header})
  //       // webdav.delete(`${url}/newdir2`, {headers: header})
  //       // webdav.propfind(`${url}/`, {headers: header})
  //       // webdav.put(`${url}/test`, body, {headers: header})
  //       webdav.proppatch(`${url}/test`, body, {headers: header})
  //                       .subscribe();
  // }
  constructor(private webdavservice: WebdavhandlerService) {
   // webdavservice.uploadImage("test");
  }

  inputChange(event:any){
    console.log(event.target.files)
    this.getImageFromInput(event).subscribe(
      image => {
        console.log(image)
        if (image){
          this.webdavservice.uploadImage(image);
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
