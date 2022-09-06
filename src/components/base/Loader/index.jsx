//Loader Component

import { useLoading, Grid } from '@agney/react-loading'
import { Pane } from 'evergreen-ui'

export const Loader = () => {
  const { containerProps, indicatorEl } = useLoading({
    loading: true,
    indicator: <Grid width='100' />
  })

  return (
    <Pane
      position='absolute'
      left='50%'
      top='50%'
      transform='translate(-50%,-50%)'
    >
    <section {...containerProps}>
      {indicatorEl}
    </section>
    </Pane>
  )
}