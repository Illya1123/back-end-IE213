"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongooseConfig = void 0;
const mongo_config_1 = require("./mongo.config");
exports.mongooseConfig = {
    inject: [mongo_config_1.MongoConfig.KEY],
    useFactory: async ({ uri, }) => {
        return {
            uri,
        };
    },
};
//# sourceMappingURL=mongoose.config.js.map