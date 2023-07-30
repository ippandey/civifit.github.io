"use client";

import { FormEvent, useEffect, useState } from "react";
import db from "../firebase/db";
import getFirebaseApp from "../firebase/app";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";

export default function Schedule() {
  const [name, setName] = useState<string>("");
  const [contact, setContact] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const app = getFirebaseApp();
  const auth = getAuth(app);
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);

  const [infoType, setInfoType] = useState<"error" | "warning" | "success">();
  const [infoVisible, setInfoVisible] = useState<boolean>(false);
  const [infoMessage, setInfoMessage] = useState<string>("");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, [auth]);

  useEffect(() => {
    if (infoType !== "warning") {
      const timeId = setTimeout(() => {
        setInfoVisible(false);
      }, 5000);
      return () => {
        clearTimeout(timeId);
      };
    }
  }, [infoType]);

  const submitForm = async (e: FormEvent<HTMLFormElement>) => {
    setInfoType("warning");
    setInfoMessage("Scheduling");
    setInfoVisible(true);
    e.preventDefault();
    if (!user) {
      alert("Login First");
      return;
    }

    const data = {
      uid: user.uid,
      name: name,
      contact: contact,
      date: date,
      email: user?.email,
      message: message,
      pending: true,
    };

    await addDoc(collection(db, "pickup"), data);

    setInfoType("success");
    setInfoMessage("Scheduled successfully.");
    setInfoVisible(true);

    setName("");
    setDate("");
    setContact("");
    setMessage("");
  };

  return (
    <>
      {infoVisible && (
        <div
          className={`fixed z-10 top-5 right-5 ${
            infoType === "warning"
              ? "bg-yellow-400"
              : infoType === "success"
              ? "bg-green-400"
              : "bg-red-400"
          } px-5 py-2 rounded-[5px]`}
        >
          {infoMessage}
        </div>
      )}
      <div className="text-center py-5">
        <h1 className="text-3xl font-black text-black/70 dark:text-white/70">
          Schedule Pickup
        </h1>
        <p className="mx-auto text-[15px] text-black/70 dark:text-white/70 px-6 py-4 max-w-[750px]">
          for a waste collection
        </p>
        <form
          className="relative w-full max-w-5xl m-auto flex px-6 py-2 pt-6 sm:flex-row flex-col flex-wrap justify-center items-center gap-3"
          onSubmit={submitForm}
        >
          <div className="input-group w-full">
            <input
              placeholder=" "
              autoComplete="off"
              name="title"
              type="text"
              className="input-field w-full rounded"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
            <label className="input-placeholder">Contact No</label>
          </div>
          <div className="input-group w-full sm:flex-1">
            <input
              placeholder=" "
              autoComplete="off"
              name="title"
              type="date"
              className="input-field w-full rounded dark:!border-[#777] !border-black/60"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <label className="input-placeholder dark:!text-[#777] !text-black/60">
              Date Of Pickup
            </label>
          </div>
          <div className="input-group w-full">
            <textarea
              placeholder=" "
              autoComplete="off"
              name="title"
              rows={5}
              className="input-field w-full rounded resize-none"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <label className="input-placeholder">Any Message</label>
          </div>
          <button
            type="submit"
            disabled={infoVisible}
            className="w-full bg-green-500 text-white font-medium py-2 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
