export type HeroJob = {
  id: string;
  label: string;
  request: string;
  reply: string;
  result: {
    label: string;
    title: string;
    body: string;
    status: string;
  };
};

export const HERO_JOBS = [
  {
    id: "account-brief",
    label: "Research an account",
    request:
      "A new account is on my list. Can you help me get ready for a first conversation?",
    reply:
      "I am checking public company pages and recent public updates. I will keep each point tied to its source.",
    result: {
      label: "Sample account brief",
      title: "A useful first question",
      body: "Public material may point to a change in how the team handles supplier handoffs. Ask who owns the process today and what they want to improve.",
      status: "Draft ready. Sources attached for review.",
    },
  },
  {
    id: "call-follow-up",
    label: "Follow up after a call",
    request:
      "Turn these sample call notes into a short follow-up I can check before I send it.",
    reply:
      "I pulled out the current process, the open question, and the next meeting step. I kept anything uncertain out of the draft.",
    result: {
      label: "Email draft",
      title: "Thanks for the conversation",
      body: "Thanks for walking me through the current process. I noted one open question about ownership. For the next meeting, we can review one workflow with the right people in the room.",
      status: "Saved as a draft. Nothing sent.",
    },
  },
  {
    id: "customer-question",
    label: "Answer a customer question",
    request:
      "A customer sent a product question. Find what we can answer and show me what still needs help.",
    reply:
      "I checked the approved sample material. I found support for two parts and marked one part for a specialist.",
    result: {
      label: "Reply draft",
      title: "Answer with a clear handoff",
      body: "I added the two supported answers and linked their sources. I left the remaining item open so the right teammate can confirm it before you reply.",
      status: "Needs specialist review on one item.",
    },
  },
  {
    id: "meeting-plan",
    label: "Plan the next meeting",
    request:
      "Build a simple plan for the next customer meeting from the sample notes.",
    reply:
      "I grouped the open questions, picked a clear goal, and listed the people who may need to join.",
    result: {
      label: "Meeting plan",
      title: "Confirm one workflow and its owner",
      body: "Open with the current process, confirm who owns it, review the first workflow, and agree on who will check the next step.",
      status: "Agenda ready for your review.",
    },
  },
  {
    id: "crm-update",
    label: "Update the CRM",
    request:
      "Use these sample notes to prepare the CRM update. Do not fill in anything we did not learn.",
    reply:
      "I matched the notes to the account fields and left unknown details blank. I also added the source note for each update.",
    result: {
      label: "CRM update",
      title: "Call notes prepared for review",
      body: "Current process captured. Technical owner still needs confirmation. Next step is a working session. Approval path remains open.",
      status: "Four fields ready. No changes submitted.",
    },
  },
  {
    id: "deal-check",
    label: "Check a deal",
    request:
      "Look through this sample deal and tell me what I should clear up before the next call.",
    reply:
      "I compared the notes, email thread, and CRM entry. The next step is present, but ownership and the review path are still unclear.",
    result: {
      label: "Deal check",
      title: "Two questions to clear up",
      body: "Who owns the technical review? Who needs to approve the next step? Ask both before setting a date.",
      status: "Review complete. No forecast changed.",
    },
  },
  {
    id: "team-handoff",
    label: "Prepare a team handoff",
    request:
      "Make a short handoff for a Jabil teammate who is joining this sample account.",
    reply:
      "I gathered the latest notes, open questions, and next step into one brief. I left out old material that no longer matches the thread.",
    result: {
      label: "Internal brief",
      title: "What the next seller needs",
      body: "The customer is reviewing one sample workflow. Ownership is not confirmed. The next meeting should focus on the current process and the approval path.",
      status: "Brief ready to share internally.",
    },
  },
  {
    id: "reconnect-email",
    label: "Restart a quiet thread",
    request:
      "Draft a polite note for a sample customer thread that has gone quiet.",
    reply:
      "I found the last agreed step and wrote a short note that gives the customer an easy way to respond.",
    result: {
      label: "Email draft",
      title: "A simple way back into the thread",
      body: "Hi, I wanted to check whether the workflow we discussed is still a priority. If it is, I can send a short plan for the next review. If timing changed, I am happy to pause.",
      status: "Saved as a draft. Nothing sent.",
    },
  },
] as const satisfies readonly HeroJob[];

export type HeroJobId = (typeof HERO_JOBS)[number]["id"];
