import { useParams } from "react-router-dom";
import { useGroups } from "../../Providers/Groups";

const Group = () => {
  const { groups } = useGroups();
  const { id } = useParams();

  console.log(id); //36
  console.log(groups);

  return (
    <div>
      {groups
        .filter((group) => group.id === id)
        .map((group, index) => (
          <div key={index}>
            {group.name}
            {group.category}
            {group.description}
          </div>
        ))}
    </div>
  );
};

export default Group;
