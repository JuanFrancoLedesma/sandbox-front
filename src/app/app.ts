import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Websocket } from "./websocket/websocket";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Websocket],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('sandbox-front');
}
