import React from "react";
import {
  FieldValues,
  UseControllerReturn,
  UseFormReturn,
} from "react-hook-form";
import { AxiosError } from "axios";
import { IBackendResponse } from "./interfaces";

export type Children = React.ReactNode | React.ReactElement;

export type BGColor = "primary" | "secondary" | "success" | "error" | "warning";

export interface IFormProps
  extends Partial<UseControllerReturn<FieldValues>>,
    Partial<UseFormReturn<FieldValues>> {}

export type PaletteColor =
  | "primary"
  | "secondary"
  | "success"
  | "error"
  | "warning";

export type BackendError = AxiosError<IBackendResponse>;

export type SnackbarVariant = "success" | "error" | "warning";
