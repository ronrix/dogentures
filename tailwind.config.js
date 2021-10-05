module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        screens: {
            sm: '320px',
            md: '768px',
            lg: '1200px',
        },
        extend: {},
        fontFamily: {
            arial: ["arial", "sans"],
            sans: ['Roboto', 'sans'],
        },
        container: {
            center: true,
            padding: "2rem",
        },
        colors: {
            link: "#145DA0",
            ld: "#444444",
            l: "#F4F4F2",
            white: "#FFF",
            login: "#0C2D48",
            g: "#BBBFCA",
            "dark-gray": "#495464",
            "light-gray": "#E8E8E8",
            d: "#171717",
            r: "#DA0037",
            lbtn: "#0C2D48",
            google: "#56A2FB",
            facebook: "#1B62CE",
            transparent: "transparent",
        },
    },
    variants: {
        extend: {
            backgroundColor: ["hover"],
            borderWidth: ["hover"],
            text: ["hover"],
            textDecoration: ["hover"],
            ringWidth: ["hover", "focus"],
            opacity: ["group-hover", "group-focus"],
            blur: ["group-hover", "group-focus"],
            overscrollBehavior: ["hover", "focus"],
            minWidth: ["hover", "focus"],
        },
    },
    plugins: [require("tailwind-scrollbar-hide")],
};
