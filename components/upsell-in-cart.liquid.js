import { compile } from 'handlebars';

const upsellTemplate = `
<div id="upsell">
  <div class="upsell-offer">
    <p class="upsell-heading text-center">{{ upsellHeading }}</p>
    <p class="upsell-subheading text-center">{{ upsellSubheading }}</p>
  </div>
  <div class="inCartUpsaleProduct--container">
    {{#upsellProducts}}
      <div class="inCartUpsaleProduct">
        <img class="inCartUpsaleProduct--img" src="{{images.0.originalSrc}}" alt="{{images.0.altText}}">
        <select class="inCartUpsaleProduct--variantSelect" data-product-id="{{id}}">
          {{#variants}}
            <option value="{{id}}">{{ title }}</option>
          {{/variants}}
        </select>
        <button type="button" data-product-id="{{id}}" class="inCartUpsaleProduct--submitBtn btn--secondary btn--full">Add</button>
      </div>
    {{/upsellProducts}}
  </div>
</div>
<script>
$('.inCartUpsaleProduct--submitBtn').on('click', function() {
  console.log({ button: this })
  const productId = $(this).data('productId');
  const variantId = $('select[data-product-id="'+productId+'"]').val().match(/\\d+/g)[0];

  $.post('/cart/add.js', {
    items: [{
      quantity: 1,
      id: variantId,
    }]
  }).complete(() => {
    console.log('ajaxCart load')
    window.ajaxCart.load();
  })
})
</script>
<style>
#upsell {
  height: 150px;
}
.upsell-offer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #F2CB05;
  padding: 10px 0;
}
.upsell-offer p {
  margin-bottom: 0;
  font-size: 15px;
}
.upsell-offer p.upsell-heading{
  font-size: 1.2em;
}
.inCartUpsaleProduct--container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 15px;
}

.inCartUpsaleProduct .inCartUpsaleProduct--img {
  display: block;
  max-width: 100%;
}
.inCartUpsaleProduct .inCartUpsaleProduct--title {
  font-size: 0.9rem;
  margin-bottom: 0;
}
.inCartUpsaleProduct .inCartUpsaleProduct--price {
  font-size: 0.9rem;
  margin-bottom: 0;
}
.inCartUpsaleProduct .inCartUpsaleProduct--variantSelect {
  font-size: 0.9rem;
  padding-top: 4px;
  padding-bottom: 4px;
  margin: 0.5rem 0;
  width: 100%;
}
.inCartUpsaleProduct .inCartUpsaleProduct--submitBtn {
}
.drawer--has-fixed-footer .drawer__inner {
  overflow-y: auto;
}
</style>
`

export default function generateUpsellSnippet(upsellProducts = []) {
  const snippet = compile(upsellTemplate)({
    upsellHeading: 'Add 1 more item',
    upsellSubheading: '',
    upsellProducts,
    browseMoreUrl: '',
    browseMoreUrlButtonText: 'Shop more'
  })
  return snippet;
}