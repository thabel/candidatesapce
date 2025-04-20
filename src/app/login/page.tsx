"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import ButtonGoogle from "@/app/login/ButtonGoogle";

const FormSchema = z.object({
    email:z.string().email(),
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
})

export default  function Login() {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            username: "",
        },
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {
        console.log("submited", data)
    }

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="w-full max-w-md px-4">
                <h1 className="my-10 text-center text-4xl font-bold">
                    Candidate Space
                </h1>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 text-lg">
                        <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Username</FormLabel>
                                    <FormControl>
                                        <Input placeholder="shadcn" {...field} className="outline-0"/>
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input type="email" placeholder="email@gmail.com" {...field} className="outline-0" required/>
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" className="w-full">Sign up with email</Button>
                        <div className="flex items-center justify-center my-6">
                            <div className="border-t border-gray-300 flex-grow"></div>
                            <span className="mx-4 text-black text-sm whitespace-nowrap">continue with Google</span>
                            <div className="border-t border-gray-300 flex-grow"></div>
                        </div>

                        <ButtonGoogle></ButtonGoogle>



                    </form>
                </Form>
            </div>
        </div>
    )

}