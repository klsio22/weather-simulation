import { ButtonBack } from "./ButtonBack";

export function NotFound() {
  return (
    <div className={"text-center px-2"}>
      <h2 className="text-3xl">Não foi possível encontra os dados da cidade</h2>
      <h2 className="text-3xl">ou tente novamente em alguns instantes.</h2>
      <ButtonBack />
    </div>
  );
}
