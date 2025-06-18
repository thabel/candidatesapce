import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function Home() {
  return (
    <div className="grid mx-auto max-w-4xl px-6 justify-items-start mt-16">
      {/* Hero Text */}
      <h1 className="text-4xl md:text-5xl font-bold text-foreground">
        Automate your CV creation with our{" "}
        <span className="text-primary">AI-powered</span> tool.
      </h1>

      {/* Features List */}
      <ul className="mt-8 space-y-4 text-lg text-muted-foreground list-disc pl-6">
        <li className="pl-2">
          <p>Customize it to match your job description and download as PDF.</p>
        </li>
        <li className="pl-2">
          <p>Render it in real-time to preview instantly.</p>
        </li>
        <li className="pl-2">
          <p className="flex items-center gap-2">
            <span>Automate sending to recruiters + track applications</span>
            <span className="bg-accent/20 text-accent text-sm px-2 py-1 rounded-full">
              Coming Soon
            </span>
          </p>
        </li>
      </ul>

      {/* CTA Button */}
      <Button
        type="button"
        className="mt-12 px-8 py-6 text-xl font-semibold bg-primary hover:bg-primary/90 transition-colors"
      >
        <Link href="/create">
        Start Now →
        </Link>
      </Button>
    </div>
  );
}
