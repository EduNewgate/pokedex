import ColorThief from "../../../node_modules/colorthief/dist/color-thief.umd.js";

export default class Utils {
  public static formatName(name: String) {
    return name.charAt(0).toUpperCase() + name.replace("-", " ").slice(1);
  }

  public static getDominantColor(name: String, img: HTMLImageElement) {
    let colorThief = new ColorThief();
    if (img.complete) {
      return colorThief.getColor(img);
    } else {
      img.addEventListener("load", function() {
        return colorThief.getColor(img);
      });
    }
  }
}
