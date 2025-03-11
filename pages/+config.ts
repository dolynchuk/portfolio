import vikeReact from "vike-react/config";
import type { Config } from "vike/types";
import Layout from "../layouts/LayoutDefault.js";
// https://vike.dev/config

export default {
  // https://vike.dev/Layout
  Layout,

  // https://vike.dev/head-tags
  title: "Maksym Dolynchuk Portfolio",
  description: "Front End Engineer portfolio website",

  extends: vikeReact,
  prerender: true,
} satisfies Config;
