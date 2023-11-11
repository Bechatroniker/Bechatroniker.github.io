import { Injectable } from '@angular/core';
import { readFile } from 'fs';
import { AuthType, createClient } from "webdav";

@Injectable({
  providedIn: 'root'
})
export class WebdavhandlerService {

  constructor() {

   }

   test() {
    const client = createClient("https://bechatroniker.ddns.net/remote.php/dav/files/ncp", {
    authType: AuthType.Password,
    username: "ncp",
    password: "NWxdD7iN87LKySh7SJ7616niAShw+Ks6mUzwP30Tuvk",
    });
  client.createDirectory("test1");
  console.log("TEST")
  }


  async uploadImage(imagePath: string, imageEnding: string){
    const client = createClient("https://bechatroniker.ddns.net/remote.php/dav/files/ncp", {
    authType: AuthType.Password,
    username: "ncp",
    password: "NWxdD7iN87LKySh7SJ7616niAShw+Ks6mUzwP30Tuvk",
    });

    let now = Date.now()
    let imageName = now.toString()
    // imageName = imageName + ".jpg"
    imageName = imageName + "." + imageEnding

    return (await client.putFileContents("Photos/" + imageName, imagePath));

  }
}
