import { TranslationValues } from "next-intl";
import { ReactNode } from "react";

export type TranslationType = TranslationValues | ((chunks: ReactNode) => ReactNode);
