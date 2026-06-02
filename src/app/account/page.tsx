"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button, Container, Card } from "@/shared/components/ui";
import { useApp } from "@/shared/context/AppProvider";

export default function AccountPage() {
  const router = useRouter();
  const { user, logout, isAuthReady } = useApp();

  useEffect(() => {
    if (isAuthReady && !user) {
      router.replace("/login");
    }
  }, [isAuthReady, router, user]);

  if (!isAuthReady || !user) return null;

  return (
    <section className="py-16 md:py-24">
      <Container size="narrow">
        <div className="space-y-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">Account</p>
            <h1 className="mt-2 text-3xl font-light text-white">Your profile</h1>
          </div>

          <Card className="space-y-6 border-neutral-800 bg-neutral-950/70 p-6 md:p-8">
            <div className="space-y-1">
              <p className="text-sm text-neutral-500">Name</p>
              <p className="text-lg text-white">{user.name}</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-neutral-500">Email</p>
              <p className="text-lg text-white">{user.email}</p>
            </div>
            <Button
              variant="secondary"
              onClick={() => {
                logout();
                router.push("/login");
              }}
            >
              Logout
            </Button>
          </Card>

          <Card className="border-neutral-800 bg-neutral-950/70 p-6 md:p-8">
            <h2 className="text-lg text-white">Order history</h2>
            <p className="mt-2 text-sm text-neutral-400">
              Your recent orders will appear here once checkout is enabled.
            </p>
          </Card>
        </div>
      </Container>
    </section>
  );
}
