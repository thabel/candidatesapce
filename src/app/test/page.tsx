"use client";
import dynamic from "next/dynamic";
import {Quixote} from "@/app/test/Quiosque";

const PDFViewer = dynamic(
    () => import("@react-pdf/renderer").then((mod) => mod.PDFViewer),
    {
        ssr: false,
        loading: () => <p>Loading...</p>,
    },
);


export default function documentPage()
{
    return (<PDFViewer>
        <Quixote/>
    </PDFViewer>)
};
