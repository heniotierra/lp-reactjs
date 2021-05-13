import Sequelize from "sequelize";
import { paginationLimit } from "../../constants";
import Property from "../../data/models/property";
import { PropertiesFilterTypes } from "../../graphql/types";

export const findProperties = async (
    searchTerms: string,
    filterBy: PropertiesFilterTypes,
    offset: number
) => {
    return Property.findAndCountAll({
        where: { [filterBy]: { [Sequelize.Op.like]: `%${searchTerms}%` } },
        order: [filterBy],
        offset,
        limit: paginationLimit,
    });
};

export const findProperty = (id: number) => {
    return Property.findByPk(id);
};

export const findFavoriteProperties = () => {
    return Property.findAll({
        limit: 5,
        raw: true,
        order: ["totalVisits"],
    });
};

export const findLastVisitedProperties = () => {
    return Property.findAll({
        limit: 5,
        raw: true,
        order: ["lastVisited"],
    });
};
