import { Routes } from '@angular/router';
import { Video } from './video/video';
import { Audio } from './audio/audio';

export const routes: Routes = [
    {path: "", component:Video},
    {path: "audio", component:Audio}
];
