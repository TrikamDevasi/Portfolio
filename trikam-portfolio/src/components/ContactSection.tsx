import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Github, Linkedin, Youtube, Mail, Twitter, Code2, CheckCircle2, AlertCircle, Loader2, MapPin, Clock, MessageSquare } from "lucide-react";
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

      await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current!,
        publicKey
      );

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
    <SectionWrapper id="contact" title="Get In Touch" subtitle="Let's connect and build something impactful">
      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto items-start">
        {/* Form Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card p-6 sm:p-8 rounded-2xl glow-border relative"
        >
          {/* Success / Error Alerts */}
          <AnimatePresence>
            {status === "success" && (
              <motion.div
                role="alert"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-3 text-emerald-400 text-sm"
              >
                <CheckCircle2 size={18} className="shrink-0" />
                <span>Message sent successfully! I'll get back to you within 24 hours.</span>
              </motion.div>
            )}
            {status === "error" && (
              <motion.div
                role="alert"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mb-6 p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center gap-3 text-rose-400 text-sm"
              >
                <AlertCircle size={18} className="shrink-0" />
                <span>Unable to send through the form. Please reach out directly at <a href="mailto:trikam.devasi.cg@gmail.com" className="underline font-semibold text-rose-300">trikam.devasi.cg@gmail.com</a></span>
              </motion.div>
            )}
          </AnimatePresence>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div>
              <label htmlFor="from_name" className="block text-xs font-semibold uppercase tracking-wider text-foreground/80 mb-2">
                Your Name <span className="text-primary">*</span>
              </label>
              <input
                id="from_name"
                type="text"
                name="from_name"
                placeholder="Trikam Devasi"
                required
                disabled={status === "loading"}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-secondary/60 border border-border text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all disabled:opacity-50 text-sm"
              />
            </div>

            <div>
              <label htmlFor="from_email" className="block text-xs font-semibold uppercase tracking-wider text-foreground/80 mb-2">
                Your Email <span className="text-primary">*</span>
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
                className="w-full px-4 py-3 rounded-lg bg-secondary/60 border border-border text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all disabled:opacity-50 text-sm"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-foreground/80 mb-2">
                Your Message <span className="text-primary">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Hi Trikam, I'd like to discuss an opportunity..."
                rows={5}
                required
                minLength={10}
                disabled={status === "loading"}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-secondary/60 border border-border text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none disabled:opacity-50 text-sm"
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              aria-label="Send message"
              className={`w-full px-6 py-3.5 rounded-lg font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2.5 transition-all ${
                status === "loading"
                  ? "bg-primary/50 text-primary-foreground cursor-not-allowed"
                  : "bg-primary text-primary-foreground hover:brightness-110 hover:shadow-[0_0_25px_rgba(var(--primary),0.3)] active:scale-[0.98]"
              }`}
            >
              {status === "loading" ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Sending Message...
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

        {/* Developer Contact Info & Status Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-col gap-6"
        >
          {/* Info Card */}
          <div className="glass-card p-6 sm:p-8 rounded-2xl glow-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10 text-primary border border-primary/20">
                <MessageSquare size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Direct Contact</h3>
                <p className="text-xs text-muted-foreground font-mono">Open for opportunities</p>
              </div>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              I am actively seeking software engineering internships, collaborative open-source projects, and full-stack development opportunities.
            </p>

            <div className="space-y-4 border-t border-border/40 pt-6">
              <div className="flex items-center gap-3 text-sm text-foreground/80">
                <MapPin size={18} className="text-primary shrink-0" />
                <span>Ahmedabad, Gujarat, India</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-foreground/80">
                <Clock size={18} className="text-primary shrink-0" />
                <span>IST (UTC+5:30) · Quick Response Guaranteed</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-foreground/80">
                <Mail size={18} className="text-primary shrink-0" />
                <a
                  href="mailto:trikam.devasi.cg@gmail.com"
                  className="text-primary hover:underline font-mono text-xs sm:text-sm font-medium"
                >
                  trikam.devasi.cg@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Social Profiles Grid */}
          <div className="glass-card p-6 rounded-2xl glow-border">
            <h4 className="text-xs font-bold uppercase tracking-widest text-foreground/70 mb-4">
              Connect Across Platforms
            </h4>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="flex flex-col items-center justify-center p-3 rounded-xl border border-border/50 bg-secondary/30 hover:border-primary/50 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all group"
                >
                  <Icon size={20} className="group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] font-mono mt-1.5 opacity-80 group-hover:opacity-100">{label}</span>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;
