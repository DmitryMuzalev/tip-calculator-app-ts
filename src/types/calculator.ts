import React from "react";

export type Icon = React.FunctionComponent<
  React.SVGProps<SVGSVGElement> & {
    title?: string | undefined;
  }
>;
type changeFn<T extends string | number> = React.Dispatch<
  React.SetStateAction<T>
>;

export type AppState = {
  bill: string;
  persons: string;
  customTip: string;
  currPercentage: number;
  changeBill: changeFn<string>;
  changeNumberPersons: changeFn<string>;
  changeCustomTip: changeFn<string>;
  changeCurrPercentage: changeFn<number>;
  tipPercentageList: number[];
};
