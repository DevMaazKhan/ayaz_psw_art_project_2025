import AdminLoginForm from "@/components/app/admin-login/login-form";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import Link from "next/link";

const AdminLoginPage = () => {
  return (
    <div>
      <div className="font-[montserrat] px-7 py-5">
        <Link href="/">
          <Button variant="link">
            <Icon name="left-arrow" />
            Back to site
          </Button>
        </Link>
      </div>

      <Card className="w-full max-w-sm font-[montserrat] mx-auto mt-6">
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your username and password to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <AdminLoginForm />
        </CardContent>
        <CardFooter>
          <Button className="w-full" type="submit" form="admin-login-form">Login</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default AdminLoginPage;
