import { Button } from "@/components/ui/button"
import Link from "next/link";
import Image from "next/image";


export  default function TopHeader(){
    return (
        <div className="">
            <div className="flex items-end justify-between my-2 mx-10 ">
                <Link href="/" className="flex items-center">
                <h1 className="text-lg font-bold">

                <Image 
                    src="/logo-removebg-preview.png"
                    alt="Logo"
                    width={100}
                    height={100}
                    className="inline-block mr-2"
                />
                </h1>
                </Link>
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