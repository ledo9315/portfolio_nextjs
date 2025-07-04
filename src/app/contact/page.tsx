"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { LoaderCircle } from "lucide-react";
import { Button } from "@/components/button";
import { motion } from "framer-motion";

interface Inputs {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export default function ContactPage() {
  const [showToast, setShowToast] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>({ mode: "onSubmit" });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "ea0f4ee1-6ab8-4cd7-8945-e7f52e5246f8",
          name: `${data.firstName} ${data.lastName}`,
          email: data.email,
          message: data.message,
        }),
      });

      if (response.ok) {
        setShowToast(true);
        reset();
        setTimeout(() => setShowToast(false), 5000);
      } else {
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <section
        className="contact py-42 lg:py-0"
        aria-labelledby="contact-title"
      >
        <h1 id="contact-title" className="sr-only">
          Kontaktformular
        </h1>
        <div className="container mx-auto px-4 md:px-16 lg:px-32 max-w-7xl">
          <div className="grid min-h-screen md:min-h-[calc(100vh-70px)]">
            <article className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-36 py-12 md:py-0">
              <motion.aside
                className="order-1 md:order-1 self-center max-w-2xl mt-12 md:mt-0"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h2 className="font-hanson text-3xl md:text-4xl font-bold uppercase mb-5 leading-tight">
                  Lass uns über <span className="text-purple">Projekte</span>{" "}
                  sprechen
                </h2>
                <p className="mb-8 text-base md:text-lg leading-relaxed">
                  Ich bin gespannt auf deine Ideen und freue mich darauf, mit
                  dir zusammenzuarbeiten. Schreib mir einfach eine Nachricht und
                  ich melde mich bei dir.
                </p>
              </motion.aside>

              {/* Form Section */}
              <motion.div
                className="order-2 md:order-2 self-center max-w-2xl"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                <h2 className="sr-only">Schreib mir eine Nachricht</h2>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="grid gap-3"
                  id="contactForm"
                  aria-label="Kontaktformular"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-5">
                    <div className="flex flex-col mb-5 group">
                      <label
                        htmlFor="first-name"
                        className="mb-1 text-base text-white/60 transition-colors duration-200 group-focus-within:text-purple"
                      >
                        Vorname
                      </label>
                      <input
                        {...register("firstName", {
                          required: "Vorname ist erforderlich",
                          minLength: {
                            value: 2,
                            message:
                              "Vorname muss mindestens 2 Zeichen lang sein",
                          },
                          maxLength: {
                            value: 15,
                            message:
                              "Vorname darf maximal 15 Zeichen lang sein",
                          },
                        })}
                        id="first-name"
                        type="text"
                        className="p-1 text-base bg-transparent border-0 border-b border-white/30 focus:outline-none transition-colors group-focus-within:border-purple"
                        aria-describedby={
                          errors.firstName ? "first-name-error" : undefined
                        }
                      />
                      {errors.firstName && (
                        <span
                          id="first-name-error"
                          className="text-red-400 text-sm mt-1"
                          role="alert"
                        >
                          {errors.firstName.message}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-col mb-5 group">
                      <label
                        htmlFor="last-name"
                        className="mb-1 text-base text-white/60 transition-colors duration-200 group-focus-within:text-purple"
                      >
                        Nachname
                      </label>
                      <input
                        {...register("lastName", {
                          required: "Nachname ist erforderlich",
                          minLength: {
                            value: 2,
                            message:
                              "Nachname muss mindestens 2 Zeichen lang sein",
                          },
                          maxLength: {
                            value: 15,
                            message:
                              "Nachname darf maximal 15 Zeichen lang sein",
                          },
                        })}
                        id="last-name"
                        type="text"
                        className="p-1 text-base bg-transparent border-0 border-b border-white/30 focus:outline-none transition-colors group-focus-within:border-purple"
                        aria-describedby={
                          errors.lastName ? "last-name-error" : undefined
                        }
                      />
                      {errors.lastName && (
                        <span
                          id="last-name-error"
                          className="text-red-400 text-sm mt-1"
                          role="alert"
                        >
                          {errors.lastName.message}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col mb-5 group">
                    <label
                      htmlFor="email"
                      className="mb-1 text-base text-white/60 transition-colors duration-200 group-focus-within:text-purple"
                    >
                      Email
                    </label>
                    <input
                      {...register("email", {
                        required: "E-Mail ist erforderlich",
                        pattern: {
                          value:
                            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                          message: "Bitte gib eine gültige E-Mail-Adresse ein",
                        },
                      })}
                      id="email"
                      type="email"
                      className="p-1 text-base bg-transparent border-0 border-b border-white/30 focus:outline-none transition-colors group-focus-within:border-purple"
                      aria-describedby={
                        errors.email ? "email-error" : undefined
                      }
                    />
                    {errors.email && (
                      <span
                        id="email-error"
                        className="text-red-400 text-sm mt-1"
                        role="alert"
                      >
                        {errors.email.message}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col mb-5 group">
                    <label
                      htmlFor="message"
                      className="mb-1 text-base text-white/60 transition-colors duration-200 group-focus-within:text-purple"
                    >
                      Deine Nachricht
                    </label>
                    <textarea
                      {...register("message", {
                        required: "Nachricht ist erforderlich",
                        minLength: {
                          value: 10,
                          message:
                            "Nachricht muss mindestens 10 Zeichen lang sein",
                        },
                        maxLength: {
                          value: 500,
                          message:
                            "Nachricht darf maximal 500 Zeichen lang sein",
                        },
                      })}
                      id="message"
                      rows={5}
                      className="p-1 text-base bg-transparent border-0 border-b border-white/30 focus:outline-none transition-colors group-focus-within:border-purple"
                      aria-describedby={
                        errors.message ? "message-error" : undefined
                      }
                    />
                    {errors.message && (
                      <span
                        id="message-error"
                        className="text-red-400 text-sm mt-1"
                        role="alert"
                      >
                        {errors.message.message}
                      </span>
                    )}
                  </div>

                  <Button disabled={isSubmitting}>
                    {isSubmitting ? (
                      <LoaderCircle className="animate-spin" />
                    ) : (
                      "Senden"
                    )}
                  </Button>
                </form>

                {/* Toast Notification */}
                {showToast && (
                  <motion.div
                    className="toast bg-green-600 fixed bottom-5 right-5 px-4 py-3 rounded z-50 transition-opacity duration-500"
                    role="alert"
                    aria-live="polite"
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 20 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <p>Danke! Deine Nachricht wurde erfolgreich gesendet.</p>
                  </motion.div>
                )}
              </motion.div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
