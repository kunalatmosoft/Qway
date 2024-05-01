"use client"

import Link from "next/link";
import * as React from "react";
import {
  Book,
  Bot,
  Code2,
  Settings2,
  SquareTerminal
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";

const Navbar = () => {
  return (
    <TooltipProvider>
      <nav className="grid gap-1 p-2 justify-start">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-lg bg-muted"
              aria-label="Playground"
            >
              <SquareTerminal className="size-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right" sideOffset={5}>
            Playground
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-lg"
              aria-label="Models"
            >
              <Bot className="size-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right" sideOffset={5}>
            Models
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-lg"
              aria-label="API"
            >
              <Code2 className="size-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right" sideOffset={5}>
            API
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-lg"
              aria-label="Documentation"
            >
              <Book className="size-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right" sideOffset={5}>
            Documentation
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-lg"
              aria-label="Settings"
            >
            <Link href={"./main"}>Main</Link>
              <Settings2 className="size-5" />
            </Button>
          </TooltipTrigger>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-lg"
              aria-label="Settings"
            >
            <Link href={"./mail"}>Blog</Link>
              <Settings2 className="size-5" />
            </Button>
          </TooltipTrigger>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-lg"
              aria-label="Settings"
            >
            <Link href={"./Login"}>Settings</Link>
              <Settings2 className="size-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right" sideOffset={5}>
          </TooltipContent>
        </Tooltip>
      </nav>
    </TooltipProvider>
  );
};

export default Navbar;