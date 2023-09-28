import { MouseEventHandler } from "react";

export interface customButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
}

export interface ManufacturerProps {
  selected: string;
  setSelected: (selected: string) => void;
}

export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface CarDetailsProps {
  car: CarProps;
  isOpen: boolean;
  closeModel: () => void;
}

export interface FilterProps {
  manufacturer: string;
  model: string;
  fuel: string;
  limit: number;
  year: number;
}

export interface OptionProps {
  title: string;
  value: string
}

export interface CustomFilterProps<T> {
  options: OptionProps[];
  setFilter: (selected: T) => void;
}

export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
  setLimit: (limit: number) => void;
}

export type CarState = CarProps[] & { message?: string };

export interface SearchBarProps {
  setManufacturer : (manufacturer: string) => void
  setModel: (model: string) => void;
}