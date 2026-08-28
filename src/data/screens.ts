import type { ClipId, JobId } from "./types";

export type SiteKind =
  | "granola"
  | "figma"
  | "gong"
  | "sfdc-account"
  | "sfdc-opp"
  | "sheets"
  | "gmail"
  | "slack"
  | "gdoc"
  | "linkedin"
  | "research"
  | "page"
  | "clip";

export type ChromeTab = {
  id: string;
  host: string;
  label: string;
};

export type ComputerBeat = {
  pill: string;
  host: string;
  path?: string;
  title: string;
  site: SiteKind;
  clip?: ClipId;
  tabs: ChromeTab[];
};

const granola = { id: "granola", host: "granola.app", label: "Granola" };
const figma = { id: "figma", host: "figma.com", label: "Figma" };
const gmail = { id: "gmail", host: "mail.google.com", label: "Gmail" };
const gdoc = { id: "gdoc", host: "docs.google.com", label: "Docs" };
const linkedin = {
  id: "linkedin",
  host: "www.linkedin.com",
  label: "LinkedIn",
};
const web = { id: "web", host: "sample.example", label: "Public web" };

export const SCREENS: Record<JobId, Record<string, ComputerBeat>> = {
  "standardize-room": {
    m1: {
      pill: "Opening live notes",
      host: "granola.app",
      path: "/notes/sample-account",
      title: "Sample account call",
      site: "granola",
      tabs: [granola, figma, gmail],
    },
    m2: {
      pill: "Mapping notes into the deck",
      host: "granola.app",
      path: "/notes/sample-account",
      title: "Sample account call",
      site: "granola",
      tabs: [granola, figma, gmail],
    },
    m3: {
      pill: "Updating the last slides",
      host: "figma.com",
      path: "/file/sample-account-follow-up",
      title: "Sample account follow-up",
      site: "figma",
      tabs: [granola, figma, gmail],
    },
    m4: {
      pill: "Writing the follow-up note",
      host: "figma.com",
      path: "/file/sample-account-next-step",
      title: "Sample account next step",
      site: "figma",
      tabs: [granola, figma, gmail],
    },
    m5: {
      pill: "Drafts parked for review",
      host: "mail.google.com",
      path: "/mail/u/0/#drafts",
      title: "Drafts",
      site: "gmail",
      tabs: [granola, figma, gmail],
    },
  },
  "legal-redlines": {
    m1: {
      pill: "Opening the customer thread",
      host: "mail.google.com",
      path: "/mail/u/0/#inbox",
      title: "Inbox",
      site: "gmail",
      tabs: [gmail, gdoc],
    },
    m2: {
      pill: "Checking approved sources",
      host: "docs.google.com",
      path: "/document/d/customer-sources",
      title: "Approved customer sources",
      site: "gdoc",
      tabs: [gmail, gdoc],
    },
    m3: {
      pill: "Building the sourced answer pack",
      host: "docs.google.com",
      path: "/document/d/customer-answer-pack",
      title: "Customer answer pack",
      site: "gdoc",
      tabs: [gmail, gdoc],
    },
    m4: {
      pill: "Drafting the reply",
      host: "mail.google.com",
      path: "/mail/u/0/#drafts",
      title: "Drafts",
      site: "gmail",
      tabs: [gmail, gdoc],
    },
    m5: {
      pill: "Reply parked for review",
      host: "mail.google.com",
      path: "/mail/u/0/#drafts",
      title: "Drafts",
      site: "gmail",
      tabs: [gmail, gdoc],
    },
  },
  "attach-engine": {
    m1: {
      pill: "Reading public sources",
      host: "sample.example",
      path: "/news",
      title: "Sample account news",
      site: "research",
      tabs: [web, gdoc, linkedin, gmail],
    },
    m2: {
      pill: "Checking the current account signal",
      host: "sample.example",
      path: "/careers",
      title: "Sample account careers",
      site: "clip",
      clip: "02-prospecting-pg",
      tabs: [web, gdoc, linkedin, gmail],
    },
    m3: {
      pill: "Writing the account idea",
      host: "docs.google.com",
      path: "/document/d/sample-account-brief",
      title: "Sample account brief",
      site: "gdoc",
      tabs: [web, gdoc, linkedin, gmail],
    },
    m4: {
      pill: "Drafting a personal email",
      host: "mail.google.com",
      path: "/mail/u/0/#drafts",
      title: "Drafts",
      site: "gmail",
      tabs: [web, gdoc, linkedin, gmail],
    },
    m5: {
      pill: "Building the account page",
      host: "sample.example",
      path: "/brief",
      title: "Sample account brief",
      site: "page",
      tabs: [web, gdoc, linkedin, gmail],
    },
    m6: {
      pill: "Research and drafts parked",
      host: "mail.google.com",
      path: "/mail/u/0/#drafts",
      title: "Drafts",
      site: "gmail",
      tabs: [web, gdoc, linkedin, gmail],
    },
  },
};

export function beatFor(
  jobId: JobId,
  messageId: string | undefined,
): ComputerBeat | undefined {
  if (!messageId) return undefined;
  return SCREENS[jobId]?.[messageId];
}
