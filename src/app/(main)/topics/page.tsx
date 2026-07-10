import type { Metadata } from "next";
import { TopicsPage } from "@/features/topics/components/TopicsPage";

export const metadata: Metadata = {
  title: "KPSS Coğrafya Konu Akademisi",
  description: "KPSS Coğrafya konularını derin anlatım, kavram ilişkisi, anayasal süreç, sık hata ve açıklamalı test akışıyla çalış.",
};

export default function TopicsRoute() {
  return <TopicsPage />;
}
