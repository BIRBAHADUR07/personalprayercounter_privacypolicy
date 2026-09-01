/**
 * English is the reference dictionary: every other locale file must export the
 * same key shape. A few values contain inline <strong> markup and are rendered
 * with `set:html` — keep the tags when translating.
 */
export default {
  site: {
    name: 'Personalized Prayer Counter',
    logoAlt: 'Personalized Prayer Counter mala logo',
  },
  nav: {
    skipToContent: 'Skip to content',
    aria: 'Primary navigation',
    homeAria: 'Personalized Prayer Counter home',
    features: 'Features',
    privacy: 'Privacy Policy',
    contact: 'Contact',
    deleteAccount: 'Delete Account',
  },
  langSwitcher: {
    label: 'Language',
    ariaLabel: 'Choose a language',
  },
  footer: {
    rights: '© 2026 Personalized Prayer Counter. All rights reserved.',
    contactPrefix: 'Contact: Discord',
    discord: 'birsheoran',
  },
  notFound: {
    title: 'Page not found',
    heading: 'This page could not be found.',
    body: 'The page you were looking for may have moved or no longer exists.',
    cta: 'Go to the homepage',
  },
  home: {
    title: 'Personalized Prayer Counter',
    description:
      'Personalized Prayer Counter helps you count prayers, choose beautiful themes, and track daily progress with a calm, personal experience.',
    eyebrow: 'Count • Theme • Personalize',
    heading: 'A peaceful prayer counter made for your daily practice.',
    lede: 'Personalized Prayer Counter helps you count prayers, personalize the experience with beautiful themes, and follow devotional progress over time without unnecessary distractions.',
    ctaPrimary: 'Get the app',
    ctaSecondary: 'Read privacy policy',
    previewAria: 'Personalized Prayer Counter app display preview',
    previewTitleA: 'Personal',
    previewTitleB: 'Prayer',
    previewTitleC: 'Counter',
    previewSubtitle: 'Choose your vibe',
    phoneHeading: 'Themes',
    phoneLede: 'Choose the appearance that feels most comfortable for your daily practice.',
    themes: [
      { icon: '21', name: 'Flowing Words', desc: 'A calm animated counter style.' },
      { icon: '▣', name: 'Digital Counter', desc: 'A crisp handheld tally device.' },
      { icon: '○', name: 'Progressive Mala', desc: 'Each bead fills as you count.' },
    ],
    featuresHeading: 'Designed for focused devotional routines.',
    features: [
      {
        icon: '🎨',
        title: 'Multiple themes',
        body: 'Choose from calm visual styles like Flowing Words, Digital Counter, Progressive Mala, and Sacred Light.',
      },
      {
        icon: '📿',
        title: 'Prayer counter',
        body: 'Track each prayer counter session clearly, including daily totals and personal progress.',
      },
      {
        icon: '✨',
        title: 'Personalized experience',
        body: 'Set up the app around your practice with a polished interface that feels personal, quiet, and focused.',
      },
    ],
    bannerHeading: 'Simple, respectful, and transparent.',
    bannerBody: 'We use Google AdMob for ads and keep the policy easy to understand.',
    bannerCta: 'View Privacy Policy',
  },
  privacy: {
    title: 'Privacy Policy - Personalized Prayer Counter',
    description:
      'How Personalized Prayer Counter handles prayer counter progress, device data, and Google AdMob advertising.',
    back: '← Back to landing page',
    heading: 'Privacy Policy',
    effectiveDate: 'Effective Date: 7/11/2026',
    appNameLine: 'App Name: Personalized Prayer Counter',
    s1: {
      h: '1. Introduction',
      p: 'Personalized Prayer Counter (“we”, “our”, or “the app”) is a prayer counter application designed to help users count prayers and track prayer counter progress. We respect your privacy and are committed to protecting it.',
    },
    s2: {
      h: '2. Information We Collect',
      personalLabel: 'Personal Data:',
      personalP:
        'We do not collect or store personal data such as name, email address, or phone number.',
      progressLabel: 'Prayer Counter Progress:',
      progressP:
        'The app is designed to track prayer counter progress, such as counts, goals, streaks, or session history, so users can follow their devotional practice. This information is used only to provide the core counter and progress features of the app.',
      nonPersonalLabel: 'Non-Personal Data:',
      nonPersonalP: 'The app may collect limited non-personal data such as:',
      items: [
        'App usage, such as session duration and screens viewed',
        'Device type and operating system',
        'Ad interaction data through Google AdMob',
      ],
      closing:
        'This data is used only to improve app performance, user experience, and advertising functionality.',
    },
    s3: {
      h: '3. Third-Party Services',
      p: 'The app uses third-party services that may collect information.',
      admobLabel: 'Google AdMob:',
      admobP: 'We use Google AdMob to display ads. AdMob may collect:',
      items: [
        'Device identifiers',
        'Approximate location',
        'Ad interaction data',
        'Diagnostics and performance information',
      ],
      learnMore: 'Learn more:',
    },
    s4: {
      h: '4. Permissions',
      p: 'The app may request the following permissions:',
      items: [
        'Internet access, for ads and app functionality',
        'Storage or local app data access, for saving prayer counter progress on the device',
      ],
      closing:
        'The app does not access contacts, photos, or other sensitive personal data unless clearly required by a feature and allowed by the user.',
    },
    s5: {
      h: '5. Data Security',
      p: 'We do not store personal data on our servers. Prayer counter progress is used to support the app experience. Third-party services used by the app follow their own security practices.',
    },
    s6: {
      h: '6. Privacy of Children',
      p: 'This app is not directed toward children under 13. We do not knowingly collect personal data from children.',
    },
    s7: {
      h: '7. Changes to This Policy',
      p: 'We may update this Privacy Policy from time to time. Updates will be posted on this page with a revised date.',
    },
    s8: {
      h: '8. Contact Us',
      p: 'If you have any questions, contact us at:',
      emailLabel: 'Email:',
      deletionLabel: 'Account deletion:',
      deletionLink: 'Delete your Personal Prayer Counter account',
    },
  },
  deleteAccount: {
    title: 'Delete Your Personal Prayer Counter Account',
    description:
      'Learn how to permanently delete your Personal Prayer Counter account and associated cloud data.',
    eyebrow: 'Google Play account deletion',
    heading: 'Delete Your Personal Prayer Counter Account',
    intro:
      'Users can permanently delete their Personal Prayer Counter account and all associated cloud data. This page is publicly accessible and does not require login.',
    how: {
      h: 'How to delete your account',
      steps: [
        'Open the Personal Prayer Counter app.',
        'Go to <strong>Profile → Advanced Settings → Delete Account</strong>.',
        'Read the warning and confirm deletion.',
        'Your account and associated cloud data will be permanently deleted.',
      ],
    },
    data: {
      h: 'Data that is deleted',
      p: 'When an account is deleted, the following data is permanently removed:',
      items: [
        'Firebase Authentication account',
        'Email address',
        'User profile',
        'Prayer sessions',
        'Daily statistics',
        'Lifetime statistics',
        'Prayer goals',
        'Synced preferences and settings',
        'Any other cloud data associated with the account',
      ],
    },
    retention: {
      h: 'Data retention',
      p: 'We do not intentionally retain personal account data after account deletion except where required by applicable law or for legitimate security, fraud prevention, or legal compliance purposes.',
    },
    help: {
      h: 'Need help?',
      p: 'For assistance, contact:',
      emailLabel: 'Email:',
    },
  },
} as const;
