const utils = require('../../modules/utils')
const {url} = require('../../models')

const app = {

  get: async (req, res) => {
    const data = await url.findAll();
    res.status(200).json(data);
  },

  post: async (req, res) => {
    utils.getUrlTitle(req.body.url, async (err, title) => {
      let result = await url.create({
        url: req.body.url,
        title: title,
      })
      res.status(201).json(result)
    })
  },

  redirect: async (req, res) => {
    // update urls SET visits = visits + 1 where urls.id = 찾는값;
    let result = await url.findOne({ where: { id: req.params.id } })
    url.update({ visits: result.visits + 1 }, { where: { id: req.params.id } })
    res.redirect(result.url)
    res.status(302).send()
  },
}

module.exports = app;