const { client } = require('nightwatch-api');
const { Given, Then, When } = require('cucumber');

Given(/^I open Ecosia's search page$/, () => {
  return client.url('http://google.com').waitForElementVisible('body', 1000);
});

When(/^I'm looking for "([^"]*)"$/, title => {
  return client.assert.title(title);
});

Then(/^The search must match$/, () => {
  return client.assert.visible('input[name="q"]');
});