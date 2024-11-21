export function Profile({ firstName, lastName }) {
  return (
    <div className="text-center mt-6">
      <h1 className="text-4xl font-bold text-gray-800">
        {firstName} <span className="text-primary">{lastName}</span>
      </h1>
    </div>
  );
}
