import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { useAuth } from "@/context/auth-context"
import api from "@/lib/axios"
import { toast } from "sonner"

export function LoginForm({
  className,
  ...props
}) {

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const {login} = useAuth();

  const onSubmit = async (data) => {
  setLoading(true)
  try {
    const response = await api.post(
      "/auth/login/",
      {
        email: data.email,
        password: data.password,
      },
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      }
    )

    // save tokens
    localStorage.setItem("access_token", response.data.access)
    localStorage.setItem("refresh_token", response.data.refresh)

    // save user in context
    login(response.data.user)

    toast.success("Login successful!")
    navigate("/")
  } catch (error) {
    console.error(error)
    toast.error(
      error.response?.data?.detail ||
        error.response?.data?.message ||
        "Login failed"
    )
  } finally {
    setLoading(false)
  }
}


  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FieldGroup>
              {/* Email */}
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  {...register("email", { required: "Email is required" })}
                />
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email.message}</p>
                )}
              </Field>

              {/* Password */}
              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  {...register("password", { required: "Password is required" })}
                />
                {errors.password && (
                  <p className="text-sm text-red-500">{errors.password.message}</p>
                )}
              </Field>

              {/* Submit */}
              <Field>
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? "Logging in..." : "Login"}
                </Button>

                <FieldDescription className="text-center">
                  Don&apos;t have an account?{" "}
                  <a href="/signup" className="font-medium underline underline-offset-4">
                    Sign up
                  </a>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
