import React, { CSSProperties, ReactNode } from "react";
import CloseIcon from "./CloseIcon";
import classes from './styles.module.css'

export type ModalProps = {
    children: ReactNode;
    //Function to close
    close?: () => void;
    //Main modal style
    style?: CSSProperties;
    animate?: "fade-in" | "pop-down" | "fade-down" | "none";
    //Modaluse defined claassName
    className?: string;
    label?: string;
    labelClassName?: string;
    labelStyle?: CSSProperties;
    //Specifying weather to close when modal when user touches backgroud, default true
    backdrop: boolean;
};

function Modal({ children, style = {}, animate = "fade-down", close, className, label, labelClassName, labelStyle = {}, backdrop = true }: ModalProps) {

    return (
        <>
            <div className={classes["modal-wrapper"]} onClick={backdrop ? close : () => null} ></div>
            <div className={`${classes["modal-container"]} ${classes[animate]} ${className || ''}}`} style={style}>
                {
                    close && <CloseIcon onClick={close} />
                }
                {
                    label && <>
                        <div className={`${classes.label} ${labelClassName ? labelClassName : ''}`} style={labelStyle}>{label}</div>
                    </>
                }
                {children || "Modal"}
            </div>
        </>
    )
}

export default Modal