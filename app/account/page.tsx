"use client";
import React, { useEffect, useState } from "react";
import getFirebaseApp from "../../firebase/app";
import { User, getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import {
  DocumentData,
  QuerySnapshot,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import db from "../../firebase/db";
import { RiCalendarEventFill } from "react-icons/ri";
import { ClipLoader } from "react-spinners";

export default function Account() {
  const app = getFirebaseApp();
  const auth = getAuth(app);
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<User | null>(null);
  const [pickup, setPickup] = useState<DocumentData[]>([]);

  const fetchSchedule = async () => {
    const q = query(collection(db, "pickup"), where("uid", "==", user?.uid));
    const querySnapshot: QuerySnapshot<DocumentData> = await getDocs(q);
    const data: DocumentData[] = [];
    querySnapshot.forEach((doc) => {
      data.push(doc.data());
    });
    setPickup(data);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
      setLoading(false);
    });
    // setLoading(false);
  }, [auth]);

  useEffect(() => {
    if (user) {
      fetchSchedule();
    }
  }, [user]);

  const handleSignOut = async () => {
    await signOut(auth);
  };

  if (loading)
    return (
      <div className="w-full min-h-screen flex justify-center items-center">
        <ClipLoader className="w-10 h-10" />
      </div>
    );

  return (
    <div className="m-auto max-w-[60rem] flex flex-col mt-10 px-5 min-h-screen">
      <h1 className="text-lg min-w-[200px] border-b-2 border-b-green-400 w-fit pr-5 text-black/70 dark:text-white/70 font-semibold">
        Profile Details
      </h1>
      <div className="md:px-20 py-10 flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <label className="font-medium text-black/70 dark:text-white/70">
            Name:
          </label>
          <p className="font-medium text-black/70 dark:text-white/70">
            {user?.displayName}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <label className="font-medium text-black/70 dark:text-white/70">
            Email:
          </label>
          <p className="font-medium text-black/70 dark:text-white/70">
            {user?.email}
          </p>
        </div>
        <button onClick={handleSignOut} className="text-green-500 w-fit">
          Signout
        </button>
      </div>
      <h1 className="text-lg min-w-[200px] border-b-2 border-b-green-400 pr-5 w-fit text-black/70 dark:text-white/70 font-semibold">
        Pickups
      </h1>
      <div className="md:px-20 py-10 flex flex-col gap-2">
        {pickup.map((item, index) => (
          <div
            key={index}
            className="border min-h-[160px] dark:border-white/20 border-black/20 rounded-[10px] flex max-md:flex-col overflow-hidden"
          >
            <div className="flex flex-col gap-2 p-3 px-5 flex-1 min-h-full justify-center">
              <div className="flex items-center gap-1">
                <label className="text-sm text-black/60 dark:text-white/60">
                  Scheduled by:{" "}
                </label>
                <p className="font-medium text-black/80 dark:text-white/80">
                  {item?.name}
                </p>
              </div>
              <div className="flex items-center gap-1">
                <label className="text-sm text-black/60 dark:text-white/60">
                  Email:{" "}
                </label>
                <p className="font-medium text-black/80 dark:text-white/80">
                  {item?.email}
                </p>
              </div>
              <div className="flex items-center gap-1">
                <label className="text-sm text-black/60 dark:text-white/60">
                  Message:{" "}
                </label>
                <p className="font-medium text-black/80 dark:text-white/80">
                  {item?.message}
                </p>
              </div>
            </div>
            <div
              className={`${
                item?.pending === true ? "bg-red-500" : "bg-green-400"
              } w-[180px] max-md:w-full min-h-full flex flex-col py-3 max-md:flex-row-reverse items-center justify-center`}
            >
              <p className="text-xl max-md:text-base font-bold text-white/90">
                {item.date}
              </p>
              <RiCalendarEventFill className="w-10 h-10 max-md:w-6 max-md:h-6 text-white" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
