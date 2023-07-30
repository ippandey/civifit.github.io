"use client";
import Image from "next/image";
import React, { FormEvent, FormEventHandler, useEffect, useState } from "react";
import AlreadyUser from "../../../components/AlreadyUser";
import getFirebaseApp from "../../../firebase/app";
import { GoogleLoginButton } from "react-social-login-buttons";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  User,
} from "firebase/auth";

export default function Login() {
  const app = getFirebaseApp();
  const auth = getAuth(app);
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) setUser(user);
      else setUser(null);
    });
  }, [auth]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = (e.currentTarget.elements[0] as HTMLInputElement).value;
    const password = (e.currentTarget.elements[1] as HTMLInputElement).value;
    console.log((e.currentTarget.elements[0] as HTMLInputElement).value);
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    setUser(user);
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const user = result.user;
      setUser(user);
    });
  };

  if (user) return <AlreadyUser />;

  return (
    <main className="flex flex-col items-center py-10 gap-2">
      <div className="relative w-40 h-24">
        <Image
          src={"/svg/logo-no-background.svg"}
          fill
          style={{ objectFit: "cover" }}
          alt="Logo"
        />
      </div>
      <h1 className="text-3xl font-black text-black/70 dark:text-white/70">
        LOGIN NOW
      </h1>
      <form
        className="my-6 relative w-full max-w-xl m-auto flex px-6 py-2 sm:flex-row flex-col flex-wrap justify-center items-center gap-3"
        onSubmit={handleSubmit}
      >
        <div className="input-group w-full">
          <input
            placeholder=" "
            autoComplete="off"
            name="email"
            type="email"
            className="input-field w-full rounded"
          />
          <label className="input-placeholder">Email</label>
        </div>
        <div className="input-group w-full">
          <input
            placeholder=" "
            autoComplete="off"
            name="password"
            type="password"
            className="input-field w-full rounded"
          />
          <label className="input-placeholder">Password</label>
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 text-white font-medium py-2 rounded"
        >
          Login Now
        </button>
      </form>
      <div className="w-full px-6 max-w-xl">
        <GoogleLoginButton onClick={handleGoogleLogin} align={"center"}>
          <span className="text-black/70 text-[15px]">Log in with Google</span>
        </GoogleLoginButton>
      </div>
    </main>
  );
}
