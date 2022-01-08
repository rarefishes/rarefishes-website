import React, { FunctionComponent } from 'react'

import { Button } from '../styles/shared/button/Button'
import { Link } from '../styles/shared/link/Link'

const Index: FunctionComponent = () => {
  return (
    <div>
      <h1> Hello from rarefishes.crypto</h1>

      <Button color="secondary" fontSize="small" margin={['10px', '10px']}>
        Button secondary
      </Button>

      <Link color="primary" fontSize="small" margin={['10px', '10px']}>
        Button primary
      </Link>
    </div>
  )
}

export default Index
