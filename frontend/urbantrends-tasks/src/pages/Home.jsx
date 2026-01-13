import React from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import Works from "@/components/Works"

function Home() {
    return (
        <div className="w-full">

            {/* Hero Section */}
            <section className="relative h-[28rem] w-full">
                <img
                    src="/tasks.jpg"
                    alt="Task management dashboard"
                    className="absolute inset-0 h-full w-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50" />

                <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Welcome to Urban Tasks
                    </h1>

                    <p className="max-w-xl text-gray-200 mb-6">
                        Organize your work. Track progress. Get things done without the chaos.
                    </p>

                    <Button asChild size="lg">
                        <Link to="/get-started">Get Started</Link>
                    </Button>
                </div>
            </section>


            {/* about section */}
            <section className="max-w-6xl mx-auto my-16 px-4">
                <div className="flex flex-col md:flex-row items-center gap-8">

                    {/* Text Content */}
                    <div className="md:w-1/2">
                        <h2 className="text-2xl font-semibold mb-4">
                            Manage Your Tasks Efficiently
                        </h2>

                        <p className="text-muted-foreground mb-6 leading-relaxed">
                            Urban Tasks helps you organize and track your daily work with clarity.
                            Whether it’s personal goals or team projects, you get the tools to stay
                            focused, productive, and in control.
                        </p>

                        <Button variant="outline" asChild>
                            <Link to="/services">Learn More</Link>
                        </Button>
                    </div>

                    {/* Image */}
                    <div className="md:w-1/2">
                        <img
                            src="https://plus.unsplash.com/premium_photo-1683749810514-860f96ad0735?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHRhc2tzfGVufDB8fDB8fHww"
                            alt="Task management illustration"
                            className="w-full rounded-lg shadow-lg object-cover"
                        />
                    </div>

                </div>
            </section>

            {/* Made For Section */}
            <section className="max-w-6xl mx-auto my-16 px-4">
                <div className="text-center mb-12">
                    <h2 className="text-2xl font-semibold">Made for Everyone</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Designed to provide tailored experiences for Businesses, Clients, and Developers. Whatever your role, Urban Tasks gives you the tools you need to stay productive.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Admin */}
                    <div className="bg-background/80 border rounded-lg p-4 flex flex-col items-center text-center shadow-md hover:shadow-lg transition">
                        <img src="https://plus.unsplash.com/premium_photo-1688821131205-52f5c633ce69?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YnVzaW5lc3Nlc3xlbnwwfHwwfHx8MA%3D%3D" alt="Admin" className=" mb-4" />
                        <h3 className="text-lg font-semibold mb-2">Businesses</h3>
                        <p className="text-muted-foreground">
                            Help Businesses perform better by organizing tasks, tracking progress, and enhancing team collaboration.
                        </p>
                    </div>

                    {/* Clients */}
                    <div className="bg-background/80 border rounded-lg p-4 flex flex-col items-center text-center shadow-md hover:shadow-lg transition">
                        <img src="https://plus.unsplash.com/premium_photo-1661284821299-f5e8b3c97242?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2xpZW50c3xlbnwwfHwwfHx8MA%3D%3D" alt="Clients" className=" mb-4" />
                        <h3 className="text-lg font-semibold mb-2">Clients</h3>
                        <p className="text-muted-foreground">
                            Keep track of your projects, review progress, and communicate seamlessly with your team.
                        </p>
                    </div>

                    {/* Developers */}
                    <div className="bg-background/80 border rounded-lg p-4 flex flex-col items-center text-center shadow-md hover:shadow-lg transition">
                        <img src="https://plus.unsplash.com/premium_photo-1678565869434-c81195861939?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGV2ZWxvcGVyc3xlbnwwfHwwfHx8MA%3D%3D" alt="Developers" className="mb-4" />
                        <h3 className="text-lg font-semibold mb-2">Developers</h3>
                        <p className="text-muted-foreground">
                            Built with modern tools and best practices to help you build better applications.
                        </p>
                    </div>

                </div>
            </section>

            {/* how it works */}
            <section>
                <Works />
            </section>





        </div>
    )
}

export default Home
