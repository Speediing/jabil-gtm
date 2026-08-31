export type HeroJobIcon =
  | "outbound"
  | "research"
  | "follow-up"
  | "deal-desk"
  | "pipeline"
  | "renewal"
  | "competitive"
  | "chief-of-staff";

export type HeroJob = {
  name: string;
  icon: HeroJobIcon;
  account: string;
  signal: string;
  work: string;
  result: string;
  user: string;
  bot: string;
};

export const HERO_JOBS = [
  {
    name: "Sales Outbound",
    icon: "outbound",
    account: "Sample manufacturing account",
    signal: "New operations program announced",
    work: "I reviewed the public update, mapped the operations team, and drafted outreach around where Jabil may be relevant.",
    result: "Account-specific outreach drafts ready",
    user: "show me the drafts before anything is sent",
    bot: "ready for review. nothing has been sent.",
  },
  {
    name: "Account Research",
    icon: "research",
    account: "Sample customer account",
    signal: "Public company update detected",
    work: "I mapped the relevant teams, summarized the public update, and found a focused question for the first conversation.",
    result: "Account brief and question set ready",
    user: "brief me before the call",
    bot: "sent. i will keep the brief current.",
  },
  {
    name: "Call Follow-up",
    icon: "follow-up",
    account: "Sample customer call",
    signal: "Customer call ended",
    work: "I captured the current process, updated the working deck, and drafted the recap with open questions and next steps.",
    result: "Deck and follow-up draft ready",
    user: "share the drafts with me",
    bot: "shared. they are ready for your review.",
  },
  {
    name: "Deal Desk",
    icon: "deal-desk",
    account: "Sample opportunity",
    signal: "Customer question received",
    work: "I checked the approved material, drafted the supported answers, and marked the commercial question for the right teammate.",
    result: "Supported response draft ready",
    user: "route the open question",
    bot: "routed. the supported answers are ready.",
  },
  {
    name: "Pipeline Health",
    icon: "pipeline",
    account: "Sample sales pipeline",
    signal: "Next steps need review",
    work: "I reviewed recent activity and call notes, then identified the missing owner or next action for each open opportunity.",
    result: "Deal review notes ready",
    user: "brief the account owners",
    bot: "briefs are ready. i will watch for updates.",
  },
  {
    name: "Renewal Risk",
    icon: "renewal",
    account: "Sample customer account",
    signal: "Account activity changed",
    work: "I compared the recent account notes with the agreed next step and prepared the questions the account team should answer.",
    result: "Account recovery questions ready",
    user: "share this with the account team",
    bot: "shared. i will flag any new activity.",
  },
  {
    name: "Competitive Intel",
    icon: "competitive",
    account: "Sample customer account",
    signal: "Another supplier mentioned on a call",
    work: "I found the customer concern, checked the approved Jabil material, and drafted a comparison tied to the stated need.",
    result: "Supplier comparison brief ready",
    user: "add it to the next call brief",
    bot: "added. the source material is attached.",
  },
  {
    name: "Sales Chief of Staff",
    icon: "chief-of-staff",
    account: "Weekly operating review",
    signal: "Open decisions need owners",
    work: "I gathered pipeline changes, customer questions, and team commitments, then prepared the decisions that need attention.",
    result: "Sales operating brief ready",
    user: "send the draft to me first",
    bot: "sent for review. no one else has received it.",
  },
] as const satisfies readonly HeroJob[];
