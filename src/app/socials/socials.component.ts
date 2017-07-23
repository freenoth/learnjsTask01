import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-socials',
  templateUrl: './socials.component.html',
  styleUrls: ['./socials.component.css']
})
export class SocialsComponent implements OnInit {

  @Input()
  public currentSocials;

  constructor() { }

  ngOnInit() {
  }

}

export class SocialsInfo {
  public username;
  public likes;
  public followers;
  public image;

  constructor(username, likes, followers, image) {
    this.username = username;
    this.likes = likes;
    this.followers = followers;
    this.image = image;
  }
}
