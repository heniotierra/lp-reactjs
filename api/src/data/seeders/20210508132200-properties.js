const fs = require("fs");

function transform(propertyData) {
  return {
    ...propertyData.overview,
    ...propertyData.facts,
    ...propertyData.others,
    lastVisited: propertyData.visits.lastVisited,
    totalVisits: propertyData.visits.total,
    image: propertyData.homeImage,
    images: propertyData.images,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
}

async function readStaticPropertiesData() {
  try {
    const propertiesDataFile = await fs.readFileSync(
      `${__dirname}/../../../static/data/properties.json`,
      "utf-8"
    );
    return JSON.parse(propertiesDataFile);
  } catch (e) {
    console.error(e);
    throw e;
  }
}

module.exports = {
  up: async (queryInterface) => {
    const propertiesData = await readStaticPropertiesData();
    const transfPropertiesData = propertiesData.map(transform);
    return await queryInterface.bulkInsert("properties", transfPropertiesData);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete("properties");
    return queryInterface.bulkInsert("properties_images");
  }
};
