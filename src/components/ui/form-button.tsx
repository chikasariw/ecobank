"use client";

import React from 'react';
import { useFormStatus } from 'react-dom';

interface FormButtonProps {
    children: React.ReactNode;
}

const FormButton: React.FC<FormButtonProps> = ({ children }) => {
    const { pending } = useFormStatus();

    return React.Children.map(children, (child) => {
        if (React.isValidElement(child) && (child.type as React.FC).displayName === "Button") {
            return React.cloneElement(child, { ...(child.props as any), loading: pending ?? undefined });
        }
        return child;
    });
};

export default FormButton;
