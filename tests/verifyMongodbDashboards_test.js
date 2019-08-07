
Feature('to verify MongoDB Dashboards');

Scenario('Open the MongoDB Overview Dashboard', async (I, adminPage, mongodbOverviewPage, mondodbClusterSummaryPage) => {
    I.amOnPage(loginPage.url);
    loginPage.login("admin", "admin");
    I.amOnPage(mongodbOverviewPage.url);
    I.waitForElement(adminPage.fields.metricTitle, 30);
    adminPage.applyTimer("1m");
    await adminPage.handleLazyLoading(10);
    mongodbOverviewPage.verifyMetricsExistence();
    I.amOnPage(mondodbClusterSummaryPage.url);
    I.waitForElement(adminPage.fields.metricTitle, 30);
    adminPage.applyTimer("1m");
    await adminPage.handleLazyLoading(4);
    mondodbClusterSummaryPage.verifyMetricsExistence();
});