import React from 'react'
import { Provider } from 'react-redux'
import store from './store/global.store'
import AppRoutes from './routes/AppRoutes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import AppProvider from './AppProvider'

const App = () => {

  const queryClient = new QueryClient();

  return (
    <Provider store={store}>
        <QueryClientProvider client={queryClient}>
             <AppProvider/>
        </QueryClientProvider>
    </Provider>
  )
}

export default App
