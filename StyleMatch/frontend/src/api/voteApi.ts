import type { StyleType } from "../types/style";

export type Vote = {
  leftStyle: StyleType;
  rightStyle: StyleType;
  leftImage: string;
  rightImage: string;
};

const API_BASE = import.meta.env.PROD
  ? ""
  : "http://localhost:5000";

export async function fetchVotes(): Promise<Vote[]> {
  const res = await fetch(`${API_BASE}/generate_votes`);
  if (!res.ok) throw new Error("투표 데이터 로드 실패");

  const data = await res.json();

  return data.map((v: Vote) => ({
    ...v,
    leftImage: API_BASE + v.leftImage,
    rightImage: API_BASE + v.rightImage,
  }));
}

export async function submitVote(style: StyleType) {
  const res = await fetch(`${API_BASE}/vote`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ style }),
  });

  if (!res.ok) {
    throw new Error("투표 전송 실패");
  }
}