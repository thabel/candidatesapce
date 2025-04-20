import { Button } from "@/components/ui/button"

export  default function TopHeader(){
    return (
        <div className="border-b-2 border-gray-200">
            <div className="flex items-end justify-between my-2 mx-10 ">
                <h1 className="text-lg font-bold">Candidate Space</h1>
                <div className="flex items-center gap-2">
                    <Button type="button">Mes CV</Button>
                    <button className="bg-gray-500 text-white rounded-full w-10 h-10 flex items-center justify-center">
                        A
                        {/*make the letter according to user first name maybe*/}
                    </button>
                </div>
            </div>
        </div>

    )
}