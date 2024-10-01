import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    svgHover: {
        fill: theme.palette.foreground.default,
        "&:hover": {
            fill: theme.palette.primary.main,
        },
        transition: "all 0.5s ease",
    },
}));

export const Logo = () => {
    const classes = useStyles();

    return (
        <svg
    viewBox="0 0 100 40"
    xmlns="http://www.w3.org/2000/svg"
    width="100" // Breite des SVG
    height="40" // Höhe des SVG
>
    <text
        x="0"
        y="30"
        fontFamily="Arial, sans-serif"
        fontSize="30"
        fill="white" // Füllfarbe der Buchstaben
    >
        RS
    </text>
</svg>



    );
};
