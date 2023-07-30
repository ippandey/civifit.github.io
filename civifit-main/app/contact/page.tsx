import React from "react";

export default function Contact() {
  return (
    <main className="">
      <div className="text-center py-10">
        <h1 className="text-4xl font-black text-black/70 dark:text-white/70">
          Contact Us
        </h1>
        <p className="mx-auto text-[16px] text-black/70 dark:text-white/70 px-6 py-4 max-w-[750px]">
          <span className="font-medium">+91 1234567890</span>
          <br /> <span className="font-medium">wastemanagement@gmail.com</span>
          <br /> 10.2 street opp. raj bunglow gidc surat
          <br />
          Fill up the form and our Team will get back to you within 24 hours
        </p>
      </div>
      <form className="mb-10 relative w-full max-w-5xl m-auto flex px-6 py-2 sm:flex-row flex-col flex-wrap justify-center items-center gap-3">
        <div className="input-group w-full">
          <input
            placeholder=" "
            autoComplete="off"
            name="title"
            type="text"
            className="input-field w-full rounded"
          />
          <label className="input-placeholder">Full Name</label>
        </div>
        <div className="input-group w-full sm:flex-1">
          <input
            placeholder=" "
            autoComplete="off"
            name="title"
            type="tel"
            className="input-field w-full rounded"
          />
          <label className="input-placeholder">Contact No</label>
        </div>
        <div className="input-group w-full sm:flex-1">
          <input
            placeholder=" "
            autoComplete="off"
            name="title"
            type="email"
            className="input-field w-full rounded"
          />
          <label className="input-placeholder">Email</label>
        </div>
        <div className="input-group w-full">
          <textarea
            placeholder=" "
            autoComplete="off"
            name="title"
            rows={5}
            className="input-field w-full rounded resize-none"
          />
          <label className="input-placeholder">Message</label>
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 text-white font-medium py-2 rounded"
        >
          Submit
        </button>
      </form>
    </main>
  );
}
