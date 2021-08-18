import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import { useGroups } from "../../Providers/Groups";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import {
  PageContainer,
  FormContainer,
  OpenGroups,
  SubscribedGroups,
  HeaderContainer,
  HeaderNav,
  FormModal,
} from "./styles";
import Button from "../../components/Button";
import TextField from "@material-ui/core/TextField";
import PlaylistAddCheckIcon from "@material-ui/icons/PlaylistAddCheck";
import { useAuth } from "../../Providers/Auth";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import { useState } from "react";

const Groups = () => {
  const { register, handleSubmit } = useForm();
  const { groups, subscriptions, addNewGroup } = useGroups();
  const { logOut } = useAuth();
  const [openForm, setOpenForm] = useState(false);
  const [openGroups, setOpenGroups] = useState(true);
  const history = useHistory();

  const handleForm = () => {
    //addNewGroup();
    setOpenForm(false);
    setOpenGroups(true);
  };

  const handleLogOut = () => {
    logOut();
    history.push("/");
  };

  return (
    <>
      <HeaderContainer>
        <div className="easyHabits">
          <div className="arrowBack">
            <Link to="/dashboard">
              <ArrowBackIosIcon title="Meus Hábitos" />
              <ExitToAppIcon onClick={handleLogOut} title="Logout" />
            </Link>
          </div>
          EasyHabits{" "}
          <Button
            colorSchema
            onClick={() => {
              setOpenForm(true);
              setOpenGroups(false);
            }}
          >
            + Criar Grupo
          </Button>
        </div>
        <HeaderNav>
          <div className="habits-logo">
            <Link className="link-nav" to="/dashboard">
              Meus hábitos
            </Link>
            <Link to="/dashboard">
              <PlaylistAddCheckIcon />
            </Link>
          </div>
          <Button onClick={handleLogOut}>Logout</Button>
        </HeaderNav>
      </HeaderContainer>
      <FormModal>
        {openForm && (
          <FormContainer>
            <h1>Novo grupo</h1>
            <h3>Juntos você pode mais!</h3>
            <form onSubmit={handleSubmit(handleForm)}>
              <TextField placeholder="Nome do Grupo" {...register("name")} />
              <TextField
                placeholder="O que o grupo faz?"
                {...register("description")}
              />
              <TextField placeholder="Categoria" {...register("category")} />
              <Button type="submit">Adicionar</Button>
            </form>
          </FormContainer>
        )}
      </FormModal>
      {openGroups && (
        <PageContainer>
          <div className="groupsWrapper">
            <OpenGroups>
              <h1>Meus Grupos</h1>
              {groups.map((group) => (
                <div className="my-groups" key={group.id}>
                  <p>{group.name}</p>
                </div>
              ))}
            </OpenGroups>
            <SubscribedGroups>
              <h1>Grupos abertos</h1>
              {subscriptions.map((group) => (
                <div className="my-groups" key={group.id}>
                  <p className="subscribe" title="Quero participar">
                    {group.name}
                    <PersonAddIcon />
                  </p>
                </div>
              ))}
            </SubscribedGroups>
          </div>
        </PageContainer>
      )}
    </>
  );
};

export default Groups;
