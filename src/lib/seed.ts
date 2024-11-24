// eslint-disable-next-line @typescript-eslint/no-require-imports
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  const dummyData = [
    {
      title: 'Fix search functionality',
      description:
        'The search functionality currently does not update the results when filters are applied. Users have reported that applying category or date filters does not modify the displayed search results. This issue affects both desktop and mobile users, causing frustration as they cannot refine their searches effectively. Addressing this problem will require a review of the filtering logic and potentially updating the API endpoints to handle filter parameters correctly.',
      status: 'OPEN',
      assigneeId: null,
      createdAt: new Date('2024-11-01T10:00:00Z'),
      updatedAt: new Date('2024-11-02T12:00:00Z'),
    },
    {
      title: 'Integrate payment gateway',
      description:
        'Our platform currently supports only manual payment processing, which leads to delays and increased customer dissatisfaction. Integrating a payment gateway such as Stripe or PayPal will allow users to complete transactions seamlessly and securely. This implementation should include support for different currencies and automatic receipt generation, as well as a fallback mechanism in case of payment failures.',
      status: 'IN_PROGRESS',
      assigneeId: null,
      createdAt: new Date('2024-10-25T08:30:00Z'),
      updatedAt: new Date('2024-10-26T15:45:00Z'),
    },
    {
      title: 'Improve page load speed',
      description:
        'Page load times have been reported as unacceptably high for users with slower internet connections. Analysis indicates that large, unoptimized images and blocking JavaScript files are the primary causes. Optimizations should include compressing images, leveraging lazy loading techniques, and ensuring scripts are minified and deferred when appropriate. This improvement will enhance user retention and boost overall satisfaction.',
      status: 'OPEN',
      assigneeId: null,
      createdAt: new Date('2024-11-15T14:00:00Z'),
      updatedAt: new Date('2024-11-15T14:00:00Z'),
    },
    {
      title: 'Add user profile pictures',
      description:
        'Currently, user profiles display only a placeholder image, making it difficult for users to personalize their accounts. Implementing profile picture uploads will significantly enhance user engagement and allow users to better represent themselves within the platform. This feature should include basic image cropping and size validation, as well as secure storage.',
      status: 'CLOSED',
      assigneeId: null,
      createdAt: new Date('2024-09-10T11:00:00Z'),
      updatedAt: new Date('2024-09-15T13:30:00Z'),
    },
    {
      title: 'Fix typo in welcome email',
      description:
        "The welcome email sent to new users contains a typo in the subject line and body, creating a poor first impression. Specifically, the word 'welcom' is misspelled, and there are issues with sentence formatting in the body. Correcting these issues will help establish trust with users and improve email engagement rates.",
      status: 'CLOSED',
      assigneeId: null,
      createdAt: new Date('2024-10-01T09:00:00Z'),
      updatedAt: new Date('2024-10-01T10:00:00Z'),
    },
    {
      title: 'Implement 2FA',
      description:
        'Two-factor authentication (2FA) is becoming a critical requirement for ensuring user account security. Adding 2FA will involve providing options such as SMS-based verification or using an authenticator app like Google Authenticator. This feature will help prevent unauthorized access, especially in cases of compromised passwords.',
      status: 'OPEN',
      assigneeId: null,
      createdAt: new Date('2024-11-10T08:00:00Z'),
      updatedAt: new Date('2024-11-11T12:00:00Z'),
    },
    {
      title: 'Enhance accessibility',
      description:
        'The current platform lacks proper accessibility support, such as keyboard navigation and screen reader compatibility. Adding ARIA labels, fixing tab navigation, and ensuring proper contrast ratios are essential steps to make the platform inclusive for users with disabilities. This improvement will comply with WCAG guidelines and broaden the user base.',
      status: 'IN_PROGRESS',
      assigneeId: null,
      createdAt: new Date('2024-11-05T16:00:00Z'),
      updatedAt: new Date('2024-11-07T18:30:00Z'),
    },
    {
      title: 'Create user onboarding flow',
      description:
        'New users often find the platform overwhelming due to a lack of guidance. Designing a guided onboarding flow will help users understand key features and improve retention. This flow should include tooltips, walkthroughs, and a checklist of primary actions for new users to complete.',
      status: 'OPEN',
      assigneeId: null,
      createdAt: new Date('2024-11-20T10:15:00Z'),
      updatedAt: new Date('2024-11-20T10:15:00Z'),
    },
    {
      title: 'Fix search functionality',
      description:
        'The search functionality currently does not update the results when filters are applied. Users have reported that applying category or date filters does not modify the displayed search results. This issue affects both desktop and mobile users, causing frustration as they cannot refine their searches effectively. Addressing this problem will require a review of the filtering logic and potentially updating the API endpoints to handle filter parameters correctly.',
      status: 'OPEN',
      assigneeId: null,
      createdAt: new Date('2024-11-01T10:00:00Z'),
      updatedAt: new Date('2024-11-02T12:00:00Z'),
    },
    {
      title: 'Integrate payment gateway',
      description:
        'Our platform currently supports only manual payment processing, which leads to delays and increased customer dissatisfaction. Integrating a payment gateway such as Stripe or PayPal will allow users to complete transactions seamlessly and securely. This implementation should include support for different currencies and automatic receipt generation, as well as a fallback mechanism in case of payment failures.',
      status: 'IN_PROGRESS',
      assigneeId: null,
      createdAt: new Date('2024-10-25T08:30:00Z'),
      updatedAt: new Date('2024-10-26T15:45:00Z'),
    },
    {
      title: 'Improve page load speed',
      description:
        'Page load times have been reported as unacceptably high for users with slower internet connections. Analysis indicates that large, unoptimized images and blocking JavaScript files are the primary causes. Optimizations should include compressing images, leveraging lazy loading techniques, and ensuring scripts are minified and deferred when appropriate. This improvement will enhance user retention and boost overall satisfaction.',
      status: 'OPEN',
      assigneeId: null,
      createdAt: new Date('2024-11-15T14:00:00Z'),
      updatedAt: new Date('2024-11-15T14:00:00Z'),
    },
    // New additional issues
    {
      title: 'Set up error tracking',
      description:
        'Implement an error-tracking solution like Sentry or LogRocket to monitor real-time application issues. This will help identify bugs and crashes promptly, allowing the development team to address them efficiently. The tracking system should be integrated with the front-end and back-end systems to capture detailed error reports.',
      status: 'OPEN',
      assigneeId: null,
      createdAt: new Date('2024-10-05T13:45:00Z'),
      updatedAt: new Date('2024-10-05T13:45:00Z'),
    },
    {
      title: 'Refactor authentication module',
      description:
        'The authentication module is becoming difficult to maintain due to legacy code and lack of modularity. Refactoring it into a more modular structure will make it easier to extend features like OAuth support and third-party login integrations. The new design should prioritize security and maintain compatibility with existing user data.',
      status: 'IN_PROGRESS',
      assigneeId: null,
      createdAt: new Date('2024-11-05T09:30:00Z'),
      updatedAt: new Date('2024-11-07T16:15:00Z'),
    },
    {
      title: 'Add dark mode',
      description:
        'Dark mode is a highly requested feature from our users. It enhances user experience, especially in low-light environments, and reduces eye strain. The implementation should include a toggle option for users to switch between light and dark themes, with appropriate adjustments to colors and font styles.',
      status: 'OPEN',
      assigneeId: null,
      createdAt: new Date('2024-11-18T10:00:00Z'),
      updatedAt: new Date('2024-11-18T10:00:00Z'),
    },
    {
      title: 'Optimize database queries',
      description:
        'Several database queries have been identified as bottlenecks, causing slow API responses. These include unindexed fields and complex joins that can be optimized. Implementing proper indexing and revisiting query structures will significantly improve system performance.',
      status: 'CLOSED',
      assigneeId: null,
      createdAt: new Date('2024-09-15T07:30:00Z'),
      updatedAt: new Date('2024-09-20T15:00:00Z'),
    },
    {
      title: 'Develop mobile app version',
      description:
        "The absence of a mobile application limits our platform's usability. Developing a mobile app for both Android and iOS platforms will cater to a broader audience. The app should support key functionalities such as user authentication, notifications, and seamless syncing with the web platform.",
      status: 'OPEN',
      assigneeId: null,
      createdAt: new Date('2024-11-20T18:00:00Z'),
      updatedAt: new Date('2024-11-20T18:00:00Z'),
    },
    {
      title: 'Enable push notifications',
      description:
        'Push notifications are essential for keeping users informed about important updates. Adding support for real-time push notifications will require integrating with Firebase or a similar service. Notifications should be configurable to allow users to opt in or out for specific types of alerts.',
      status: 'IN_PROGRESS',
      assigneeId: null,
      createdAt: new Date('2024-11-10T09:15:00Z'),
      updatedAt: new Date('2024-11-12T12:00:00Z'),
    },
  ];

  for (const issue of dummyData) {
    await prisma.issue.create({
      data: issue,
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
