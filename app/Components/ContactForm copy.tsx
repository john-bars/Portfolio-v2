'use client';

import toast from 'react-hot-toast';

export default function ContactForm() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch('/api/sendEmail', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || 'Something went wrong');
        return;
      }

      toast.success('Email sent successfully!');
      form.reset();
    } catch (err) {
      toast.error(
        err instanceof Error
          ? err.message || 'Network error. Please try again.'
          : 'Network error. Please try again.',
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mt-20 max-w-lg space-y-6 lg:flex lg:max-w-3xl lg:justify-between lg:gap-10 xl:max-w-4xl"
    >
      <div className="flex flex-col gap-3 lg:w-full">
        <label className="text-secondary block">
          Name
          <input type="text" name="name" className="input" />
        </label>

        <label className="text-secondary block">
          Email <span className="text-red-600">*</span>
          <input type="email" name="email" required className="input" />
        </label>

        <label className="text-secondary block">
          Subject
          <input type="text" name="subject" className="input" />
        </label>
      </div>
      <div className="grid lg:w-full">
        <label className="text-secondary block">
          Message <span className="text-red-600">*</span>
          <textarea
            name="message"
            required
            className="mt-2 h-28 w-full resize-none rounded-lg border border-[#ddd] bg-transparent px-3 py-2 focus:outline-none lg:h-40"
          />
        </label>

        <button className="text-primary mt-3 cursor-pointer justify-self-end rounded-xl border-[#ddd] bg-[#eee] px-6 py-3 font-semibold hover:bg-[#ccc] hover:shadow-lg dark:text-gray-800">
          Send message
        </button>
      </div>
    </form>
  );
}
