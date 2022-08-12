interface IMailConfig {
  driver: 'ethereal' | 'ses';
  defaults: {
    from: {
      email: string;
      name: string;
    };
    region: string;
  };
}

export default {
  driver: process.env.MAIL_DRIVER,
  defaults: {
    from: {
      email: process.env.MAIL_USER,
      name: process.env.MAIL_NAME,
    },
    region: process.env.AWS_DEFAULT_REGION,
  },
} as IMailConfig;
