import nextra from "nextra";

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

export default async function config() {
  const nextraConfig = await withNextra();

  return {
    ...nextraConfig,
  };
}