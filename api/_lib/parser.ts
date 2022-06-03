import { IncomingMessage } from "http";
import { parse } from "url";
import { ParsedRequest } from "./types";

export function parseRequest(req: IncomingMessage) {
  console.log("HTTP " + req.url);
  const { query } = parse(req.url || "/", true);
  const { settings } = query || {};

  if (Array.isArray(settings)) {
    throw new Error("Expected a single settings as base64 encoded string");
  }

  const parsedRequest: ParsedRequest = {
    fileType: "png",
    settings,
  };
  return parsedRequest;
}
