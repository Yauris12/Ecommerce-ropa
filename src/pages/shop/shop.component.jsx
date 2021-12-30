import React from 'react'
import SHOW_DATA from './shop.data.js'
import CollectionPreview from '../../components/collection-preview/collection-preview.component'
class ShopPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      collections: SHOW_DATA,
    }
  }
  render() {
    const { collections } = this.state
    return (
      <div className='shop-page'>
        {collections.map(({ id, ...othercollectionsProps }) => (
          <CollectionPreview key={id} {...othercollectionsProps} />
        ))}
      </div>
    )
  }
}

export default ShopPage
