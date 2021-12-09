import { Component } from '@angular/core';
declare let cc: any;
declare let window: any;

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  cb: (ev: Event) => any;
  settingJs: HTMLScriptElement;
  mainJs: HTMLScriptElement;
  constructor() {}
  async ngOnInit() {
    console.log('homePage ngOnInit');
    if (window.serverList == null) {
      return;
    }
    this.cb = () => {
      this.onGameSceneLanch();
    };
    document.addEventListener('GameSceneLaunch', this.cb, false);

    // window.ccEngineLoaded = false;
    if(document.getElementById('settingScript')){
      document.body.removeChild(document.getElementById('settingScript'));
    }


    this.settingJs = document.createElement('script');
    this.settingJs.id = 'settingScript';
    this.settingJs.src = 'src/settings.4f4c1.js';
    document.body.appendChild(this.settingJs);

    if(document.getElementById('mainJsScript')){
      document.body.removeChild(document.getElementById('mainJsScript'));
    }

    this.mainJs = document.createElement('script');
    this.mainJs.src = 'main.40753.js';
    this.mainJs.id = 'mainJsScript';
    document.body.appendChild(this.mainJs);

    if(document.getElementById('cocos2dScript')){
      document.body.removeChild(document.getElementById('cocos2dScript'));
    }

    const cocos2d = document.createElement('script');
    cocos2d.src = 'cocos2d-js-min.1c382.js';
    cocos2d.id = 'cocos2dScript';
    const engineLoaded = () => {
      window.ccEngineLoaded = true;
      document.body.removeChild(cocos2d);
      cocos2d.removeEventListener('load', engineLoaded, false);
      window.boot();
    };
    cocos2d.addEventListener('load', engineLoaded, false);
    document.body.appendChild(cocos2d);
  }

  onGameSceneLanch() {
    document.removeEventListener('GameSceneLaunch', this.cb, false);
    cc.view.resizeWithBrowserSize(false);
  }
  ngOnDestroy(): void {
    console.log('homepage ngOnDestroy');
    if (this.mainJs) {
      document.body.removeChild(this.mainJs);
      this.mainJs = null;
    }
    if (this.settingJs) {
      document.body.removeChild(this.settingJs);
      this.settingJs = null;
    }
  }
  onTouch() {
    console.log('app Event Ontouch Game Page');
    // this.gameService.dispatch2game(GameEvent.a2g_TouchHomePage, '');
  }




}
