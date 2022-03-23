import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScreenService {

  constructor() { }

  fullScreen() {
    if ( ! document.fullscreenElement) 
      document.documentElement.requestFullscreen();
    else 
      document.exitFullscreen();
  }
}
