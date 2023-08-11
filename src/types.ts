import type firebase from "firebase/compat/app";

// src/types.ts
export interface ChatMessage {
    id: string;
    text: string;
    userId: string;
    timestamp: firebase.firestore.Timestamp;
  }