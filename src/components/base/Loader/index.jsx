//Loader Component

import { useLoading, Grid } from '@agney/react-loading'

export const Loader = () => {
  const { containerProps, indicatorEl } = useLoading({
    loading: true,
    indicator: <Grid width='50' />
  })

  return (
    <section {...containerProps}>
      {indicatorEl}
      <h1>Loading...</h1>
    </section>
  )
}