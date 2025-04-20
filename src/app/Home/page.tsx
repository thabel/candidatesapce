import { Fragment } from "react";
import { Button } from "@/components/ui/button";
import { FileText, Upload, PlusCircle } from "lucide-react";
import TopHeader from "@/components/ui/TopHeader";
import Footer from "@/components/ui/Footer";
import Link from 'next/link';


export default function WelcomePage() {
    const total_of_cv = "five";
    const username = "thabel";
    return (
        <Fragment>
            <TopHeader />
            <div className="max-w-6xl mx-auto px-4 mb-11">
                <h1 className="text-4xl text-center my-12">
                    Welcome {username}
                </h1>
                {/*<p className="text-center text-lg text-muted-foreground mb-16">*/}
                {/*    Choose how you'd like to create your CV*/}
                {/*</p>*/}

                <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto ">
                    {/* Create cv Option */}
                    <div className="bg-card p-6 rounded-lg border hover:shadow-lg transition-shadow">
                        <div className="text-center mb-4">
                            <PlusCircle className="w-12 h-12 mx-auto mb-4 text-primary" />
                            <h2 className="text-xl font-semibold mb-2">Start from Scratch</h2>
                            <p className="text-sm text-muted-foreground mb-10">
                                Create a completely new CV
                            </p>
                        </div>
                        <Link href="/create" >
                            <Button className="w-full hover:cursor-pointer" variant="default">
                                Create New
                            </Button>
                        </Link>

                    </div>

                    {/* Upload Option */}
                    <div className="bg-card p-6 rounded-lg border hover:shadow-lg transition-shadow">
                        <div className="text-center mb-4">
                            <Upload className="w-12 h-12 mx-auto mb-4 text-primary" />
                            <h2 className="text-xl font-semibold mb-2">Modify Existing CV</h2>
                            <p className="text-sm text-muted-foreground mb-10">
                               Modify existing cv ( {total_of_cv} cvs)
                            </p>
                        </div>
                        <Button className="w-full" variant="default">
                            Modify CV
                        </Button>
                    </div>

                    {/* Personalize Option */}
                    <div className="bg-card p-6 rounded-lg border hover:shadow-lg transition-shadow">
                        <div className="text-center mb-4">
                            <FileText className="w-12 h-12 mx-auto mb-4 text-primary" />
                            <h2 className="text-xl font-semibold mb-2">Customize cv</h2>
                            <p className="text-sm text-muted-foreground mb-4">
                                Adjust cv so it matches job offer and
                                generate motivation letter.
                            </p>
                        </div>
                        <Button className="w-full " variant="default">
                            Customize cv
                        </Button>
                    </div>


                </div>
            </div>
            <Footer/>
        </Fragment>
    );
}
