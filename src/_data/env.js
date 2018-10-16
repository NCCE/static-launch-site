require('dotenv').config()

module.exports = {
  googleAnalyticsApiKey: process.env.GOOGLE_ANALYTICS_KEY,
  mailchimpListID: process.env.MAILCHIMP_LIST_ID,
  mailchimpUserID: process.env.MAILCHIMP_USER_ID,
}
