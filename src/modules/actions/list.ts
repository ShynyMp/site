import type { ClickElements, Key } from "./main";

import whipMp3 from "../../assets/whip.mp3";
import drinkingMp3 from "../../assets/drinking.mp3";
import robloxDeathMp3 from "../../assets/roblox-death.mp3";
import minecraftHitMp3 from "../../assets/minecraft-hit.mp3";
import mario64OofMp3 from "../../assets/mario64-oof.mp3";
import ninjagoLowBudgetMp3 from "../../assets/ninjago-low-budget.mp3";
import androidMp3 from "../../assets/android.mp3";
import erikaMp3 from "../../assets/erika.mp3";
import gunMp3 from "../../assets/gun.mp3";
import yameteMp3 from "../../assets/yamete.mp3";
import toothlessMp3 from "../../assets/toothless.mp3";
import weedMp3 from "../../assets/weed.mp3";
import shrekMp3 from "../../assets/shrek.mp3";
import zemmourMp3 from "../../assets/zemmour.mp3";
import chipiMp3 from "../../assets/chipi.mp3";
import phMp3 from "../../assets/ph.mp3";
import boberMp3 from "../../assets/bober.mp3";
import duoCorrectMp3 from "../../assets/duo-correct.mp3";
import deathFortniteMp3 from "../../assets/death-fortnite.mp3";
import metalPipeMp3 from "../../assets/metal-pipe.mp3";
import animeWowMp3 from "../../assets/anime-wow.mp3";
import enfantsDuRnMp3 from "../../assets/enfant-du-rn.mp3";
import nootCenaMp3 from "../../assets/noot-cena.mp3";
import uwuMp3 from "../../assets/uwu.mp3";
import araAraMp3 from "../../assets/ara-ara.mp3";
import pasNetMp3 from "../../assets/pas-net.mp3";
import ouiOuiMp3 from "../../assets/oui-oui.mp3";
import yeahBoiMp3 from "../../assets/yeah-boi.mp3";
import babySharkMp3 from "../../assets/baby-shark.mp3";

export type Action = {
  description: string;
  authors: string[];
} & ({ noAction: true; } | { action: [string, ...unknown[]]; }) & ({
  type: "keys";
  keys: Key[];
} | {
  type: "click";
  element: keyof ClickElements;
});

export const ACTIONS: Record<string, Action> = {
  helpButton: {
    description: "Affiche l'aide — Les sons possibles",
    type: "click",
    element: "help",
    authors: ["Juliano"],
    action: ["help"],
  },
  helpKey: {
    description: "Affiche l'aide — Les sons possibles",
    type: "keys",
    keys: ["Shift+i"],
    authors: ["Juliano"],
    action: ["help"],
  },
  discord: {
    description: "Le Discord",
    type: "keys",
    keys: ["Shift+d"],
    authors: ["Juliano"],
    action: ["discord"],
  },
  wikiSearchButton: {
    description: "Recherche dans les pages de cours",
    type: "click",
    element: "search",
    authors: ["Juliano"],
    action: ["search"]
  },
  wikiSearchKey: {
    description: "Recherche dans les pages de cours",
    type: "keys",
    keys: ["Ctrl+k"],
    authors: ["Juliano"],
    action: ["search"]
  },
  confetti: {
    description: "🎉🎉",
    type: "click",
    element: "title",
    authors: ["Juliano", "Mathias", "Louis"],
    action: ["confetti"],
  },
  names: {
    description: "Des bruits...",
    type: "click",
    element: "firstnames",
    authors: ["Juliano", "Mathias"],
    action: ["playRandom", [
      whipMp3,
      drinkingMp3,
      robloxDeathMp3,
      minecraftHitMp3,
      mario64OofMp3,
      ninjagoLowBudgetMp3,
      yeahBoiMp3,
    ]],
  },
  konami: {
    description: "오빤 강남스타일",
    type: "keys",
    keys: [
      "ArrowUp",
      "ArrowUp",
      "ArrowDown",
      "ArrowDown",
      "ArrowLeft",
      "ArrowRight",
      "ArrowLeft",
      "ArrowRight",
      "b",
      "a",
    ],
    authors: ["Juliano"],
    action: ["winnie"],
  },
  gun: {
    description: "🔫🔫",
    type: "keys",
    keys: ["g"],
    authors: ["Juliano", "Mathias"],
    action: ["play", gunMp3],
  },
  erika: {
    description: "Herms Niel — Erika",
    type: "keys",
    keys: ["h"],
    authors: ["Maxime"],
    action: ["play", erikaMp3],
  },
  android: {
    description: "Samsung",
    type: "keys",
    keys: ["a"],
    authors: ["Juliano"],
    action: ["play", androidMp3],
  },
  yamete: {
    description: "やめてください",
    type: "keys",
    keys: ["y"],
    authors: ["Mathias"],
    action: ["play", yameteMp3],
  },
  toothless: {
    description: "Krokmou, Toothless",
    type: "keys",
    keys: ["t"],
    authors: ["Mathias"],
    action: ["play", toothlessMp3],
  },
  weed: {
    description: "🚬🚬",
    type: "keys",
    keys: ["w"],
    authors: ["Juliano"],
    action: ["play", weedMp3],
  },
  shrek: {
    description: "Somebody once",
    type: "keys",
    keys: ["s"],
    authors: ["Anthony"],
    action: ["play", shrekMp3],
  },
  zemmour: {
    description: "Éric Zemmour",
    type: "keys",
    keys: ["z"],
    authors: ["Anthony"],
    action: ["play", zemmourMp3],
  },
  chipi: {
    description: "Chipi Chapa",
    type: "keys",
    keys: ["p"],
    authors: ["Louis"],
    action: ["play", chipiMp3],
  },
  ph: {
    description: "😰",
    type: "keys",
    keys: ["Shift+p"],
    authors: ["Mathias"],
    action: ["play", phMp3],
  },
  bober: {
    description: "Bober Curva",
    type: "keys",
    keys: ["b"],
    authors: ["Mathias"],
    action: ["play", boberMp3],
  },
  duo: {
    description: "Tu-doom",
    type: "keys",
    keys: ["d"],
    authors: ["Mathias"],
    action: ["play", duoCorrectMp3],
  },
  death: {
    description: "K.O.",
    type: "keys",
    keys: ["f"],
    authors: ["Mathias"],
    action: ["play", deathFortniteMp3],
  },
  metalpipe: {
    description: "PIPE",
    type: "keys",
    keys: ["m"],
    authors: ["Mathias"],
    action: ["play", metalPipeMp3],
  },
  wow: {
    description: "WOOOOAAAAWWWWWW",
    type: "keys",
    keys: ["Shift+w"],
    authors: ["Mathias"],
    action: ["play", animeWowMp3],
  },
  rn: {
    description: "Enfants du RN 🎶",
    type: "keys",
    keys: ["r"],
    authors: ["Mathias"],
    action: ["play", enfantsDuRnMp3],
  },
  noot: {
    description: "HE'S NAME IS NOOT CENA !!",
    type: "keys",
    keys: ["n"],
    authors: ["Mathias"],
    action: ["play", nootCenaMp3],
  },
  uwu: {
    description: "🥺👉👈",
    type: "keys",
    keys: ["u"],
    authors: ["Mathias"],
    action: ["play", uwuMp3],
  },
  araara: {
    description: "Ara ara ~~~~",
    type: "keys",
    keys: ["Shift+a"],
    authors: ["Mathias"],
    action: ["play", araAraMp3],
  },
  basptiste: {
    description: "Baptiste",
    type: "keys",
    keys: ["Shift+b"],
    authors: ["Louis"],
    action: ["play", pasNetMp3],
  },
  ouioui: {
    description: "OUI VASY OUI-OUI",
    type: "keys",
    keys: ["o"],
    authors: ["Mathias"],
    action: ["play", ouiOuiMp3],
  },
  babyshark: {
    description: "🦈",
    type: "keys",
    keys: ["Ctrl+b"],
    authors: ["Mathias"],
    action: ["play", babySharkMp3],
  },
};
