import { Provider } from '@components/Provider';
import '@styles/global.css';


export const metadata = {
  title: 'CRM',
  description: 'Customized CRM',
  author: 'Mark Semenov'
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <Provider>
          <main>
            {children}
          </main>
        </Provider>
      </body>
    </html>
  )
}
