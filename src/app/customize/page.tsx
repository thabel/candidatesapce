// here put the job description
// there should be a button to generate the cv based on the job description
// and another button to download the cv as pdf
"use client"
import {Fragment, useState} from "react";
import TopHeader from "@/components/ui/TopHeader";
import CVRender from "@/components/ui/RenderCV";
import JobDescription from "@/components/ui/JobDescription";
import Footer from "@/components/ui/Footer";
import { cvData , CVData} from "@/lib/utils";
export default function Customize() {
    const [data,setData] = useState<CVData>(cvData);
    return (
            <Fragment>
                <TopHeader/>
                <div className="grid grid-cols-2 mx-10 my-6 gap-8">
                    {/* <CreateCvForm initialData={data} setData={setData}></CreateCvForm> */}
                    <JobDescription data={data} onUpdateCV={(newData)=>{
                        console.log(newData);
                        if (newData)
                            setData(newData)
                    }} />
                    <CVRender data={data}/>
                </div>
                <Footer/>
            </Fragment>
        )
}
