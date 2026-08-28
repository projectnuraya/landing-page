import { company, legalEffectiveDateLabel } from '../../config/company'

import type { LegalDocument } from './types'

export const legalNoticeEn: LegalDocument = {
  locale: 'en',
  title: 'Legal Notice',
  intro: `Legal and corporate identity information for ${company.legalName}.`,
  lastUpdated: `Last updated: ${legalEffectiveDateLabel.en}`,
  languageSwitch: { label: 'Baca halaman ini dalam Bahasa Indonesia', to: '/legal' },

  sections: [
    {
      heading: '1. Company Information',
      blocks: [
        {
          kind: 'note',
          text: 'This English text is provided for convenience. The Indonesian version at [projectnuraya.id/legal](/legal) is the legally binding text; in case of any discrepancy, the Indonesian version prevails.',
        },
        {
          kind: 'definitions',
          items: [
            { term: 'Company name', value: company.legalName },
            { term: 'Entity type', value: company.entityTypeEn },
            { term: 'Business registration number (NIB)', value: company.nib },
            {
              term: 'Incorporation status',
              value: 'Registered with the Ministry of Law of the Republic of Indonesia',
            },
            { term: 'Address', value: company.addressLine },
            { term: 'Trading name', value: company.brandName },
            { term: 'Email', value: `[${company.email}](mailto:${company.email})` },
            { term: 'Website', value: `[${company.website}](${company.website})` },
            {
              term: 'Certificate of incorporation',
              value: `[View the certificate at AHU, Ministry of Law](${company.ahuCertificateUrl})`,
            },
          ],
        },
      ],
    },

    {
      heading: '2. Copyright and Trade Marks',
      blocks: [
        {
          kind: 'paragraph',
          text: `© ${company.legalName}. All rights reserved. "${company.brandName}", the Nuraya logo and related marks are trade marks of ${company.legalName}. They may not be used without our written permission.`,
        },
        {
          kind: 'paragraph',
          text: 'All content, design, graphics, arrangement and other material on this site is protected by Law No. 28 of 2014 on Copyright and by the international copyright treaties applicable to Indonesia.',
        },
        {
          kind: 'paragraph',
          text: 'You may access, read and print pages of this site for personal, non-commercial use. Any other use requires our written permission.',
        },
      ],
    },

    {
      heading: '3. Regulatory Compliance',
      blocks: [
        {
          kind: 'paragraph',
          text: `${company.legalName} operates in accordance with the laws of the Republic of Indonesia, including but not limited to:`,
        },
        {
          kind: 'list',
          items: [
            'Law No. 40 of 2007 on Limited Liability Companies, as amended.',
            'Law No. 11 of 2008 on Electronic Information and Transactions, as amended by Law No. 19 of 2016 and Law No. 1 of 2024.',
            'Law No. 27 of 2022 on Personal Data Protection.',
            'Law No. 28 of 2014 on Copyright.',
            'Law No. 8 of 1999 on Consumer Protection.',
            'Government Regulation No. 71 of 2019 on the Implementation of Electronic Systems and Transactions.',
            'Other implementing regulations applicable to our business activities.',
          ],
        },
        {
          kind: 'paragraph',
          text: 'How we meet our obligations under Law No. 27 of 2022 is set out in our [Privacy Policy](/en/privacy).',
        },
      ],
    },

    {
      heading: '4. Disclaimer',
      blocks: [
        {
          kind: 'paragraph',
          text: 'Information on this site is provided for general information purposes and is not intended as legal, financial, professional or technical advice for your particular circumstances.',
        },
        {
          kind: 'paragraph',
          text: 'We work to keep the information accurate and current but give no warranty as to its completeness, accuracy or fitness for a particular purpose. Decisions you make based on information on this site are your own responsibility.',
        },
      ],
    },

    {
      heading: '5. External Links',
      blocks: [
        {
          kind: 'paragraph',
          text: `Our site contains links to third-party sites that are not operated or controlled by ${company.legalName}. We have no control over the content, privacy policies or practices of those sites and are not responsible for them.`,
        },
        {
          kind: 'paragraph',
          text: 'A link does not imply endorsement or a warranty as to the destination’s content. We recommend reading the terms and privacy policy of every third-party site you visit.',
        },
      ],
    },

    {
      heading: '6. Open Source Licences',
      blocks: [
        {
          kind: 'paragraph',
          text: 'Our services are built using open source software components. We respect the copyright and licence terms of every third-party library and framework we use, and we meet the attribution obligations their licences require.',
        },
        {
          kind: 'paragraph',
          text: `A list of the open source components we use, together with their licences, is available on request at [${company.email}](mailto:${company.email}). Some of our work is also published on [GitHub](${company.github}).`,
        },
      ],
    },

    {
      heading: '7. Reporting Infringement',
      blocks: [
        {
          kind: 'paragraph',
          text: 'If you believe your intellectual property rights have been infringed, or you find unlawful content in our services, please report it to us:',
        },
        {
          kind: 'definitions',
          items: [
            { term: 'Email', value: `[${company.email}](mailto:${company.email})` },
            { term: 'Subject', value: 'Infringement Report — [Type of Infringement]' },
          ],
        },
        {
          kind: 'paragraph',
          text: 'Include a description of the infringement, evidence of your rights, the location of the reported content and your contact details. We review every report and take the action appropriate under applicable law.',
        },
        {
          kind: 'paragraph',
          text: 'Security vulnerability reports can be sent to the same address with the subject "Security Report". We welcome responsible disclosure and will not pursue legal action against good-faith reporters.',
        },
      ],
    },

    {
      heading: '8. Jurisdiction',
      blocks: [
        {
          kind: 'paragraph',
          text: 'This legal notice, and any matter arising from or connected with the use of our services, is governed by and construed in accordance with the laws of the Republic of Indonesia.',
        },
        {
          kind: 'paragraph',
          text: `Disputes are first addressed through good-faith negotiation within ${company.disputeNegotiationDays} calendar days. If no agreement is reached, the dispute is resolved before the **${company.courtVenueEn}**, consistent with section 13 of our [Terms of Service](/en/terms).`,
        },
        {
          kind: 'paragraph',
          text: 'This does not remove your right as a consumer to pursue other dispute resolution avenues available under Indonesian law.',
        },
      ],
    },

    {
      heading: '9. Contact',
      blocks: [
        {
          kind: 'paragraph',
          text: 'For questions about this legal notice or any other legal matter relating to our services, contact:',
        },
        {
          kind: 'definitions',
          items: [
            { term: 'Company', value: company.legalName },
            { term: 'Address', value: company.addressLine },
            { term: 'Email', value: `[${company.email}](mailto:${company.email})` },
          ],
        },
        {
          kind: 'paragraph',
          text: 'We use a single email address for all correspondence so that nothing is lost to an unmonitored inbox.',
        },
      ],
    },
  ],

  callout: {
    title: 'Our Commitment to Transparency',
    text: 'Our legal identity, registration number and contact details are set out in full on this page rather than hidden behind a form. If anything needs clarifying, ask us.',
  },
  contactPrompt: `Have a legal question? Reach us at [${company.email}](mailto:${company.email})`,
  backHome: 'Back to Home',
}
