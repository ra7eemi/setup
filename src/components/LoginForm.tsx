import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link } from "react-router-dom"


function LoginForm() {
  return (
    <div className="flex items-center justify-center">
        <Card className="w-full max-w-sm mt-8">
  <CardHeader>
    <CardTitle className="text-2xl">Login</CardTitle>
    <CardDescription>Enter your email and password to login</CardDescription>
  </CardHeader>
  <CardContent>
    <div className="grid gap-4">
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="m@example.com" required />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" required />
      </div>
    </div>
  </CardContent>
  <CardFooter>
    <Button ><Link to='/woiw'>Login</Link></Button>
  </CardFooter>
</Card>
    </div>
  )
}

export default LoginForm