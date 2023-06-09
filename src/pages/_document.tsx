import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';
import { Provider as StyletronProvider } from 'styletron-react';
import { Server } from 'styletron-engine-atomic';
import { styletron } from '../../styletron';

interface Sheet {
  css: string;
  attrs: { [key: string]: string };
}
export default class MyDocument extends Document<{ stylesheets: Sheet[] }> {
  static async getInitialProps(context: DocumentContext) {
    const renderPage = () =>
      context.renderPage({
        enhanceApp: (App) => (props) =>
          (
            <StyletronProvider value={styletron}>
              <App {...props} />
            </StyletronProvider>
          )
      });

    const initialProps = await Document.getInitialProps({
      ...context,
      renderPage
    });
    const stylesheets = (styletron as Server).getStylesheets() || [];
    return { ...initialProps, stylesheets };
  }

  render() {
    return (
      <Html lang="en-US">
        <Head>
          {this.props.stylesheets.map((sheet, i) => (
            <style
              className="_styletron_hydrate_"
              dangerouslySetInnerHTML={{ __html: sheet.css }}
              media={sheet.attrs.media}
              data-hydrate={sheet.attrs['data-hydrate']}
              key={i}
            />
          ))}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
