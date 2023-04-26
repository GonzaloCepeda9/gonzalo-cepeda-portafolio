export const THEME = {
    "breakpoints": {
        "keys": [
            "xs",
            "sm",
            "md",
            "lg",
            "xl"
        ],
        "values": {
            "xs": 0,
            "sm": 600,
            "md": 960,
            "lg": 1280,
            "xl": 1920
        }
    },
    "direction": "ltr",
    "mixins": {
        "toolbar": {
            "minHeight": 56,
            "@media (min-width:0px) and (orientation: landscape)": {
                "minHeight": 48
            },
            "@media (min-width:600px)": {
                "minHeight": 64
            }
        }
    },
    "overrides": {},
    "palette": {
        "common": {
            "black": "#000",
            "white": "#fff"
        },
        "type": "light",
        "primary": {
            "light": "#ffffd0",
            // "main": "#14757a",
            // "main": "#c90909",
            // "main": "#de8f63",
            // "main": "#101c7a",
            // "main": "#986c6a",
            // "main": "#ffcb00",
            "main": "#808188",
            "dark": "#56570e",
            "contrastText": "#fff"
        },
        "secondary": {
            "light": "#b8c9ff",
            // "main": "#99d4df",
            // "main": "#62929e",
            // "main": "#c90909",
            // "main": "#f7c900",
            // "main": "#14757a",
            // "main": "#379eff",
            "main": "#091085",
            "dark": "#c9ac92",
            "contrastText": "#fff"
        },
        "tertiary": {
            "light": "#fed3d3",
            // "main": "#9d8fad",
            // "main": "#5D6B95",
            // "main": "#01670e",
            "main": "#d90707",
            "dark": "#bb254b",
            "contrastText": "#fff"
        },
        "quaternary": {
            "light": "#ffffff",
            // "main": "#dadada",
            // "main": "#ffd000",
            // "main": "#8C6057",
            // "main": "#114477",
            // "main": "#ffd000",
            // "main": "#c90909",
            "main": "#ffffff",
            "dark": "#050d24",
            "contrastText": "#fff"
        },
        "quintary": {
            "light": "#ffffff",
            "main": "#f3f3f4",
            "dark": "#dfdfe2",
            "contrastText": "#fff"
        },
        "error": {
            "light": "#e57373",
            "main": "#f44336",
            "dark": "#d32f2f",
            "contrastText": "#fff"
        },
        "grey": {
            "50": "#fafafa",
            "100": "#f5f5f5",
            "200": "#eeeeee",
            "300": "#e0e0e0",
            "400": "#bdbdbd",
            "500": "#9e9e9e",
            "600": "#757575",
            "700": "#616161",
            "800": "#424242",
            "900": "#212121",
            "A100": "#d5d5d5",
            "A200": "#aaaaaa",
            "A400": "#303030",
            "A700": "#616161"
        },
        "contrastThreshold": 3,
        "tonalOffset": 0.2,
        "text": {
            "primary": "rgba(0, 0, 0, 0.87)",
            "secondary": "rgba(0, 0, 0, 0.54)",
            "disabled": "rgba(0, 0, 0, 0.38)",
            "hint": "rgba(0, 0, 0, 0.38)"
        },
        "divider": "rgba(0, 0, 0, 0.12)",
        "background": {
            "paper": "#fff",
            "default": "#fafafa"
        },
        "action": {
            "active": "rgba(0, 0, 0, 0.54)",
            "hover": "rgba(0, 0, 0, 0.08)",
            "hoverOpacity": 0.08,
            "selected": "rgba(0, 0, 0, 0.14)",
            "disabled": "rgba(0, 0, 0, 0.26)",
            "disabledBackground": "rgba(0, 0, 0, 0.12)"
        }
    },
    "props": {},
    "shadows": [
        "none",
        "0px 1px 3px 0px rgba(0, 0, 0, 0.2),0px 1px 1px 0px rgba(0, 0, 0, 0.14),0px 2px 1px -1px rgba(0, 0, 0, 0.12)",
        "0px 1px 5px 0px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 3px 1px -2px rgba(0, 0, 0, 0.12)",
        "0px 1px 8px 0px rgba(0, 0, 0, 0.2),0px 3px 4px 0px rgba(0, 0, 0, 0.14),0px 3px 3px -2px rgba(0, 0, 0, 0.12)",
        "0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0, 0, 0, 0.12)",
        "0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 5px 8px 0px rgba(0, 0, 0, 0.14),0px 1px 14px 0px rgba(0, 0, 0, 0.12)",
        "0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 6px 10px 0px rgba(0, 0, 0, 0.14),0px 1px 18px 0px rgba(0, 0, 0, 0.12)",
        "0px 4px 5px -2px rgba(0, 0, 0, 0.2),0px 7px 10px 1px rgba(0, 0, 0, 0.14),0px 2px 16px 1px rgba(0, 0, 0, 0.12)",
        "0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0, 0, 0, 0.12)",
        "0px 5px 6px -3px rgba(0, 0, 0, 0.2),0px 9px 12px 1px rgba(0, 0, 0, 0.14),0px 3px 16px 2px rgba(0, 0, 0, 0.12)",
        "0px 6px 6px -3px rgba(0, 0, 0, 0.2),0px 10px 14px 1px rgba(0, 0, 0, 0.14),0px 4px 18px 3px rgba(0, 0, 0, 0.12)",
        "0px 6px 7px -4px rgba(0, 0, 0, 0.2),0px 11px 15px 1px rgba(0, 0, 0, 0.14),0px 4px 20px 3px rgba(0, 0, 0, 0.12)",
        "0px 7px 8px -4px rgba(0, 0, 0, 0.2),0px 12px 17px 2px rgba(0, 0, 0, 0.14),0px 5px 22px 4px rgba(0, 0, 0, 0.12)",
        "0px 7px 8px -4px rgba(0, 0, 0, 0.2),0px 13px 19px 2px rgba(0, 0, 0, 0.14),0px 5px 24px 4px rgba(0, 0, 0, 0.12)",
        "0px 7px 9px -4px rgba(0, 0, 0, 0.2),0px 14px 21px 2px rgba(0, 0, 0, 0.14),0px 5px 26px 4px rgba(0, 0, 0, 0.12)",
        "0px 8px 9px -5px rgba(0, 0, 0, 0.2),0px 15px 22px 2px rgba(0, 0, 0, 0.14),0px 6px 28px 5px rgba(0, 0, 0, 0.12)",
        "0px 8px 10px -5px rgba(0, 0, 0, 0.2),0px 16px 24px 2px rgba(0, 0, 0, 0.14),0px 6px 30px 5px rgba(0, 0, 0, 0.12)",
        "0px 8px 11px -5px rgba(0, 0, 0, 0.2),0px 17px 26px 2px rgba(0, 0, 0, 0.14),0px 6px 32px 5px rgba(0, 0, 0, 0.12)",
        "0px 9px 11px -5px rgba(0, 0, 0, 0.2),0px 18px 28px 2px rgba(0, 0, 0, 0.14),0px 7px 34px 6px rgba(0, 0, 0, 0.12)",
        "0px 9px 12px -6px rgba(0, 0, 0, 0.2),0px 19px 29px 2px rgba(0, 0, 0, 0.14),0px 7px 36px 6px rgba(0, 0, 0, 0.12)",
        "0px 10px 13px -6px rgba(0, 0, 0, 0.2),0px 20px 31px 3px rgba(0, 0, 0, 0.14),0px 8px 38px 7px rgba(0, 0, 0, 0.12)",
        "0px 10px 13px -6px rgba(0, 0, 0, 0.2),0px 21px 33px 3px rgba(0, 0, 0, 0.14),0px 8px 40px 7px rgba(0, 0, 0, 0.12)",
        "0px 10px 14px -6px rgba(0, 0, 0, 0.2),0px 22px 35px 3px rgba(0, 0, 0, 0.14),0px 8px 42px 7px rgba(0, 0, 0, 0.12)",
        "0px 11px 14px -7px rgba(0, 0, 0, 0.2),0px 23px 36px 3px rgba(0, 0, 0, 0.14),0px 9px 44px 8px rgba(0, 0, 0, 0.12)",
        "0px 11px 15px -7px rgba(0, 0, 0, 0.2),0px 24px 38px 3px rgba(0, 0, 0, 0.14),0px 9px 46px 8px rgba(0, 0, 0, 0.12)"
    ],
    "typography": {
        "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
        "fontSize": 14,
        "fontWeightLight": 300,
        "fontWeightRegular": 400,
        "fontWeightMedium": 500,
        "display4": {
            "fontSize": "7rem",
            "fontWeight": 300,
            "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
            "letterSpacing": "-.04em",
            "lineHeight": "1.14286em",
            "marginLeft": "-.04em",
            "color": "rgba(0, 0, 0, 0.54)"
        },
        "display3": {
            "fontSize": "3.5rem",
            "fontWeight": 400,
            "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
            "letterSpacing": "-.02em",
            "lineHeight": "1.30357em",
            "marginLeft": "-.02em",
            "color": "rgba(0, 0, 0, 0.54)"
        },
        "display2": {
            "fontSize": "2.8125rem",
            "fontWeight": 400,
            "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
            "lineHeight": "1.06667em",
            "marginLeft": "-.02em",
            "color": "rgba(0, 0, 0, 0.54)"
        },
        "display1": {
            "fontSize": "2.125rem",
            "fontWeight": 400,
            "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
            "lineHeight": "1.20588em",
            "color": "rgba(0, 0, 0, 0.54)"
        },
        "headline": {
            "fontSize": "1.5rem",
            "fontWeight": 400,
            "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
            "lineHeight": "1.35417em",
            "color": "rgba(0, 0, 0, 0.87)"
        },
        "title": {
            "fontSize": "1.3125rem",
            "fontWeight": 500,
            "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
            "lineHeight": "1.16667em",
            "color": "rgba(0, 0, 0, 0.87)"
        },
        "subheading": {
            "fontSize": "1rem",
            "fontWeight": 400,
            "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
            "lineHeight": "1.5em",
            "color": "rgba(0, 0, 0, 0.87)"
        },
        "body2": {
            "fontSize": "0.875rem",
            "fontWeight": 500,
            "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
            "lineHeight": "1.71429em",
            "color": "rgba(0, 0, 0, 0.87)"
        },
        "body1": {
            "fontSize": "0.875rem",
            "fontWeight": 400,
            "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
            "lineHeight": "1.46429em",
        },
        "caption": {
            "fontSize": "0.75rem",
            "fontWeight": 400,
            "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
            "lineHeight": "1.375em",
            "color": "rgba(0, 0, 0, 0.54)"
        },
        "button": {
            "fontSize": "0.875rem",
            "textTransform": "uppercase",
            "fontWeight": 500,
            "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
            "color": "rgba(0, 0, 0, 0.87)"
        }
    },
    "transitions": {
        "easing": {
            "easeInOut": "cubic-bezier(0.4, 0, 0.2, 1)",
            "easeOut": "cubic-bezier(0.0, 0, 0.2, 1)",
            "easeIn": "cubic-bezier(0.4, 0, 1, 1)",
            "sharp": "cubic-bezier(0.4, 0, 0.6, 1)"
        },
        "duration": {
            "shortest": 150,
            "shorter": 200,
            "short": 250,
            "standard": 300,
            "complex": 375,
            "enteringScreen": 225,
            "leavingScreen": 195
        }
    },
    "zIndex": {
        "mobileStepper": 1000,
        "appBar": 1100,
        "drawer": 1200,
        "modal": 1300,
        "snackbar": 1400,
        "tooltip": 1500
    }
}