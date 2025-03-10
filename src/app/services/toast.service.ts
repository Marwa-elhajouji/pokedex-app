import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  show(message: string) {
    console.log(message);
  }
}
