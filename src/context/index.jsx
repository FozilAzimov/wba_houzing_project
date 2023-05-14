import PropertiesProvider from './properties';

export default function RootContext ({ children }) {
  return (
    <PropertiesProvider>
      {children}
    </PropertiesProvider>
  )
}
