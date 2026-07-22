import type { Coordinate, TrailCheckpoint } from "@/types/trail";

export type MountainDifficulty = "easy" | "moderate" | "hard";

export type Mountain = {
  id: string;
  slug: string;
  name: string;
  region: string;
  province: string;
  elevationMasl: number;
  imagePath: string;
  tagline: string;
  description: string;
  difficulty: MountainDifficulty;
  defaultDurationMinutes: number;
  requiredLevel: number;
  unlockCost: number;
  isDefaultUnlocked: boolean;
  trailName: string;
  trailAssetUrl: string;
  trailVersion: number;
  checkpoints: TrailCheckpoint[];
  source: {
    provider: string;
    license: string;
    attribution: string;
    reference: string;
    retrievedAt: string;
  };
  mapCenter: Coordinate;
  mapNavigationBounds?: [number, number, number, number];
};
