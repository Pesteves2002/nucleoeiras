const { sanitizeEntity } = require('strapi-utils');

module.exports = {
  /**
   * Retrieve a record.
   *
   * @return {Object}
   */

  async findOne(ctx) {
    const { id } = ctx.params;

    const entity = await strapi.services.athlete.findOne({ slug: id });
    return sanitizeEntity(entity, { model: strapi.models.athlete });
  },
};
