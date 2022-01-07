// pages/index.js
import { ResourcePicker } from '@shopify/app-bridge-react';

// ...
<Page>
	<ResourcePicker
		resourceType="Product"
		showVariants={false}
		open={this.state.open}
		onSelection={(resources) => { /* Handling selected products */ }}
		onCancel={() => this.setState({ open: false })}
	/>
