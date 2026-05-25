"use client";

import { useState, type FormEvent } from "react";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        setStatus("error");
        setErrorMessage(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Check your connection and try again.");
    }
  }

  return (
    <form
      className="contact-card motion-reveal delay-1"
      onSubmit={handleSubmit}
      noValidate
    >
      <label htmlFor="name">Name</label>
      <input
        id="name"
        name="name"
        placeholder="Your name"
        required
        autoComplete="name"
        disabled={status === "submitting"}
      />
      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        placeholder="you@company.com"
        required
        autoComplete="email"
        disabled={status === "submitting"}
      />
      <label htmlFor="message">Project brief</label>
      <textarea
        id="message"
        name="message"
        rows={4}
        placeholder="What are you looking to build?"
        required
        disabled={status === "submitting"}
      />
      {status === "success" ? (
        <p className="contact-form__status contact-form__status--success" role="status">
          Thanks — your inquiry was sent. We will reply soon.
        </p>
      ) : null}
      {status === "error" ? (
        <p className="contact-form__status contact-form__status--error" role="alert">
          {errorMessage}
        </p>
      ) : null}
      <button
        type="submit"
        className="btn btn-primary mt-4"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Sending..." : "Send Inquiry"}
      </button>
    </form>
  );
}
