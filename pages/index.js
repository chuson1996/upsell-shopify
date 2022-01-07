import { EmptyState, Layout, Page, TextStyle, Card, Button, ResourceList, ResourceItem, Thumbnail } from '@shopify/polaris';
import { ResourcePicker } from '@shopify/app-bridge-react';
import generateUpsellSnippet from '../components/upsell-in-cart.liquid.js';
import axios from 'axios';

const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';

class Index extends React.Component {
  state = {
    open: false,
    selectedProducts: [],
    themeId: ''
  }

  componentDidMount() {
    axios.get(`/api/shopify/themes.json`)
      .then(({ data }) => {
        const themeId = data.themes.find((theme) => theme.role === 'main').id;
        this.setState({ themeId });
      })
  }

  handleSelection = async (resources) => {
    this.setState({ open: false, selectedProducts: resources.selection })
  };

  publish = () => {
    const { selectedProducts, themeId } = this.state;
    const newUpsellTemplate = (generateUpsellSnippet(selectedProducts));
    console.log({newUpsellTemplate});

    const strToAppendToCartTemplate = `{% endraw %}{% include 'upsell-in-cart' %}{% raw %}`
    axios.get(`/api/shopify/themes/${themeId}/assets.json?asset[key]=snippets/ajax-cart-template.liquid`)
      .then(({ data }) => {
        const originalTemplate = data.asset.value;
        if (originalTemplate.includes(`{% include 'upsell-in-cart' %}`)) {
          return;
        }
        const regEx = /\<\/div\>[\n ]+<\/form\>/g;
        const newTemplate = originalTemplate.replace(regEx, strToAppendToCartTemplate+ originalTemplate.match(regEx)[0])
        axios.put(`/api/shopify/themes/${themeId}/assets.json`, {
          asset: {
            key: 'snippets/ajax-cart-template.liquid',
            value: newTemplate
          }
        })
      })

    axios.put(`/api/shopify/themes/${themeId}/assets.json`, {
      "asset": {
        "key": "snippets/upsell-in-cart.liquid",
        "value": newUpsellTemplate
      }
    }).then(({ data }) => {
      console.log({data});
    })
  }

  render() {
    const { selectedProducts } = this.state;
    return (
      <Page>
        <ResourcePicker
          resourceType="Product"
          showVariants={false}
          open={this.state.open}
          onSelection={(resources) => this.handleSelection(resources)}
          onCancel={() => this.setState({ open: false })}
        />
        <Layout>
          {!selectedProducts.length &&
            <EmptyState
              heading="Choose products you want to upsell."
              action={{
                content: 'Select products',
                onAction: () => {
                  this.setState({ open: true })
                },
              }}
              image={img}
            >
              <p>Select at least 1 product.</p>
            </EmptyState>
          }
          {!!selectedProducts.length &&
            <>
              <Layout.AnnotatedSection
                title="Upsell Products"
                description={(
                  <Button onClick={() => this.setState({ open: true })}>Reselect Products</Button>
                )}
              >
                <Card sectioned>
                  <ResourceList
                    resourceName={{singular: 'product', plural: 'products'}}
                    items={selectedProducts}
                    renderItem={(item) => (
                      <ResourceItem
                        id={item.id}
                        media={
                          <Thumbnail alt={item.title} size="medium" source={item.images[0].originalSrc} />
                        }
                        accessibilityLabel={`View details for ${item.title}`}
                        name={item.title}
                      >
                        <h3>
                          <TextStyle variation="strong">{item.title}</TextStyle>
                        </h3>
                      </ResourceItem>
                    )}
                  />
                </Card>
              </Layout.AnnotatedSection>
              <Button primary onClick={this.publish}>Publish</Button>
            </>
          }
        </Layout>
      </Page>
    )
  }
}

export default Index;