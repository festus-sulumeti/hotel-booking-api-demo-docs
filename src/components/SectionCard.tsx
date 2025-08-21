interface SectionCardProps {
  title: string;
  description: string;
  codeSnippet?: string;
}

const SectionCard: React.FC<SectionCardProps> = ({ title, description, codeSnippet }) => (
  <div className="border-l-4 border-secondary p-4 mb-6 bg-white shadow-sm rounded">
    <h2 className="text-xl font-bold mb-2">{title}</h2>
    <p className="mb-2">{description}</p>
    {codeSnippet && (
      <pre className="bg-gray-100 p-2 rounded overflow-x-auto text-sm">
        <code>{codeSnippet}</code>
      </pre>
    )}
  </div>
);

export default SectionCard;
