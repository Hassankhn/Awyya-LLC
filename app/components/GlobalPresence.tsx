import { MapPin } from "lucide-react";

const regions = ["Europe",
  "Asia",
  "Africa",
  "Middle East",
  "North America",
  "South America",
];

export default function GlobalPresence() {
  return (
    <section id="global-presence" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Global Presence
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 justify-center">
          {regions.map((region, index) => (
            <div key={index} className="flex items-center space-x-2 mx-auto">
              <MapPin className="h-5 w-5 text-blue-600" />
              <span className="text-black">{region}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
