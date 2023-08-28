import { atomWithWebStorage } from "@/lib/jotai-helper";
import { atom } from "jotai";

export const desktopSidebarAtom = atomWithWebStorage('showSidebar',true);
export const mobileSidebarAtom = atom(false);
