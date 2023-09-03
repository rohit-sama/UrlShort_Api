import express from 'express';
import Url from '../models/url.js';
const router = express.Router();

router.get('/', (req, res) => {
    res.redirect('https://rohit.is-a.dev/');
})

router.get('/:urlId', async (req, res) => {
  try {
    if (req.params.urlId === '') return res.redirect('https://rohit.is-a.dev/');

    const url = await Url.findOne({ urlId: req.params.urlId });
    if (url) {
      await Url.updateOne(
        {
          urlId: req.params.urlId,
        },
        { $inc: { clicks: 1 } }
      );
      return res.redirect(url.origUrl);
    } else res.status(404).json('Not found');
  } catch (err) {
    console.log(err);
    res.status(500).json('Server Error');
  }
});

export default router;