"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useApp } from "@/shared/context/AppProvider";

export function LoginRedirect() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { openLogin } = useApp();

  useEffect(() => {
    const redirect = searchParams.get("redirect");
    openLogin(redirect ?? undefined);
    router.replace("/");
  }, [openLogin, router, searchParams]);

  return null;
}
