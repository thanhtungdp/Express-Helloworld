module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [
    // First application
    {
      name      : 'test_pm2',
      script    : 'helloworld.js',
      env: {
        PORT: 1112
      },
      env_production : {
        PORT: 1113
      }
    }
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy : {
    production : {
      user : 'release',
      host : '188.166.255.80',
      ref  : 'origin/master',
      repo : 'git@github.com:thanhtungdp/Express-Helloworld.git',
      path : '/data/pm2/pm2_hello',
      'post-deploy' : 'yarn install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
