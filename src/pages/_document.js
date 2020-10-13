import Document, { Html, Head, Main, NextScript } from "next/document";
import Footer from "../../components/layout/footer";
import Header from "../../components/layout/header";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <Header />
          <Main />
          {/* <Footer /> */}
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
