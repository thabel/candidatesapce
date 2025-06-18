"use client";
import { useState, useMemo } from "react";
import { ResumeIframeCSR } from "@/components/Resume/ResumeIFrame";
import { ResumePDF } from "@/components/Resume/ResumePDF";
import {
  ResumeControlBarCSR,
  ResumeControlBarBorder,
} from "@/components/Resume/ResumeControlBar";
import { FlexboxSpacer } from "@/components/FlexboxSpacer";
import { useAppSelector } from "@/lib/redux/hooks";
import { selectResume } from "@/lib/redux/resumeSlice";
import { selectSettings } from "@/lib/redux/settingsSlice";
import { DEBUG_RESUME_PDF_FLAG } from "@/lib/constants";
import {
  useRegisterReactPDFFont,
  useRegisterReactPDFHyphenationCallback,
} from "@/components/fonts/hooks";
import dynamic from "next/dynamic";

import { NonEnglishFontsCSSLazyLoader } from "@/components/fonts/NonEnglishFontsCSSLoader";

const PDFViewer = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFViewer),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  },
);

export const Resume = () => {
  const [scale, setScale] = useState(0.8);
  const resume = useAppSelector(selectResume);
  const settings = useAppSelector(selectSettings);
  const document = useMemo(
    () => <ResumePDF resume={resume} settings={settings} isPDF={true} />,
    [resume, settings]
  );

  useRegisterReactPDFFont();
  useRegisterReactPDFHyphenationCallback(settings.fontFamily);

  return (
    <>  
   
            <PDFViewer className="w-full h-full border rounded-lg shadow-lg">

              <ResumePDF
                resume={resume}
                settings={settings}
                isPDF={true}
              />
              </PDFViewer>
    
    </>
  );
};
