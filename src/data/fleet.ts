import type { JobId } from "./types";

export type FleetBot = {
  id: string;
  name: string;
  blurb: string;
  color: string;
  jobId?: JobId;
  mark?: string;
  seat?: boolean;
};

export const FLEET: FleetBot[] = [
  {
    id: "rep",
    name: "Jabil seller",
    blurb: "The seller stays in control. Every draft waits for review.",
    color: "#DCE8EC",
    mark: "JS",
    seat: true,
  },
  {
    id: "room",
    name: "Atlas",
    blurb: "Listens to a call and updates the open customer deck.",
    jobId: "standardize-room",
    color: "#007EA8",
  },
  {
    id: "inbox",
    name: "Relay",
    blurb: "Finds internal answers and leaves a sourced reply in drafts.",
    jobId: "legal-redlines",
    color: "#E6A33A",
  },
  {
    id: "cross-sell",
    name: "Scout",
    blurb: "Researches a target account and prepares personal outreach.",
    jobId: "attach-engine",
    color: "#2C9C92",
  },
];
