"use client";

import toast from "react-hot-toast";

export default function ContactForm() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || "Something went wrong");
        return;
      }

      toast.success("Email sent successfully!");
      form.reset();
    } catch (err) {
      toast.error(
        err instanceof Error
          ? err.message || "Network error. Please try again."
          : "Network error. Please try again.",
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg lg:max-w-3xl xl:max-w-4xl mx-auto space-y-6 mt-20 lg:flex lg:justify-between lg:gap-10"
    >
      <div className="lg:w-full flex flex-col gap-3">
        <label className="block text-secondary">
          Name
          <input type="text" name="name" className="input" />
        </label>

        <label className="block text-secondary">
          Email <span className="text-red-600">*</span>
          <input type="email" name="email" required className="input" />
        </label>

        <label className="block text-secondary">
          Subject
          <input type="text" name="subject" className="input" />
        </label>
      </div>
      <div className="lg:w-full grid">
        <label className="block text-secondary">
          Message <span className="text-red-600">*</span>
          <textarea
            name="message"
            required
            className="py-2 px-3 mt-2 w-full border rounded-lg border-[#ddd] bg-transparent focus:outline-none resize-none h-28 lg:h-40"
          />
        </label>

        <button className="font-semibold bg-[#eee] hover:bg-[#ccc] hover:shadow-lg  border-[#ddd] dark:text-gray-800 px-6 py-3 rounded-xl mt-3 justify-self-end cursor-pointer text-primary">
          Send message
        </button>
      </div>
    </form>
  );
}
