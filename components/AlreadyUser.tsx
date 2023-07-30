"use client";
import { getAuth, reload, signOut } from "firebase/auth";
import Link from "next/link";
import Router from "next/router";
import React from "react";
import getFirebaseApp from "../firebase/app";

export default function AlreadyUser() {
  const app = getFirebaseApp();
  const auth = getAuth(app);
  const handlelogout = async () => {
    await signOut(auth);
  };

  return (
    <div className="flex h-screen justify-center items-center flex-col gap-2">
      <p className="">You are already logged in</p>
      <Link href={"/"} className="px-6 py-2 bg-green-500 rounded-sm text-white">
        Go Home
      </Link>
      <button
        onClick={handlelogout}
        className="px-6 py-2 bg-green-500 rounded-sm text-white"
      >
        Logout
      </button>
    </div>
  );
}
