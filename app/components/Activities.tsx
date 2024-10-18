import {
  CampingIcon,
  CookingIcon,
  FootTasingIcon,
  GuidedTourIcon,
  HikingIcon,
  MusicIcon,
  PhotographyIcon,
  YogaIcon,
} from "./Icons";

const activities = [
  {
    title: "Hiking",
    icon: <HikingIcon />,
  },
  {
    title: "Guided Tours",
    icon: <GuidedTourIcon />,
  },
  {
    title: "Camping",
    icon: <CampingIcon />,
  },
  {
    title: "Food Tasting",
    icon: <FootTasingIcon />,
  },
  {
    title: "Yoga Retreat",
    icon: <YogaIcon />,
  },
  {
    title: "Cooking",
    icon: <CookingIcon />,
  },
  {
    title: "Photography tours",
    icon: <PhotographyIcon />,
  },
  {
    title: "Music festivals",
    icon: <MusicIcon />,
  },
];

function Activities() {
  return (
    <div className="flex w-80 flex-wrap items-center justify-center gap-x-1 gap-y-3 text-gray-500">
      {activities.map((activity, index) => {
        return (
          <div
            key={index}
            className="flex w-fit items-center justify-center gap-1 rounded p-2 shadow-md"
          >
            <div className="flex size-4 items-center justify-center rounded-full bg-white">
              {activity.icon}
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
