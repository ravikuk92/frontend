# Changes Required

To create a single Azure Web App that can handle multiple databases and URLs, you can use environment variables to dynamically configure the database connections based on the request. Here are the steps:

## Modify the Application Code

### Step 1: Update your dbConfig.js

Handle multiple database configurations. For example:

<table>
  <tr>
    <th>Service</th>
    <th>Configuration</th>
  </tr>
  <tr>
    <td><code>hms</code></td>
    <td>
      <pre>
      {
        connectionString: process.env.DATASOURCE_URL_HMS,
        user: process.env.DATASOURCE_USERNAME_HMS,
        password: process.env.DATASOURCE_PASSWORD_HMS,
        database: process.env.DATABASE_NAME_HMS,
        port: process.env.DATABASE_PORT,
      };
      </pre>
    </td>
  </tr>
  <tr>
    <td><code>mis</code></td>
    <td>
      <pre>
      {
        connectionString: process.env.DATASOURCE_URL_MIS,
        user: process.env.DATASOURCE_USERNAME_MIS,
        password: process.env.DATASOURCE_PASSWORD_MIS,
        database: process.env.DATABASE_NAME_MIS,
        port: process.env.DATABASE_PORT,
      };
      </pre>
    </td>
  </tr>
  <tr>
    <td><code>pjc</code></td>
    <td>
      <pre>
      {
        connectionString: process.env.DATASOURCE_URL_PJC,
        user: process.env.DATASOURCE_USERNAME_PJC,
        password: process.env.DATASOURCE_PASSWORD_PJC,
        database: process.env.DATABASE_NAME_PJC,
        port: process.env.DATABASE_PORT,
      };
      </pre>
    </td>
  </tr>
  <tr>
    <td><code>jobcard</code></td>
    <td>
      <pre>
      {
        connectionString: process.env.DATASOURCE_URL_JOBCARD,
        user: process.env.DATASOURCE_USERNAME_JOBCARD,
        password: process.env.DATASOURCE_PASSWORD_JOBCARD,
        database: process.env.DATABASE_NAME_JOBCARD,
        port: process.env.DATABASE_PORT,
      };
      </pre>
    </td>
  </tr>
</table>

```javascript
const { Pool } = require('pg');
require('dotenv').config();

const getDbConfig = (service) => {
  switch (service) {
    case 'hms':
      return {
        connectionString: process.env.DATASOURCE_URL_HMS,
        user: process.env.DATASOURCE_USERNAME_HMS,
        password: process.env.DATASOURCE_PASSWORD_HMS,
        database: process.env.DATABASE_NAME_HMS,
        port: process.env.DATABASE_PORT,
      };
    case 'mis':
      return {
        connectionString: process.env.DATASOURCE_URL_MIS,
        user: process.env.DATASOURCE_USERNAME_MIS,
        password: process.env.DATASOURCE_PASSWORD_MIS,
        database: process.env.DATABASE_NAME_MIS,
        port: process.env.DATABASE_PORT,
      };
    case 'pjc':
      return {
        connectionString: process.env.DATASOURCE_URL_PJC,
        user: process.env.DATASOURCE_USERNAME_PJC,
        password: process.env.DATASOURCE_PASSWORD_PJC,
        database: process.env.DATABASE_NAME_PJC,
        port: process.env.DATABASE_PORT,
      };
    case 'jobcard':
      return {
        connectionString: process.env.DATASOURCE_URL_JOBCARD,
        user: process.env.DATASOURCE_USERNAME_JOBCARD,
        password: process.env.DATASOURCE_PASSWORD_JOBCARD,
        database: process.env.DATABASE_NAME_JOBCARD,
        port: process.env.DATABASE_PORT,
      };
    default:
      throw new Error('Unknown service');
  }
};

const createPool = (service) => {
  const config = getDbConfig(service);
  return new Pool(config);
};

module.exports = {
  createPool,
};
