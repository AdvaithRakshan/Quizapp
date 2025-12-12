"use client";

import { Suspense } from "react";
import ResultContent from "./result-content";

export default function ResultPage() {
  return (
    <Suspense fallback={<div className="text-white text-2xl">Loading...</div>}>
      <ResultContent />
    </Suspense>
  );
}
