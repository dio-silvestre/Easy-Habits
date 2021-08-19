import { useParams } from "react-router-dom";
import { useGroups } from "../../Providers/Groups";
import { GroupContainer, InfoContainer, BottomContainer } from "./style";
import LottieAnimation from "../../components/Lotties";
import Animation from "../../assets/AnimationGroup.json";

const Group = () => {
  const { groups } = useGroups();
  const { id } = useParams();

  return (
    <>
      <GroupContainer>
        {groups
          .filter((group) => group.id === Number(id))
          .map((group, index) => (
            <div className="infoWrapper" key={index}>
              <div className="groupName">{group.name}</div>
              <InfoContainer>
                <LottieAnimation lotti={Animation} height={500} width={400} />
                <div>
                  <div className="groupDescription">
                    {" "}
                    Este grupo é da categoria
                    <strong> {group.category}</strong> e seu objetivo é{" "}
                    <strong> {group.description}</strong>
                  </div>
                </div>
              </InfoContainer>
            </div>
          ))}
        <BottomContainer></BottomContainer>
      </GroupContainer>
    </>
  );
};

export default Group;
