import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Mail,
  MapPin,
  Linkedin,
  Github,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
    botField: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const EMAILJS_CONTACT_TEMPLATE_ID = import.meta.env
    .VITE_EMAILJS_CONTACT_TEMPLATE_ID;
  const EMAILJS_AUTOREPLY_TEMPLATE_ID = import.meta.env
    .VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID;
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    emailjs.init(EMAILJS_PUBLIC_KEY);

    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Combine first and last name
    const fullName = `${formData.firstName} ${formData.lastName}`.trim();

    try {
      // Send email to you (notification)
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_CONTACT_TEMPLATE_ID,
        {
          name: fullName,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );

      // Send auto-reply to visitor
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_AUTOREPLY_TEMPLATE_ID,
        {
          name: fullName,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );
      setSubmitStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Failed to send email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }

    if (formData.botField) {
      console.warn("Spam detected – honeypot triggered.");
      setIsSubmitting(false);
      return;
    }
  };

  return (
    <section
      className="py-20 bg-gradient-to-b from-muted/30 to-background"
      id="contact"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Ready to start your next project? Let's bring your ideas to life
            together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">
                Get in Touch
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always open to discussing new opportunities, interesting
                projects, or just having a conversation about technology and
                development.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-ocean rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Response Time</p>
                  <p className="text-muted-foreground">
                    Usually within 24-48 hours
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-sunset rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Location</p>
                  <p className="text-muted-foreground">Central Florida</p>
                </div>
              </div>
            </div>
            <input
              type="text"
              name="botField"
              className="hidden"
              autoComplete="off"
            />
            <div className="flex space-x-4 pt-4">
              <Button variant="outline" size="lg" className="flex-1" asChild>
                <a
                  href="https://www.linkedin.com/in/sherika-fayson/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </a>
              </Button>
              <Button variant="outline" size="lg" className="flex-1" asChild>
                <a
                  href="https://github.com/Sfayson1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="shadow-florida hover:shadow-sunset transition-all duration-300">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="John"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Project Collaboration"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or just say hello!"
                    className="min-h-[120px]"
                    required
                  />
                </div>

                <Button
                  variant="hero"
                  size="lg"
                  className="w-full"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>

                {/* Success/Error Messages */}
                {submitStatus === "success" && (
                  <div className="flex items-center gap-2 p-4 bg-green-50 text-green-800 rounded-lg border border-green-200">
                    <CheckCircle className="w-5 h-5" />
                    <p>
                      Message sent successfully! I'll get back to you within
                      24-48 hours.
                    </p>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="flex items-center gap-2 p-4 bg-red-50 text-red-800 rounded-lg border border-red-200">
                    <AlertCircle className="w-5 h-5" />
                    <p>
                      Failed to send message. Please try again or contact me via
                      LinkedIn.
                    </p>
                  </div>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
