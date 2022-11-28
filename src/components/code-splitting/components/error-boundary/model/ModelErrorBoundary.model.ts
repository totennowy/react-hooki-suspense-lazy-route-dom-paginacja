import React from "react";

interface IModelErrorBoundary {
    error: any;
    resetErrorBoundary: React.MouseEventHandler<HTMLButtonElement>;
}

export type ModelErrorBoundary = IModelErrorBoundary;