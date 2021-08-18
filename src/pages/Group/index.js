import { useParams } from "react-router-dom";
import { useGroups } from "../../Providers/Groups";
import { GroupContainer } from "./style";

const Group = () => {
  const { groups } = useGroups();
  const { id } = useParams();

  return (
    <>
      <GroupContainer>
        {groups
          .filter((group) => group.id === Number(id))
          .map((group, index) => (
            <div key={index}>
              <div>{group.name}</div>
              <div>{group.category}</div>
              <div>{group.description}</div>
            </div>
          ))}
      </GroupContainer>
    </>
  );
};

export default Group;
