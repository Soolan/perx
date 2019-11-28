import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  @ViewChild('myVideo', {static: false}) myVideo: ElementRef;
  @ViewChild('anna', {static: false}) anna: ElementRef;
  @ViewChild('pausePlay', {static: false}) pausePlay: ElementRef;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  onStart() {
    this.myVideo.nativeElement.pause();
    this.router.navigate(['table']);
  }

  onPlayPause() {
    const video = this.myVideo.nativeElement;
    if (video.paused) {
      video.play();
      this.pausePlay.nativeElement.style.backgroundImage = 'url(assets/images/play.png)';
    } else {
      video.pause();
      this.pausePlay.nativeElement.style.backgroundImage = 'url(assets/images/pause.png)';
    }
  }

  onShowHideVideo() {
    const display = this.myVideo.nativeElement.style.display;
    if (display === 'none') {
      this.myVideo.nativeElement.style.display = 'block';
      this.anna.nativeElement.style.backgroundImage = 'url(assets/images/close.png)';
      this.pausePlay.nativeElement.style.display = 'block';
      this.myVideo.nativeElement.play();
    } else {
      this.myVideo.nativeElement.style.display = 'none';
      this.anna.nativeElement.style.backgroundImage = 'url(assets/images/anna-gong.png)';
      this.pausePlay.nativeElement.style.display = 'none';
      this.myVideo.nativeElement.pause();
    }
  }

  ngAfterViewInit(): void {
    this.myVideo.nativeElement.style.display = 'none';
    this.myVideo.nativeElement.pause();
  }
}
