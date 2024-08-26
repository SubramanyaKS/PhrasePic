import { ChangeEventHandler, MouseEventHandler, ReactNode } from "react";

export type ButtonProps = {
    title: string,
    OnClick?: () => void,
}
export type InputProps = {
    title: string,
    OnChange: ChangeEventHandler,
    id: string,
    value: string,
    type: string,
    name: string,

}
export type SearchProps = {
    value: string,
    OnChange: ChangeEventHandler,
    talk: MouseEventHandler,
    listening: boolean,
}

export type AuthProps = {
    children: ReactNode;
    session: any;
}
export type TextProps = {
    title: string,
}