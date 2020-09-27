import { Component, OnInit } from '@angular/core';

import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'delayGram';


  ngOnInit(): void {
    var firebaseConfig = {
      apiKey: "AIzaSyAlRXDWMAppo_DFPGaNod_GLSF_Jj4ob4I",
      authDomain: "delaygram-init.firebaseapp.com",
      databaseURL: "https://delaygram-init.firebaseio.com",
      projectId: "delaygram-init",
      storageBucket: "delaygram-init.appspot.com",
      messagingSenderId: "805584126973",
      appId: "1:805584126973:web:db192ac8e9c422816a8f94",
      measurementId: "G-SJ30QMXKHY"
    };

    firebase.initializeApp(firebaseConfig);
  }
}
