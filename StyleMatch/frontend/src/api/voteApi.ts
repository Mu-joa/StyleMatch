import type { StyleType } from "../types/style";

export type Vote = {
  leftStyle: StyleType;
  rightStyle: StyleType;
  leftImage: string;
  rightImage: string;
};

const BASE_URL = "http://localhost:5000";

export async function fetchVotes(): Promise<Vote[]> {
  const res = await fetch(`${BASE_URL}/generate_votes`);
  if (!res.ok) throw new Error("투표 데이터 로드 실패");

  const data = await res.json();

  return data.map((v: Vote) => ({
    ...v,
    leftImage: BASE_URL + v.leftImage,
    rightImage: BASE_URL + v.rightImage,
  }));
}

export async function submitVote(style: StyleType) {
  const res = await fetch(`${BASE_URL}/vote`, {
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