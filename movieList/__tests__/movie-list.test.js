// const { By } = require("selenium-webdriver");

// const { Builder, Capabilities } = require("selenium-webdriver");

// require("chromedriver");

// const driver = new Builder().withCapabilities(Capabilities.chrome()).build();


// beforeAll(async () => {
//     await driver.get("http://localhost:5500/exercises/automation/movieList/index.html");
//   });
//   afterAll(async () => {
//     await driver.quit();
//   });


// const addMovie = async (driver) => {
//     // test crossing off the movie
//     await driver.findElement(By.xpath('//main/ul/li[1]/span')).click();
//     // delete a movie
//     // await driver.findElement(By.xpath(''))
// }

// test("Add a movie to the list", async () => {
//     await addMovie(driver);
//     await driver.sleep(5000);
// });

// module.exports = {
//   addMovie,
// };