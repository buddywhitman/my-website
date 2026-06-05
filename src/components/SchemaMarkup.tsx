import Head from "next/head";

interface SchemaMarkupProps {
  data: any;
}

const SchemaMarkup = ({ data }: SchemaMarkupProps) => {
  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      />
    </Head>
  );
};

export default SchemaMarkup;
