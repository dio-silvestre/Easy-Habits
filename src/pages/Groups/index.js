import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useHistory } from "react-router-dom";
import { useGroups } from "../../Providers/Groups";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import LottieAnimation from "../../components/Lotties";
import Animation from "../../assets/groupInputAnimation.json";
import DescriptionIcon from "@material-ui/icons/Description";
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
import CircularProgress from "@material-ui/core/CircularProgress";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const Groups = () => {
  const {
    groups,
    subscriptions,
    addNewGroup,
    loadingGroups,
    loadingSubs,
    subscribeToAGroup,
  } = useGroups();
  const { logOut } = useAuth();
  const [openForm, setOpenForm] = useState(false);
  const [openGroups, setOpenGroups] = useState(true);
  const history = useHistory();

  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    description: yup.string().required("Campo obrigatório"),
    category: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (name, description, category) => {
    addNewGroup(name, description, category);
    setOpenForm(false);
    setOpenGroups(true);
  };

  const handleLogOut = () => {
    logOut();
    history.push("/");
  };

  const visitGroup = (id) => {
    history.push(`/groups/${id}`);
  };

  //const subscribeToGroup = () => {};

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
            <LottieAnimation lotti={Animation} height={300} width={300} />
            <h1>Novo grupo</h1>
            <h3>Juntos você pode mais!</h3>
            <form onSubmit={handleSubmit(handleForm)}>
              <TextField placeholder="Nome do Grupo" {...register("name")} />
              <div className="error"> {errors.name?.message}</div>
              <TextField placeholder="Objetivo" {...register("description")} />
              <div className="error"> {errors.description?.message}</div>
              <TextField placeholder="Categoria" {...register("category")} />
              <div className="error"> {errors.category?.message}</div>
              <Button type="submit">Adicionar</Button>
            </form>
            <p>
              <Link to="/">
                <ArrowBackIcon />
              </Link>
            </p>
          </FormContainer>
        )}
      </FormModal>
      {openGroups && (
        <PageContainer>
          <div className="groupsWrapper">
            <OpenGroups>
              <h1>Meus Grupos</h1>
              {loadingGroups ? (
                <CircularProgress size={50} />
              ) : (
                subscriptions.map((group, index) => (
                  <>
                    <div className="my-groups">
                      <p className="iconText" key={index}>
                        {group.name}
                        <DescriptionIcon
                          onClick={() => visitGroup(group.id)}
                          titleAccess="Visitar o grupo"
                        />
                      </p>
                    </div>
                    {/* <div className="groupInfo">
                      <p>
                        <strong>{group.name}</strong>
                      </p>
                      <p>
                        Este grupo é da categoria{" "}
                        <strong>{group.category}</strong> e seu objetivo é{" "}
                        <strong>{group.description}</strong>
                      </p>
                    </div> */}
                  </>
                ))
              )}
            </OpenGroups>
            <SubscribedGroups>
              <h1>Grupos abertos</h1>
              {loadingSubs ? (
                <CircularProgress size={50} />
              ) : (
                groups.map((group, index) => (
                  <>
                    <div className="my-groups">
                      <p className="subscribe" key={index}>
                        {group.name}
                        <PersonAddIcon
                          titleAccess="Inscrever-me neste grupo"
                          onClick={() => subscribeToAGroup(group.id)}
                        />
                      </p>
                    </div>
                    {/* <div className="groupDescription">
                      <p>
                        <strong>{group.name}</strong>
                      </p>
                      <p>
                        Este grupo é da categoria{" "}
                        <strong>{group.category}</strong> e seu objetivo é{" "}
                        <strong>{group.description}</strong>
                      </p>
                    </div> */}
                  </>
                ))
              )}
            </SubscribedGroups>
          </div>
        </PageContainer>
      )}
    </>
  );
};

export default Groups;
