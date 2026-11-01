window.DocsifyEthicalAds = {
  create: (siteName, options) => {
    return (hook) => {
      hook.doneEach(() => {
        // Sidebar may be hidden (hideSidebar)
        const sidenav = document.getElementsByClassName('sidebar-nav')[0];
        if (!sidenav) {
          return;
        }

        // Create advert
        const ad = document.createElement('div');
        ad.setAttribute('data-ea-publisher', siteName);

        if (options) {
          // Allow both text and images
          ad.setAttribute('data-ea-type', options.type ? options.type : 'image');

          if (options.keywords) {
            // Custom keywords
            ad.setAttribute('data-ea-keywords', options.keywords);
          }

          if (options.campaignTypes) {
            ad.setAttribute('data-ea-campaign-types', options.campaignTypes);
          }

          if (options.placementID) {
            ad.setAttribute('id', options.placementID);
          }

          if (options.forceAd) {
            ad.setAttribute('data-ea-force-ad', options.forceAd);
          }

          if (options.forceCampaign) {
            ad.setAttribute('data-ea-force-campaign', options.forceCampaign);
          }

          if (options.manual) {
            ad.setAttribute('data-ea-manual', options.manual);
          }

          if (options.horizontal) {
            ad.classList.add('horizontal');
          } else if (options.type !== 'text' && !document.getElementById('docsify-ethicalads-style')) {
            // Only make it work on images
            document.head.insertAdjacentHTML('beforeend', '<style id="docsify-ethicalads-style">.sidebar-nav [data-ea-publisher].loaded { padding-left: 40px; }</style>');
          }

          if (options.dark) {
            ad.classList.add('dark');
          }

          if (options.theme) {
            ad.classList.add(options.theme);
          }
        } else {
          ad.setAttribute('data-ea-type', 'image');
        }

        // Add advert to sidebar
        sidenav.insertBefore(ad, sidenav.firstChild);

        if (window.ethicalads) {
          // Client already loaded, re-scan for the new placement
          window.ethicalads.reload();
        } else if (!document.getElementById('docsify-ethicalads-client')) {
          // Load EthicalAds client once, it finds the placement on load
          const script = document.createElement('script');
          script.id = 'docsify-ethicalads-client';
          script.src = 'https://media.ethicalads.io/media/client/ethicalads.min.js';
          script.async = 'async';
          document.head.appendChild(script);
        }
      });
    }
  }
}
