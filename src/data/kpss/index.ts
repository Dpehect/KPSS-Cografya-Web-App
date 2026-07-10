
import { turkiyenincografikonumu } from "./topics/turkiyenin-cografi-konumu";
import { yersekilleri } from "./topics/yer-sekilleri";
import { iklimvebitkiortusu } from "./topics/iklim-ve-bitki-ortusu";
import { nufusveyerlesme } from "./topics/nufus-ve-yerlesme";
import { tarimvehayvancilik } from "./topics/tarim-ve-hayvancilik";
import { madenlerveenerji } from "./topics/madenler-ve-enerji";
import { sanayiveticaret } from "./topics/sanayi-ve-ticaret";
import { ulasimveturizm } from "./topics/ulasim-ve-turizm";
import { bolgelercografyasi } from "./topics/bolgeler-cografyasi";
import { flashcards_turkiyenincografikonumu } from "./flashcards/turkiyenin-cografi-konumu";
import { flashcards_yersekilleri } from "./flashcards/yer-sekilleri";
import { flashcards_iklimvebitkiortusu } from "./flashcards/iklim-ve-bitki-ortusu";
import { flashcards_nufusveyerlesme } from "./flashcards/nufus-ve-yerlesme";
import { flashcards_tarimvehayvancilik } from "./flashcards/tarim-ve-hayvancilik";
import { flashcards_madenlerveenerji } from "./flashcards/madenler-ve-enerji";
import { flashcards_sanayiveticaret } from "./flashcards/sanayi-ve-ticaret";
import { flashcards_ulasimveturizm } from "./flashcards/ulasim-ve-turizm";
import { flashcards_bolgelercografyasi } from "./flashcards/bolgeler-cografyasi";
import { questions_turkiyenincografikonumu } from "./questions/turkiyenin-cografi-konumu";
import { questions_yersekilleri } from "./questions/yer-sekilleri";
import { questions_iklimvebitkiortusu } from "./questions/iklim-ve-bitki-ortusu";
import { questions_nufusveyerlesme } from "./questions/nufus-ve-yerlesme";
import { questions_tarimvehayvancilik } from "./questions/tarim-ve-hayvancilik";
import { questions_madenlerveenerji } from "./questions/madenler-ve-enerji";
import { questions_sanayiveticaret } from "./questions/sanayi-ve-ticaret";
import { questions_ulasimveturizm } from "./questions/ulasim-ve-turizm";
import { questions_bolgelercografyasi } from "./questions/bolgeler-cografyasi";

import type { Topic, Flashcard, Question, Exam, GlossaryItem, TimelineEvent, StudyRecommendation } from "@/types/study";

export const topics: Topic[] = [
  turkiyenincografikonumu, yersekilleri, iklimvebitkiortusu, nufusveyerlesme, tarimvehayvancilik, madenlerveenerji, sanayiveticaret, ulasimveturizm, bolgelercografyasi
];

export const flashcards: Flashcard[] = [
  ...flashcards_turkiyenincografikonumu,
  ...flashcards_yersekilleri,
  ...flashcards_iklimvebitkiortusu,
  ...flashcards_nufusveyerlesme,
  ...flashcards_tarimvehayvancilik,
  ...flashcards_madenlerveenerji,
  ...flashcards_sanayiveticaret,
  ...flashcards_ulasimveturizm,
  ...flashcards_bolgelercografyasi
];

export const questions: Question[] = [
  ...questions_turkiyenincografikonumu,
  ...questions_yersekilleri,
  ...questions_iklimvebitkiortusu,
  ...questions_nufusveyerlesme,
  ...questions_tarimvehayvancilik,
  ...questions_madenlerveenerji,
  ...questions_sanayiveticaret,
  ...questions_ulasimveturizm,
  ...questions_bolgelercografyasi
];

export const exams: Exam[] = [];
export const glossary: GlossaryItem[] = [];
export const timelineEvents: TimelineEvent[] = [];
export const recommendations: StudyRecommendation[] = [];

export function getTopicBySlug(slug: string): Topic | undefined {
  return topics.find((t) => t.slug === slug);
}

export function getTopicById(id: string): Topic | undefined {
  return topics.find((t) => t.id === id);
}

export function getQuestionsByTopic(topicId: string): Question[] {
  return questions.filter((q) => q.topicId === topicId);
}

export function getFlashcardsByTopic(topicId: string): Flashcard[] {
  return flashcards.filter((f) => f.topicId === topicId);
}

export function getTimelineEventsByTopic(topicId: string) {
  return timelineEvents.filter((t: any) => t.topicId === topicId);
}

export function getGlossaryByTopic(topicId: string) {
  return glossary.filter((g: any) => g.topicId === topicId);
}
