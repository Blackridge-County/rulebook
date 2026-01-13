import React from 'react';
import { useConfig } from 'nextra-theme-docs';
import { useRouter } from 'next/router';

function useHead() {
  const { asPath } = useRouter();
  // `useConfig` types may vary across theme versions; coerce to `any` to avoid
  // build-time type errors while keeping runtime behavior intact.
  const { frontMatter = {}, title } = useConfig() as any;
  const url = `https://rules.zephyrroleplay.com${asPath}`;
  const description = frontMatter.description || "Zephyr Roleplay";

  return (
    <>
      <title>{title ? `${title} - Zephyr Roleplay` : 'Zephyr Roleplay'}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/x-icon" href="https://r2.fivemanage.com/C7VNUJE5Bo07WayfJSyol/logo-new.png" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content={description} />
      <meta property="og:title" content={title || 'Zephyr Roleplay'} />
      <meta property="og:description" content={description} />
      <meta name="og:url" content={url} />
      <meta property="og:image" content="https://r2.fivemanage.com/C7VNUJE5Bo07WayfJSyol/logo-new.png" />
      <meta name="theme-color" content="#7151b5" />
    </>
  );
}

const config = {
  color: {
    hue: 258,
    saturation: 50,
  },
  head: useHead,
  backgroundColor: {
    dark: '28, 28, 28',
  },
  logo: (
    <div
      style={{
        paddingLeft: '50px',
        lineHeight: '38px',
        background: "url('https://r2.fivemanage.com/C7VNUJE5Bo07WayfJSyol/logo-new.png') no-repeat left",
        backgroundSize: '38px',
        fontWeight: 550,
      }}
    >
      Zephyr Roleplay
    </div>
  ),
  chat: {
    link: 'https://discord.gg/zephyrrp',
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
  navigation: true,
  feedback: {
    content: null,
    useLink: () => 'https://discord.gg/zephyrrp',
  },
  editLink: {
    component: null,
  },
  footer: {
    content: 'Zephyr Roleplay',
  },
};

export default config;