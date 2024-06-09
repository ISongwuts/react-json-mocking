import { faker } from "@faker-js/faker";

export const functionNames: string[] = [
    "address",
    "commerce",
    "company",
    "database",
    "date",
    "finance",
    "hacker",
    "image",
    "internet",
    "lorem",
    "music",
    "name",
    "phone",
    "random",
    "system",
];

const selectFakerFunction = (option: string): string => {
    switch (option) {
        case "address":
            return faker.address.streetAddress();
        case "commerce":
            return faker.commerce.productName();
        case "company":
            return faker.company.name();
        case "database":
            return faker.database.column();
        case "date":
            return faker.date.past().toString();
        case "finance":
            return faker.finance.account();
        case "hacker":
            return faker.hacker.phrase();
        case "image":
            return faker.image.imageUrl();
        case "internet":
            return faker.internet.email();
        case "lorem":
            return faker.lorem.sentence();
        case "music":
            return faker.music.genre();
        case "name":
            return faker.person.fullName();
        case "phone":
            return faker.phone.number();
        case "random":
            return faker.random.word();
        case "system":
            return faker.system.fileName();
        default:
            return "Invalid option";
    }
}

export default selectFakerFunction;
