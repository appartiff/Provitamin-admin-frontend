export function ProductDto() {
  return {
    sku: '',
    details: {
      title: '',
      brand: '',
      category: '',
      imageUrl: '',
    },
    pricing: {
      list: null,
      retail: null,
      savings: null,
      pctSavings: null
    },
    shipping: {
      weight: null,
      dimensions: {
        height: null,
        width: null,
        depth: null
      }
    }
  }
}
