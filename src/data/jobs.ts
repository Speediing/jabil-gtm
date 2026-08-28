import type { Artifact, CroJob, SlideCard } from "./types";

export const SAMPLE_TAIL_SLIDES: SlideCard[] = [
  {
    n: 1,
    kicker: "Call note",
    voice: "them",
    title: "The current process",
    body: "The customer team described where the handoff slows down today.",
  },
  {
    n: 2,
    kicker: "Mapped live",
    voice: "us",
    title: "A focused first step",
    body: "Start with one workflow, one owner, and a clear review point.",
  },
  {
    n: 3,
    kicker: "Open question",
    voice: "them",
    title: "The approval path",
    body: "Confirm the technical owner and the person who approves the next step.",
  },
  {
    n: 4,
    kicker: "Next meeting",
    voice: "us",
    title: "Bring the right people back",
    body: "Return with the owner, the approver, and a short working plan.",
  },
];

export const SAMPLE_ANSWER_PACK: Extract<
  Artifact,
  { kind: "redlines" }
> = {
  kind: "redlines",
  title: "Sample account question pack",
  paperTitle: "Questions to answer",
  from: "Customer procurement, received before the workday",
  marks: [
    {
      text: "Which terms apply to this order?",
      note: "The contract summary is attached. The seller should confirm the exact order before sending.",
      take: true,
    },
    {
      text: "Who owns the delivery question?",
      note: "The account notes point to the delivery team. The source link is included in the draft.",
      take: true,
    },
    {
      text: "Can we share the security material?",
      note: "The approved security packet is ready to attach. Nothing is sent automatically.",
      take: true,
    },
    {
      text: "Can we change the commercial terms?",
      note: "This needs a human decision. The agent flags it instead of guessing.",
      take: false,
    },
  ],
  reply: {
    to: "Customer procurement",
    subject: "Answers and source material for your questions",
    body: "Hi,\n\nI pulled together the current contract summary, delivery owner, and approved security packet. I included the source for each answer so your team can review it.\n\nThe commercial terms need a separate decision, so I have not answered that item yet.\n\nBest,",
  },
};

export const SAMPLE_OUTBOUND: Extract<
  Artifact,
  { kind: "outbound" }
> = {
  kind: "outbound",
  title: "Sample account research",
  account: "Sample account",
  hypothesis: [
    {
      k: "Why this account",
      body: "A recent company update and an open role point to a process that may be changing.",
    },
    {
      k: "Why now",
      body: "The agent found a current signal that is worth checking before the seller reaches out.",
    },
    {
      k: "Why this team",
      body: "The operations and digital systems teams appear closest to the work.",
    },
  ],
  evidence: [
    {
      source: "Company news",
      finding: "Example signal: a new program may create a fresh coordination need.",
    },
    {
      source: "Careers page",
      finding: "Example signal: an open role mentions the same workflow.",
    },
    {
      source: "Product pages",
      finding: "Example signal: the current process spans more than one team.",
    },
  ],
  targets: [
    {
      name: "Operations leader",
      role: "Operations",
      why: "Closest to the process change described in the public material.",
    },
    {
      name: "Digital systems lead",
      role: "Digital systems",
      why: "Likely to understand the tools and handoffs behind the work.",
    },
  ],
  page: {
    headline: "A short brief for Sample account",
    body: "The public signals point to one workflow worth checking. Start with a short question, not a product tour.",
  },
};

export const JOBS: CroJob[] = [
  {
    id: "standardize-room",
    number: 1,
    title: "Turn live calls into ready follow-up",
    trigger: "A customer call starts",
    backgroundAction: "Listening to the call and updating the open deck",
    problem:
      "Good notes still take time to turn into a useful follow-up. The seller has to replay the call, edit the deck, and write the next step after the meeting ends.",
    botJob:
      "Atlas follows the live notes, updates the last slides, and prepares a short follow-up. The seller stays on the call and reviews the work before it goes anywhere.",
    storyboard: [
      {
        when: "Call starts",
        label: "Atlas opens the call notes and the working deck.",
        scene: "call",
        visual: {
          kind: "live-call",
          title: "Sample customer call",
          people: [
            { initials: "JS", name: "Jabil seller" },
            { initials: "CT", name: "Customer team" },
            { initials: "TL", name: "Technical lead" },
          ],
        },
      },
      {
        when: "During the call",
        label: "It maps the notes into a clear first step and open questions.",
        scene: "notes",
        visual: {
          kind: "deck-update",
          eyebrow: "Call notes",
          headline: "One workflow to start",
          product: "Owner and approval path",
          status: "Slides updated",
        },
      },
      {
        when: "Before the call ends",
        label: "The last frame is the updated deck, ready for the seller to review.",
        scene: "deck",
        slides: SAMPLE_TAIL_SLIDES,
      },
    ],
    unlock:
      "The notes, slides, and follow-up move together while the conversation is still fresh.",
    outcome:
      "One live call becomes an updated deck before the seller leaves the meeting.",
    clips: ["03-slides-granola"],
    demo: {
      title: "Atlas",
      subtitle: "Live call to updated deck",
      participants: [
        { id: "you", name: "You", role: "you" },
        {
          id: "atlas",
          name: "Atlas",
          role: "bot",
          persona: "Turns live call notes into a clean customer follow-up",
          color: "#007EA8",
        },
      ],
      messages: [
        {
          id: "m1",
          from: "atlas",
          kind: "routine",
          body: "Sample customer call started. I opened the live notes and the working deck. I will keep everything in draft.",
        },
        {
          id: "m2",
          from: "atlas",
          kind: "text",
          body: "I found the current process, the open approval question, and a focused first step. Updating the last slides now.",
        },
        {
          id: "m3",
          from: "atlas",
          kind: "draft",
          draftLabel: "Updated deck",
          artifact: {
            kind: "slides",
            title: "Sample account follow-up",
            cards: SAMPLE_TAIL_SLIDES,
          },
        },
        {
          id: "m4",
          from: "atlas",
          kind: "draft",
          draftLabel: "Follow-up note",
          artifact: {
            kind: "one-pager",
            title: "Sample account next step",
            eyebrow: "Draft",
            sections: [
              {
                heading: "Current process",
                body: "A short summary of the workflow discussed on the call.",
              },
              {
                heading: "First step",
                body: "Start with one workflow and one clear owner.",
              },
              {
                heading: "Open question",
                body: "Confirm who should review and approve the next step.",
              },
            ],
          },
        },
        {
          id: "m5",
          from: "atlas",
          kind: "system",
          body: "Nothing sent. The deck and note stay in drafts until you approve them.",
        },
      ],
    },
  },
  {
    id: "legal-redlines",
    number: 2,
    title: "Answer customer questions without the Slack chase",
    trigger: "A customer question lands",
    backgroundAction: "Checking product knowledge and internal sources",
    problem:
      "A customer question can send a seller across product, legal, finance, and delivery. The answer may exist already, but finding the current source takes time.",
    botJob:
      "Relay checks approved sources, separates answered items from decisions, and writes a reply with links. The seller reviews the work instead of chasing each team.",
    storyboard: [
      {
        when: "Before the workday",
        label: "A customer thread lands. Relay starts while the seller is offline.",
        scene: "notes",
        visual: {
          kind: "procurement-email",
          sender: "Customer procurement",
          subject: "Questions before the next step",
          questions: 4,
        },
      },
      {
        when: "Sources checked",
        label: "The agent finds approved answers and flags the item that needs a person.",
        scene: "inspect",
        visual: {
          kind: "answers-found",
          sources: [
            { name: "Contract summary", answer: "Current source found" },
            { name: "Delivery notes", answer: "Owner identified" },
            { name: "Security packet", answer: "Approved version found" },
          ],
          status: "3 answered, 1 flagged",
        },
      },
      {
        when: "Ready for review",
        label: "A sourced reply waits in drafts. Nothing has been sent.",
        scene: "send",
        artifact: SAMPLE_ANSWER_PACK,
      },
    ],
    unlock:
      "The seller gets a sourced draft and a clear list of what still needs a human decision.",
    outcome:
      "A customer question becomes a sourced reply without a day of internal chasing.",
    clips: ["01-morning-inbox"],
    demo: {
      title: "Relay",
      subtitle: "Customer question to sourced reply",
      participants: [
        { id: "you", name: "You", role: "you" },
        {
          id: "relay",
          name: "Relay",
          role: "bot",
          persona: "Finds approved answers and prepares a reply",
          color: "#E6A33A",
        },
      ],
      messages: [
        {
          id: "m1",
          from: "relay",
          kind: "routine",
          body: "A customer question arrived before the workday. I am checking the contract summary, delivery notes, and approved security packet.",
        },
        {
          id: "m2",
          from: "relay",
          kind: "text",
          body: "Three items have a current source. One commercial question needs a human decision, so I flagged it instead of filling the gap.",
        },
        {
          id: "m3",
          from: "relay",
          kind: "draft",
          draftLabel: "Question pack",
          artifact: SAMPLE_ANSWER_PACK,
        },
        {
          id: "m4",
          from: "relay",
          kind: "draft",
          draftLabel: "Email reply",
          artifact: {
            kind: "gmail",
            title: "Reply to customer procurement",
            to: SAMPLE_ANSWER_PACK.reply.to,
            subject: SAMPLE_ANSWER_PACK.reply.subject,
            body: SAMPLE_ANSWER_PACK.reply.body,
          },
        },
        {
          id: "m5",
          from: "relay",
          kind: "system",
          body: "Nothing sent. The reply stays in drafts until you approve it.",
        },
      ],
    },
  },
  {
    id: "attach-engine",
    number: 3,
    title: "Start account research before the first meeting",
    trigger: "A target account enters the list",
    backgroundAction: "Reading public signals and preparing personal outreach",
    problem:
      "Generic outbound gives the buyer no reason to reply. A useful first note needs a current signal, a clear idea, and a message that sounds like a person wrote it.",
    botJob:
      "Scout reads public sources, builds a simple account idea, and drafts a short email, message, and account page. The seller checks the evidence and chooses what to send.",
    storyboard: [
      {
        when: "Account added",
        label: "Scout opens public sources and starts without a prompt.",
        scene: "inspect",
        visual: {
          kind: "account-research",
          account: "Sample account",
          sources: ["Company news", "Careers", "Product pages"],
          signal: "Current account signal",
        },
      },
      {
        when: "Research complete",
        label: "It turns the source material into a simple account idea.",
        scene: "notes",
        visual: {
          kind: "three-why",
          items: [
            { label: "Why account", answer: "Current change" },
            { label: "Why now", answer: "Fresh public signal" },
            { label: "Why team", answer: "Closest to the work" },
          ],
        },
      },
      {
        when: "Drafts ready",
        label: "The seller gets personal drafts for the channels they use.",
        scene: "map",
        visual: {
          kind: "outreach-ready",
          person: "Operations leader",
          channels: ["LinkedIn", "Email", "Account page"],
          status: "Drafts ready, none sent",
        },
      },
      {
        when: "Ready for the seller",
        label: "The last frame is the research pack and a clear send decision.",
        scene: "send",
        artifact: SAMPLE_OUTBOUND,
      },
    ],
    unlock:
      "The account research, evidence, and outreach are ready before the seller starts from a blank page.",
    outcome:
      "One target account becomes checked research and personal outreach drafts.",
    clips: ["02-prospecting-pg"],
    demo: {
      title: "Scout",
      subtitle: "Account signal to personal outreach",
      participants: [
        { id: "you", name: "You", role: "you" },
        {
          id: "scout",
          name: "Scout",
          role: "bot",
          persona: "Researches the account and prepares personal drafts",
          color: "#2C9C92",
        },
      ],
      messages: [
        {
          id: "m1",
          from: "scout",
          kind: "routine",
          body: "Sample account entered the target list. I am checking company news, careers, and product pages. Drafts only.",
        },
        {
          id: "m2",
          from: "scout",
          kind: "text",
          body: "I found a current signal and the teams closest to it. I am turning that into a short account idea, with the source next to each point.",
        },
        {
          id: "m3",
          from: "scout",
          kind: "draft",
          draftLabel: "Account idea",
          artifact: {
            kind: "packet",
            title: "Sample account brief",
            fields: SAMPLE_OUTBOUND.hypothesis.map((item) => ({
              label: item.k,
              value: item.body,
            })),
          },
        },
        {
          id: "m4",
          from: "scout",
          kind: "draft",
          draftLabel: "Email",
          artifact: {
            kind: "gmail",
            title: "Email to operations leader",
            to: "Operations leader",
            subject: "A question about the current workflow",
            body: "Hi,\n\nI saw the recent company update and the open role tied to this workflow. I put together a short note on where the handoff may be changing.\n\nWorth a quick check next week?\n\nBest,",
          },
        },
        {
          id: "m5",
          from: "scout",
          kind: "draft",
          draftLabel: "Account page",
          artifact: {
            kind: "one-pager",
            title: SAMPLE_OUTBOUND.page.headline,
            eyebrow: "Draft",
            sections: [
              {
                heading: "Signal",
                body: SAMPLE_OUTBOUND.evidence[0].finding,
              },
              {
                heading: "Team",
                body: SAMPLE_OUTBOUND.hypothesis[2].body,
              },
              {
                heading: "First question",
                body: SAMPLE_OUTBOUND.page.body,
              },
            ],
          },
        },
        {
          id: "m6",
          from: "scout",
          kind: "system",
          body: "Nothing sent. The evidence and drafts wait for your review.",
        },
      ],
    },
  },
];

export function getJob(id: string): CroJob | undefined {
  return JOBS.find((job) => job.id === id);
}
