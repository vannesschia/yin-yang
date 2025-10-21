import Badge from "../components/badge"
import Button from "../components/button"
import { Github } from "lucide-react"

export default function ZProfile() {
  return (
    <div className="min-h-dvh bg-theme text-theme transition-colors duration-200">
        <div className="flex flex-col gap-2 mx-auto pt-20 px-4 md:max-w-2xl">
            <div className="flex flex-col gap-2">
              <h1 className="font-serif tracking-tight text-4xl">ZProfile</h1>
              <p className="text-base/5 text-muted">
                A centralized hub for event management, attendance tracking, and community network for Zeta Pi, a technology professional fraternity.
              </p>
              <div>
                <Badge>Next.js</Badge> <Badge>Javascript</Badge> <Badge>ShadCN</Badge> <Badge>Supabase</Badge> <Badge>PostgreSQL</Badge> <Badge>Vercel</Badge>
              </div>
              <div className="mt-2">
                <Button link="https://github.com/vannesschia/ZProfile">
                  <Github className="icon-4" />
                  GitHub
                </Button>
              </div>
            </div>

            <div className="mt-20 flex flex-col gap-12">
              <div>
                <h2>The Problem</h2>
                <p className="text-base text-muted mt-2">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
                </p>
              </div>

              <div>
                <h2>The Solution</h2>
                <p className="text-base text-muted mt-2">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
                </p>
              </div>
            </div>
        </div>

    </div>
  )
}