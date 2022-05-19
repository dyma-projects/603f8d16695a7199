import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
  selector: "[appChangeColor]",
})
export class ChangeColor {
  constructor() {}
  @HostBinding("style.color") private colorP: string = "black";
  @HostListener("window:keyup", ["$event"]) private color(
    $event: KeyboardEvent
  ) {
    switch ($event.keyCode) {
      case 40:
        this.colorP = "yellow";
        break;
      case 39:
        this.colorP = "green";
        break;
      case 38:
        this.colorP = "red";
        break;
      case 37:
        this.colorP = "blue";
        break;
      default:
        console.log("Autre touche");
        break;
    }
  }
}
