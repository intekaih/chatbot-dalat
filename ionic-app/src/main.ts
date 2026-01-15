import { bootstrapApplication } from '@angular/platform-browser';
import { addIcons } from 'ionicons';
import { 
  chatbubblesOutline, chatbubbleEllipsesOutline, chatbubbleOutline,
  timeOutline, heartOutline, settingsOutline,
  addOutline, sendOutline, cameraOutline, imageOutline, micOutline,
  stopCircle, radioButtonOn, personCircleOutline, informationCircleOutline,
  codeSlashOutline, schoolOutline, logOutOutline, chevronForwardOutline,
  locationOutline, pinOutline, trashOutline, closeCircle, play, pause,
  arrowBackOutline
} from 'ionicons/icons';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

addIcons({
  'chatbubbles-outline': chatbubblesOutline,
  'chatbubble-ellipses-outline': chatbubbleEllipsesOutline,
  'chatbubble-outline': chatbubbleOutline,
  'time-outline': timeOutline,
  'heart-outline': heartOutline,
  'settings-outline': settingsOutline,
  'add-outline': addOutline,
  'send': sendOutline,
  'camera-outline': cameraOutline,
  'image-outline': imageOutline,
  'mic-outline': micOutline,
  'stop-circle': stopCircle,
  'radio-button-on': radioButtonOn,
  'person-circle-outline': personCircleOutline,
  'information-circle-outline': informationCircleOutline,
  'code-slash-outline': codeSlashOutline,
  'school-outline': schoolOutline,
  'log-out-outline': logOutOutline,
  'chevron-forward-outline': chevronForwardOutline,
  'location-outline': locationOutline,
  'pin-outline': pinOutline,
  'trash-outline': trashOutline,
  'close-circle': closeCircle,
  'play': play,
  'pause': pause,
  'arrow-back-outline': arrowBackOutline
});

bootstrapApplication(AppComponent, appConfig)
  .catch(err => console.error(err));
