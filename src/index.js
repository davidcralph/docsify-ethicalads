window.DocsifyEthicalAds = {
    create: (siteName, options) => {
      return (hook) => {
        hook.doneEach(() => {
          // Create EthicalAds script
          const script = document.createElement('script');
          script.src = 'https://media.ethicalads.io/media/client/ethicalads.min.js';
          script.async = 'async';

          document.head.appendChild(script); // inject script

          // Create advert
          const ad = document.createElement('div');
          ad.setAttribute('data-ea-publisher', siteName);
          if (options) {
            ad.setAttribute('data-ea-type', options.type ? options.type : 'image'); // Allow both text and images

            if (options.keywords) ad.setAttribute('data-ea-keywords', options.keywords); // custom keywords
            if (options.campaignTypes) ad.setAttribute('data-ea-campaign-types', options.campaignTypes);
            if (options.placementID) ad.setAttribute('id', options.placementID);

            if (options.horizontal) ad.classList.add('horizontal');
            else if (options.type !== 'text') document.head.insertAdjacentHTML('beforeend', '<style>.loaded { padding-left: 40px; }</style>'); // only make it work on images

            if (options.dark) ad.classList.add('dark');
            if (options.theme) ad.classList.add(options.theme);
          } else ad.setAttribute('data-ea-type', 'image');

          const sidenav = document.getElementsByClassName('sidebar-nav')[0]; // Get sidenav
          sidenav.insertBefore(ad, sidenav.firstChild); // inject ad
        });
      }
    }
}