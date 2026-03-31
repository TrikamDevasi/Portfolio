import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Github, Linkedin, Youtube, Mail, Twitter, Code2, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
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
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || "",
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "",
        formRef.current!,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || ""
      );

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <SectionWrapper id="contact" title="Get In Touch" subtitle="Let's build something great together">
      <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Success Toast */}
          <AnimatePresence>
            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="absolute -top-12 left-0 right-0 p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-2 text-emerald-400 text-sm z-10"
              >
                <CheckCircle2 size={16} />
                Message sent! I'll reply within 24 hours.
              </motion.div>
            )}
            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="absolute -top-12 left-0 right-0 p-3 rounded-lg bg-rose-500/10 border border-rose-500/20 flex items-center gap-2 text-rose-400 text-sm z-10"
              >
                <AlertCircle size={16} />
                Failed to send. Please email me directly.
              </motion.div>
            )}
          </AnimatePresence>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <input
              type="text"
              name="from_name" // Match EmailJS template variable
              placeholder="Your Name"
              required
              disabled={status === "loading"}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all disabled:opacity-50"
            />
            <input
              type="email"
              name="from_email" // Match EmailJS template variable
              placeholder="Your Email"
              required
              disabled={status === "loading"}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all disabled:opacity-50"
            />
            <textarea
              name="message"
              placeholder="Your Message (min 10 characters)"
              rows={5}
              required
              disabled={status === "loading"}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all resize-none disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className={`btn-glow w-full px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-all ${
                status === "loading" ? "bg-primary/50 cursor-not-allowed" : "bg-primary text-primary-foreground"
              }`}
            >
              {status === "loading" ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Sending...
                </>
              ) : status === "success" ? (
                <>
                  <CheckCircle2 size={16} />
                  Message Sent!
                </>
              ) : (
                <>
                  <Send size={16} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center"
        >
          <p className="text-muted-foreground mb-6 leading-relaxed text-sm md:text-base">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            Feel free to reach out via the form or my social handles!
          </p>
          <a href="mailto:trikam.devasi.cg@gmail.com" className="text-primary font-mono text-sm mb-8 hover:underline">
            trikam.devasi.cg@gmail.com
          </a>
          <div className="flex flex-wrap gap-4">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                title={label}
                className="p-3 rounded-lg border border-border bg-secondary/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;
