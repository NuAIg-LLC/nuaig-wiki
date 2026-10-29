// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://nuaig-wiki.vercel.app',
  srcDir: './src',
  integrations: [
    starlight({
      title: 'Financial Assessment Tool',
      description:
        'The product wiki for the senior-living financial qualification platform: context, roles, flows, screens, interfaces and the model behind the numbers.',
      logo: { src: './public/img/nuaig-mark.svg', replacesTitle: true },
      customCss: ['./src/styles/theme.css'],
      favicon: '/img/favicon.svg',
      lastUpdated: false,
      pagination: true,
      tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 3 },
      credits: false,
      components: {
        ThemeSelect: './src/components/Empty.astro',
        Sidebar: './src/components/Sidebar.astro',
        Footer: './src/components/Footer.astro',
        Head: './src/components/Head.astro',
      },
      sidebar: [
        {
          label: 'Start here',
          items: [
            { label: 'What this platform is', slug: 'start/what-it-is' },
            { label: 'How to use this wiki', slug: 'start/orientation' },
            { label: 'The product in one diagram', slug: 'start/one-diagram' },
            { label: 'Glossary', slug: 'start/glossary' },
          ],
        },
        {
          label: 'Context',
          items: [
            { label: 'The problem being solved', slug: 'context/problem' },
            { label: 'How the decision is made today', slug: 'context/today' },
            { label: 'Who buys it, who uses it', slug: 'context/market' },
            { label: 'The rules that shape the product', slug: 'context/principles' },
            { label: 'Requirements register', slug: 'context/requirements' },
          ],
        },
        {
          label: 'People and permissions',
          items: [
            { label: 'Tenancy model', slug: 'people/tenancy' },
            { label: 'User roles', slug: 'people/roles' },
            { label: 'Scopes and capabilities', slug: 'people/scopes' },
            { label: 'Role capability matrix', slug: 'people/matrix' },
            { label: 'Minimum necessary access', slug: 'people/minimum-necessary' },
            { label: 'Emergency access', slug: 'people/emergency-access' },
          ],
        },
        {
          label: 'Flows',
          items: [
            { label: 'The end-to-end journey', slug: 'flows/journey' },
            { label: 'Intake and the family application', slug: 'flows/intake' },
            { label: 'Documents and verification', slug: 'flows/documents' },
            { label: 'Assessment', slug: 'flows/assessment' },
            { label: 'Life-plan qualification', slug: 'flows/qualification' },
            { label: 'Units, pricing and quotes', slug: 'flows/pricing' },
            { label: 'Review, sign-off and decision', slug: 'flows/decision' },
            { label: 'After move-in: observations', slug: 'flows/observations' },
            { label: 'Leadership reporting', slug: 'flows/reporting' },
          ],
        },
        {
          label: 'The screens',
          items: [
            { label: 'Screen index', slug: 'screens/overview' },
            { label: 'Signing in', slug: 'screens/sign-in' },
            { label: 'Staff home', slug: 'screens/home' },
            { label: 'Pipeline', slug: 'screens/pipeline' },
            { label: 'The resident record', slug: 'screens/resident' },
            { label: 'Documents and extraction', slug: 'screens/documents' },
            { label: 'Financials', slug: 'screens/financials' },
            { label: 'Assessment', slug: 'screens/assessment' },
            { label: 'Decision', slug: 'screens/decision' },
            { label: 'Review queue', slug: 'screens/review-queue' },
            { label: 'Projection lab', slug: 'screens/modeling' },
            { label: 'Family portal', slug: 'screens/portal' },
            { label: 'Submissions', slug: 'screens/submissions' },
            { label: 'Life-plan workspace', slug: 'screens/life-plan' },
            { label: 'Prospect summary', slug: 'screens/summary' },
            { label: 'Units and pricing', slug: 'screens/units' },
            { label: 'Qualification workflow', slug: 'screens/workflow' },
            { label: 'Observations', slug: 'screens/observations' },
            { label: 'Reports', slug: 'screens/reports' },
            { label: 'Administration', slug: 'screens/admin' },
            { label: 'Activity log', slug: 'screens/activity' },
            { label: 'Platform control plane', slug: 'screens/platform' },
          ],
        },
        {
          label: 'How the numbers work',
          items: [
            { label: 'Two models, one product', slug: 'model/engines' },
            { label: 'The runway model', slug: 'model/runway' },
            { label: 'The life-plan model', slug: 'model/life-plan' },
            { label: 'A worked example', slug: 'model/worked-example' },
            { label: 'Outcomes and thresholds', slug: 'model/outcomes' },
            { label: 'Advanced analysis', slug: 'model/simulation' },
            { label: 'Where AI starts and stops', slug: 'model/ai-boundary' },
            { label: 'Configuration and settings', slug: 'model/configuration' },
            { label: 'Known model limits', slug: 'model/limits' },
          ],
        },
        {
          label: 'Interfaces',
          items: [
            { label: 'Interface principles', slug: 'interfaces/principles' },
            { label: 'Resource catalogue', slug: 'interfaces/catalogue' },
            { label: 'Revisions and idempotency', slug: 'interfaces/concurrency' },
            { label: 'Paging and cursors', slug: 'interfaces/paging' },
            { label: 'Errors and responses', slug: 'interfaces/errors' },
            { label: 'Notifications', slug: 'interfaces/notifications' },
            { label: 'Agent and tool access', slug: 'interfaces/agents' },
          ],
        },
        {
          label: 'Architecture',
          items: [
            { label: 'System map', slug: 'architecture/system-map' },
            { label: 'Data model', slug: 'architecture/data-model' },
            { label: 'Isolation and tenancy', slug: 'architecture/isolation' },
            { label: 'Security and privacy', slug: 'architecture/security' },
            { label: 'The audit ledger', slug: 'architecture/audit' },
            { label: 'Document handling', slug: 'architecture/documents' },
            { label: 'Integrations', slug: 'architecture/integrations' },
          ],
        },
        {
          label: 'Operations',
          items: [
            { label: 'Onboarding a client', slug: 'operations/onboarding' },
            { label: 'Configuration governance', slug: 'operations/governance' },
            { label: 'Retention and legal hold', slug: 'operations/retention' },
            { label: 'Keys and rotation', slug: 'operations/keys' },
            { label: 'Support runbook', slug: 'operations/runbook' },
          ],
        },
        {
          label: 'Working agreements',
          items: [
            { label: 'Decisions on record', slug: 'decisions/record' },
            { label: 'Open questions', slug: 'decisions/open-questions' },
            { label: 'How to change this wiki', slug: 'decisions/contributing' },
          ],
        },
      ],
    }),
  ],
});
