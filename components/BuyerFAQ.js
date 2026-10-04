export default function BuyerFAQ({ items }) {
  const schema = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: items.map(({ question, answer }) => ({
      '@type': 'Question', name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer }
    }))
  };
  return <>
    <div className="buyer-faq">{items.map(({ question, answer }) =>
      <details key={question}><summary>{question}</summary><p>{answer}</p></details>
    )}</div>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
  </>;
}
