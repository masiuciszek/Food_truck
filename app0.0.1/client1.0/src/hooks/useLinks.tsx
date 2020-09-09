import * as React from "react";
import { navigationLinks, socialLinks } from "src/data/initialData";

type WhatLink = "Social" | "Navigation";

// type UseLinksReturnType = [LinkType<AppLink>[] | LinkType<SocialType>[]];
// type UseLinksReturnType<T> = [LinkType<T>[]];

type UseLinksReturnType<T> = (LinkType<T>[] | LinkType<T>[])[];

export function useLinks<T>(linkType: WhatLink): UseLinksReturnType<T> {
  const initialState = linkType === "Social" ? socialLinks : navigationLinks;

  // const handleState = (type: AppLink | SocialType) => {
  //   switch (type) {
  //     case "about":
  //     case "home":
  //     case "stores":
  //       return navigationLinks;
  //     case "github":
  //     case "instagram":
  //     case "twitter":
  //       return socialLinks;
  //     default:
  //       return [];
  //   }
  // };

  const [state, setState] = React.useState(initialState);

  return [state];
}
