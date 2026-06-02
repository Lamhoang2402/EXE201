"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button, Container, Input } from "@/shared/components/ui";
import { useApp } from "@/shared/context/AppProvider";

export default function LoginPage() {
  const router = useRouter();
  const { login, user } = useApp();
  const [email, setEmail] = useState(user?.email ?? "");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    const success = login(email, password);
    setLoading(false);

    if (!success) {
      setError("Please enter a valid email and password.");
      return;
    }

    router.push("/account");
  };

  return (
    <section className="py-16 md:py-24">
      <Container size="narrow">
        <div className="grid gap-8 rounded-2xl border border-neutral-800 bg-neutral-950/70 p-6 md:grid-cols-[1.1fr_0.9fr] md:p-10">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">Welcome back</p>
            <h1 className="text-3xl font-light text-white md:text-4xl">Sign in to your account</h1>
            <p className="max-w-md text-sm leading-6 text-neutral-400">
              Access your profile, track your orders, and continue shopping with a saved cart.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
            />
            <Input
              label="Password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
            />
            {error && <p className="text-sm text-red-400">{error}</p>}
            <Button type="submit" size="lg" fullWidth disabled={loading}>
              {loading ? "Signing in..." : "Sign in"}
            </Button>
            <p className="text-sm text-neutral-400">
              New here? <Link href="/register" className="text-white underline underline-offset-4">Create an account</Link>
            </p>
          </form>
        </div>
      </Container>
    </section>
  );
}
