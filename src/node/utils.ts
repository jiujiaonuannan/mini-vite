import path from "path";
import {
  JS_TYPES_RE,
  HASH_RE,
  QEURY_RE,
  CLIENT_PUBLIC_PATH,
} from "./constants";

export const isJSRequest = (id: string): boolean => {
  id = cleanUrl(id);
  if (JS_TYPES_RE.test(id)) {
    return true;
  }
  if (!path.extname(id) && !id.endsWith("/")) {
    return true;
  }
  return false;
};

export const cleanUrl = (url: string): string =>
  url.replace(HASH_RE, "").replace(QEURY_RE, "");

export const isCSSRequest = (id: string): boolean =>
  cleanUrl(id).endsWith(".css");

export function isImportRequest(url: string): boolean {
  return url.endsWith("?import");
}

export function removeImportQuery(url: string): string {
  return url.replace(/\?import$/, "");
}

export function getShortName(file: string, root: string) {
  return file.startsWith(root + "/") ? path.posix.relative(root, file) : file;
}

export function isInternalRequest(url: string): boolean {
  return INTERNAL_LIST.includes(url);
}

const INTERNAL_LIST = [CLIENT_PUBLIC_PATH, "/@react-refresh"];
