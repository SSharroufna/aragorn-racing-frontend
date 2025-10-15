import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import type { Race } from "@/features/types"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const raceNames = [
  "Sunshine Cup",
  "Derby Challenge",
  "Autumn Classic",
  "Florida Downs Sprint",
  "Champion’s Cup",
  "Turf Masters",
  "Golden Turf Stakes",
  "Victory Mile",
  "Silver Saddle",
  "Jockey Invitational",
  "Thoroughbred Dash",
  "Classic Derby",
  "Triple Crown Trial",
];

const surfaces = ["turf", "dirt", "synthetic"];

const distances = [
  "0.75 miles",
  "1 mile",
  "1.125 miles",
  "1.25 miles",
  "1.5 miles",
];

function getRandomFrom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function generateRaces(prefix: string, count = 8): Race[] {
  const races: Race[] = [];

  for (let i = 1; i <= count; i++) {
    const id = `${prefix}${i.toString().padStart(3, "0")}`;

    races.push({
      id,
      race: getRandomFrom(raceNames),
      date: "2025-09-23",
      time: `${12 + Math.floor(i / 2)}:${i % 2 === 0 ? "00" : "30"}`,
      horses: getRandomInt(8, 14),
      distance: getRandomFrom(distances),
      surface: getRandomFrom(surfaces),
      purse: getRandomInt(3000, 8000),
    });
  }

  return races;
}
