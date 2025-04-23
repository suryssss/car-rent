'use client';

import { UserButton } from "@clerk/nextjs";
import React, { useState, useEffect } from "react";

const ClientUserButton = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div className="w-8 h-8 rounded-full bg-gray-200"></div>;
  }

  return <UserButton />;
};

export default ClientUserButton; 