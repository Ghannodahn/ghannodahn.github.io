module.exports = {
  plugins: [
    require('postcss-prefix-selector')({
      prefix: '.home-page', // Unique prefix for Home component
      transform(prefix, selector, prefixedSelector) {
        if (selector.includes('.home-container') || 
            selector.includes('.library-header')
            // Add other Home component selectors
            ) {
          return prefixedSelector; // Apply prefix to Home component selectors
        }
        return selector; // Leave other selectors unchanged
      }
    })
  ]
}