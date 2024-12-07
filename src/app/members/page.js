import membersData from "@/data/members.json";

export default function MembersPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Our Team</h1>
      <p className="text-gray-600 mb-8">
        Meet the people behind Business Career Compass
      </p>

      <ul className="space-y-4">
        {membersData.map((member) => (
          <li key={member.id} className="p-4 border border-gray-200 rounded-lg">
            <h2 className="text-xl font-semibold">{member.name}</h2>
            <p className="text-gray-600">{member.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}