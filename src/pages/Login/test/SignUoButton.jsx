import * as S from "../styles";

export const SignupButton = ({
  type = "button",
  onClick,
  children,
  dataTestId,
}) => {
  return (
    <S.SignupButton
      type={type}
      onClick={() => onClick({ name: "Name" })}
      data-testid={dataTestId}
    >
      {children}
    </S.SignupButton>
  );
};
