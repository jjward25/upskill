import { ComponentProps } from "react";
import TypographyComponent from "@mui/material/Typography";

export default function Typography({
    children,
    ...rest
}: ComponentProps<typeof TypographyComponent>) {
    return <TypographyComponent {...rest}>{children}</TypographyComponent>;
}