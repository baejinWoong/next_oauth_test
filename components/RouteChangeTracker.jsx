import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import ReactGA from 'react-ga4'

const RouteChangeTracker = () => {
  const location = useLocation()
  const [initialized, setInitialized] = useState(false)

  useEffect(() => {
    if (!window.location.href.includes('localhost')) {
      ReactGA.initialize(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TRACKING_ID)
    }
    setInitialized(true)
  }, [])

  useEffect(() => {
    if (initialized) {
      // ReactGA.pageview(location.pathname + location.search);
      ReactGA.set({ page: location.pathname })
      ReactGA.send('pageview')
    }
  }, [initialized, location])
}

export default RouteChangeTracker
