export function Description({ text }) {
    return (
      <div className="max-w-2xl mx-auto mt-4 text-center">
        <p className="text-gray-600 leading-relaxed">
          {text}
        </p>
      </div>
    );
  }