export default class Utils {
  public static formatName(name: String) {
    return name.charAt(0).toUpperCase() + name.replace("-", " ").slice(1);
  }
}
