'use client'
import React, { useState } from "react";
import { CornerDownLeft, Mic, Paperclip } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
    Tooltip,
    TooltipProvider,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { GoogleGenerativeAI } from "@google/generative-ai"; // Import GoogleGenerativeAI from GeminiPage

export default function Boot() {
    const [prompt, setPrompt] = useState("");
    const [conversation, setConversation] = useState([]);

    async function generateText() {
        const apiKey = process.env.NEXT_PUBLIC_API_KEY;
        if (!apiKey) {
            console.error("API key not found. Make sure you've set up the environment variable.");
            return;
        }

        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = await response.text();

        // Process the generated text to include proper indentation and formatting
        const formattedText = formatText(text);

        setConversation([
            ...conversation,
            { text: prompt, isUser: true },
            { text: formattedText, isUser: false }
        ]);
        setPrompt("");
    }

    // Function to format the generated text with proper indentation and formatting
    function formatText(text) {
        // Replace **hi** with <strong>hi</strong>
        text = text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
        // Replace *hi* with <em>hi</em>
        text = text.replace(/\*(.*?)\*/g, "<em>$1</em>");
        
        return text.split('\n').map((line, index) => {
            return <p key={index} className="ml-4" dangerouslySetInnerHTML={{ __html: line }} />;
        });
    }

    return (
        <div className="flex flex-col h-screen">
            <div className="flex-grow overflow-auto">
                {conversation.map((item, index) => (
                    <div key={index} className={`p-3 ${item.isUser ? 'text-right' : 'text-left'}`}>
                        <div className={`inline-block rounded-lg p-2 ${item.isUser ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}>
                            {/* Render HTML using dangerouslySetInnerHTML */}
                            {Array.isArray(item.text) ? item.text : item.text}
                        </div>
                    </div>
                ))}
            </div>
            <footer className="bg-gray-100 p-4 sticky bottom-0">
                <TooltipProvider>
                    <form className="relative overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring">
                        <Label htmlFor="message" className="sr-only">
                            Message
                        </Label>
                        <Textarea
                            id="message"
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                            placeholder="Type your message here..."
                            className="min-h-12 resize-none border-0 p-3 shadow-none focus-visible:ring-0"
                        />
                        <div className="flex items-center p-3 pt-0">
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button variant="ghost" size="icon">
                                        <Paperclip className="size-4" />
                                        <span className="sr-only">Attach file</span>
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent side="top">Attach File</TooltipContent>
                            </Tooltip>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button variant="ghost" size="icon">
                                        <Mic className="size-4" />
                                        <span className="sr-only">Use Microphone</span>
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent side="top">Use Microphone</TooltipContent>
                            </Tooltip>

                            <Button type="button" size="sm" className="ml-auto gap-1.5" onClick={generateText}>
                                Send Message
                                <CornerDownLeft className="size-3.5" />
                            </Button>
                        </div>
                    </form>
                </TooltipProvider>
            </footer>
        </div>
    );
}

