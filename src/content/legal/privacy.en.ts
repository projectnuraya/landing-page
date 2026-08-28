import {
  company,
  coveredApps,
  dataResidency,
  googleScopes,
  googleUserDataFields,
  legalEffectiveDateLabel,
  subProcessors,
} from '../../config/company'

import type { LegalDocument } from './types'

const scopeList = googleScopes.join(', ')

export const privacyEn: LegalDocument = {
  locale: 'en',
  title: 'Privacy Policy',
  intro:
    'This policy explains how we collect, use, store and protect your personal data, including the data we receive from Google when you sign in with your Google Account.',
  lastUpdated: `Last updated: ${legalEffectiveDateLabel.en}`,
  languageSwitch: { label: 'Baca halaman ini dalam Bahasa Indonesia', to: '/privacy' },

  sections: [
    {
      heading: '1. Identity of the Data Controller',
      blocks: [
        {
          kind: 'note',
          text: 'This English text is provided for convenience. The Indonesian version at [projectnuraya.id/privacy](/privacy) is the legally binding text; in case of any discrepancy, the Indonesian version prevails.',
        },
        {
          kind: 'paragraph',
          text: 'The controller responsible for the processing described in this policy is:',
        },
        {
          kind: 'definitions',
          items: [
            { term: 'Legal entity', value: company.legalName },
            { term: 'Entity type', value: company.entityTypeEn },
            { term: 'Business registration number (NIB)', value: company.nib },
            { term: 'Address', value: company.addressLine },
            { term: 'Email', value: `[${company.email}](mailto:${company.email})` },
            { term: 'Website', value: `[${company.website}](${company.website})` },
            {
              term: 'Certificate of incorporation',
              value: `[View the certificate at AHU, Ministry of Law](${company.ahuCertificateUrl})`,
            },
          ],
        },
        {
          kind: 'paragraph',
          text: 'All questions, requests to exercise your rights, and complaints about personal data can be sent to the email address above.',
        },
      ],
    },

    {
      heading: '2. Scope',
      blocks: [
        {
          kind: 'paragraph',
          text: `This policy covers the website [${company.website}](${company.website}) and the following applications published by ${company.legalName} under the app name **${company.brandName}** on the Google consent screen:`,
        },
        {
          kind: 'list',
          items: coveredApps.map(
            (app) => `**${app.name}** — ${app.descriptionEn} [${app.url}](${app.url})`,
          ),
        },
        {
          kind: 'paragraph',
          text: `Tilawah Tracker publishes its own privacy notice covering processing specific to that application: [${coveredApps[0].privacyPolicyUrl}](${coveredApps[0].privacyPolicyUrl}). That notice supplements this policy. Where the two conflict, this policy prevails.`,
        },
        {
          kind: 'paragraph',
          text: 'If we publish a new application that uses your Google Account, we will add it to the list above and notify you of the change before processing begins.',
        },
      ],
    },

    {
      heading: '3. Legal Basis for Processing',
      blocks: [
        {
          kind: 'paragraph',
          text: 'Under Article 20 of Law No. 27 of 2022 on Personal Data Protection, we process your personal data on the following bases:',
        },
        {
          kind: 'list',
          items: [
            '**Your consent** — given expressly when you accept the Google consent screen and choose to sign in to our application.',
            '**Performance of a contract** — processing necessary to deliver the service you requested, as set out in our Terms of Service.',
            '**Legitimate interests** — keeping our systems secure, preventing abuse and fixing technical faults, provided these do not override your rights and interests.',
          ],
        },
        {
          kind: 'paragraph',
          text: 'You may withdraw consent at any time. Withdrawal does not affect the lawfulness of processing carried out before it.',
        },
      ],
    },

    {
      heading: '4. Data We Collect',
      blocks: [
        { kind: 'paragraph', text: 'We distinguish data by its source.' },
        {
          kind: 'paragraph',
          text: '**a. Data from your Google Account.** Described in full in section 5 below.',
        },
        {
          kind: 'paragraph',
          text: '**b. Data you enter yourself.** Information you provide while using our applications — for example group names, weekly juz assignments and reading progress in Tilawah Tracker — and the contents of messages you send us.',
        },
        {
          kind: 'paragraph',
          text: '**c. Technical data.** This website is static and contains no server code that logs visitors. However, as with any internet service, your requests pass through network and hosting layers that record IP address, browser type and access time for security and abuse prevention. That logging is performed by our network providers, not by our application code.',
        },
        {
          kind: 'paragraph',
          text: '**d. Browser local storage.** Described in section 13.',
        },
        {
          kind: 'note',
          text: 'We do not run Google Analytics, tracking pixels, tag managers or any other third-party analytics on this site.',
        },
      ],
    },

    {
      heading: '5. Google User Data',
      blocks: [
        {
          kind: 'paragraph',
          text: `Our applications use Google Sign-In and request **only** the following non-sensitive scopes: \`${scopeList}\`. We do not request access to Gmail, Google Drive, Calendar, Contacts or any other Google service.`,
        },
        { kind: 'paragraph', text: '**What we access.** From those scopes we receive:' },
        { kind: 'list', items: [...googleUserDataFields.en] },
        {
          kind: 'paragraph',
          text: '**How we use it.** Solely to create and recognise your account, display your identity inside the application, connect you to the groups or records you are entitled to, and send you service-related notifications.',
        },
        {
          kind: 'paragraph',
          text: '**Who handles the sign-in.** The Google sign-in flow is handled by our own systems running on our servers in Indonesia. We use no third-party authentication provider other than Google as the identity provider.',
        },
        {
          kind: 'paragraph',
          text: '**How we store it.** Your account identifier, email address, display name and profile picture URL are stored in our own database in Indonesia, as described in section 9. We never store your Google Account password — we never receive it.',
        },
        {
          kind: 'paragraph',
          text: '**How we share it.** Google user data is not shared with any third party other than the infrastructure providers listed in section 7, which act on our instructions.',
        },
        {
          kind: 'paragraph',
          text: 'We expressly do **not** do any of the following with Google user data:',
        },
        {
          kind: 'list',
          items: [
            'Sell or transfer it to data brokers, aggregators or information resellers.',
            'Use it for advertising, including retargeting, personalised or interest-based advertising.',
            'Use it to determine creditworthiness or for any financial assessment purpose.',
            'Use it to train artificial intelligence or machine learning models, personalised or otherwise.',
            'Allow humans to read it, except with your express consent, for security purposes such as investigating abuse, or where required by law.',
          ],
        },
        {
          kind: 'paragraph',
          text: 'Our use and transfer of information received from Google APIs adheres to the [Google API Services User Data Policy](https://developers.google.com/terms/api-services-user-data-policy), including the Limited Use requirements.',
        },
        {
          kind: 'paragraph',
          text: 'You can revoke our access to your Google Account at any time from your [Google Account permissions page](https://myaccount.google.com/permissions). Revoking access stops future access; it does not by itself delete data already stored — for that, submit a deletion request as described in section 9.',
        },
      ],
    },

    {
      heading: '6. Purposes of Processing',
      blocks: [
        { kind: 'paragraph', text: 'We process your personal data for the following purposes:' },
        {
          kind: 'list',
          items: [
            'Providing, operating and maintaining the services you use.',
            'Authenticating you and securing access to your account.',
            'Displaying your identity and records inside the application, including to members of groups you join where the feature requires it.',
            'Communicating with you about the service, policy changes and responses to your requests.',
            'Detecting, preventing and handling security incidents, abuse and technical faults.',
            'Meeting legal obligations that apply to us.',
          ],
        },
        {
          kind: 'paragraph',
          text: 'We do not process your data for other purposes without first informing you and, where required, obtaining your consent.',
        },
      ],
    },

    {
      heading: '7. Sharing and Disclosure',
      blocks: [
        {
          kind: 'paragraph',
          text: '**We do not sell your personal data.** We share it only with the following parties, and only as far as operating the service requires:',
        },
        {
          kind: 'table',
          head: ['Party', 'Processing country', 'Role'],
          rows: subProcessors.map((p) => [p.name, p.countryEn, p.purposeEn]),
        },
        {
          kind: 'paragraph',
          text: 'We may also disclose personal data where required by law, court order or a lawful request from law enforcement. Where that happens we will notify you unless the notification itself is prohibited by law.',
        },
      ],
    },

    {
      heading: '8. Transfers Outside Indonesia',
      blocks: [
        {
          kind: 'paragraph',
          text: '**Your account and application data is stored in Indonesia.** Even so, some of the providers we use process data outside the territory of the Republic of Indonesia, as shown in the table in section 7. Those transfers are limited to: when you authenticate through Google, when your requests pass through Cloudflare’s network, and when your browser downloads font files from Google Fonts.',
        },
        {
          kind: 'paragraph',
          text: 'Under Article 56 of Law No. 27 of 2022, we carry out such transfers by ensuring the destination country or recipient provides a level of personal data protection equal to or higher than Indonesian law, or by relying on binding data processing agreements and contractual safeguards. For every provider in the table in section 7 we rely on the data processing agreement they offer. Where neither basis is available, transfers are made on the basis of your consent.',
        },
      ],
    },

    {
      heading: '9. Storage, Retention and Deletion',
      blocks: [
        {
          kind: 'paragraph',
          text: `**Where data is stored.** ${dataResidency.appHostingEn} ${dataResidency.databaseEn}`,
        },
        { kind: 'paragraph', text: '**Retention periods.** We apply the following periods:' },
        {
          kind: 'table',
          head: ['Data type', 'Retention period'],
          rows: [
            ['Account data and Google user data', 'For as long as your account is active'],
            [
              'Account data after a deletion request',
              'Removed from production systems within 30 calendar days',
            ],
            ['Backup copies', 'Removed on the backup rotation cycle, at most 90 days'],
            ['Technical and security logs', 'At most 90 days'],
            [
              'Data we are required by law to retain',
              'For the period required by the applicable regulation',
            ],
          ],
        },
        {
          kind: 'paragraph',
          text: `**How to request deletion.** Email [${company.email}](mailto:${company.email}) with the subject "Data Deletion Request" from the Google Account address you use. We will acknowledge the request and respond within 14 calendar days.`,
        },
        {
          kind: 'paragraph',
          text: 'Once the retention period ends, data is deleted or anonymised so that it can no longer be linked to you.',
        },
      ],
    },

    {
      heading: '10. Security and Breach Notification',
      blocks: [
        {
          kind: 'paragraph',
          text: 'We apply reasonable technical and organisational measures to protect your personal data, including encryption of traffic over HTTPS, access limited to what is necessary, separation of development and production environments, and regular updates of software components.',
        },
        {
          kind: 'paragraph',
          text: 'No system is completely immune. In the event of a personal data protection failure, Article 46 of Law No. 27 of 2022 requires us to give written notice **within 3 x 24 hours** to you as the data subject and to the competent authority. That notice states which personal data was exposed, when and how it happened, and what we are doing to contain and remedy it.',
        },
      ],
    },

    {
      heading: '11. Your Rights as a Data Subject',
      blocks: [
        {
          kind: 'paragraph',
          text: 'Law No. 27 of 2022 grants you the following rights, which we are committed to honouring:',
        },
        {
          kind: 'list',
          items: [
            '**Right to information** — to know our identity, the legal basis, and the purpose of our request for and use of your personal data (Article 5).',
            '**Right to rectification** — to complete, update and correct errors or inaccuracies in your personal data (Article 6).',
            '**Right of access** — to access and obtain a copy of your personal data (Article 7).',
            '**Right to erasure** — to end processing, delete and destroy your personal data (Article 8).',
            '**Right to withdraw consent** — to withdraw consent you have given (Article 9).',
            '**Right regarding automated decisions** — to object to decisions based solely on automated processing (Article 10).',
            '**Right to restrict** — to postpone or limit processing proportionately (Article 11).',
            '**Right to compensation** — to sue for and receive compensation for unlawful processing of your personal data (Article 12).',
            '**Right to portability** — to obtain and use your personal data in a commonly used, machine-readable format (Article 13).',
          ],
        },
        {
          kind: 'paragraph',
          text: `**How to exercise them.** Under Article 14, requests are made on the record. Email [${company.email}](mailto:${company.email}) from the address linked to your account, state which right you wish to exercise, and include what we need to verify your identity. We will respond within 14 calendar days of receiving the request, free of charge.`,
        },
        {
          kind: 'paragraph',
          text: 'Some rights may be excluded or deferred in the circumstances set out in Article 15 of Law No. 27 of 2022, such as law enforcement or judicial proceedings. Where that applies, we will explain the reason to you.',
        },
      ],
    },

    {
      heading: '12. Children’s Personal Data',
      blocks: [
        {
          kind: 'paragraph',
          text: 'Our services are not directed at children. Under Articles 25 and 26 of Law No. 27 of 2022, processing of a child’s personal data requires the consent of a parent or guardian.',
        },
        {
          kind: 'paragraph',
          text: 'Some of our services, such as Tilawah Tracker, may be used by groups that include underage participants. In that case the group coordinator is responsible for ensuring parental or guardian consent has been obtained before entering that participant’s data.',
        },
        {
          kind: 'paragraph',
          text: `If you are a parent or guardian and believe your child’s data is being processed without consent, contact [${company.email}](mailto:${company.email}) and we will delete it.`,
        },
      ],
    },

    {
      heading: '13. Cookies and Browser Local Storage',
      blocks: [
        {
          kind: 'paragraph',
          text: 'This website uses **no tracking cookies**, no advertising cookies and no analytics cookies.',
        },
        {
          kind: 'paragraph',
          text: 'We use a single browser `localStorage` entry under the key `theme`, which remembers whether you chose the light or dark appearance. It stays in your own browser, is never sent to our servers, and you can clear it at any time from your browser settings.',
        },
        {
          kind: 'paragraph',
          text: 'Applications that require a signed-in session may use additional strictly necessary cookies or local storage to keep you signed in. Such cookies are not used for tracking.',
        },
      ],
    },

    {
      heading: '14. Changes to This Policy',
      blocks: [
        {
          kind: 'paragraph',
          text: 'We may update this policy from time to time. Under Article 21(2) of Law No. 27 of 2022, where the information set out here changes, we will notify you **before** the change takes effect.',
        },
        {
          kind: 'paragraph',
          text: 'Notice is given in the application, by email to the address linked to your account, or by a clear announcement on this page together with the new effective date.',
        },
      ],
    },

    {
      heading: '15. Contact and Complaints',
      blocks: [
        {
          kind: 'paragraph',
          text: `Questions, requests to exercise your rights and complaints about personal data can be sent to [${company.email}](mailto:${company.email}).`,
        },
        {
          kind: 'definitions',
          items: [
            { term: 'Data controller', value: company.legalName },
            { term: 'Address', value: company.addressLine },
            { term: 'Email', value: `[${company.email}](mailto:${company.email})` },
          ],
        },
        {
          kind: 'paragraph',
          text: 'If you consider our handling inadequate, you have the right to lodge a complaint with the competent Indonesian personal data protection authority, currently the Ministry of Communication and Digital Affairs (Kementerian Komunikasi dan Digital).',
        },
      ],
    },
  ],

  callout: {
    title: 'Our Commitment to Your Privacy',
    text: 'We ask for the smallest access we can, keep it only as long as it is needed, and never trade it. If any part of this policy is unclear, ask us and we will explain it.',
  },
  contactPrompt: `Questions about your privacy? Reach us at [${company.email}](mailto:${company.email})`,
  backHome: 'Back to Home',
}
