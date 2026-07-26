'use client';

import React, { ChangeEvent, FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";

type FormField = "name" | "email" | "subject" | "message";

type FormData = Record<FormField, string>;

const initialFormData: FormData = {
    name: "",
    email: "",
    subject: "",
    message: "",
};

const fieldConfig: Array<{
    name: FormField;
    label: string;
    type?: string;
    placeholder: string;
    rows?: number;
}> = [
    { name: "name", label: "Name", placeholder: "Your name" },
    { name: "email", label: "Email", type: "email", placeholder: "Your email" },
    { name: "subject", label: "Subject", placeholder: "What is this about?" },
    { name: "message", label: "Message", placeholder: "Tell me about your project", rows: 5 },
];

export default function ContactPage() {
    const [formData, setFormData] = useState<FormData>(initialFormData);
    const [successMessage, setSuccessMessage] = useState("");

    const handleChange = ({ target: { name, value } }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const result = await emailjs.send(
                "service_9dlie49",
                "template_douyuxr",
                {
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                },
                "t0xyxfHSaLLB68L1u"
            );

            console.log("✅ Email sent:", result.text);
            setSuccessMessage("✅ Message sent successfully!");
            setFormData(initialFormData);
            setTimeout(() => setSuccessMessage(""), 5000);
        } catch (error) {
            console.error("❌ Email sending failed:", error);
            setSuccessMessage("❌ Failed to send message. Please try again.");
            setTimeout(() => setSuccessMessage(""), 5000);
        }
    };

    return (
        <main className="min-h-screen bg-[#0b0f12] px-4 py-24 text-gray-100">
            <div className="pointer-events-none absolute left-1/2 top-[12%] h-[340px] w-[72%] -translate-x-1/2 rounded-full bg-[#7ee787] opacity-10 blur-[60px]" />

            <div className="relative mx-auto flex w-full max-w-3xl flex-col gap-8">
                <div className="overflow-hidden rounded-[12px] border border-white/10 bg-[#0c0f12] shadow-[0_40px_100px_-30px_rgba(0,0,0,0.7)]">
                    <div className="flex items-center gap-2 border-b border-white/10 bg-[#111519] px-4 py-3">
                        <span className="h-[11px] w-[11px] rounded-full bg-red-500" />
                        <span className="h-[11px] w-[11px] rounded-full bg-yellow-400" />
                        <span className="h-[11px] w-[11px] rounded-full bg-green-500" />
                        <span className="ml-2 font-mono text-[12.5px] text-gray-500">~/darius — contact</span>
                    </div>

                    <div className="p-6 sm:p-8">
                        <div className="mb-8">
                            <p className="mb-3 font-mono text-xs uppercase tracking-[0.14em] text-gray-500 before:content-['//_'] before:text-[#7ee787]">
                                get in touch
                            </p>
                            <h1 className="text-3xl font-semibold tracking-tight text-gray-50 sm:text-4xl">
                                Let&apos;s build something useful.
                            </h1>
                            <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-400 sm:text-base">
                                Reach out for freelance work, collaborations, or just to say hello.
                            </p>
                        </div>

                        {successMessage && (
                            <div
                                className={`mb-6 rounded-lg border px-4 py-3 text-center font-medium ${
                                    successMessage.includes("successfully")
                                        ? "border-[#7ee787]/30 bg-[#7ee787]/10 text-[#b9f8c2]"
                                        : "border-red-500/30 bg-red-500/10 text-red-200"
                                }`}
                            >
                                {successMessage}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-4">
                            {fieldConfig.map(({ name, label, type = "text", placeholder, rows }) => (
                                <div key={name} className="flex flex-col gap-2">
                                    <label htmlFor={name} className="font-mono text-xs uppercase tracking-[0.12em] text-gray-500">
                                        {label}
                                    </label>

                                    {name !== "message" ? (
                                        <input
                                            type={type}
                                            id={name}
                                            name={name}
                                            value={formData[name]}
                                            onChange={handleChange}
                                            className="rounded-lg border border-white/10 bg-[#111519] px-4 py-3 text-gray-100 outline-none transition placeholder:text-gray-600 focus:border-[#7ee787] focus:ring-2 focus:ring-[#7ee787]/20"
                                            placeholder={placeholder}
                                            required
                                        />
                                    ) : (
                                        <textarea
                                            id={name}
                                            name={name}
                                            value={formData[name]}
                                            onChange={handleChange}
                                            rows={rows}
                                            className="rounded-lg border border-white/10 bg-[#111519] px-4 py-3 text-gray-100 outline-none transition placeholder:text-gray-600 focus:border-[#7ee787] focus:ring-2 focus:ring-[#7ee787]/20"
                                            placeholder={placeholder}
                                            required
                                        />
                                    )}
                                </div>
                            ))}

                            <button
                                type="submit"
                                className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/10 bg-[#0d1013] px-6 py-3.5 font-mono text-base text-gray-100 transition hover:-translate-y-0.5 hover:border-[#7ee787] hover:shadow-[0_12px_30px_-10px_rgba(126,231,135,0.35)]"
                            >
                                <span className="text-[#7ee787]">$</span>
                                send --message
                                <span className="inline-block h-[1em] w-[0.55em] animate-caret-blink bg-[#7ee787] align-text-bottom" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}
