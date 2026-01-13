import React from "react"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const steps = [
  {
    title: "Create Projects",
    description: "Organize your work into manageable projects.",
    image: "https://plus.unsplash.com/premium_photo-1677529496297-fd0174d65941?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29sbGFib3JhdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "Add Tasks",
    description: "Break down projects into clear, actionable tasks.",
    image: "https://images.unsplash.com/photo-1590402494587-44b71d7772f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvbGxhYm9yYXRpb258ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Track Progress",
    description: "Monitor completion and stay on schedule with ease.",
    image: "https://images.unsplash.com/photo-1637094410849-96576479b731?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvbGxhYm9yYXRpb258ZW58MHx8MHx8fDA%3D",
  },
]

function Works() {
  return (
    <section className="w-full py-20">
      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl font-semibold mb-4">
            How It Works
          </h2>
          <p className="max-w-3xl mx-auto text-muted-foreground leading-relaxed">
            Urban Tasks helps you plan, execute, and track your work
            from start to finish — without the chaos.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map(({ title, description, image }) => (
            <Card
              key={title}
              className="overflow-hidden transition-all hover:shadow-lg"
            >
              {/* Image */}
              <div className="h-44 w-full overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              <CardHeader className="text-center">
                <CardTitle className="text-lg">
                  {title}
                </CardTitle>
              </CardHeader>

              <CardContent className="text-center">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Works
