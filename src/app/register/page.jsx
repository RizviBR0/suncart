"use client";

import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import { Icon } from "@iconify/react";
import {
    Button,
    Card,
    Description,
    FieldError,
    Form,
    Input,
    Label,
    TextField,
} from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
    const router = useRouter();

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const { email, image, name, password } = Object.fromEntries(formData.entries());

        const { data, error } = await authClient.signUp.email({
            email,
            image,
            name,
            password
        });

        if (error) {
            console.log("Error signing up:", error);
        } else {
            router.push("/");
        }
    };

    const handleGoogleSignin = async () => {
        await authClient.signIn.social({
            provider: "google",
        });
    }

    return (
        <Card className="border mx-auto w-125 py-10 mt-5">
            <h1 className="text-center text-2xl font-bold">Sign Up</h1>

            <Form className="flex w-96 mx-auto flex-col gap-4" onSubmit={onSubmit}>
                <TextField isRequired name="name" type="text">
                    <Label>Name</Label>
                    <Input placeholder="Enter your name" />
                    <FieldError />
                </TextField>

                <TextField isRequired name="image" type="text">
                    <Label>Image URL</Label>
                    <Input placeholder="Image URL" />
                    <FieldError />
                </TextField>

                <TextField
                    isRequired
                    name="email"
                    type="email"
                    validate={(value) => {
                        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                            return "Please enter a valid email address";
                        }

                        return null;
                    }}
                >
                    <Label>Email</Label>
                    <Input placeholder="john@example.com" />
                    <FieldError />
                </TextField>

                <TextField
                    isRequired
                    minLength={8}
                    name="password"
                    type="password"
                    validate={(value) => {
                        if (value.length < 8) {
                            return "Password must be at least 8 characters";
                        }
                        if (!/[A-Z]/.test(value)) {
                            return "Password must contain at least one uppercase letter";
                        }
                        if (!/[0-9]/.test(value)) {
                            return "Password must contain at least one number";
                        }

                        return null;
                    }}
                >
                    <Label>Password</Label>
                    <Input placeholder="Enter your password" />
                    <Description>
                        Must be at least 8 characters with 1 uppercase and 1 number
                    </Description>
                    <FieldError />
                </TextField>

                <div className="flex gap-2 flex-col">
                    <Button className="w-full bg-orange-500" type="submit">
                        Register
                    </Button>
                    <div className="flex justify-center items-center gap-1">
                        <p className="text-gray-600">Already have an account?</p>
                        <Link className="font-semibold text-orange-500 hover:underline" href="/login">
                            Sign In
                        </Link>
                    </div>

                    <div className="divider"></div>

                    <Button onClick={handleGoogleSignin} className="w-full" variant="outline" type="button">
                        <Icon icon="devicon:google" />
                        Sign in with Google
                    </Button>
                </div>
            </Form>
        </Card>
    );
}