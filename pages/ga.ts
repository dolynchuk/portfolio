import ReactGA from "react-ga4";

export const initGA = () => {
    if (window) {
        ReactGA.initialize("G-V7PDVH0PW3");
    }
};

export const trackPageView = (path: string) => {
    if (window) {
        ReactGA.send({ hitType: "pageview", page: path });
    }
};
