export function ProductDto() {
  return {
    sku: '',
    category:{
      slug:'',
      tags:[],
      category:'',
    },
    details: {
      title: '',
      brand: '',
    },
    pricing: {
      list: null,
      retail:null,
      savings:null,
      pctSavings:null
    },
    shipping:{
      weight: null,
      dimensions: {
        height: null,
        width: null,
        depth: null
      }
    }
  }
}
