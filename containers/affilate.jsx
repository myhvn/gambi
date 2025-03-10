"use client";
import React, { useContext } from "react";
import styles from "@/styles/403.css";
import { AppContext } from "@/context/app";
import Image from 'next/image';

export default function AffilateContainer() {
  const { width } = useContext(AppContext);
  return (
    <div className={styles.bannerContainer}>
      {/* just sample page with image.Because i dont have any image files to create it yet... */}
      <Image 
        src="/images/403.jpg" 
        alt="Affiliate Banner" 
        layout="fill" 
        className={styles.banner}
      />
        {/* xo-xo-xo */}
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
  );
}
