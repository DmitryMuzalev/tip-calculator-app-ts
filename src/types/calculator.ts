import React from "react";

export type Icon = React.FunctionComponent<
  React.SVGProps<SVGSVGElement> & {
    title?: string | undefined;
  }
>;

export type AppState = {
  bill: number | undefined;
  changeBill: (value: number | undefined) => void;
  tipPercentageList: number[];
};
