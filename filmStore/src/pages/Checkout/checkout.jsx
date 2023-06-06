import { Header } from "../../components/header/header";
import { Favorites } from "../../components/favorites/favorites";
import { useContext } from "react";
import { FilmContext } from "../../contexts/FilmContext";
import { StyledDiv } from "./styleCheckout";
import { CartCheckout } from "../../components/cartCheckout/cartCheckout";
import InputMask from "react-input-mask";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ModalForm } from "../../components/modalForm/modalForm";

const schema = yup.object({
  fullName: yup.string().required("Full Name is required"),
  cpf: yup.string().required("CPF is required"),
  cell: yup.string().required("Cell Phone is required"),
  email: yup
    .string()
    .email("It must be a valid email")
    .required("Email is required"),
  cep: yup.string().required("CEP is required"),
  address: yup.string().required("Address is required"),
  city: yup.string().required("City is required"),
  state: yup.string().required("State is required"),
});

export const Checkout = () => {
  const { showFavorites, loadModalForm, showFormModal } =
    useContext(FilmContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const sendForm = (data) => {
    reset();
    loadModalForm(data);
  };

  return (
    <StyledDiv>
      <Header />
      {showFavorites && <Favorites />}
      <form onSubmit={handleSubmit(sendForm)}>
        <h2>Finalize Purchase</h2>
        <div className="twoBox">
          <div className="inputBox">
            <div id="fullNameBox" className="inputs">
              <input
                id="fullName"
                type="text"
                placeholder="Full Name"
                {...register("fullName")}
              />
              {errors.fullName && <small>{errors.fullName?.message}</small>}
            </div>
            <div id="cpfBox" className="inputs">
              <InputMask
                mask={"999.999.999-99"}
                id="cpf"
                type="text"
                placeholder="CPF"
                {...register("cpf")}
              />
              <small>{errors.cpf?.message}</small>
            </div>
            <div id="cellBox" className="inputs">
              <InputMask
                mask={"(99) 99999-9999"}
                id="cell"
                type="text"
                placeholder="Cell Phone"
                {...register("cell")}
              />
              <small>{errors.cell?.message}</small>
            </div>
            <div id="emailBox" className="inputs">
              <input
                id="email"
                type="text"
                placeholder="E-mail"
                {...register("email")}
              />
              <small>{errors.email?.message}</small>
            </div>
            <div id="cepBox" className="inputs">
              <InputMask
                mask={"99999-999"}
                id="cep"
                type="text"
                placeholder="CEP"
                {...register("cep")}
              />
              <small>{errors.cep?.message}</small>
            </div>
            <div id="addressBox" className="inputs">
              <input
                id="address"
                type="text"
                placeholder="Address"
                {...register("address")}
              />
              <small>{errors.address?.message}</small>
            </div>
            <div id="cityBox" className="inputs">
              <input
                id="city"
                type="text"
                placeholder="City"
                {...register("city")}
              />
              <small>{errors.city?.message}</small>
            </div>
            <div id="stateBox" className="inputs">
              <input
                id="state"
                type="text"
                placeholder="State"
                {...register("state")}
              />
              <small>{errors.state?.message}</small>
            </div>
          </div>
          <div className="cartBox">
            <CartCheckout />
            <button className="checkoutBtn" type="submit">
              Checkout
            </button>
          </div>
        </div>
      </form>
      {showFormModal && <ModalForm />}
    </StyledDiv>
  );
};
