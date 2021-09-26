import { Component, OnInit } from '@angular/core';
 import { File } from '@ionic-native/file/ngx';
 import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public myButton;
  public name: string;

  // private promise: Promise<string>;
  // private stringToWrite: string;
  // private blob: Blob;

  constructor() { }
  // constructor(private platform: Platform,private file: File) {
  //   this.platform.ready().then(() => {
  //   });
  // }
  insert()
	{
    console.log('name',this.name);
    //1
    //this.file.writeExistingFile(this.file.dataDirectory, 'access.log', this.name);
    //2
    // this.file.createFile(this.file.dataDirectory, 'testFile', true);
    // this.blob = new Blob([this.name], { type: 'text/plain' });
    // this.file.writeFile(this.file.dataDirectory, 'testFile', this.blob, {replace: true, append: false});
	}
 }
