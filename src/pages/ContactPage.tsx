import { useState } from "react";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { Mail, Phone, MapPin } from "lucide-react";

export function ContactPage() {
  const [formData, setFormData] = useState({
    projectType: "",
    deadline: "",
    process: "",
    filesUrl: "",
    budget: "",
    country: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const faqs = [
    {
      question: "Do you offer NDAs?",
      answer: "Yes, we can sign an NDA before discussing project details. Just mention it in your initial contact.",
    },
    {
      question: "How are IP rights handled?",
      answer: "Full IP assignment is transferred to you upon final payment. All work product and deliverables become your property.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept bank transfers in EUR, USD, and GBP via Wise and Payoneer. 50% upfront, 50% on delivery.",
    },
    {
      question: "What file formats do you deliver?",
      answer: "Standard deliverables include STEP (parametric), STL (mesh), and high-resolution renders. Additional formats like DXF, OBJ, or IGES available on request.",
    },
    {
      question: "How quickly can we start?",
      answer: "Typically within 2-3 business days after scope confirmation and initial payment. Rush projects available with +25% fee.",
    },
  ];

  return (
    <div className="pt-[72px]">
      {/* Header */}
      <section className="py-12 md:py-14 xl:py-32 bg-[var(--surface)]">
        <div className="mx-auto px-4 md:px-6 xl:px-0 max-w-[640px] md:max-w-[720px] xl:max-w-none" style={{ maxWidth: '1120px' }}>
          <h1 className="mb-4 text-center">Start with a Feasibility Check</h1>
          <p className="text-[var(--ink-700)] text-center mx-auto mb-6 md:mb-8 xl:mb-8 sm:max-w-full" style={{ maxWidth: '840px' }}>
            Share a link to files or book a quick call. Typical response within 24 hours.
          </p>

          {/* Micro-localization */}
          <div className="text-center space-y-2">
            <p className="text-[var(--muted-500)]">
              <small><strong>DE:</strong> Kurze Anfrage? Ich antworte innerhalb von 24 Stunden.</small>
            </p>
            <p className="text-[var(--muted-500)]">
              <small><strong>ES:</strong> Consulta rápida: respondo en menos de 24 horas.</small>
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-12 md:py-14 xl:py-32 bg-[var(--subsurface)]">
        <div className="mx-auto px-4 md:px-6 xl:px-0 max-w-[640px] md:max-w-[720px] xl:max-w-none" style={{ maxWidth: '1120px' }}>
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 md:gap-10 xl:gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <a
                    href="mailto:hello@designedbykirtan.in"
                    className="flex items-center gap-3 text-[var(--ink-700)] hover:text-[var(--accent-600)] transition-colors"
                  >
                    <Mail size={20} className="text-[var(--accent-600)]" />
                    hello@designedbykirtan.in
                  </a>
                  <a
                    href="tel:+1234567890"
                    className="flex items-center gap-3 text-[var(--ink-700)] hover:text-[var(--accent-600)] transition-colors"
                  >
                    <Phone size={20} className="text-[var(--accent-600)]" />
                    +1 (234) 567-890
                  </a>
                  <div className="flex items-center gap-3 text-[var(--ink-700)]">
                    <MapPin size={20} className="text-[var(--accent-600)]" />
                    EU Business Hours
                  </div>
                </div>
              </div>

              <div className="bg-[var(--surface)] rounded-2xl p-4 md:p-5 xl:p-6 border border-[var(--border-200)]">
                <h4 className="mb-3">Response Time</h4>
                <p className="text-[var(--ink-700)] mb-4">
                  <small>Typical response within 24 hours during EU business hours (Mon-Fri, 9am-6pm CET).</small>
                </p>
                <h4 className="mb-3 mt-6">Call Availability</h4>
                <p className="text-[var(--ink-700)]">
                  <small>2-3 EU call slots available weekly. Book via Calendly below.</small>
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="xl:col-span-2">
              <form onSubmit={handleSubmit} className="bg-[var(--surface)] rounded-2xl p-4 md:p-6 xl:p-8 border border-[var(--border-200)]">
                <h3 className="mb-6">Project Inquiry</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Project Type */}
                  <div>
                    <Label htmlFor="projectType">Project Type *</Label>
                    <Select
                      value={formData.projectType}
                      onValueChange={(value) =>
                        setFormData({ ...formData, projectType: value })
                      }
                    >
                      <SelectTrigger id="projectType" className="mt-2 h-12 rounded-xl">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="enclosure">Enclosure Design</SelectItem>
                        <SelectItem value="scan">Scan-to-CAD</SelectItem>
                        <SelectItem value="concept">Concept Sprint</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Deadline */}
                  <div>
                    <Label htmlFor="deadline">Target Deadline</Label>
                    <Input
                      id="deadline"
                      type="text"
                      placeholder="e.g., 2 weeks"
                      value={formData.deadline}
                      onChange={(e) =>
                        setFormData({ ...formData, deadline: e.target.value })
                      }
                      className="mt-2 h-12 rounded-xl"
                    />
                  </div>

                  {/* Process/Material */}
                  <div>
                    <Label htmlFor="process">Process/Material</Label>
                    <Input
                      id="process"
                      type="text"
                      placeholder="e.g., FDM, SLA, ABS"
                      value={formData.process}
                      onChange={(e) =>
                        setFormData({ ...formData, process: e.target.value })
                      }
                      className="mt-2 h-12 rounded-xl"
                    />
                  </div>

                  {/* Budget */}
                  <div>
                    <Label htmlFor="budget">Budget Bracket</Label>
                    <Select
                      value={formData.budget}
                      onValueChange={(value) =>
                        setFormData({ ...formData, budget: value })
                      }
                    >
                      <SelectTrigger id="budget" className="mt-2 h-12 rounded-xl">
                        <SelectValue placeholder="Select range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="30-100">€30-€100</SelectItem>
                        <SelectItem value="100-300">€100-€300</SelectItem>
                        <SelectItem value="300+">€300+</SelectItem>
                        <SelectItem value="flexible">Flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Files URL */}
                  <div className="md:col-span-2">
                    <Label htmlFor="filesUrl">Files (Dropbox/Drive URL)</Label>
                    <Input
                      id="filesUrl"
                      type="url"
                      placeholder="https://..."
                      value={formData.filesUrl}
                      onChange={(e) =>
                        setFormData({ ...formData, filesUrl: e.target.value })
                      }
                      className="mt-2 h-12 rounded-xl"
                    />
                  </div>

                  {/* Country */}
                  <div className="md:col-span-2">
                    <Label htmlFor="country">Country</Label>
                    <Input
                      id="country"
                      type="text"
                      placeholder="For invoicing currency"
                      value={formData.country}
                      onChange={(e) =>
                        setFormData({ ...formData, country: e.target.value })
                      }
                      className="mt-2 h-12 rounded-xl"
                    />
                  </div>

                  {/* Message */}
                  <div className="md:col-span-2">
                    <Label htmlFor="message">Project Details</Label>
                    <Textarea
                      id="message"
                      placeholder="Brief description of your project requirements..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="mt-2 min-h-[120px] rounded-xl"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="mt-6 bg-[var(--accent-600)] text-white hover:bg-[var(--accent-700)] rounded-xl h-12 px-6 w-full md:w-auto"
                >
                  Send Inquiry
                </Button>
              </form>

              {/* Calendly Placeholder */}
              <div className="mt-8 bg-[var(--surface)] rounded-2xl p-4 md:p-6 xl:p-8 border border-[var(--border-200)]">
                <h3 className="mb-4">Book a 10-min Feasibility Call</h3>
                <p className="text-[var(--ink-700)] mb-6">
                  Available slots: Tuesday-Thursday, 10am-4pm CET
                </p>
                {/* Calendly embed would go here */}
                <div className="bg-[var(--subsurface)] rounded-xl p-12 text-center border border-[var(--border-200)]">
                  <p className="text-[var(--muted-500)]">
                    <small>Calendly widget embed placeholder</small>
                  </p>
                  <p className="text-[var(--muted-500)] mt-2">
                    <small>Insert your Calendly embed code here</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-14 xl:py-24 bg-[var(--surface)]">
        <div className="max-w-[800px] mx-auto px-4 md:px-6 xl:px-[72px]">
          <h2 className="mb-8 md:mb-10 xl:mb-12 text-center">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-[var(--subsurface)] rounded-xl border border-[var(--border-200)] px-6"
              >
                <AccordionTrigger className="hover:no-underline">
                  <h4>{faq.question}</h4>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-[var(--ink-700)]">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}