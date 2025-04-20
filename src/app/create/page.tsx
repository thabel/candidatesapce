// creating the create new cv page
// it's needs the TopHeader
// two section
// one for the form
// the other for the rending
// let's split it

import {Fragment} from "react";
import TopHeader from "@/components/ui/TopHeader";
import CreateCvForm from "@/components/ui/createCvForm";
import CVRender from "@/components/ui/RenderCV";
import Footer from "@/components/ui/Footer";

export default function createCV() {
    return (
        <Fragment>
            <TopHeader/>
            <div className="grid grid-cols-2 mx-10 my-6 gap-8">
                <CreateCvForm></CreateCvForm>
                <CVRender></CVRender>
            </div>
            <Footer/>
        </Fragment>
    )
}