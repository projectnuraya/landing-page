import { company, coveredApps, legalEffectiveDateLabel } from '../../config/company'

import type { LegalDocument } from './types'

export const termsEn: LegalDocument = {
  locale: 'en',
  title: 'Terms of Service',
  intro: `The terms governing the relationship between you and ${company.legalName} when you use our website and applications.`,
  lastUpdated: `Last updated: ${legalEffectiveDateLabel.en}`,
  languageSwitch: { label: 'Baca halaman ini dalam Bahasa Indonesia', to: '/terms' },

  sections: [
    {
      heading: '1. Definitions and Parties',
      blocks: [
        {
          kind: 'note',
          text: 'This English text is provided for convenience. The Indonesian version at [projectnuraya.id/terms](/terms) is the legally binding text; in case of any discrepancy, the Indonesian version prevails.',
        },
        {
          kind: 'definitions',
          items: [
            {
              term: '"We"',
              value: `${company.legalName}, an ${company.entityTypeEn} domiciled at ${company.addressLine}, business registration number (NIB) ${company.nib}.`,
            },
            {
              term: '"You"',
              value: 'Any person who accesses our website or uses our applications.',
            },
            {
              term: '"Services"',
              value: `The website [${company.website}](${company.website}) and every application we publish under the name ${company.brandName}, as listed in section 3.`,
            },
            {
              term: '"Your Content"',
              value: 'Data and material you enter, upload or generate through the Services.',
            },
          ],
        },
      ],
    },

    {
      heading: '2. Acceptance and Legal Capacity',
      blocks: [
        {
          kind: 'paragraph',
          text: 'By accessing or using the Services you confirm that you have read, understood and are bound by these Terms and by our [Privacy Policy](/en/privacy). If you do not agree, please do not use the Services.',
        },
        {
          kind: 'paragraph',
          text: 'You confirm that you have the legal capacity to enter into this agreement. If you use the Services on behalf of an organisation, you confirm that you are authorised to bind that organisation.',
        },
        {
          kind: 'paragraph',
          text: 'If you are a minor under applicable law, you may use the Services only with the consent and under the supervision of your parent or guardian.',
        },
      ],
    },

    {
      heading: '3. Services Covered',
      blocks: [
        { kind: 'paragraph', text: 'These Terms apply to:' },
        {
          kind: 'list',
          items: [
            `The company website [${company.website}](${company.website}).`,
            ...coveredApps.map(
              (app) =>
                `The **${app.name}** application — [${app.url}](${app.url}). ${app.descriptionEn}`,
            ),
          ],
        },
        {
          kind: 'paragraph',
          text: 'Professional services such as web development, IT consulting and data solutions offered through this website are governed by separately agreed contracts. These Terms do not replace those contracts.',
        },
      ],
    },

    {
      heading: '4. Accounts and Google Sign-In',
      blocks: [
        {
          kind: 'paragraph',
          text: 'Our applications do not offer separate password-based registration. Accounts are created and accessed through **Google Sign-In** using your existing Google Account.',
        },
        {
          kind: 'paragraph',
          text: 'The security of your account therefore depends on the security of your Google Account. You are responsible for keeping your Google Account credentials confidential and for activity carried out through that account. Tell us promptly if you become aware of unauthorised use.',
        },
        {
          kind: 'paragraph',
          text: 'What we receive from Google and how we handle it is set out in our [Privacy Policy](/en/privacy). You may revoke our access at any time from your [Google Account permissions page](https://myaccount.google.com/permissions). Revoking access may prevent you from signing in to the Services.',
        },
        {
          kind: 'paragraph',
          text: 'You must provide accurate information and must not impersonate any person or entity.',
        },
      ],
    },

    {
      heading: '5. Prohibited Use',
      blocks: [
        { kind: 'paragraph', text: 'You must not use the Services to:' },
        {
          kind: 'list',
          items: [
            'Carry out acts that breach the laws of the Republic of Indonesia.',
            'Upload or distribute material that is unlawful, defamatory, hateful, obscene, or infringes the rights of others.',
            'Infringe intellectual property rights or the privacy of others.',
            'Enter another person’s personal data without a lawful basis.',
            'Disrupt, unreasonably burden, or attempt unauthorised access to systems, networks or other users’ accounts.',
            'Scrape data automatically, reverse engineer, or attempt to circumvent technical restrictions of the Services.',
            'Send spam or distribute malicious software.',
          ],
        },
      ],
    },

    {
      heading: '6. Your Content',
      blocks: [
        {
          kind: 'paragraph',
          text: 'Your Content remains yours. We claim no ownership of it.',
        },
        {
          kind: 'paragraph',
          text: 'You grant us a non-exclusive, royalty-free, limited licence **solely to store, display, process and back up Your Content as far as necessary to operate the Services for you**. This licence does not extend to using Your Content for promotion, for training artificial intelligence models, or for any other purpose, and it ends when Your Content is deleted.',
        },
        {
          kind: 'paragraph',
          text: 'You warrant that you are entitled to put Your Content into the Services. Where Your Content includes another person’s personal data — for example the names and reading progress of group members in Tilawah Tracker — you are responsible for ensuring there is a lawful basis for processing it, including parental or guardian consent where a child is involved.',
        },
      ],
    },

    {
      heading: '7. Intellectual Property',
      blocks: [
        {
          kind: 'paragraph',
          text: `All software, design, interfaces, text, graphics and other material in the Services, other than Your Content, belongs to ${company.legalName} or its licensors and is protected by Law No. 28 of 2014 on Copyright and other applicable provisions.`,
        },
        {
          kind: 'paragraph',
          text: `The name "${company.brandName}", our logo and related marks may not be used without our written permission. Further detail is set out in our [Legal Notice](/en/legal).`,
        },
        {
          kind: 'paragraph',
          text: 'Our Services use open source software components, each subject to its own licence.',
        },
      ],
    },

    {
      heading: '8. Availability and Changes to the Services',
      blocks: [
        {
          kind: 'paragraph',
          text: 'Some of our Services are currently provided free of charge. We do not promise that they will remain free of charge indefinitely.',
        },
        {
          kind: 'paragraph',
          text: 'We may change, add to, limit or discontinue any part of the Services. For changes that materially disadvantage you, or for discontinuation, we will endeavour to give advance notice through the Services or by email and a reasonable opportunity to export Your Content.',
        },
        {
          kind: 'paragraph',
          text: 'We do not guarantee uninterrupted Services. Scheduled maintenance and events beyond our control may make the Services temporarily unavailable.',
        },
      ],
    },

    {
      heading: '9. Suspension and Termination',
      blocks: [
        {
          kind: 'paragraph',
          text: 'You may stop using the Services at any time and request deletion of your data under the procedure in our [Privacy Policy](/en/privacy).',
        },
        {
          kind: 'paragraph',
          text: 'We may suspend or terminate your access if you breach these Terms, if your use creates legal or security risk, or where required by law. Except for serious breaches or legal obligations requiring immediate action, we will explain the reason and give you an opportunity to remedy it.',
        },
        {
          kind: 'paragraph',
          text: 'Provisions on intellectual property, limitation of liability, indemnity and governing law survive termination.',
        },
      ],
    },

    {
      heading: '10. Disclaimer of Warranties',
      blocks: [
        {
          kind: 'paragraph',
          text: 'To the extent permitted by law, the Services are provided **"as is" and "as available"**. We do not warrant that the Services will be error-free, always available, or fit for your particular requirements.',
        },
        {
          kind: 'paragraph',
          text: 'We remain obliged to provide the Services in good faith and with reasonable care.',
        },
      ],
    },

    {
      heading: '11. Limitation of Liability',
      blocks: [
        {
          kind: 'paragraph',
          text: 'To the extent permitted by law, we are not liable for indirect, incidental or consequential loss, including lost profits, lost business opportunity or lost data arising from use of or inability to use the Services.',
        },
        {
          kind: 'paragraph',
          text: 'For Services provided free of charge, our liability is limited to repairing the Services or restoring data where technically possible.',
        },
        {
          kind: 'note',
          text: 'The limitations in sections 10 and 11 do not apply where prohibited by law, including Article 18 of Law No. 8 of 1999 on Consumer Protection, and do not limit our liability for wilful misconduct, gross negligence, or anything else that cannot be limited by law.',
        },
      ],
    },

    {
      heading: '12. Indemnity',
      blocks: [
        {
          kind: 'paragraph',
          text: 'You agree to hold us harmless against third-party claims arising from your breach of these Terms, from Your Content, or from your unlawful use of the Services, except where the claim results from our own fault.',
        },
      ],
    },

    {
      heading: '13. Governing Law and Dispute Resolution',
      blocks: [
        {
          kind: 'paragraph',
          text: 'These Terms are governed by and construed in accordance with the laws of the Republic of Indonesia.',
        },
        {
          kind: 'paragraph',
          text: `If a dispute arises, the parties will first seek to resolve it through good-faith negotiation within ${company.disputeNegotiationDays} calendar days of written notice from either party.`,
        },
        {
          kind: 'paragraph',
          text: `If negotiation does not produce agreement, the dispute will be resolved before the **${company.courtVenueEn}**. This does not remove your right as a consumer to pursue the dispute resolution avenues available under Indonesian law, including the Consumer Dispute Resolution Body (Badan Penyelesaian Sengketa Konsumen).`,
        },
      ],
    },

    {
      heading: '14. Changes to These Terms',
      blocks: [
        {
          kind: 'paragraph',
          text: 'We may update these Terms. For material changes we will give notice through the Services or by email before the change takes effect, together with the new effective date.',
        },
        {
          kind: 'paragraph',
          text: 'Continuing to use the Services after the effective date constitutes acceptance of the updated Terms. If you do not accept them, you may stop using the Services and request deletion of your data.',
        },
      ],
    },

    {
      heading: '15. Contact',
      blocks: [
        {
          kind: 'definitions',
          items: [
            { term: 'Service provider', value: company.legalName },
            { term: 'Address', value: company.addressLine },
            { term: 'Email', value: `[${company.email}](mailto:${company.email})` },
          ],
        },
      ],
    },
  ],

  callout: {
    title: 'Terms That Describe the Actual Service',
    text: 'These Terms are written to match what we actually operate — including the fact that accounts are created through Google Sign-In, and that Your Content stays yours.',
  },
  contactPrompt: `Questions about these terms? Reach us at [${company.email}](mailto:${company.email})`,
  backHome: 'Back to Home',
}
