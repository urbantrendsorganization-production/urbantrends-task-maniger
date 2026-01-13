import React from "react"
import { SignupForm } from "@/components/signup-form"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

function Sign() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4">
      <Card className="w-full max-w-md">

        <CardContent>
          <SignupForm />
        </CardContent>
      </Card>
    </div>
  )
}

export default Sign
