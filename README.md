# JonnyDreamwalker Apex Feline Supply

**Proprietary storefront.** Not open source. Not for sale as a template.

Veteran-owned cat gear — same modular pattern as Apex Herp / Apex K9.

## Structure

```
assets/js/site-config.js   → brand, categories, API
assets/js/nav-shell.js     → menu + cart
assets/js/apex-bridge.js   → ApexFreePort live catalog
assets/css/style.css
services/*.html            → category pages
```

## Same EC2 as Herp FreePort

Run a separate process/port for feline inventory, or filter by category prefixes in one node.

```bash
PORT=3002 # example feline FreePort
```

## License

See [LICENSE](LICENSE) — All Rights Reserved.
