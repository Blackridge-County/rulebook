import React from 'react';
import { useConfig } from 'nextra-theme-docs';
import { useRouter } from 'next/router';

function useHead() {
  const { asPath } = useRouter();
  // `useConfig` types may vary across theme versions; coerce to `any` to avoid
  // build-time type errors while keeping runtime behavior intact.
  const { frontMatter = {}, title } = useConfig() as any;
  const url = `https://rules.blackridgecounty.com${asPath}`;
  const description = frontMatter.description || "Blackridge County Rulebook";

  return (
    <>
      <title>{title ? `${title} - Blackridge County` : 'Blackridge County'}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/x-icon" href="https://r2.fivemanage.com/z55N3UpqGll0XghMPbSfK/Blackridge-logo.png" />
      <style dangerouslySetInnerHTML={{
        __html: `
          html:not([data-theme="dark"]) body {
            background: linear-gradient(135deg, #FAF6F0 0%, #F5F0E8 50%, #FAF6F0 100%);
            min-height: 100vh;
          }

          html:not([data-theme="dark"]) .nextra-nav-container {
            background: rgba(241, 233, 210, 0.8) !important;
            backdrop-filter: blur(10px);
            box-shadow: 0 2px 4px rgba(193, 168, 124, 0.2);
          }

          /* Remove default footer background classes */
          html:not([data-theme="dark"]) footer._bg-gray-100,
          html:not([data-theme="dark"]) footer .nx-bg-gray-100,
          html:not([data-theme="dark"]) .nextra-footer ._bg-gray-100 {
            background: transparent !important;
          }

          html:not([data-theme="dark"]) footer {
            background: rgba(241, 233, 210, 0.8) !important;
            backdrop-filter: blur(10px);
            box-shadow: 0 2px 4px rgba(193, 168, 124, 0.2);
          }

          /* Fix theme switcher and other UI elements to blend subtly */
          html:not([data-theme="dark"]) select,
          html:not([data-theme="dark"]) button,
          html:not([data-theme="dark"]) [data-nextra-theme-switch],
          html:not([data-theme="dark"]) [role="combobox"],
          html:not([data-theme="dark"]) .nx-select,
          html:not([data-theme="dark"]) .nx-theme-switch,
          html:not([data-theme="dark"]) nav button,
          html:not([data-theme="dark"]) header button {
            background: rgba(241, 233, 210, 0.3) !important;
            color: #2c2c2c !important;
            border: 1px solid rgba(193, 168, 124, 0.2) !important;
            border-radius: 3px !important;
            padding: 0.25rem 0.5rem !important;
            box-shadow: none !important;
          }
          html:not([data-theme="dark"]) .nextra-toc p {
            box-shadow: none !important;
          }

          /* Fix sidebar footer to blend with paper theme */
          html:not([data-theme="dark"]) .nextra-sidebar-footer, html:not([data-theme="dark"]) .nextra-toc-footer {
            background: transparent !important;
            border-top: 1px solid rgba(193, 168, 124, 0.1) !important;
            color: #2c2c2c !important;
            box-shadow: none !important;
          }

          html:not([data-theme="dark"]) main,
          html:not([data-theme="dark"]) .nx-prose {
            background: linear-gradient(to bottom, #F1E9D2 0%, #EDE3C6 25%, #F1E9D2 50%, #E9DFC0 75%, #F1E9D2 100%);
            padding: 2.5rem;
            margin: 1.5rem;
            border-radius: 6px;
            border: 1px solid rgba(193, 168, 124, 0.3);
            box-shadow:
              0 4px 12px rgba(193, 168, 124, 0.2),
              inset 0 1px 3px rgba(255, 255, 255, 0.3);
            font-family: 'Times New Roman', 'Georgia', serif;
            color: #2c2c2c;
            line-height: 1.6;
            position: relative;
          }

          html:not([data-theme="dark"]) main::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-image:
              /* Parchment texture overlay */
              url('/images/parchment3.png');
            background-size: auto;
            background-repeat: repeat;
            background-blend-mode: multiply;
            pointer-events: none;
            border-radius: 6px;
            opacity: 0.2;
          }

          /* Horizontal rule styling for section dividers - light mode only */
          html:not([data-theme="dark"]) .nx-container .nx-prose hr,
          html:not([data-theme="dark"]) main hr {
            border: none;
            height: 3px;
            background: linear-gradient(to right,
              transparent,
              rgba(193, 168, 124, 0.8) 20%,
              rgba(139, 127, 90, 0.9) 50%,
              rgba(193, 168, 124, 0.8) 80%,
              transparent
            );
            margin: 2rem 0;
            position: relative;
            border-radius: 2px;
            box-shadow:
              0 1px 2px rgba(193, 168, 124, 0.4),
              inset 0 1px 1px rgba(255, 255, 255, 0.3);
          }

          html:not([data-theme="dark"]) .nx-container .nx-prose hr::before,
          html:not([data-theme="dark"]) main hr::before {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            background: #F1E9D2;
            color: rgba(139, 127, 90, 0.9);
            font-size: 1.1rem;
            padding: 0.2rem 0.4rem;
            border-radius: 50%;
            border: 2px solid rgba(193, 168, 124, 0.6);
            box-shadow: 0 2px 4px rgba(193, 168, 124, 0.3);
          }
        `
      }} />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content={description} />
      <meta property="og:title" content={title || 'Blackridge County'} />
      <meta property="og:description" content={description} />
      <meta name="og:url" content={url} />
      <meta property="og:image" content="https://r2.fivemanage.com/z55N3UpqGll0XghMPbSfK/Blackridge-logo.png" />
      <meta name="theme-color" content="#7151b5" />
    </>
  );
}

const config = {
  color: {
    hue: 258,
    saturation: 50,
  },
  nextThemes: {
    defaultTheme: "light",
    storageKey: "theme"
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
        background: "url('https://r2.fivemanage.com/z55N3UpqGll0XghMPbSfK/Blackridge-logo.png') no-repeat left",
        backgroundSize: '38px',
        fontWeight: 550,
      }}
    >
      Blackridge County
    </div>
  ),
  chat: {
    link: 'https://discord.gg/something',
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
  themeSwitch: {
    component: null,
  },
  navigation: false,
  feedback: {
    content: null,
    useLink: () => 'https://discord.gg/something',
  },
  editLink: {
    component: null,
  },
  footer: {
    content: 'Blackridge County',
  },
};

export default config;