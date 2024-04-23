import { TooltipProvider } from "@/components/plate-ui/tooltip";
import React from "react";

export const TooltipProviderApp = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <TooltipProvider
      disableHoverableContent
      delayDuration={500}
      skipDelayDuration={0}
    >
      {children}
    </TooltipProvider>
  );
};
