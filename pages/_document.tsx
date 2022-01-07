import NextDocument, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";
import { Children } from "react";
import { Helmet, HelmetData } from "react-helmet";

interface NextDocumentProps {
  helmet: HelmetData | any;
}

class Document extends NextDocument<NextDocumentProps> {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await NextDocument.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: [...Children.toArray(initialProps.styles)],
      helmet: Helmet.renderStatic(),
    };
  }

  // should render on <html>
  get helmetHtmlAttrComponents() {
    return this.props.helmet.htmlAttributes.toComponent();
  }

  // should render on <body>
  get helmetBodyAttrComponents() {
    return this.props.helmet.bodyAttributes.toComponent();
  }

  // should render on <head>
  get helmetHeadComponents() {
    return Object.keys(this.props.helmet)
      .filter((el) => el !== "htmlAttributes" && el !== "bodyAttributes")
      .map((el) => this.props.helmet[el].toComponent());
  }

  render() {
    return (
      <Html lang="en" {...this.helmetHtmlAttrComponents}>
        <Head>{this.helmetHeadComponents}</Head>
        <body {...this.helmetBodyAttrComponents}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
