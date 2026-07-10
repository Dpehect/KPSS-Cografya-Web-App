export interface EncyclopediaEntry {
  id: string;
  topicId: string;
  title: string;
  term: string;
  definition: string;
  shortDefinition: string;
  detailedExplanation: string;
  keyFacts: string[];
  examImportance: number;
  timeline: { year: string, event: string }[];
  category: string;
  aliases: string[];
  keywords: string[];
}
