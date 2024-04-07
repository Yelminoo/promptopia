"use client";

import React from "react";
import { SessionProvider } from "next-auth/react";
function Provider({ children, session }) {
  return <SessionProvider>{children}</SessionProvider>;
}

export default Provider;
