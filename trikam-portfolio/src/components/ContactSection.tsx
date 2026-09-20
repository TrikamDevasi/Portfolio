import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Github, Linkedin, Youtube, Mail, Twitter, Code2, CheckCircle2, AlertCircle, Loader2, MapPin, Clock } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import emailjs from "@emailjs/browser";

const socials = [
  { icon: Github, href: "https://github.com/TrikamDevasi", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/trikam-devasi-3975573a2/", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/TrikamDevasi16", label: "X (Twitter)" },
  { icon: Code2, href: "https://leetcode.com/u/TrikamDevasi/", label: "LeetCode" },
  { icon: Youtube, href: "https://youtube.com/@trikamdevasi16?si=erOHjEcrcvh1mS6Z", label: "YouTube" },
  { icon: Mail, href: "mailto:trikam.devasi.cg@gmail.com", label: "Email" },
];

type Status = "idle" | "loading" | "success" | "error";

const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.message.trim().length < 10) return;

    setStatus("loading");

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "";
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "";
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "";

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("Email service is not configured.");
      }

      await emailjs.sendForm(serviceId, templateId, formRef.current!, publicKey);

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <SectionWrapper id="contact" title="Contact" subtitle="Reach out directly about opportunities or projects.">
      <div className="grid md:grid-cols-2 gap-7 max-w-5xl mx-auto items-start">

        {/* Contact Form */}
        <div className="glass-card p-5 sm:p-6 rounded-xl">
          {/* Success / Error Alerts */}
          <AnimatePresence>
            {status === "success" && (
              <motion.div
                role="alert"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="mb-6 p-4 rounded-lg bg-accent-soft border border-accent-border flex items-center gap-3 text-primary text-sm"
              >
                <CheckCircle2 size={16} className="shrink-0" />
                <span>Message sent. I'll get back to you within 24 hours.</span>
              </motion.div>
            )}
            {status === "error" && (
              <motion.div
                role="alert"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="mb-6 p-4 rounded-lg bg-rose-500/10 border border-rose-500/30 flex items-center gap-3 text-rose-400 text-sm"
              >
                <AlertCircle size={16} className="shrink-0" />
                <span>
                  Failed to send. Email me directly at{" "}
                  <a href="mailto:trikam.devasi.cg@gmail.com" className="underline font-semibold text-rose-300">
                    trikam.devasi.cg@gmail.com
                  </a>
                </span>
              </motion.div>
            )}
          </AnimatePresence>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="from_name" className="block text-xs font-semibold uppercase tracking-wider text-foreground/80 mb-2">
                Name <span className="text-primary">*</span>
              </label>
              <input
                id="from_name"
                type="text"
                name="from_name"
                placeholder="Your name"
                required
                disabled={status === "loading"}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-surface border border-border text-foreground placeholder:text-subtle-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors disabled:opacity-50 text-sm"
              />
            </div>

            <div>
              <label htmlFor="from_email" className="block text-xs font-semibold uppercase tracking-wider text-foreground/80 mb-2">
                Email <span className="text-primary">*</span>
              </label>
              <input
                id="from_email"
                type="email"
                name="from_email"
                placeholder="name@example.com"
                required
                disabled={status === "loading"}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-surface border border-border text-foreground placeholder:text-subtle-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors disabled:opacity-50 text-sm"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-foreground/80 mb-2">
                Message <span className="text-primary">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Hi Trikam, I'd like to discuss..."
                rows={5}
                required
                minLength={10}
                disabled={status === "loading"}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-surface border border-border text-foreground placeholder:text-subtle-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none disabled:opacity-50 text-sm"
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              aria-label="Send message"
              className={`w-full px-6 py-3 rounded-lg font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all ${
                status === "loading"
                  ? "bg-primary/50 text-primary-foreground cursor-not-allowed"
                  : "bg-primary text-primary-foreground hover:bg-primary-hover active:scale-[0.98]"
              }`}
            >
              {status === "loading" ? (
                <>
                  <Loader2 size={15} className="animate-spin" />
                  Sending…
                </>
              ) : (
                <>
                  <Send size={15} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-4">
          <div className="glass-card p-5 rounded-xl">
            <h3 className="text-sm font-bold text-foreground mb-1">Direct Contact</h3>
            <p className="text-xs font-mono text-muted-foreground mb-4">
              Open to internships and collaborative projects.
            </p>

            <div className="space-y-2.5">
              <div className="flex items-center gap-3 text-sm text-foreground/80">
                <MapPin size={14} className="text-muted-foreground shrink-0" />
                <span className="text-sm text-muted-foreground">Ahmedabad, Gujarat, India</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-foreground/80">
                <Clock size={14} className="text-muted-foreground shrink-0" />
                <span className="text-sm text-muted-foreground">IST (UTC+5:30)</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={14} className="text-muted-foreground shrink-0" />
                <a
                  href="mailto:trikam.devasi.cg@gmail.com"
                  className="text-primary hover:underline font-mono text-sm"
                >
                  trikam.devasi.cg@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Social links */}
          <div className="glass-card p-5 rounded-xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
              Profiles
            </p>
            <div className="flex flex-wrap gap-2">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="flex items-center gap-2 px-3 py-2 rounded-md border border-border bg-surface-elevated text-muted-foreground hover:text-foreground hover:border-border-hover hover:-translate-y-0.5 hover:bg-surface-hover active:scale-95 transition-all duration-150 text-xs font-mono"
                >
                  <Icon size={14} />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;
