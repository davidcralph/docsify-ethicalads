# docsify-ethicalads
EthicalAds support for Docsify

## Usage
```html
<script src='https://unpkg.com/docsify-ethicalads@1.0.3/dist/docsify-ethicalads.js'></script>
<!-- or -->
<script src='https://unpkg.com/docsify-ethicalads@1.0.3/dist/docsify-ethicalads.min.js'></script>
```

```js
window.$docsify = {
  name: 'Test',
  loadSidebar: true,
  plugins: [
    DocsifyEthicalAds.create('ethicalads-publisher-id', {
      type: 'image'
    })
  ]
}
```

## Options
``type`` - Either "image" or "text" (default: image)

``horizontal`` - Boolean, allows the ad to be horizontal instead of vertical (default: false)

``dark`` - Boolean, whether or not dark theme is on the advert or not (default: false)

``theme`` - One of the themes [here](https://ethical-ad-client.readthedocs.io/en/latest/#themes) (default: see EthicalAds documentation)

``keywords`` - "data-ea-keywords" (default: see EthicalAds documentation)

``campaignTypes`` - "data-ea-campaign-types" (default: see EthicalAds documentation)

``placementID`` - Placement ID for the ad element (default: none)

``forceAd`` - Ad to force show for testing (default: none)

``forceCampaign`` - Campaign to force show for testing (default: none)

``manual`` - Require manual loading of ads at a certain time (default: false)

## Credits
[docsify-plugin-carbon](https://github.com/waruqi/docsify-plugin-carbon) - Reference

[EthicalAds Documentation](https://ethical-ad-client.readthedocs.io/en/latest/#configuration) - Reference
