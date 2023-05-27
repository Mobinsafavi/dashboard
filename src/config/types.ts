import React from "react";
import {
  FieldValues,
  UseControllerReturn,
  UseFormReturn,
} from "react-hook-form";

export type Children = React.ReactNode | React.ReactElement;

export type BGColor = "primary" | "secondary" | "success" | "error" | "warning";

export interface IFormProps
  extends Partial<UseControllerReturn<FieldValues>>,
    Partial<UseFormReturn<FieldValues>> {}
