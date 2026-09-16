import { useState } from "react";
import { useSearchParams } from "react-router";
import { Eyebrow, Section, Container, Field, Btn } from "../components/ui";
import { useScrollReveal } from "../hooks/useScrollReveal";

const enquiryTypes = ["General", "Partnerships", "Investors", "Careers", "Press", "Nexora support"];

const contactEmails = [
  { label: "General", email: "hello@hephix.org" },
  { label: "Support", email: "support@hephix.org" },
  { label: "Privacy", email: "privacy@hephix.org" },
  { label: "Legal", email: "legal@hephix.org" },
  { label: "Security", email: "security@hephix.org" },
];

export default function Contact() {
  useScrollReveal();
  const [searchParams] = useSearchParams();
  const defaultType = searchParams.get("type") || "General";
  const matchedType = enquiryTypes.find((t) => t.toLowerCase() === defaultType.toLowerCase()) || "General";

  const [form, setForm] = useState({ name: "", email: "", type: matchedType, subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Name is required.";
    if (!form.email.trim()) errs.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = "Please enter a valid email address.";
    if (!form.subject.trim()) errs.subject = "Subject is required.";
    if (!form.message.trim()) errs.message = "Message is required.";
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setSubmitted(true);
  };

  const [newsletter, setNewsletter] = useState("");
  const [newsletterDone, setNewsletterDone] = useState(false);

  return (
    <>
      <Section style={{ paddingTop: "160px", paddingBottom: "64px" }}>
        <Container>
          <Eyebrow>Contact</Eyebrow>
          <h1 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(44px, 6vw, 64px)", lineHeight: 1.05, letterSpacing: "-1px", color: "var(--ink)" }}>
            Get in touch.
          </h1>
        </Container>
      </Section>

      <Section style={{ paddingTop: "0" }}>
        <Container>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "64px" }}>
            {/* Form */}
            <div>
              {submitted ? (
                <div style={{ padding: "32px", background: "var(--white)", border: "1px solid var(--line)", borderRadius: "4px", borderLeft: "3px solid #C85A18" }}>
                  <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "20px", color: "var(--ink)", marginBottom: "8px" }}>Message sent.</h3>
                  <p style={{ color: "var(--muted)", fontSize: "15px" }}>We'll reply within a few working days.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <Field label="Name" name="name" placeholder="Your name" required value={form.name} onChange={handleChange} error={errors.name} />
                  <Field label="Email" name="email" type="email" placeholder="your@email.com" required value={form.email} onChange={handleChange} error={errors.email} />
                  <Field label="Enquiry type" name="type" as="select" required value={form.type} onChange={handleChange}>
                    {enquiryTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                  </Field>
                  <Field label="Subject" name="subject" placeholder="What's this about?" required value={form.subject} onChange={handleChange} error={errors.subject} />
                  <Field label="Message" name="message" as="textarea" placeholder="Your message..." required value={form.message} onChange={handleChange} error={errors.message} />
                  <Btn type="submit" variant="primary">Send message</Btn>
                </form>
              )}
            </div>

            {/* Details */}
            <div>
              <div style={{ background: "var(--ink)", borderRadius: "4px", padding: "40px", color: "#F6F4F0" }}>
                <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "20px", color: "#F6F4F0", marginBottom: "24px" }}>Contact details</h2>
                {contactEmails.map((c) => (
                  <div key={c.label} style={{ marginBottom: "16px" }}>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#9E948E", marginBottom: "4px" }}>{c.label}</p>
                    <a href={`mailto:${c.email}`} style={{ color: "#F6F4F0", fontSize: "15px", textDecoration: "none" }}>{c.email}</a>
                  </div>
                ))}
                <div style={{ marginTop: "32px", paddingTop: "24px", borderTop: "1px solid rgba(226,221,214,0.12)" }}>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#9E948E", marginBottom: "4px" }}>Location</p>
                  <p style={{ color: "#F6F4F0", fontSize: "15px" }}>Nairobi, Kenya</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Newsletter */}
      <Section dark>
        <Container>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "32px" }}>
            <div>
              <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "24px", color: "#F6F4F0", marginBottom: "8px" }}>Stay in the loop.</h2>
              <p style={{ color: "#9E948E", fontSize: "15px" }}>Updates on Nexora and what we're building at Hephix.</p>
            </div>
            {newsletterDone ? (
              <p style={{ color: "#C85A18", fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>You're subscribed. Thank you.</p>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setNewsletterDone(true); }} style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={newsletter}
                  onChange={(e) => setNewsletter(e.target.value)}
                  required
                  style={{ height: "48px", padding: "0 16px", borderRadius: "4px", border: "1.5px solid #2A2D35", background: "#1A1D25", color: "#F6F4F0", fontFamily: "'Inter', sans-serif", fontSize: "15px", minWidth: "260px" }}
                />
                <button type="submit" style={{ height: "48px", padding: "0 24px", background: "#F6F4F0", color: "#0F1117", border: "none", borderRadius: "4px", fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "15px", cursor: "pointer" }}>Subscribe</button>
              </form>
            )}
          </div>
        </Container>
      </Section>
    </>
  );
}
