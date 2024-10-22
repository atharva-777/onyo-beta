import Image from "next/image";

const activities = [
  {
    title: "Adventure Buffs",
    icon: "/icons/buffs.png",
  },
  {
    title: "Photography Expedition",
    icon: "/icons/photgraphy.png",
  },
  {
    title: "City Walks",
    icon: "/icons/city walks.png",
  },
  {
    title: "Beach Bliss",
    icon: "/icons/beach.png",
  },
  {
    title: "Camping",
    icon: "/icons/camping.png",
  },
  {
    title: "Heritage Tours",
    icon: "/icons/heritage.png",
  },
  {
    title: "Mountains Majesty",
    icon: "/icons/mountains.png",
  },
  {
    title: "Festive Fever",
    icon: "/icons/festive.png",
  },
  {
    title: "Hidden Gems",
    icon: "/icons/gems.png",
  },
  {
    title: "Trekking Tours",
    icon: "/icons/trekking.png",
  },
  {
    title: "Unique Stays",
    icon: "/icons/stays.png",
  },
  {
    title: "Sacred Journeys",
    icon: "/icons/sacred.png",
  },
  {
    title: "Culinary Quests",
    icon: "/icons/culinary.png",
  },
  {
    title: "Cultural Immersion",
    icon: "/icons/cultural.png",
  },
];

function Activities() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-3 text-gray-500">
      {activities.map((activity, index) => {
        return (
          <div
            key={index}
            className="flex w-fit items-center justify-center gap-1 rounded p-2 shadow-md"
          >
            <div className="flex size-4 items-center justify-center rounded-full bg-white">
              <Image src={activity.icon} width={16} height={16} alt="" />
            </div>
            <p className="text-sm font-normal text-gray-500">
              {activity.title}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default Activities;
