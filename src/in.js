#! /usr/bin/env node

const { jsonStdin, jsonStdout } = require('./utils');

jsonStdin()
  .then((result) => {
    const { version } = result;
    jsonStdout({
      version: {
        revision: `${version.environment}-${version.spaceId}-${version.revisionNum}-${version.timestamp}-content-${version.contentReview}`
      },
      metadata: [
        { name: "environment", value: version.environment },
        { name: "space-id", value: version.spaceId },
        { name: "revision", value: version.revisionNum },
        { name: "contentful-timestamp", value: version.timestamp },
        { name: "content-review", value: version.contentReview }
      ]
    });
  })
  .catch((err) => {
    // logError(err);
    console.error(err);
    process.exit();
  });
