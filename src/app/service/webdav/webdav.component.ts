import { Component } from '@angular/core';
// // import NextcloudClient from 'nextcloud-link';
// import nextdav from '@fatrex/nextdav';
import { AuthType, createClient } from "webdav";

@Component({
  selector: 'app-webdav',
  templateUrl: './webdav.component.html',
  styleUrls: ['./webdav.component.scss']
})
export class WebdavComponent {
//   async test(): Promise<void> {
//     const client = new nextdav(
//       "https://bechatroniker.ddns.net/remote.php/dav/files/ncp",
//       "ncp",
//       "GHK6mVG5onUwpxTB1zDhrd4qOZzWVLtEtfv/t+EkSmQ",
//     );

//     const response = await client.getFolderContents("/")
// if (response) {
//   console.log(response)
// }
//   }

  test() {
    const client = createClient("https://some-server.org", {
    authType: AuthType.Digest,
    username: "user",
    password: "pass"
});
  client.createDirectory("test");
  console.log("TEST")
  }
}
