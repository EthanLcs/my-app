export default function ContactPage() {
    return (
      <div className="max-w-3xl mx-auto text-center py-16">
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
        <p className="text-gray-600 mb-8">
          We'd love to hear any feedback
        </p>
        <ul className="text-gray-600 space-y-4">
          <li>Email: <a href="mailto:businesscareercompass@gmail.com" className="text-blue-600 underline">businesscareercompass@gmail.com</a></li>
          <li>Phone: 914-267-4707</li>
        </ul>
      </div>
    );
  }