"use client";
import dynamic from "next/dynamic";
import { Quixote } from "@/app/test/Quiosque";

const PDFViewer = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFViewer),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  },
);

export default function DocumentPage() {
  return (
    <div className="h-screen w-full p-4">
      <PDFViewer className="w-full h-full border rounded-lg shadow-lg">
        <Quixote />
      </PDFViewer>
    </div>
  );
}
