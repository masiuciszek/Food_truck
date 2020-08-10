import cookie from "cookie";
import { IncomingMessage } from "http";

export function parseCookies(req: IncomingMessage) {
  // if there is a request we are on the server , reade the header cookies
  // otherwhiese we are on the browser and we an read the documnet cookies
  return cookie.parse(req ? req.headers.cookie || "" : document.cookie);
}
